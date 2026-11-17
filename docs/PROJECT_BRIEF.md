# English Lounge · 项目简报（AI 维护）

> 本文档面向后续接手本项目的 AI / 新任务：读完即可理解产品形态、数据体系、代码结构与开发/发布约定，无需重新勘察。与 client.js 同步维护，重大改动须更新本文档。
> 最后更新：v1.5.0 开发完成（2026-11-16）。

## 1. 项目定位

- DeepSeek Harness（DSH）客户端插件「英语角」：把等待回复的碎片时间变成英语微环境。
- 产品原则：**纯本地计算**（不出网、无后端）；词条卡形态（词+音标+词性+中文释义+双语例句）；四态掌握状态驱动「出现→标记→复习」循环。
- 用户画像：非开发人员（电力交易/工业物联从业者），开发者场景词+职场通用词+考试词并用；界面中英双语（代码内嵌 DICTS）。

## 2. 仓库结构

```
client.js   唯一运行时：词库(WORDS 7999 条)+全部逻辑+UI（~16.7k 行 / ~1.6MB）
index.js    插件入口（引入 client.js）
index.json  发布索引：plugins[0].versions[] 记录每次发布 {version, publishTimestamp, source.commit}
locale/     zh.json / en.json——只装引导文案（guide.title/desc），界面文案在 client.js 内嵌 DICTS
assets/ icon.svg cordis.patch.yml package.json README.md LICENSE
ref/        gitignored：oxford-5000 / tech-words / toeic 等原始参考数据
data_raw/   gitignored：CET4/6/考研/IELTS 原始 json+zip（来源 kajweb/dict）
tools/      gitignored：开发期脚本、client.js 备份、打标产物（words.json / topic-tags.json / topic-tags-review.md）
docs/       本文档
```

## 3. 词库体系

- WORDS 常量（`const WORDS = [`）：7999 条，**单引号、单行、字段固定顺序**（tools/words.json 抽取脚本依赖此格式）：
  `{ w, ipa, pos, zh, en, zhEx, tags }`
  - w 词条（单词或词组）；ipa 音标（**单词 90% 有，词组 447 条基本全空**——提示/展示逻辑不得假设 ipa 存在）；zh 中文释义；en 英文例句；zhEx 例句翻译；tags 主题标签数组。
- 难度：`LEVELS` 表（word→1..5，≈7979 键），`wordLevel(entry)` 兜底 3。
- 主题标签两层：
  1. 词条自带 tags（老 1435 条精选词有真实主题；CET 批 6698 条只有 `core`）；
  2. `TOPIC_TAGS` 映射（v1.5 新增，word→[topics] 多标签，704 词）+ `tagsOf(entry)` 助手合并两层。全部消费点（topicPool / topicPoolFor / LoungeDock rank）已改走 tagsOf。
  - **新增/修正标签一律直接改 TOPIC_TAGS 词条**（如 `"slip": ["code"]`）；不要重跑打标脚本（规则表未落盘）。抽检清单：tools/topic-tags-review.md。
  - 打标方法（历史）：中文释义关键词规则+词头英文词干白名单，AI 离线批量，低置信不标、保持 core 兜底。
- 主题体系：14 个固定 id：code / frontend / git / ai / design / work / business / finance / industry / legal / health / travel / education / daily。
  - `TOPIC_RULES`：每主题 {id, brief(英文简报句), chip(中文标签), keys[](中英关键词)}；主题识别只靠 keys。
- 来源与许可：Oxford 3000/5000（CEFR 分级）、TOEIC 词库 moomoosir/toeic-vocab-tw（CC-BY-SA-4.0，转简体重分级）、kajweb/dict（CET4/6/考研/IELTS）、开发者场景短语+电力/工业手写词。README 有许可声明，新增词库数据须延续声明。

## 4. 运行时架构（函数名为锚，行号会漂移）

- 挂点（apply(ctx)）：`sidebar.right.pane.tab`（右栏「英语角」页）、`conversation.composer.dock`（输入框下方闪卡条，order 40）、`conversation.chat.turnTail`（每轮回复尾部词条条，order 80，v1.5 新增）。
- 注入契约：inject(sessionId) 返回 `{ sessionId, hooks: { sessionState: sessionStateSource(ctx,sessionId), catalog: catalogSource(ctx) } }`；宿主把 hooks 映射为组件 props `useSessionState` / `useCatalog`（useSyncExternalStore）。
- 状态：STORE_KEY `'dsh.english-lounge.v1'`（localStorage）：known{word:state} / fav / collapsed / view / settings。
- 四态状态机：`'new' | 'fuzzy' | 'known' | 'mastered'`（legacy true→known）；`wordState / markWord / stateIn`；STATE_META：√ 熟悉 / ○ 认识 / ≈ 模糊 / ? 生词。
  - 生词本 = 显式 new+fuzzy 的**派生视图**（favWords），无手动收藏。
  - 轮换权重（LoungeDock）：fuzzy 3 / new 2 / known 1，mastered 全池剔除（visiblePool）。
