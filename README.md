# English Lounge · 英语角

[English](#english) | [中文](#中文)

A DeepSeek Harness (DSH) client plugin that turns idle moments into an English micro-environment: rotating word & phrase flashcards under the composer while a response streams in, and an English topic brief with an annotated word book in the right sidebar.

一款 DeepSeek Harness（DSH）客户端插件：在模型回复生成的等待时间里，于输入框下方轮播单词与短语闪卡；右侧栏展示当前会话主题的英文简报、主题词汇与生词本。

<!-- 可选：在此处放置截图 <img ...> -->

## Features · 功能

- **Composer flashcards · 输入框下方闪卡条**
  - Auto-rotating cards: word, IPA, part of speech, Chinese gloss, bilingual example. 自动轮换：词条、音标、词性、中文释义、双语例句。
  - While the model is generating (`session.running`), rotation speeds up and a pulse dot appears; hovering pauses it. 回复生成期间加速轮换并显示呼吸点，悬停暂停。
  - Buttons: next / got-it / save-to-word-book / open sidebar. 按钮：换一个、认识了、收进生词本、打开右侧栏。
- **Right-sidebar page · 右侧栏「英语角」页**
  - Topic brief: reads the session title, detects the topic (code / frontend / git / AI / design / planning), and composes a short English brief with topic chips. 主题简报：读取会话标题，识别主题并生成英文概述与标签。
  - Topic vocabulary matched to the detected topic. 按主题匹配的注释词卡。
  - **Word book (生词本)**: segmented view with a live count; ☆ on any card saves a word. 生词本分段视图带数量角标，任意词卡 ☆ 收进。
  - **Known state (认识状态)**: marking a word dims its card with a “✓ Known” badge and an `x/y` counter; “↩ Forgot” undoes it. 认识后卡片变暗并挂徽章、计数；「忘了」可撤销。
- **Settings · 设置页**: right-sidebar **Settings** tab — English level (starter A2 → pro C1), words per batch, and dock card pace with explicit seconds (e.g. fast = 6–14 s: short while generating, long while idle). Open it with the small ⚙ icon beside the segmented tabs; ▾ Hide word strip collapses the dock bar (tap the ＋ capsule above the composer to bring it back). Clearing learning records requires a second tap — the button turns red and auto-reverts in 4 s. Pushed words are filtered by the difficulty ceiling and drawn with priority from the band matching the chosen level; topic relevance stays automatic. 右侧栏「设置」分段：英语水平（入门 A2 → 老手 C1）、每批数量、换词节奏（带具体秒数，如快 = 6–14 秒：生成中用短间隔、空闲用长间隔）。点分段右侧的小 ⚙ 图标进入；「收起单词条」可收起输入框下方的卡片条（点输入框上方 ＋ 胶囊恢复）。清空学习记录需二次确认——按钮变红，4 秒未点击自动复位。推送按难度上限过滤，并优先从所选水平对应的难度区间抽词；主题相关性自动检测，无需手动配置。
- **Built-in bank · 内置词库**: 562 developer-flavoured entries rated 1–5. Phrases come from real developer scenarios (requirements, architecture, code review, incidents, retrospectives, meetings); words are curated from the Oxford 3000/5000 by CEFR (A1–C1) with engineering-flavoured examples. 562 条开发者向词条，难度 1–5 分级：短语源自真实开发场景（需求、架构、代码审查、线上事故、复盘、会议），单词按 CEFR（A1–C1）从 Oxford 3000/5000 精选，例句贴近工程语境。
- **State**: known / word book / collapsed / settings persist in browser `localStorage` (`dsh.english-lounge.v1`). 认识、生词本、收起状态与设置都存于浏览器本地。

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

Everything runs in the browser. Topic detection uses only the session title from the local session catalog; nothing leaves the machine beyond what DSH itself already exchanges. 全部逻辑在浏览器本地运行；主题识别只使用本地会话目录中的会话标题。

## Implementation notes · 实现说明

- Pure client plugin: the Host half is an empty `apply()`; all rendering lives in the lazy browser module (`client.js`) with React from the host module table. 纯 Client 插件，宿主半为空。
- Mounts: `conversation.composer.dock` (session-scoped slot, per-session `inject(sessionId)`), and a right-sidebar page type via `ctx.sidebarRightTabs.register` + `sidebar.right.pane.tab` / `sidebar.right.pane.tab.title` (key = type id), opened with `ctx.sidebarRight.openTab(kind)`; a guide entry card registers the way in.
- Running state: `sessions.binding(id).session.getSnapshot().running`; title: `sessions.list` catalog snapshot.
- Styling uses only host theme tokens (`--dsw-alias-*`); literal colours appear solely in the brand glyph. 样式仅用宿主主题 token。
- No harness client package is `require`d; no DOM writes outside the component tree. 不 require 任何宿主客户端包。

Roadmap ideas: SM-2 review queue, CSV import, topic extraction from session content. 路线图：SM-2 复习队列、CSV 导入、按会话内容提取主题。（设置页已覆盖换词节奏与难度/数量偏好）

## License

[MIT](./LICENSE)
