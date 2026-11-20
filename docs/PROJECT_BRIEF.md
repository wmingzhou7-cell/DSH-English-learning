# English Lounge · 项目简报（AI 维护）

> 本文档面向后续接手本项目的 AI / 新任务：读完即可理解产品形态、数据体系、代码结构与开发/发布约定，无需重新勘察。与 client.js 同步维护，重大改动须更新本文档。
> 最后更新：v1.7.0 开发完成（2026-11-20）。

## 1. 项目定位

- DeepSeek Harness（DSH）客户端插件「英语角」：把等待回复的碎片时间变成英语微环境。
- 产品原则：**纯本地计算**（不出网、无后端）；词条卡形态（词+音标+词性+中文释义+双语例句）；四态掌握状态驱动「出现→标记→复习」循环。
- 用户画像：非开发人员（电力交易/工业物联从业者），开发者场景词+职场通用词+考试词并用；界面中英双语（代码内嵌 DICTS）。

## 2. 仓库结构

```
client.js   唯一运行时：词库(WORDS 7999 条)+全部逻辑+UI（~18.0k 行 / ~1.94MB，v1.7.0 实测）
index.js    插件入口（引入 client.js）
index.json  发布索引：plugins[0].versions[] 记录每次发布 {version, publishTimestamp, source.commit}
locale/     zh.json / en.json——只装插件元信息 meta.title / meta.description（市场列表用）；真正的界面文案在 client.js 内嵌 DICTS，引导卡文案是 DICTS 里的 guide.title / guide.desc
assets/     icon-180.png（商店图标）；icon.svg 在仓库根目录；另有 cordis.patch.yml package.json README.md LICENSE
ref/        gitignored：oxford-5000 / tech-words / toeic 等原始参考数据
data_raw/   gitignored：CET4/6/考研/IELTS 原始 json+zip（来源 kajweb/dict）
tools/      gitignored：开发期脚本、client.js 备份、打标产物（words.json / topic-tags.json / topic-tags-review.md）
docs/       本文档
```

## 3. 词库体系

- WORDS 常量（`const WORDS = [`）：7999 条，**单引号、单行、字段固定顺序**（tools/words.json 抽取脚本依赖此格式）：
  `{ w, ipa, pos, zh, en, zhEx, tags }`
  - w 词条（单词或词组）；ipa 音标（v1.6.0 实测：全库 1219/7999 条为空，覆盖率 84.8%；**词组 421 条里 420 条为空**，单词 799 条空——提示/展示逻辑不得假设 ipa 存在）；zh 中文释义；en 英文例句；zhEx 例句翻译；tags 主题标签数组。
- 难度：`LEVELS` 表（word→1..5，≈7979 键），`wordLevel(entry)` 兜底 3。
- 主题标签两层：
  1. 词条自带 tags（老 1435 条精选词有真实主题；CET 批 6698 条只有 `core`）；
  2. `TOPIC_TAGS` 映射（v1.5 新增，word→[topics] 多标签，704 词）+ `tagsOf(entry)` 助手合并两层。全部消费点（topicPool / topicPoolFor / LoungeDock rank）已改走 tagsOf。
  - **新增/修正标签一律直接改 TOPIC_TAGS 词条**（如 `"slip": ["code"]`）；不要重跑打标脚本（规则表未落盘）。抽检清单：tools/topic-tags-review.md。
  - 打标方法（历史）：中文释义关键词规则+词头英文词干白名单，AI 离线批量，低置信不标、保持 core 兜底。
- 主题体系：14 个固定 id：code / frontend / git / ai / design / work / business / finance / industry / legal / health / travel / education / daily。
  - `TOPIC_RULES`：每主题 {id, brief(英文简报段，v1.6.0 起 2–3 句), usage(一句适用场景), patterns[8]({en,zh} 地道句式，v1.7.0 UX 轮从 3 扩到 8), chip, keys[]}；句式块另有**词库例句层**（v1.7.0 收藏轮）：按检出主题筛 WORDS 的 en/zhEx（6–22 词、有翻译、剔 FUNCTION_WORD），按会话标题 hash 稳定抽样 ≤60 条（无主题回退 daily 标签），与手作句式合并按 en 去重，`patternRows` 按 `(patternOffset+i) % n` 滑窗 4 行循环；例句行渲染来源词 chip（`.elz-pattern-word`）；主题识别只靠 keys。未命中主题时用 `GENERAL_TOPIC`（同为该结构，v1.6.0 取代旧 GENERAL_BRIEF 常量）。
- 来源与许可：Oxford 3000/5000（CEFR 分级）、TOEIC 词库 moomoosir/toeic-vocab-tw（CC-BY-SA-4.0，转简体重分级）、kajweb/dict（CET4/6/考研/IELTS）、开发者场景短语+电力/工业手写词。README 有许可声明，新增词库数据须延续声明。

## 4. 运行时架构（函数名为锚，行号会漂移）