- 设置：DEFAULT_SETTINGS `{ level:'basic', batchSize:10, pace:'normal', quizAutoPromote:false, aiPick:true }`；LEVEL_PRESETS starter/basic/solid/pro；PACE_INTERVALS fast/normal/slow。
- elpack 词包：`PACKS_ENABLED = true`（v1.5.0 增补复活：回复尾 AI 选词 + 对话中 ```elpack 围栏自动收录，每会话最多 12 包；手动提示词入口由 `PACK_MANUAL_ENABLED = false` 继续隐藏，issuePackPrompt/buildPackPrompt 代码保留）。

## 5. v1.5 匹配管线（对话→词条）

1. `sessionConvText(snap)`：collectConvText 深度≤6 收快照文本，**取尾部 3800 字符**（最近优先）。
2. 直接命中通道 `extractHitsFromText(text)`：词头 token 索引（HIT_INDEX 懒构建）+ 短语列表；token 走 `stemLookup` 词干还原（'s/ies/es/s/ing/ed）；按最后出现位置倒序，剔 mastered，top 12（v1.5.0 反馈上调）。**只匹配英文原文，不做中文释义反查（防噪音误触）**。
3. 主题识别 `detectTopics(title, convText)`：计分制——标题命中×2 + 最后 3000 字符×1，单键得分 = min(命中次数,6) × (键长≥4 ? 2 : 1)；score≥2 入选，取前 2。
4. 池排序 rank：直接命中词(-1 置顶) > 包词/主题词(0) > 其他(1)；dockPool 兜底。
5. `pickTopicWords(title, offset, ...)`：mulberry32(title|offset) 稳定种子 + pickWeighted（core n + stretch n/5 + easy 补齐）。

## 6. 回复尾部词条条（TurnWordTail）

- 组件收 owner props `{ turn, seq, openFile }` + 注入 props；`turn.turn` 回合号，`turn.end === undefined` 表示回合仍在生成（此时不渲染）。
- TAIL_REGISTRY：按 session 记录已挂载回合号集合，useSyncExternalStore 订阅 maxTurn；**只在「本会话最新回合 + 回合已结束」渲染**，历史回合不重复渲染。
- 每轮 3–10 词：本轮英文直接命中优先（top 10；提取前先剥离 ```elpack 围栏，防止 AI 选词回复与例句自我命中，HIT_STOP 剔除 topic/title/words/example/meaning 等提示词与 JSON 键名），不足 6 个时从会话主题池回填（中文对话兜底到 6）——按 `sessionKey(sessionId)|turnNo` 种子加权随机抽样（mulberry32；权重已压平 fuzzy 2 / 未标注 3 / 显式记录 1 / 词包词 +1），同一回合稳定、跨对话不同；池空则只显示命中。冷却机制：TAIL_COOL 记录每词最近展示回合，任何词（含直接命中）3 回合内只展示一次，防止被谈论的词与高频词必抽。chip 上直接显示已标状态角标（○/≈/?/√），点开是完整卡（WordLine+StateBadge+释义+例句+四态按钮）；× 折叠本轮。
- AI 上下文选词（v1.5.0 增补，settings.aiPick 默认开）：回合结束后满足条件时经 `sessions.scope(sessionId).conversation.send(AI_PICK_PROMPT)` 自动请模型输出 ```elpack 围栏（5–8 个贴合对话的词条）→ parseElack 自动收录 → 尾条/dock 生效并带 ·AI 标记。触发条件：最新回合已结束、对话文本 ≥200 字、距上次触发 ≥3 回合、本会话 ≤12 次、直接命中 <5、无在途请求；发送失败时尾条显示 ↻「AI 选词」回退按钮（fillComposer 填提示词，手动发送）。
- i18n：tail.title / tail.fold；CSS：.elz-tail*。

## 7. 小测试（QuizView，右栏第三视图）

- 入口：右栏 seg 行「小测试」（tab.viewQuiz），view='quiz' 分支。
- 题池 `buildQuizItems`：**生词本 80%**（new×2 / fuzzy×1 加权不放回）+ 当前主题池 20%（不足从难度合格池补）；题型随机 30% 四选一 / 70% 拼写。
- 拼写提示阶梯（逐级点开、可叠加）：音标 → 字母骨架 `letterMask`（`g□□□ u□`，**词组消歧关键**，词组无音标）→ 例句挖空 `blankedExample`（w 替换为 ______；w 不在例句中则不给该提示）。
- 判分：`normalizeAnswer`（小写/弯引号/连字符→空格/去尾标点/压空白）→ `answerMatch`：exact / close（编辑距离≤1，**close 只免费重试一次**）/ bad。四选一 `quizChoiceOptions`：3 干扰项（难度±1、剔 mastered），**选项按题冻结**（quizEntry+choiceOpts useMemo，防每次渲染重排）。**判定后 Enter / → 下一题**（window keydown；拼写题 Enter 仍先用于提交）。
- 结算：正确率+错词清单+「错词全部加入生词本」（一键 markWord new）；设置「答对自动升级」（quizAutoPromote，默认关）把答对的生词本词标为 known。
- 题数 5/10/20 开局可选；空池显示 quiz.empty。

## 8. 开发约定（改 client.js 必读）

- 编辑流程：先备份到 tools/（client-vXXX-backup.js）→ **唯一锚点字符串替换**（split/join 字面量，替换前断言 count===1）→ `new Function(src)` 语法校验 → 落盘。
- 行号会漂移，函数名/唯一字符串才是锚；双语 i18n 必须同改（zh/en 两处内嵌 dict）。
- CSS 是 client.js 内 CSS 字符串数组（运行时注入 <style>），颜色 token 用 --dsw-alias-* 变量。
- 备份现状：tools/client-v140-backup.js（M1 前）/ client-v15-m2-backup.js（M2 前）/ client-v15-m3-backup.js（M3 前）。

## 9. 发布流程（约定）

- 版本策略：一个版本一个 feat 提交；对话内所有更改归入同一版本号。
- index.json 发布模式：feat 提交代码 → index.json plugins[0].versions[] 追加 `{version, publishTimestamp, source:{type git, commit=feat 全长 sha}}` → `chore: publish index` 提交 → tag vX.Y.Z 打在 feat 提交 → push origin main + tag → ls-remote 验证 main 与 tag 指向。
- **git 必须带代理**：`git -c http.proxy=http://127.0.0.1:7897 ...`（直连 GitHub 会 Connection reset）；push/fetch 需 danger-full-access 提权（沙箱令牌取不到 schannel 凭据）。
- 发布权：默认用户亲手发；用户明说「封版/请发布」= 授权 AI 执行完整流程。
- 验证陷阱：编辑后刷 mtime 可能让 git stat 缓存骗人——用 `git show <sha>:file` 终验内容。

