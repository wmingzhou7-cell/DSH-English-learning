# English Lounge · 英语角

[English](#english) | [中文](#中文)

A DeepSeek Harness (DSH) client plugin that turns idle moments into an English micro-environment: rotating word & phrase flashcards under the composer while a response streams in, and an English topic brief with an annotated word book in the right sidebar.

一款 DeepSeek Harness（DSH）客户端插件：在模型回复生成的等待时间里，于输入框下方轮播单词与短语闪卡；右侧栏展示当前会话主题的英文简报、主题词汇与生词本。

<!-- 可选：在此处放置截图 <img ...> -->

## Features · 功能

- **Composer flashcards · 输入框下方闪卡条**
  - Auto-rotating cards: word, IPA, part of speech, Chinese gloss, bilingual example. 自动轮换：词条、音标、词性、中文释义、双语例句。
  - While the model is generating (`session.running`), rotation speeds up and a mute pulse dot appears (the hint text is gone to save space); hovering pauses it. 回复生成期间加速轮换，只保留无文字的呼吸点（提示文案已移除，为词条腾出空间），悬停暂停。
  - Compact state buttons on the strip: √ mastered / ○ got-it / ≈ fuzzy / ? mark-as-new — every tap saves the state and immediately advances to the next word; fuzzy and new words flow into the word book automatically (known/mastered flow out). » open sidebar stays at the right. 词条右侧为四枚状态按钮：√ 熟悉 / ○ 认识 / ≈ 模糊 / ? 生词——点任意一枚都会记住状态并立刻换下一个词；模糊与生词自动收进生词本，认识/熟悉自动移出生词本。» 打开右侧栏保留在最右。
- **Right-sidebar page · 右侧栏「英语角」页**
  - Topic brief: reads the session title **and recent conversation text**, detects one of 14 topics (code / frontend / git / AI / design / planning / business / finance / industry / legal / health / travel / learning / daily), and composes a short English brief with topic chips. 主题简报：读取会话标题与最近对话内容，识别 14 个主题（编程/前端/Git/AI/设计/规划/商务/金融/工业/法务/健康/旅行/学习/日常）并生成英文概述与标签。
  - Topic vocabulary matched to the detected topic — the composer dock strip and the sidebar word list both switch to topic words (generic words fill in when no topic is detected). 按主题匹配的注释词卡——输入框下方闪卡条与侧栏词表都切换为主题词；未识别到主题时回退通用词。
  - **Topic packs · 主题词包（本版本起停用）**: the experimental pack pipeline — AI prompt generation, ```elpack parsing and local caching (up to 12 packs per session) — is disabled in this release: its entry buttons are hidden and previously saved packs are cleared automatically. The code stays behind a feature flag and will return in a later release once the flow is polished. 实验性的词包链路——AI 提示词一键生成、```elpack 解析与本地缓存（每会话最多 12 包）——本版本起停用：入口按钮已隐藏，之前保存的词包已自动清除；代码保留在功能开关后，待流程打磨完善后随后续版本回归。
  - **In-bank lookup · 全库查词**: a search box on the Topic page queries the entire bank by word or meaning, in Chinese or English, and renders hits as state cards, ranked by relevance: exact headword > prefix > substring, the same ladder for gloss matches, single words before phrases, common words before rare ones. 主题页新增查词框：中英文、按词或释义检索整个词库，结果按相关度排序——词条完全匹配 > 前缀 > 包含，释义同理；单词优先于短语，常用词优先于生僻词。
  - **Word book (生词本)**: segmented view with a live count; it is simply every word marked ? new or ≈ fuzzy — no manual saving. A search box filters the book by word or meaning (Chinese/English) and long books paginate at 20 per page. 生词本分段视图带数量角标——内容就是所有标为「? 生词」或「≈ 模糊」的词，无需手动收藏；支持按词或释义（中英文）即时检索，超过 20 条自动分页。
  - **Word states (熟悉 / 认识 / 模糊 / 生词)**: sidebar cards and the dock strip share the same four chips in the same order — √ Mastered / ○ Known / ≈ Fuzzy / ? New. Known words rotate at low frequency, fuzzy words come back more often, and mastered words vanish instantly: they leave the sidebar lists on the spot and are excluded from every pool (dock strip, topic words, packs). Fuzzy and new words enter the word book automatically. 侧栏词卡与闪卡条使用同一套顺序的四枚状态章——√ 熟悉 / ○ 认识 / ≈ 模糊 / ? 生词：认识的词低频轮换、模糊词高频巩固、熟悉的词立即隐藏（侧栏词表即刻消失，且从闪卡条、主题词汇、词包所有词池剔除）；模糊与生词自动收进生词本。徽章 √ / ○ / ≈ 显示状态并计入 x/y 计数。
- **Settings · 设置页**: right-sidebar **Settings** tab — English level (starter A2 → pro C1), a smooth words-per-batch slider (5–20), and dock card pace with explicit seconds (e.g. fast = 6–14 s: short while generating, long while idle). Open it with the small ⚙ icon beside the segmented tabs; ▾ Hide word strip collapses the dock bar (tap the ＋ capsule above the composer to bring it back). Clearing learning records requires a second tap — the button turns red and auto-reverts in 4 s. Pushed words are filtered by the difficulty ceiling and drawn with priority from the band matching the chosen level; topic relevance stays automatic. 右侧栏「设置」分段：英语水平（入门 A2 → 老手 C1）、每批词汇量平滑滑杆（5–20）、换词节奏（带具体秒数，如快 = 6–14 秒：生成中用短间隔、空闲用长间隔）。点分段右侧的小 ⚙ 图标进入；「收起单词条」可收起输入框下方的卡片条（点输入框上方 ＋ 胶囊恢复）。清空学习记录需二次确认——按钮变红，4 秒未点击自动复位。推送按难度上限过滤，并优先从所选水平对应的难度区间抽词；主题相关性自动检测，无需手动配置。
- **Built-in bank · 内置词库**: 7,999 entries rated 1–5: developer phrases from real scenarios (requirements, architecture, code review, incidents, retrospectives, meetings), Oxford 3000/5000 words curated by CEFR (A1–C1), industry packs for power trading and industrial IoT, a broad bilingual workplace layer (business, finance, legal, procurement, travel, daily) curated from the open TOEIC vocabulary dataset [moomoosir/toeic-vocab-tw](https://huggingface.co/datasets/moomoosir/toeic-vocab-tw) (Hugging Face, CC-BY-SA-4.0), converted to simplified Chinese and re-graded, plus exam-core vocabulary merged from the open dict dataset [kajweb/dict](https://github.com/kajweb/dict) (CET-4/CET-6/KaoYan/IELTS books, graded 2/3/3/4, tagged `core`, with IPA and bilingual examples) — powering in-bank lookup and much wider topic/pack coverage. 7,999 条词条，难度 1–5：真实开发场景短语、按 CEFR（A1–C1）精选的 Oxford 3000/5000 单词、电力交易/工业物联行业包、从开放 TOEIC 双语词库（CC-BY-SA-4.0）精选转简并重新标级的职场通用词层，以及从开放词库 [kajweb/dict](https://github.com/kajweb/dict) 合并的考试核心词（CET-4/CET-6/考研/IELTS 四本，难度 2/3/3/4，标 `core` 标签，含音标与双语例句）——支撑全库查词并大幅拓宽主题与词包覆盖面。
- **State**: word states (mastered / known / fuzzy), collapsed flag and settings persist in browser `localStorage` (`dsh.english-lounge.v1`); the word book is derived from them (new + fuzzy), and legacy records stored as `true` keep working as "known". 词的掌握状态（熟悉/认识/模糊）、收起状态与设置都存于浏览器 `localStorage`（`dsh.english-lounge.v1`），生词本由状态实时派生（生词+模糊）；旧版本存为 `true` 的认识记录继续按「认识」生效。

## Install · 安装

Requires DSH web/desktop with the shipped right sidebar (standard desktop profiles). 需要带右侧栏的标准 desktop profile。

### Option A — via the plugin market (Discover) · 通过插件市场

In DSH: **Plugins → Discover → 索引来源（Index sources）→ Add index source**, then add:

```
https://raw.githubusercontent.com/wmingzhou7-cell/DSH-English-learning/main/index.json
```

Then search “English Lounge / 英语角” and click **Install**. 在 Discover 里搜索安装即可。

### Option B — direct Git spec · 直接按 Git spec 安装

`plugin_manager` 的 `install_bundle`（或 Plugins 页安装入口）使用如下 spec（commit 以 `main` 最新为准）：

```
git+https://github.com/wmingzhou7-cell/DSH-English-learning.git#<commit-sha>
```

### Option C — local checkout · 本地目录安装

Clone this repo, then point `install_bundle` at the checkout directory. 克隆仓库后将目录交给 `install_bundle`。

## Compatibility · 兼容性

Developed and tested on DSH `0.2.2-rc.1` (desktop profile, web client). The index entry declares no `engines.dsh` range; it relies on the right-sidebar tab registry (`ctx.sidebarRightTabs`) shipped in the 0.2.x line — older hosts will show the dock strip but no sidebar page. 基于 DSH 0.2.2-rc.1 开发测试；索引未声明 engines.dsh 范围，过旧宿主仅有闪卡条而无右侧栏页。

## Privacy · 隐私

Everything runs in the browser. Topic detection uses only the session title and a bounded slice of recent session text (kept in memory, never persisted or uploaded); saved topic packs stay in browser `localStorage`. Nothing leaves the machine beyond what DSH itself already exchanges. 全部逻辑在浏览器本地运行；主题识别只用会话标题与最近会话文本的有限片段（仅在内存中，不落盘、不上传），保存的主题词包只存浏览器 localStorage；除 DSH 本身交换的内容外无任何数据离开本机。

## Implementation notes · 实现说明

- Pure client plugin: the Host half is an empty `apply()`; all rendering lives in the lazy browser module (`client.js`) with React from the host module table. 纯 Client 插件，宿主半为空。
- Mounts: `conversation.composer.dock` (session-scoped slot, per-session `inject(sessionId)`), and a right-sidebar page type via `ctx.sidebarRightTabs.register` + `sidebar.right.pane.tab` / `sidebar.right.pane.tab.title` (key = type id), opened with `ctx.sidebarRight.openTab(kind)`; a guide entry card registers the way in.
- Running state: `sessions.binding(id).session.getSnapshot().running`; title: `sessions.list` catalog snapshot.
- Styling uses only host theme tokens (`--dsw-alias-*`); literal colours appear solely in the brand glyph. 样式仅用宿主主题 token。
- No harness client package is `require`d; no DOM writes outside the component tree. 不 require 任何宿主客户端包。

Roadmap ideas: SM-2 review queue, CSV import. 路线图：SM-2 复习队列、CSV 导入。（主题识别与主题词包已在 v1.3.0 落地，词包功能自 v1.4.0 起停用待打磨；三态词卡/生词本检索与分页/全库查词/词库扩充已在 v1.4.0 落地）

## License

[MIT](./LICENSE)