- 挂点（apply(ctx)）：`sidebar.right.pane.tab`（右栏「英语角」页）、`conversation.composer.dock`（输入框下方闪卡条，order 40）、`conversation.chat.turnTail`（每轮回复尾部词条条，order 80，v1.5 新增）。
- 注入契约：inject(sessionId) 返回 `{ sessionId, hooks: { sessionState: sessionStateSource(ctx,sessionId), catalog: catalogSource(ctx) } }`；宿主把 hooks 映射为组件 props `useSessionState` / `useCatalog`（useSyncExternalStore）。
- 状态：STORE_KEY `'dsh.english-lounge.v1'`（localStorage）：known{word:state} / fav / collapsed / view / settings。**view 白名单在 loadState 里是硬编码的**（'words' 之外只认 'book' / 'quiz' / 'stats'（v1.7.0 统计页）/ 'settings'，其余回退 'words'）——新增右栏视图必须同时改这一行，v1.6.0 就曾因漏改导致「小测试」刷新后跳回词汇页。fav 目前只被读取与清空，没有写入路径（单词本已改为四态派生视图）。
- 四态状态机：`'new' | 'fuzzy' | 'known' | 'mastered'`（legacy true→known）；`wordState / markWord / stateIn`；STATE_META：√ 熟悉 / ○ 认识 / ≈ 模糊 / ? 生词。
  - 单词本（v1.6.0 由「生词本」改名）= **四态派生视图**，无手动收藏。`bookMarks` 单遍遍历 WORDS 用 **markedState** 分桶（未标记返回 `''`，绝不能落进 new 桶——这是 v1.6.0 用户反馈的核心 bug：旧进度条用 stateIn 把没学过的词都算成「?」，与显式标「生词」混淆）；`bookWords` 多选状态时按 STATE_META 桶序对选中桶做 round-robin 交织（v1.6.1 用户反馈：不按状态分组，每页混合状态利于学习），单选时保持该桶原序；默认筛选 `BOOK_DEFAULT_FILTER = ['fuzzy','new']`，筛选按钮可多选但至少保留一个。
  - 轮换权重（LoungeDock）：fuzzy 3 / new 2 / known 1，mastered 全池剔除（visiblePool）。v1.7.0 起序列先按到期排序（拖得越久越靠前，`dueOverdue` 读 `storeState.at`），再按权重编织；rotation useMemo 依赖 pool/s.known/s.at，纯时间流逝不触发重算（见 §11）。