## 10. 版本史

- v1.1.1（tag e69bb02）：初版四态/生词本雏形。
- v1.3.1（feat 416df6d）：词包 per-session、TOPIC_RULES 扩充（industry/finance/business）。
- v1.4.0（feat 9acfe2f）：四态词卡重构、生词本影子视图+检索分页、全库查词、词库 1435→7999（kajweb/dict 四本）、词包停用（PACKS_ENABLED=false）。
- v1.5.0（本版）：① TOPIC_TAGS 多标签层（704 词，daily/health/legal/education/industry 为主）；② 匹配升级：直接命中通道+主题计分+最近优先；③ 回复尾部词条条（turnTail，每轮≤4 词）；④ 小测试模块（拼写/四选一+三级提示+错词入本）；⑤ 设置项 quizAutoPromote；⑥ 增补轮：AI 上下文选词（conversation 服务自动发送 + elpack 词包复活 + ·AI 标记）、词条条 3–10 词与回填随机化、Enter/→ 下一题、防溢出 CSS、legacy 双 detectTopics 声明修复。

## 11. 已知坑

- 词组（447 条）音标基本全空：任何提示/展示逻辑不得假设 ipa 存在。
- collectConvText 跳过 settings/fav/known 键、单字符串截 600、总量 5000——convText 是近似文本不是全文。
- 本机 app.asar 被映射为目录（可读 node_modules 源码勘察宿主挂点契约）；asar 本体 readFileSync ENOENT。
- 本机 npm-cache 是悬空 junction：会话里不要跑 npm install/npx 缓存写入（ENOTDIR）。