- 间隔复习（v1.7.0）：`markWord` 标记时同步写 `at[word]=Date.now()` 与按天日志 `log[day][word]=1`（清空标记删 at、不动 log；同一天重复标记只算一个词）；`SRS_INTERVALS`：fuzzy/new 12h、known 3d、mastered 21d；到期词闪卡条置顶、测验抽词 ×3（`dueBoost`，`buildQuizItems` 读 `opts.at`）；`countDueWords` 只算 fuzzy/known/new（mastered 不进任何词池），供测验开局「今日到期 {n}」提示与统计页；`log` 经 `pruneLog` 在 loadState 时只留 200 天。`clearRecords` 一并清 at/log。
- 设置：DEFAULT_SETTINGS `{ level:'basic', batchSize:10, pace:'normal', quizAutoPromote:false, aiPick:true, tts:true }`；LEVEL_PRESETS starter/basic/solid/pro；PACE_INTERVALS fast/normal/slow。
- elpack 词包：`PACKS_ENABLED = true`（v1.5.0 增补复活：回复尾 AI 选词 + 对话中 ```elpack 围栏自动收录，每会话最多 12 包；手动提示词入口由 `PACK_MANUAL_ENABLED = false` 继续隐藏，issuePackPrompt/buildPackPrompt 代码保留）。

### 4.1 缓存与性能（v1.6.0 末轮审查）

单文件插件没有构建期，所有成本都在运行时；审查时量的基线是：闪卡条一次挂载要重算三遍全库（7999 条），`topicPoolFor` 2.5ms、`dockPool` 1.8ms、`visiblePool(dockPool)` 2.5ms，三条链路（闪卡条 / 尾条 / 小测试）各算各的。现在分四层缓存，全部带失效条件：

- **bandOrder(preset)**（`BAND_ORDER` Map）：等级带排序只跟档位有关，洗牌种子是常量 `mulberry32(20260101)`，排一次复用。
- **dockPool**：键 `preset.id + '#' + KNOWN_REV`，`DOCK_CACHE` 超 8 条 clear。
- **topicPoolFor**：键 `preset.id + '#' + n + '#' + PACK_REV + '#' + hash(title + '\u0000' + extraText)`，`TOPIC_POOL_CACHE` 超 24 条 clear。
- **loadPacks**：按 sessionKey 缓存 + `PACK_REV`，`savePacks` 时 `PACK_REV += 1` 并删该会话缓存。
- **visiblePool**：`VISIBLE_CACHE` 是 WeakMap，键为输入数组**引用**，值为 `{ rev, pool }`；一次全库 filter 约 1.1ms，不进缓存就等于每次挂载都付。
- **KNOWN_REV / PACK_REV**：`let` 计数器，`markWord`/`clearRecords`/`savePacks` 各自 +1，是上述所有缓存的统一失效信号。**新增任何依赖 mastered 或词包的缓存，必须把它并进 key，否则用户标了状态界面不刷新。**
- **tagsOf**：`TAG_CACHE` 按词缓存合并后的标签数组（旧实现每次调用都 `concat` 出新数组，一轮主题池就是上千次分配）。
- **themedBase(title, extraText, settings, sessionPacks)**：「主题池为空就退回 dockPool」的兜底原本抄了三份（闪卡 memo / 尾条 memo / pickTopicWords），现收敛为一个 helper —— 改口径只改一处。
- **Styles()**：`<style>` 节点模块级懒构造（`let STYLE_NODE = null` + 首次调用时 `h('style', null, CSS)`）。**不能写成模块级常量**：那时 `h` 还没定义，会在 module eval 阶段抛 `TypeError: h is not a function`。
- **persistState**：120ms 去抖合并写盘 + `pagehide`/`beforeunload` 强制 flush（旧实现每点一次状态按钮就整份 `JSON.stringify` 写回 localStorage）。

优化后实测（`tools/probe-perf.cjs`）：topicPoolFor 2.549→0.004ms、dockPool 1.754→0.001ms、visiblePool(dockPool) 2.515→0.000ms（命中 WeakMap）、buildQuizItems(10) 3.567→1.3ms。CSS 侧另有两条约束：`.elz-word-line` 必须 `flex-wrap: nowrap`（曾因 wrap 在窄容器折行把底部单词条撑高），`.elz-bar` 保 `min-height: 30px`；测验的 `.elz-quiz-ipa` **故意不复用** `.elz-ipa`，后者是 nowrap+ellipsis+min-width:0，在窄列会塌成 0 宽。

## 5. 匹配管线（对话→词条，v1.5 定型，v1.6.0 重构主题相关度）

1. `sessionConvText(snap)`：collectConvText 深度≤6 收快照文本，**取尾部 3800 字符**（最近优先）。**v1.6.0 起先过 `looksLikeProse(text)`**：只有「含 CJK 或含空白、且长度 ≥8」的字符串才算人话；`CONV_SKIP_KEY` 另跳过 id/status/state/openState/historyLoadStatus/phase/seq/turn/tool/toolName/path/cwd/model/provider 等系统键。旧实现把整个快照摊平，DSH 的 `historyLoadStatus: 'idle'` 每回合都被当成对话原文，词库里的 `idle` 因此成为常驻直接命中——这就是「尾条老是 idle」的根因。
2. 直接命中通道 `extractHitsFromText(text, topicIds)`：词头 token 索引（HIT_INDEX 懒构建）+ 短语列表；token 走 `stemLookup` 词干还原（'s/ies/es/s/ing/ed）；剔 mastered 与 HIT_STOP，top 12。**v1.6.0 新增 topical 标记**：命中词若带当前主题标签则 `topical = true`，排序时贴题命中优先，再按最近出现位置。**只匹配英文原文，不做中文释义反查（防噪音误触）**。
3. 主题识别 `detectTopics(title, convText)`：计分制——标题命中×2 + 最后 3000 字符×1，单键得分 = min(命中次数,6) × (键长≥4 ? 2 : 1)；score≥2 入选，取前 2。**英文键改为词首匹配**（`KEY_ASCII_RE` 判定，`keyStartRe` 缓存编译好的 `\b` 正则）：裸 indexOf 会让 'ai' 命中 maintain/explained/email、'ui' 命中 build、'log' 命中 blog，把无关会话误判成 ai/frontend 主题；词首匹配保留 deploy→deployment，切掉词中误伤。中文键仍用 indexOf 子串。
4. 主题池 `topicPoolFor`（见 §5.1）按三档相关度取值；池内排序 rank：直接命中词(-1 置顶) > 包词/主题词(0) > 其他(1)。**无主题时以 daily 兜底，不再退回 dockPool。**
   键表覆盖度：v1.6.0 给 frontend 补 layout/component/render/button/animation/browser/responsive/viewport/scroll/hover/modal/dropdown，design 补 typography/hierarchy/spacing/contrast/palette/gradient/alignment/whitespace/illustration，work 补 release/sprint/standup/retrospective/roadmap/backlog/ticket/stakeholder/colleague/manager/deliverable/priority/meeting/team，code 删掉过泛的 log/tool/test/错误（'log' 命中 blog、'tool' 命中任何工具句、'test' 与 work 抢分）。刻意**不收** color/colour/font：'the color of that car' 属于日常闲聊，收进来会让日常会话误判成 design。
5. `pickTopicWords(title, offset, ...)`：mulberry32(title|offset) 稳定种子 + pickWeighted（core n + stretch n/5 + easy 补齐）。

## 5.1 主题池相关度三档（v1.6.0）

- `topicTier(entry, want)`：**2 = 词条自带该主题标签**（TOPIC_TAGS，704 条）；**1 = 词条本身命中该主题关键词**（`topicKeyHits(topicId)` 按主题缓存一次性算好）；**0 = 通用词**。关键词匹配范围是刻意收窄的：ASCII 键只比**词条本身**（`entry.w`，`\b` 词边界、长度 ≥3），中文键只比**释义**（`entry.zh`）——都不看例句。早期版本比例句，结果 `cabin`（例句 log cabin）、`make`（例句里出现 tool）、`synthesis`（例句提到音乐）全被算成主题词。
- 旧写法把 `core` 标签（6698 条，占全库 84%）并进主题池，主题池实际等于整个词库（frontend+ai 会话池 5805 条，头 12 条是 vanity/captain/receiver/ceiling/scarcely…）——这就是「词跟话题没关系」的根因。现在池只收 tier > 0。实测（用一段该主题的典型英文触发，括号内为 tier2 条数）：code 172(154)/frontend 28(18)/git 24(14)/ai 29(11)/design 46(35)/work 438(401)/business 305(281)/finance 120(103)/industry 139(124)/legal 84(80)/health 119(103)/travel 65(63)/education 68(66)/daily 162(147)。最小的几个池（git/ai/frontend）仍够填满 20 题一轮小测试。
- 池不足 `max(8, n)` 时才用 tier = 0 兜底补到 `max(12, n)`（补进来的词带 `__tier: 0`）。
- **无主题兜底**：`detectTopics` 返回空时，`topicPoolFor` 以 `['daily']` 作为 `want`（不再 `return []`）；daily 键表已补齐 cook/dinner/lunch/breakfast/coffee/weather/holiday/birthday/party/groceries/laundry/neighbor 等 ≥4 字符英文键（短键会子串误伤：'tea' 命中 teacher/steady，'cat' 命中 category）。实测无主题会话池 = 408 条（原为 6614 条全库兜底）。
- 尾条回填权重 `TIER_WEIGHT = { 0: 1, 1: 4, 2: 14 }`，只依赖稳定的 tier、不依赖标记状态，所以同一回合取样仍可复现。
- **虚词黑名单 `FUNCTION_WORD`**：词库里 Oxford 3000 那层收了 a/an/the/of/for/from/at/not/it/this 这类纯语法词，它们出现在每一段英文里，永远霸占直接命中名额——这是"词跟话题没关系"的第二个来源。现在 `visiblePool()` 与 `extractHitsFromText()` 都过滤 `FUNCTION_WORD`，虚词既不进任何词池也不当直接命中（单词本里的历史标记不受影响，因为 `bookMarks` 直接遍历 WORDS）。

## 5.5 朗读（v1.6.0）

- 只用浏览器内置 Web Speech API：`speechAvailable()`（window.speechSynthesis + SpeechSynthesisUtterance）为假时 `SpeakButton` 返回 null，整条链路静默降级，不做任何 polyfill。
- `pickVoice()` 优先 en-US 且名字匹配 samantha|zira|aria|google us，其次任意 en-US，再次任意 en-*；`voiceschanged` 时清空 `TTS_VOICE` 重新挑。`speak(text)` 截 240 字符、`lang='en-US'`、`rate=0.92`、先 `synth.cancel()`；`settings.tts === false` 时静默不发声。
- 入口统一在 `WordLine` 内部（词 → 🔊 → 音标 → 词性）：词卡、LoungeDock 闪卡条都用它，所以三处永远同一顺序；TailCard 单独摆（词 → 🔊 → 音标 → ·AI）；右栏句式行、小测试判分后揭示行独立调用（答对/答错都出声，题干阶段刻意不出声以免泄题）。
- 设置页有「朗读」开关（set.tts）；浏览器不支持时该开关下方提示 set.ttsUnsupported。

## 6. 回复尾部词条条（TurnWordTail）

- 组件收 owner props `{ turn, seq, openFile }` + 注入 props；`turn.turn` 回合号，`turn.end === undefined` 表示回合仍在生成（此时不渲染）。
- TAIL_REGISTRY：按 session 记录**已挂载回合号集合**与**高水位线 `high`**，useSyncExternalStore 订阅 maxTurn（= max(活跃集合最大值, high)）；**只在「本会话最新回合 + 回合已结束」渲染**，历史回合不重复渲染。坑：宿主会虚拟化/卸载旧回合节点，组件的 useEffect 清理函数会把回合号从集合里删掉，只看集合最大值时最后一轮卸载后 maxTurn 退回 -1，**所有尾条同时消失**（v1.6.0 用户报「本轮词汇不见了」）。现用高水位线兜底（只增不减），且 gate 改为「registry 为 -1 视为未知、照常渲染，仅在明确 turnNo < maxTurn 时隐藏」。
- 每轮 3–10 词：本轮英文直接命中优先（top 10；提取前先剥离 ```elpack 围栏，防止 AI 选词回复与例句自我命中，HIT_STOP 剔除 topic/title/words/example/meaning 等提示词与 JSON 键名），不足 6 个时从会话主题池回填（中文对话兜底到 6）——按 `sessionKey(sessionId)|turnNo` 种子加权随机抽样（mulberry32 均匀抽样——v1.5.1 与标注状态解耦：标注 ○≈?√ 后重挂重算不再换词，稳定性优先），同一回合稳定、跨对话不同；池空则只显示命中。**同一回合的选词结果按 `sessionKey|turnNo` 缓存在 `TAIL_PICK`（上限 240，LRU 淘汰）**：组件每次重挂（切换对话、面板重开、标注状态引发父级重渲染）都会重跑 useMemo，而重跑时已掌握的词会被 `visiblePool` 过滤、露脸计数也会继续累加，于是同一回合的尾条会换一批词——v1.6.0 用户报「切换对话 / 标完状态后本轮词汇自动刷新、维持不住」。缓存后同回合永远是同一批词，标记只影响之后的回合；`tailRemember` 亦改为同回合重复记录不累加。冷却机制：`TAIL_COOL_TURNS = 6`——TAIL_COOL 记录每词最近展示回合，任何词（含直接命中）6 回合内只展示一次；另有 `TAIL_SEEN` 累计露脸次数封顶 `TAIL_MAX_SHOWS = 2`（fuzzy/new 放宽到 4），封顶后只能靠用户重新标注「解禁」。池子小的主题（git 59 条）分三级放宽：严格冷却不够 → 只保留露脸上限 → 整体放开。chip 上直接显示已标状态角标（○/≈/?/√），点开是完整卡（WordLine+释义+例句+四态按钮）；× 折叠本轮。v1.6.0 去掉了卡内 StateBadge——下方状态按钮已经高亮，角标属冗余信息。
- AI 上下文选词（v1.5.0 增补，settings.aiPick 默认开）：回合结束后满足条件时经 `sessions.scope(sessionId).conversation.send(AI_PICK_PROMPT)` 自动请模型输出 ```elpack 围栏（5–8 个贴合对话的词条）→ parseElack 自动收录 → 尾条/dock 生效并带 ·AI 标记。触发条件：最新回合已结束、对话文本 ≥200 字、距上次触发 ≥3 回合、本会话 ≤12 次、直接命中 <5、无在途请求；发送失败时尾条显示 ↻「AI 选词」回退按钮（fillComposer 填提示词，手动发送）。
- i18n：tail.title / tail.fold；CSS：.elz-tail*。

## 7. 小测试（QuizView，右栏第三视图）

- 入口：右栏 seg 行「小测试」（tab.viewQuiz），view='quiz' 分支。
- 题池 `buildQuizItems`：**单词本 80%**（new×2 / fuzzy×1 加权不放回）+ **known 复习 20%**（v1.6.0：已标「认识」的词回流复习，题卡带「复习」角标；首版取 35%，用户反馈「认识词概率有点高」后下调到 0.2）；v1.7.0 起抽词按到期状态加权 ×3（`dueBoost` 读 `opts.at`——new/fuzzy/known 到期即 ×3），开局页有「今天有 {n} 个词到了复习时间」提示（`quiz.dueNote`）+ 当前主题池补足；题型 30% 四选一 / 70% 拼写，其中拼写有 22% 概率变「听写」（`mode:'dictation'`，需 `speechAvailable()`，进题自动朗读一次 + 再听一次按钮 + 可选释义提示）。
- 句式挖空题（v1.6.0，`buildPatternItems`）：从识别到的主题 patterns 取句，正则 `/[A-Za-z][A-Za-z'-]{3,}/g` 分词，跳过 CLOZE_STOP / 已用词 / mastered / 本轮已选词，选最长词按词边界替换为 `______`；题面显示挖空英文 + 中文对照（`patternZh`），判分后显示完整英文。数量 `min(2, max(1, round(count/4)))`，不足则追加、满则替换最后一项。
- 音标兜底（v1.6.0 末轮）：词库 1219 条无音标，算式题常点不出音标。`ipaOf(word)` 依次查 `wordByWord` 原形 → `IPA_EXTRA` 表 → 复数/时态还原 `stemLookup`，词组逐词拼（任一缺则整条留空）。`IPA_EXTRA` 是从 `data_raw/` 四本词书（CET4/CET6/IELTS/KaoYan 的 `usphone||phone||ukphone`）清洗出的 **374 条**静态表，规则：取分号前第一变体、`ˈ→'` `ˌ→,`、丢弃旧式合体拼写（ei/ai/au/ou/əu）、丢弃截断行与 ipa 等于原词的行、字母比 <0.6 丢弃。实测：小测试题目无音标率 31.8% → 17.8%。查不到就留空、绝不编造。
- 拼写提示阶梯（逐级点开、可叠加）：音标 → 字母骨架 `letterMask`（`g□□□ u□`，**词组消歧关键**，词组无音标）→ 例句挖空 `blankedExample`（w 替换为 ______；w 不在例句中则不给该提示）。
- 判分：`normalizeAnswer`（小写/弯引号/连字符→空格/去尾标点/压空白）→ `answerMatch`：exact / close（编辑距离≤1，**close 只免费重试一次**）/ bad。四选一 `quizChoiceOptions`：3 干扰项（难度±1、剔 mastered），**选项按题冻结**（quizEntry+choiceOpts useMemo，防每次渲染重排）。**判定后 Enter / → 下一题**（window keydown；拼写题 Enter 仍先用于提交）。
- 结算：正确率+错词清单+「只练这些错词」（v1.6.0：直接用错词重建一轮，走 wordByWord 取完整词条）+「错词全部加入单词本」（一键 markWord new）；设置「答对自动升级」（quizAutoPromote，默认关）把答对的生词本词标为 known。
- 题数 5/10/20 开局可选；空池显示 quiz.empty。
- 快捷键（v1.7.0 UX 轮）：选择题 `1`–`4` 直接作答（选项按钮带序号前缀 `(i+1) · word`，按展示顺序映射）；拼写/听写 `Alt+1` 音标 / `Alt+2` 字母骨架 / `Alt+3` 例句 / `Alt+4` 释义（仅 dictation）/ `Alt+R` 重听；提示按钮 title 标注对应快捷键。Enter 提交/下一题不变。keydown 统一 window 层监听、`INPUT/TEXTAREA` 聚焦时不抢键（拼写打数字/字母不受影响）；开局页新增 `quiz.hotkeys` 说明行。右栏另有 `/` 聚焦查词（`elz-lookup`）与单词本搜索（`elz-book-search`）。选择题新 keydown effect 的 deps 是 `[items, idx, done, choicePick, choiceOpts]`，ipa/ex 可用性在 handler 内现算（不能引用声明在早退 return 之后的 const）。

## 7.5 主题简报与单词本（v1.6.0）

- 简报**只渲染一块**：`leadTopic = briefTopics[0]` 输出 brief + usage；检测到的第二主题降级为 chip（主主题 chip 带 `elz-chip-lead`），句式行也只取主主题。首版曾为每个检测到的主题各渲染一段，用户反馈「主题简报现在有两块，比较疑惑」。
- 简报可**收起**（v1.6.0 末轮）：标题行右侧 `elz-head-tools` 内有 `elz-fold` 按钮（`▾ 收起` / `▸ 展开`），状态存 `state.briefFold`（`loadState` 白名单 + 默认 false）。收起时 `elz-brief-body` 与 `elz-patterns`（含 ↻ 换一组）都不渲染，但**主题 chip 行始终保留**，section 加 `elz-topic-min` 收紧间距。理由：简报 + 句式占满右栏，下面词表/小测试被挤得没空间。
- **简报暂时整体隐藏（v1.7.0）**：用户反馈鸡肋、占空间，`BRIEF_ENABLED = false`（在 PACK 开关旁）使整个 `section.elz-topic` 不渲染（含段落/chip/句式）；代码与 `briefFold` 状态保留，改回 true 即恢复。**句式学习不受影响**（同版 UX 轮回归）：`!BRIEF_ENABLED && patternRows.length > 0` 时在视图切换行之上渲染独立 `section.elz-topic-min`——只有 `tab.briefPatterns` 标题 + ↻ 换一组 + 句式行（可朗读）+ lead note；`patternRows` 复用原有 patternOffset 状态；`GENERAL_TOPIC` 自带 patterns（无主题会话也有句式）；`BRIEF_ENABLED` 恢复时本块自动让位，避免句式出现两份。轮换与池子（v1.7.0 句式扩容轮）：`patternRows` 遍历 `briefTopics`（不再只取主主题）、窗口 3 条、`slice(0,4)` 封顶、按 en 去重；patterns 每主题 3→8 条（15 块共 120 条，新增 75 条双语地道句式）——旧逻辑只取主主题 2 条、来回仅 3 种组合，是用户反馈「来回就那么几句」的根因；测验句式挖空题（buildPatternItems）共用该池自动受益。
- 音标提示的揭示行用独立类 `elz-quiz-ipa`（`white-space: normal` 可换行），**不要复用词卡的 `.elz-ipa`**——后者 `nowrap + ellipsis + min-width:0`，在测验窄列里会塌成 0 宽，看起来就是「点了没反应」。音标为空时按钮 `disabled` + `title=t('quiz.noIpa')`。
- 词库总数与学习进度条**已移除**（同一轮反馈：进度条把未学词算成「?」、且不需要在简报页展示）。`.elz-stats` / `.elz-stat*` CSS 与 `tab.progress*` i18n 均已删除，勿再加回。
- 单词本视图顶部是 `elz-filter-row`：四枚状态按钮（√ 熟悉 / ○ 认识 / ≈ 模糊 / ? 生词）各带数量，可多选（至少保留一个），默认 `['fuzzy','new']`；视图切换行的计数取 `bookWords.length`（当前筛选下），不是全库总数；多选状态时列表按状态交织混排、不按状态分组（v1.6.1）。

## 7.8 学习统计（v1.7.0）

- 右栏第四视图「统计」（`view === 'stats'`，`tab.viewStats`；**loadState 白名单已加 'stats'**）。`StatsView` 展示：今日刷词（`dayCount(log, today)`，同一天重复标记只算一个词）、连续天数（`streakFromLog`：今天没刷则从昨天回溯连续段）、待复习（`countDueWords`）、四态分布 + 16 周热力图（`heatmapCells` 112 格，`heatLevel` 0–4 五档，`elz-ls-h0..h4`）。
- **口径**：四态分布只统计**标记过的词**（`markedState` 非 `''`），绝不把未学词算进任何状态——v1.6.0 删旧进度条就是因为把未学词算成「?」，勿回退。
- **类名**：`.elz-ls-*`（elz-ls/elz-ls-row/elz-ls-num/elz-ls-v/elz-ls-k/elz-ls-dist*/elz-ls-bar/elz-ls-fill/elz-ls-heat/elz-ls-cell/elz-ls-h0..4）。v1.6.0 删除的旧进度条用过 `.elz-stat*`（§7.5 明确勿再加回），两套无关、勿混用。
- i18n 新键（zh/en 双份，实测 135/135 parity）：`tab.viewStats`、`stat.heading/today/streak/due/dist/marked/heat/heatNone/dueNote`、`quiz.dueNote`、`quiz.hotkeys`、`quiz.hotkeyChoice`。`guide.desc` 已随简报隐藏改为「右栏管生词、小测验和学习统计」口径。
- UI 修缮（同版 UX 轮，2026-11-20 下午）：分布条/热力图填充色改 `var(--dsw-alias-interactive-primary, #2f6f4f)`——**该 token 在右栏语境不生效**，原写法整条 CSS 声明失效（用户看到的就是灰色底槽、热力图隐身）；热力图空态 `elz-ls-h0` 改 `interactive-bg-hover` 浅灰可见（GitHub 式空网格），格子加 0.5px 边框；计数列 `elz-ls-count` 定宽 26px 右对齐（修四条槽长短不一）；`.elz-seg` 加 `flex-wrap + max-width:100%`（右栏现在 6 个分段标签，防溢出）。热力图色板二轮（按用户参考图）：换 **GitHub 贡献图双主题固定色板**——浅色 h0–h4 = #ebedf0/#9be9a8/#40c463/#30a14e/#216e39，深色 = #161b22/#0e4429/#006d32/#26a641/#39d353（`body[data-ds-dark-theme]` 覆写），格子无边框纯填充、悬停 1px 描边（浅 rgba(0,0,0,.3)/深 rgba(255,255,255,.3)）——此前「interactive-primary 兜底绿」口径作废（仅 dist 条默认绿仍兜底）。**四态分色**（同轮）：`.elz-st-*` 熟悉绿 #2e7d32/认识蓝 #1565c0/模糊琥珀 #b98a1c/生词红 #b3392c（深色主题各提亮），用于状态按钮、卡片 3px 左缘色条（替代原 opacity 变暗——勿恢复）、单词本筛选、统计分布条（`.elz-dist-*`）。**顺序铁律（v1.7.0 修缮实测）**：`.elz-st-*` / `.elz-fav-*` / `.elz-dist-*` 必须位于 CSS 数组**尾部**——晚于 `.elz-btn-on` / `.elz-tail-st-on` / `.elz-ls-fill` / `.elz-tail-exbtn`；同特异性（单类名）下靠后者胜，插在中部会导致尾条状态文字仍是琥珀、分布条仍是绿、尾条收藏星不变色（三处同因）。词卡左缘色条=当前状态色（含显式「生词」红条 `.elz-card-new`），未标记词无色条；WordCard 根节点 `title` 悬停显示当前状态名，避免「不知道彩条什么意思」。热力图二轮重做（用户反馈：太挤、hover 无信息、无日期锚定）：`heatmapCells` 改 **GitHub 式周对齐**——行=周一..周日、列恒 16、首列=(weeks-1) 周前的周一（首版起点公式算错成周三列首，已修+加「每列首格 getDay()===1」「末实际格=今天」对齐断言），未来日期推 null → `.elz-ls-future` visibility:hidden；列宽 `grid-auto-columns:1fr` **铺满面板**（格高 12px）；顶部月份锚点 `.elz-ls-months`（16 槽同列宽对齐，跨月出标签，语言按 `t('tab.viewStats')==='统计'` 嗅探 zh/en）；左侧星期刻度 一/三/五（`elz-ls-wd`）；**悬停读数是自渲染信息行**（cell onMouseEnter → heatHover state → 「日期 · 刷了 n 个词」，离开回总量行 `stat.heatTotal`）——不依赖原生 title 气泡（右栏语境可能不弹）；底部 少→多 图例（`elz-ls-mini` 5 档）。新增 i18n：stat.less/more/heatTip/heatTipZero/heatTotal（实测 140/140 parity）。

## 8. 开发约定（改 client.js 必读）

- 编辑流程：改前确认工作区干净（回滚靠 git）→ **唯一锚点字符串替换**（split/join 字面量，替换前断言 count===1）→ `new Function(src)` 语法校验 → 落盘 → 跑 tools/smoke-v160.cjs 渲染冒烟。
- 行号会漂移，函数名/唯一字符串才是锚；双语 i18n 必须同改（zh/en 两处内嵌 dict）。
- **文档同步是硬约定（用户 2026-11-18 明确要求）**：每次改动功能后，必须同轮更新本文件与 README.md，不允许「代码改了文档不动」。改动前先核对文档里的事实性数字（词条数、行数、音标覆盖率、主题数、包上限、难度档）是否仍与代码一致——本文件曾在 v1.6.0 审计中发现 447/421、16.7k/17.3k、asar 可读性、locale 用途等多处过期描述。核对方法：从 `__test` 导出常量在 tools/smoke-v160.cjs 里断言，不要凭记忆写数字。
- CSS 是 client.js 内 CSS 字符串数组（运行时注入 <style>），颜色 token 用 --dsw-alias-* 变量。
- 备份现状：仓库已进 git，**首选备份是 `git show HEAD:client.js`**（改坏了直接 checkout 回来）；tools/ 下 client-v140 / v15-m2 / v15-m3 是 v1.5 之前的手工快照，仅作历史参考。v1.6.0 起不再手工拷备份。

## 9. 发布流程（约定）

- 版本策略：一个版本一个 feat 提交；对话内所有更改归入同一版本号。
- index.json 发布模式：feat 提交代码 → index.json plugins[0].versions[] 追加 `{version, publishTimestamp, source:{type git, commit=feat 全长 sha}}` → `chore: publish index` 提交 → tag vX.Y.Z 打在 feat 提交 → push origin main + tag → ls-remote 验证 main 与 tag 指向。
- **git 必须带代理**：`git -c http.proxy=http://127.0.0.1:7897 ...`（直连 GitHub 会 Connection reset）；push/fetch 需 danger-full-access 提权（沙箱令牌取不到 schannel 凭据）。
- 发布权：默认用户亲手发；用户明说「封版/请发布」= 授权 AI 执行完整流程。
- 验证陷阱：编辑后刷 mtime 可能让 git stat 缓存骗人——用 `git show <sha>:file` 终验内容。v1.7.0 实测反向案例：ops_edit_file 原子写**保留 mtime** 且新旧版本同字节数（1.6.0→1.7.0），package.json 被 git status/diff 整体漏报，`--really-refresh` 也无效；`touch <file>` 打散 mtime 即恢复，`git hash-object <file>` 对比 `git rev-parse HEAD:<file>` 可做内容级终验。

## 10. 版本史

- v1.1.1（tag e69bb02）：初版四态/生词本雏形。
- v1.3.1（feat 416df6d）：词包 per-session、TOPIC_RULES 扩充（industry/finance/business）。
- v1.4.0（feat 9acfe2f）：四态词卡重构、生词本影子视图+检索分页、全库查词、词库 1435→7999（kajweb/dict 四本）、词包停用（PACKS_ENABLED=false）。
- v1.5.0：① TOPIC_TAGS 多标签层（704 词，daily/health/legal/education/industry 为主）；② 匹配升级：直接命中通道+主题计分+最近优先；③ 回复尾部词条条（turnTail，每轮≤4 词）；④ 小测试模块（拼写/四选一+三级提示+错词入本）；⑤ 设置项 quizAutoPromote；⑥ 增补轮：AI 上下文选词（conversation 服务自动发送 + elpack 词包复活 + ·AI 标记）、词条条 3–10 词与回填随机化、Enter/→ 下一题、防溢出 CSS、legacy 双 detectTopics 声明修复。
- v1.5.1：小测试回车先提交再下一题；尾条改自适应迷你卡网格（词/音标/释义/状态按钮同屏，例句按卡展开）；尾条抽词与标注状态解耦（mulberry32 均匀抽样，切会话来回不再换词）。
- v1.6.0：① 右栏主题 brief 由单句扩为 2–3 句英文段落，每主题新增 usage 与 patterns[3] 地道句式（可 ↻ 换一组）；② 朗读：Web Speech API 接入词卡/dock/尾条/句式/测验揭示行，设置可关；③ 小测试加 known 复习池（初版 35%，按反馈降到 20%）与句式挖空题；④ 新增听写题 mode:'dictation'（自动朗读一次 + 再听一次 + 可选释义）；⑤ 结算页「只练这些错词」；⑥ 反馈修正轮：简报合并为单块、去掉词库总数与学习进度条、生词本改名单词本并支持四态筛选（默认 fuzzy+new）、朗读按钮统一进 WordLine（词右侧）、去掉词卡状态角标、known 复习比率下调。
- v1.6.0 末轮（同版本内，未单独发版）：① 单词本多状态筛选由「按状态分桶拼接」改为 round-robin 交织——多选（如默认 fuzzy+new）时列表逐条交替混合状态、不再出现「模糊墙+生词墙」，各状态桶内部保持原序，单选行为不变；② 修复尾条总抽到 idle、以及词跟话题对不上：对话文本改走 looksLikeProse 人话过滤（详见 §5），主题池改为三档相关度 + 加权回填（详见 §5.1），主题键改词首匹配，daily 键表补齐并作为无主题兜底；③ 修复「本轮词汇」整条消失：TAIL_REGISTRY 增加高水位线 `high`，渲染 gate 由 `turnNo !== maxTurn` 改为 `maxTurn >= 0 && turnNo < maxTurn`（registry 为空时视为未知、照常渲染，只在明确有更晚回合时隐藏），hits useMemo 整体 try/catch 并在池空时回填 `visiblePool(dockPool())`，另修掉 `markedState(w)` 漏传 map 的签名误用（模糊/生词的放宽上限此前从未生效）；④ 尾条按 `sessionKey|turnNo` 缓存选词结果（`TAIL_PICK`），修复「切换对话或标注状态后本轮词汇自动换词」的稳定性问题；⑤ 修复小测试「音标」按钮点了没反应（揭示行改独立 `.elz-quiz-ipa` + 新增 374 条 IPA 补充表，题目无音标率 31.8%→17.8%）；⑥ 主题简报支持收起并记住状态（`state.briefFold`），收起后仍保留主题 chip；⑦ 架构与性能审查：四层缓存（bandOrder/dockPool/topicPoolFor/loadPacks）+ visiblePool WeakMap + tagsOf 标签缓存 + themedBase 收敛兜底 + Styles 懒构造 + 写盘去抖，详见 §4.1；⑧ 修复底部单词条在窄容器折行导致高度变高（`.elz-word-line` 改 nowrap）。
- v1.7.0：① 间隔复习——markWord 记录状态变更时间戳（`at`）与按天刷词日志（`log`），模糊/生词 12h、认识 3d、熟悉 21d 到期；到期词在闪卡条置顶（拖得越久越靠前）、测验抽词加权 ×3，开局页提示今日到期数；② 学习统计 v0——右栏新增「统计」视图：今日刷词、连续天数、待复习数、四态分布（只统计标记过的词）与 16 周热力图（详见 §7.8）；③ 主题简报整体暂时隐藏（`BRIEF_ENABLED=false`，代码保留，详见 §7.5）；④ UX 轮（同版）：测验快捷键（选择题 1–4、Alt 系提示、Alt+R 重听、/ 聚焦搜索框）、句式学习独立成块回归（简报隐藏后保留）、统计条/热力图主题色兜底（右栏语境 token 失效致隐形）与空态可见、分段标签防溢出换行；⑤ 句式库扩容轮换与收藏轮（⑥ 收藏功能：词卡/尾条/句式行 ☆ → 右栏「收藏」视图 fav=旧 fav 字段+favLines{en:{en,zh,w,at}}，loadState 白名单+clearRecords 同清；⑦ 词库例句层与四态分色：见 §3/§7.8）——句式扩容轮：每主题 patterns 3→8（15 个主题块共 120 条，新增 75 条双语地道句式），右栏句式块遍历所有检出主题、窗口 3 条上限 4 行按句去重；测验「句式挖空题」共用该池自动受益；⑥ 单词显示完整性：去掉 `.elz-word` 的 26ch 隐藏上限与 `.elz-tail-w` 省略号截断（长 IPA 曾把词头挤成 `div…`），全部词头位改换行兜底。

## 11. 已知坑

- 词组（421 条）音标基本全空（420/421）：任何提示/展示逻辑不得假设 ipa 存在。单词也有 799 条无音标，拼写题的「音标提示」按钮在这些词上必须 disabled。
- collectConvText 跳过 settings/fav/known 键、单字符串截 600、总量 5000——convText 是近似文本不是全文。
- app.asar 在本机是**普通文件**（`stat` 显示 regular file，204MB）。访问方式不对称：Harness 的 `read` 工具能直接读 asar 内部路径（如 `D:/deepseek/resources/app.asar/dsh/package.json`，勘察宿主挂点契约就靠它）；但 `node` 的 readFileSync 与 bash 的 cat 对内部路径都报 ENOENT，只能把整个 asar 当二进制读。需要宿主源码时用 read 工具，别用 node fs。
- 本机 npm-cache 是悬空 junction：会话里不要跑 npm install/npx 缓存写入（ENOTDIR）。
- 朗读依赖本机语音包：系统没有 en-* 音色时 speak() 仍会调用，但可能无声；`TTS_VOICE` 缓存是模块级，切语言需 voiceschanged 后才更新。
- 缓存失效的唯一信号是 `KNOWN_REV` / `PACK_REV`：绕过 `markWord` 直接改 `storeState.known` 会让所有池子停在旧结果。`Styles()` 也必须在 `h` 可用之后才首次调用。
- 小测试 `mode` 现在有三值：'choice' / 'spell' / 'dictation'，另有句式题的 'build'；任何新分支判断别再写 `mode === 'spell'`，用 `mode !== 'choice'`（`spell` 变量已是这个语义）。
- **单词显示完整性约定（v1.7.0 UX 轮，用户明确要求）**：任何控件（闪卡条 WordLine、侧栏词卡、尾条小卡、测验揭示行）里的**词头 entry.w 禁止 ellipsis / max-width 截断**。曾有两处帮凶：`.elz-word` 带 `max-width: 26ch`、`.elz-tail-w` nowrap+ellipsis——长 IPA（银行数据里有多读音变体分号并列，如 diversion）会把词头挤成 `div…`、把「例」按钮挤碎。现口径：词头/音标一律 `white-space: normal + overflow-wrap: anywhere` 换行兜底，`.elz-word-line`/`.elz-tail-meta` flex-wrap:wrap；新加词头展示位时禁用 text-overflow。中文释义/例句仍可省略（有 title 悬浮兜底）。**作用域例外（v1.7.0 修缮实测，用户反馈「底部单词条又跨行」）**：`.elz-bar`（闪卡条单行约定）作用域内恢复 nowrap——`.elz-bar .elz-word-line` flex-wrap:nowrap、`.elz-bar .elz-word` `white-space:nowrap + flex-shrink:0`（**永不收缩、永不截断**，空间不够先压长音标：`.elz-bar .elz-ipa` 省略号 + span title 悬浮看全文）再压释义/例句；侧栏词卡/尾条小卡仍按换行兜底。两条约定按作用域并存，dock 覆写规则放 CSS 数组尾（`.elz-bar` 前缀双类名特异性本就更高）。
- 到期重排挂在 LoungeDock rotation 的 useMemo（依赖 pool/s.known/s.at）上：只有标记或主题变化才重算，纯时间流逝不会把「刚到期」的词实时提前——语义是「下次刷新/标记时到期词排前」，v0 够用。热力图 112 格的列对齐不按周一起始（最后一列以今天收尾），纯装饰。`log` 只留 200 天（`pruneLog` 在 loadState 裁剪），算连续天数/热力图都够用。
- `.elz-stat*` 是 v1.6.0 已删类名（勿再加回）；v1.7.0 统计页用 `.elz-ls-*`，两套无关勿混用。统计页四态分布只统计标记过的词（`markedState` 非 `''`），勿把未学词算进任何状态。
