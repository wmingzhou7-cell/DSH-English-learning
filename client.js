window.__ModuleLoader__.load({
  id: 'dsh-english-lounge',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    // ---------------------------------------------------------------- ids
    const NS = 'englishLounge';
    const TAB_ID = 'dsh-english-lounge/brief';
    const TAB_KIND = 'english-lounge.brief';

    // ------------------------------------------------------- word data
    // Each entry: w word/phrase, ipa IPA (empty for phrases), pos part of speech,
    // zh Chinese gloss, en example sentence, zhEx example translation, tags topic ids.
    const WORDS = [
      { w: 'deadline', ipa: '/ˈdedlaɪn/', pos: 'n.', zh: '截止日期', en: 'The deadline for the review is this Friday.', zhEx: '这次评审的截止日期是本周五。', tags: ['work'] },
      { w: 'deliverable', ipa: '/dɪˈlɪvərəbl/', pos: 'n.', zh: '交付物', en: 'The doc is the main deliverable for this phase.', zhEx: '这份文档是本阶段的主要交付物。', tags: ['work'] },
      { w: 'sync up', ipa: '', pos: 'phr.', zh: '同步进度、对齐信息', en: "Let's sync up after the standup.", zhEx: '站会之后我们对一下进度。', tags: ['work', 'phrase'] },
      { w: 'follow up', ipa: '', pos: 'phr.', zh: '跟进', en: "I'll follow up on the ticket tomorrow.", zhEx: '明天我会跟进那张工单。', tags: ['work', 'phrase'] },
      { w: 'heads-up', ipa: '/ˈhedzʌp/', pos: 'n.', zh: '提前打招呼、预告', en: 'Thanks for the heads-up about the migration.', zhEx: '谢谢你提前告知迁移的事。', tags: ['work'] },
      { w: 'trade-off', ipa: '/ˈtreɪdɔːf/', pos: 'n.', zh: '权衡、取舍', en: 'Caching adds a trade-off between speed and freshness.', zhEx: '缓存带来了速度与新鲜度之间的取舍。', tags: ['work', 'code'] },
      { w: 'edge case', ipa: '', pos: 'n.', zh: '边界情况、极端用例', en: 'The empty input is an edge case we missed.', zhEx: '空输入是我们漏掉的边界情况。', tags: ['code', 'work'] },
      { w: 'bottleneck', ipa: '/ˈbɑːtlnek/', pos: 'n.', zh: '瓶颈', en: 'The database write is the bottleneck here.', zhEx: '数据库写入是这里的瓶颈。', tags: ['code'] },
      { w: 'milestone', ipa: '/ˈmaɪlstoʊn/', pos: 'n.', zh: '里程碑', en: 'Shipping v2 is the milestone for this quarter.', zhEx: '发布 v2 是本季度的里程碑。', tags: ['work'] },
      { w: 'bandwidth', ipa: '/ˈbændwɪdθ/', pos: 'n.', zh: '（引申）精力、余力', en: "I don't have the bandwidth for another project this week.", zhEx: '这周我没有余力再接一个项目。', tags: ['work'] },
      { w: 'scope creep', ipa: '', pos: 'n.', zh: '需求范围蔓延', en: 'Small extra requests slowly cause scope creep.', zhEx: '小的额外请求会慢慢导致范围蔓延。', tags: ['work'] },
      { w: 'out of scope', ipa: '', pos: 'phr.', zh: '超出范围的', en: 'That feature is out of scope for v1.', zhEx: '那个功能不在 v1 范围内。', tags: ['work', 'phrase'] },
      { w: 'on track', ipa: '', pos: 'phr.', zh: '按计划推进', en: 'We are on track for the release.', zhEx: '我们按计划推进发布。', tags: ['work', 'phrase'] },
      { w: 'push back', ipa: '', pos: 'phr.', zh: '推迟；（对提议）反驳', en: "Let's push back the release by one week.", zhEx: '我们把发布推迟一周吧。', tags: ['work', 'phrase'] },
      { w: 'wrap up', ipa: '', pos: 'phr.', zh: '收尾、结束', en: "Let's wrap up before the meeting ends.", zhEx: '会议结束前我们收个尾。', tags: ['work', 'phrase'] },
      { w: 'in the loop', ipa: '', pos: 'phr.', zh: '知情的、被同步的', en: 'Keep me in the loop on this thread.', zhEx: '这个讨论串记得同步我。', tags: ['work', 'phrase'] },
      { w: 'circle back', ipa: '', pos: 'phr.', zh: '回头再谈', en: "Let's circle back to this after the demo.", zhEx: '演示完我们再回头谈这个。', tags: ['work', 'phrase'] },
      { w: 'touch base', ipa: '', pos: 'phr.', zh: '简短沟通一下', en: 'Just touching base about the schedule.', zhEx: '简单同步一下日程。', tags: ['work', 'phrase'] },
      { w: 'get back to you', ipa: '', pos: 'phr.', zh: '稍后答复你', en: "I'll get back to you once I check the logs.", zhEx: '我查完日志再答复你。', tags: ['work', 'phrase'] },
      { w: 'with a grain of salt', ipa: '', pos: 'phr.', zh: '半信半疑地', en: 'Take that estimate with a grain of salt.', zhEx: '那个估算要打个折扣听。', tags: ['phrase'] },
      { w: 'ballpark', ipa: '/ˈbɔːlpɑːk/', pos: 'n.', zh: '大约的数、粗略范围', en: 'Give me a ballpark estimate of the effort.', zhEx: '给我一个大致的工作量估计。', tags: ['work'] },
      { w: 'nudge', ipa: '/nʌdʒ/', pos: 'v.', zh: '轻轻提醒、催一下', en: 'Give me a nudge if the review stalls.', zhEx: '评审卡住的话提醒我一下。', tags: ['work'] },
      { w: 'blocker', ipa: '/ˈblɑːkər/', pos: 'n.', zh: '阻塞项、拦路的问题', en: 'The failing test is the only blocker.', zhEx: '失败的测试是唯一的阻塞项。', tags: ['work', 'code'] },
      { w: 'revisit', ipa: '/ˌriːˈvɪzɪt/', pos: 'v.', zh: '重新审视、再讨论', en: "Let's revisit this design next sprint.", zhEx: '下个迭代我们重新审视这个设计。', tags: ['work'] },
      { w: 'pragmatic', ipa: '/præɡˈmætɪk/', pos: 'adj.', zh: '务实的', en: 'A pragmatic fix beats a perfect plan here.', zhEx: '这里务实的修复胜过完美的计划。', tags: ['work'] },
      { w: 'refactor', ipa: '/ˌriːˈfæktər/', pos: 'v.', zh: '重构', en: 'We should refactor this module before adding features.', zhEx: '加新功能前我们应该先重构这个模块。', tags: ['code'] },
      { w: 'deprecate', ipa: '/ˈdeprəkeɪt/', pos: 'v.', zh: '弃用、标记过时', en: 'The old endpoint is deprecated but still works.', zhEx: '旧接口已弃用但仍可用。', tags: ['code'] },
      { w: 'boilerplate', ipa: '/ˈbɔɪərpleɪt/', pos: 'n.', zh: '样板代码', en: 'The hook removes most of the boilerplate.', zhEx: '这个 hook 省掉了大部分样板代码。', tags: ['code'] },
      { w: 'idempotent', ipa: '/ˌaɪˈdempətənt/', pos: 'adj.', zh: '幂等的', en: 'The retry only works if the call is idempotent.', zhEx: '只有调用是幂等的，重试才安全。', tags: ['code'] },
      { w: 'immutable', ipa: '/ɪˈmjuːtəbl/', pos: 'adj.', zh: '不可变的', en: 'Keep the snapshot object immutable.', zhEx: '保持快照对象不可变。', tags: ['code'] },
      { w: 'race condition', ipa: '', pos: 'n.', zh: '竞态条件', en: 'Two writers caused a race condition.', zhEx: '两个写入方引发了竞态条件。', tags: ['code'] },
      { w: 'dependency', ipa: '/dɪˈpendənsi/', pos: 'n.', zh: '依赖', en: 'This dependency pulls in a huge transitive tree.', zhEx: '这个依赖带进了一大串传递依赖。', tags: ['code'] },
      { w: 'shim', ipa: '/ʃɪm/', pos: 'n.', zh: '垫片、兼容层', en: 'A tiny shim keeps the old API alive.', zhEx: '一个很小的垫片保住了旧 API。', tags: ['code'] },
      { w: 'lint', ipa: '/lɪnt/', pos: 'v.', zh: '做静态检查', en: 'Lint the file before you commit it.', zhEx: '提交前先跑一下静态检查。', tags: ['code'] },
      { w: 'ship', ipa: '/ʃɪp/', pos: 'v.', zh: '发布、上线', en: 'We ship every Thursday.', zhEx: '我们每周四发布。', tags: ['code', 'work'] },
      { w: 'rollback', ipa: '/ˈroʊlbæk/', pos: 'n./v.', zh: '回滚', en: 'The deploy failed and we did a rollback.', zhEx: '部署失败了，我们做了回滚。', tags: ['code'] },
      { w: 'hotfix', ipa: '/ˈhɑːtfɪks/', pos: 'n.', zh: '紧急修复', en: 'The hotfix went out within the hour.', zhEx: '紧急修复一小时内就发出去了。', tags: ['code'] },
      { w: 'canonical', ipa: '/kəˈnɑːnɪkl/', pos: 'adj.', zh: '规范的、权威的', en: 'Read the canonical schema, not the copy.', zhEx: '读规范的 schema，不要看复制品。', tags: ['code'] },
      { w: 'dangling', ipa: '/ˈdæŋɡlɪŋ/', pos: 'adj.', zh: '悬空的、指向失效目标的', en: 'The cache path was a dangling junction.', zhEx: '那个缓存路径是个悬空的 junction。', tags: ['code'] },
      { w: 'stale', ipa: '/steɪl/', pos: 'adj.', zh: '过期的、陈旧的', en: 'Stale checkpoints are discarded on startup.', zhEx: '过期的检查点会在启动时丢弃。', tags: ['code'] },
      { w: 'throughput', ipa: '/ˈθruːpʊt/', pos: 'n.', zh: '吞吐量', en: 'Batching doubled the throughput.', zhEx: '批处理让吞吐量翻了一倍。', tags: ['code'] },
      { w: 'latency', ipa: '/ˈleɪtənsi/', pos: 'n.', zh: '延迟', en: 'The first token sets the perceived latency.', zhEx: '首 token 时间决定了感知延迟。', tags: ['code'] },
      { w: 'quota', ipa: '/ˈkwoʊtə/', pos: 'n.', zh: '配额、限额', en: 'We hit the request quota at noon.', zhEx: '中午就撞到了请求配额。', tags: ['code', 'work'] },
      { w: 'throttle', ipa: '/ˈθrɑːtl/', pos: 'v.', zh: '限流、节流', en: 'The API throttles bursts to five per second.', zhEx: '这个 API 把突发限到每秒五次。', tags: ['code'] },
      { w: 'backfill', ipa: '/ˈbækfɪl/', pos: 'v.', zh: '回填、补数据', en: 'Backfill the missing rows from the export.', zhEx: '从导出文件回填缺失的行。', tags: ['code'] },
      { w: 'teardown', ipa: '/ˈterdaʊn/', pos: 'n.', zh: '拆卸、清理阶段', en: 'Register every disposer for teardown.', zhEx: '把每个清理函数都注册到拆卸阶段。', tags: ['code'] },
      { w: 'snapshot', ipa: '/ˈsnæpʃɑːt/', pos: 'n.', zh: '快照', en: 'The store publishes an immutable snapshot.', zhEx: 'store 发布不可变的快照。', tags: ['code'] },
      { w: 'side effect', ipa: '', pos: 'n.', zh: '副作用', en: 'Keep side effects out of the render path.', zhEx: '把副作用挡在渲染路径之外。', tags: ['code'] },
      { w: 'poll', ipa: '/poʊl/', pos: 'v.', zh: '轮询', en: 'Do not poll the status; wait on events.', zhEx: '别轮询状态，等事件就好。', tags: ['code'] },
      { w: 'deterministic', ipa: '/dɪˌtɜːrmɪˈnɪstɪk/', pos: 'adj.', zh: '确定性的', en: 'Replaying the log is deterministic.', zhEx: '重放日志的结果是确定的。', tags: ['code'] },
      { w: 'overflow', ipa: '/ˌoʊvərˈfloʊ/', pos: 'n.', zh: '溢出', en: 'Long words cause a layout overflow.', zhEx: '超长单词会导致布局溢出。', tags: ['code', 'frontend'] },
      { w: 'fallback', ipa: '/ˈfɔːlbæk/', pos: 'n.', zh: '回退方案', en: 'A bundled snapshot may be returned as a fallback.', zhEx: '内置快照可以作为回退返回。', tags: ['code'] },
      { w: 'responsive', ipa: '/rɪˈspɑːnsɪv/', pos: 'adj.', zh: '响应式的', en: 'The layout stays responsive down to 360px.', zhEx: '布局到 360px 仍保持响应式。', tags: ['frontend'] },
      { w: 'breakpoint', ipa: '/ˈbreɪkpɔɪnt/', pos: 'n.', zh: '断点', en: 'Add a breakpoint for narrow panes.', zhEx: '为窄面板加一个断点。', tags: ['frontend'] },
      { w: 'viewport', ipa: '/ˈvjuːpɔːnt/', pos: 'n.', zh: '视口', en: 'The panel covers the whole viewport.', zhEx: '面板覆盖整个视口。', tags: ['frontend'] },
      { w: 'layout shift', ipa: '', pos: 'n.', zh: '布局偏移', en: 'Late icons cause an annoying layout shift.', zhEx: '晚出现的图标会造成恼人的布局偏移。', tags: ['frontend'] },
      { w: 'accessibility', ipa: '/əkˌsesəˈbɪləti/', pos: 'n.', zh: '无障碍、可访问性', en: 'Accessibility starts with correct roles and labels.', zhEx: '无障碍从正确的角色和标签开始。', tags: ['frontend'] },
      { w: 'tooltip', ipa: '/ˈtʊltɪp/', pos: 'n.', zh: '提示框', en: 'The tooltip shows the effective shortcut.', zhEx: '提示框里显示实际生效的快捷键。', tags: ['frontend'] },
      { w: 'placeholder', ipa: '/ˈpleɪshoʊldər/', pos: 'n.', zh: '占位符', en: 'A placeholder keeps the row height stable.', zhEx: '占位符让行高保持稳定。', tags: ['frontend'] },
      { w: 'typography', ipa: '/taɪˈpɑːɡrəfi/', pos: 'n.', zh: '排版、字体设计', en: 'Good typography carries the whole page.', zhEx: '好的排版撑起整个页面。', tags: ['frontend', 'design'] },
      { w: 'spacing', ipa: '/ˈspeɪsɪŋ/', pos: 'n.', zh: '间距', en: 'Keep the spacing rhythm consistent.', zhEx: '保持间距节奏一致。', tags: ['frontend', 'design'] },
      { w: 'contrast', ipa: '/ˈkɑːntræst/', pos: 'n.', zh: '对比度', en: 'Low contrast fails the check in dark mode.', zhEx: '低对比度在暗色模式下过不了检查。', tags: ['frontend', 'design'] },
      { w: 'sticky', ipa: '/ˈstɪki/', pos: 'adj.', zh: '粘性定位的', en: 'The header is sticky above the list.', zhEx: '表头粘性定位在列表上方。', tags: ['frontend'] },
      { w: 'skeleton', ipa: '/ˈskelɪtn/', pos: 'n.', zh: '骨架屏', en: 'Show a skeleton while the data loads.', zhEx: '数据加载时先显示骨架屏。', tags: ['frontend'] },
      { w: 'dropdown', ipa: '/ˈdrɑːpdaʊn/', pos: 'n.', zh: '下拉菜单', en: 'The dropdown closes on outside clicks.', zhEx: '点击外部时下拉菜单关闭。', tags: ['frontend'] },
      { w: 'breadcrumb', ipa: '/ˈbredkrʌm/', pos: 'n.', zh: '面包屑导航', en: 'The breadcrumb shows the nested path.', zhEx: '面包屑显示嵌套路径。', tags: ['frontend'] },
      { w: 'rebase', ipa: '/ˌriːˈbeɪs/', pos: 'v.', zh: '变基', en: 'Rebase onto main before opening the PR.', zhEx: '开 PR 前先向 main 变基。', tags: ['git'] },
      { w: 'squash', ipa: '/skwɑːʃ/', pos: 'v.', zh: '压缩（提交）', en: 'Squash the fixups into one commit.', zhEx: '把修补提交压成一个。', tags: ['git'] },
      { w: 'cherry-pick', ipa: '', pos: 'phr.', zh: '摘选提交', en: 'Cherry-pick the hotfix onto the release branch.', zhEx: '把紧急修复摘到发布分支上。', tags: ['git'] },
      { w: 'stash', ipa: '/stæʃ/', pos: 'v./n.', zh: '暂存（改动）', en: 'Stash the local changes and pull.', zhEx: '先暂存本地改动再拉取。', tags: ['git'] },
      { w: 'blame', ipa: '/bleɪm/', pos: 'n.', zh: '追溯（git blame）', en: 'Git blame points to last Tuesday.', zhEx: 'git blame 指向上周二。', tags: ['git'] },
      { w: 'upstream', ipa: '/ˈʌpstriːm/', pos: 'n.', zh: '上游（仓库/依赖）', en: 'The fix landed upstream last week.', zhEx: '修复上周已进入上游。', tags: ['git', 'code'] },
      { w: 'fork', ipa: '/fɔːrk/', pos: 'v./n.', zh: '复刻、分叉', en: 'Fork the repo and open a draft PR.', zhEx: '复刻仓库并开一个草稿 PR。', tags: ['git'] },
      { w: 'revert', ipa: '/rɪˈvɜːrt/', pos: 'v.', zh: '回退（提交）', en: 'Revert the commit instead of rewriting history.', zhEx: '回退提交，别改写历史。', tags: ['git'] },
      { w: 'merge conflict', ipa: '', pos: 'n.', zh: '合并冲突', en: 'The merge conflict is only in the lockfile.', zhEx: '合并冲突只在锁文件里。', tags: ['git'] },
      { w: 'force push', ipa: '', pos: 'phr.', zh: '强推', en: 'Never force push to a shared branch.', zhEx: '永远别向共享分支强推。', tags: ['git'] },
      { w: 'checkout', ipa: '/ˈtʃaʊkaʊt/', pos: 'v.', zh: '检出（分支）', en: 'Checkout the branch and run the tests.', zhEx: '检出分支并跑测试。', tags: ['git'] },
      { w: 'prompt', ipa: '/prɑːmpt/', pos: 'n.', zh: '提示词', en: 'A tighter prompt beats more examples.', zhEx: '更紧凑的提示词胜过更多示例。', tags: ['ai'] },
      { w: 'inference', ipa: '/ˈɪnfərəns/', pos: 'n.', zh: '推理（模型推理）', en: 'Local inference keeps the data on device.', zhEx: '本地推理让数据不出设备。', tags: ['ai'] },
      { w: 'embedding', ipa: '/ɪmˈbedɪŋ/', pos: 'n.', zh: '向量嵌入', en: 'Embeddings power the semantic search.', zhEx: '向量嵌入支撑语义搜索。', tags: ['ai'] },
      { w: 'fine-tune', ipa: '', pos: 'phr.', zh: '微调', en: 'Fine-tune only after the data is clean.', zhEx: '数据干净了再微调。', tags: ['ai'] },
      { w: 'hallucinate', ipa: '/həˈluːsɪneɪt/', pos: 'v.', zh: '（模型）胡编、产生幻觉', en: 'The model hallucinated a missing API.', zhEx: '模型编造了一个不存在的 API。', tags: ['ai'] },
      { w: 'context window', ipa: '', pos: 'n.', zh: '上下文窗口', en: 'Compaction frees up the context window.', zhEx: '压缩腾出了上下文窗口。', tags: ['ai'] },
      { w: 'orchestration', ipa: '/ˌɔːrkəstreɪʃn/', pos: 'n.', zh: '编排', en: 'The script handles orchestration of subagents.', zhEx: '这个脚本负责子代理的编排。', tags: ['ai'] },
      { w: 'guardrail', ipa: '/ˈɡɑːrdreɪl/', pos: 'n.', zh: '防护栏、约束', en: 'A guardrail denies the risky tool call.', zhEx: '防护栏拒绝了有风险的工具调用。', tags: ['ai'] },
      { w: 'telemetry', ipa: '/təˈlemətri/', pos: 'n.', zh: '遥测', en: 'Telemetry is opt-in and byte-bounded.', zhEx: '遥测是可选的且按字节限额。', tags: ['ai', 'code'] },
      { w: 'evict', ipa: '/ɪˈvɪkt/', pos: 'v.', zh: '驱逐、淘汰（缓存）', en: 'The cache evicts the oldest entries first.', zhEx: '缓存优先淘汰最旧的条目。', tags: ['code'] },
      { w: 'serialize', ipa: '/ˈsɪriəlaɪz/', pos: 'v.', zh: '序列化', en: 'Serialize the config before the write.', zhEx: '写入前先序列化配置。', tags: ['code'] },
      { w: 'digest', ipa: '/ˈdaɪdʒest/', pos: 'n.', zh: '摘要、文摘', en: 'The release digest lists every change.', zhEx: '发布摘要列出了所有变更。', tags: ['work'] },
      { w: 'sanity check', ipa: '', pos: 'n.', zh: '合理性检查', en: 'Do a sanity check before the full run.', zhEx: '全量跑之前先做个合理性检查。', tags: ['work', 'code'] },
      { w: 'deep dive', ipa: '', pos: 'n.', zh: '深入研究', en: "Let's do a deep dive into the failure logs.", zhEx: '我们对失败日志做个深入分析。', tags: ['work', 'phrase'] },
      { w: 'under the hood', ipa: '', pos: 'phr.', zh: '在底层、表象之下', en: 'Under the hood, the harness replays the log.', zhEx: '底层上，harness 是重放日志实现的。', tags: ['phrase', 'code'] },
      { w: 'quick win', ipa: '', pos: 'n.', zh: '速赢、轻松的收益', en: 'Renaming it is a quick win.', zhEx: '重命名是个速赢的改进。', tags: ['work'] },
      { w: 'pain point', ipa: '', pos: 'n.', zh: '痛点', en: 'Slow reviews are the team\'s main pain point.', zhEx: '评审慢是团队的主要痛点。', tags: ['work'] },
      { w: 'silver bullet', ipa: '', pos: 'n.', zh: '银弹、万能解法', en: 'There is no silver bullet for legacy code.', zhEx: '遗留代码没有银弹。', tags: ['phrase'] },
      { w: 'no-brainer', ipa: '/ˌnoʊˈbreɪnər/', pos: 'n.', zh: '不假思索的选择', en: 'Automating it is a no-brainer.', zhEx: '把它自动化是显而易见的选择。', tags: ['phrase'] },
      { w: 'as well as', ipa: '', pos: 'phr.', zh: '以及、和…一样', en: 'It reads events as well as projections.', zhEx: '它既读事件也读投影。', tags: ['phrase'] },
      { w: 'in terms of', ipa: '', pos: 'phr.', zh: '就…而言', en: 'In terms of latency, batching wins.', zhEx: '就延迟而言，批处理更优。', tags: ['phrase'] },
      { w: 'keep track of', ipa: '', pos: 'phr.', zh: '跟踪、掌握', en: 'Keep track of every flaky test.', zhEx: '把每个不稳定的测试记下来。', tags: ['phrase'] },
      { w: 'run into', ipa: '', pos: 'phr.', zh: '遇到（问题）', en: 'We ran into a permission error.', zhEx: '我们遇到了一个权限错误。', tags: ['phrase'] },
      { w: 'figure out', ipa: '', pos: 'phr.', zh: '弄清楚、想明白', en: 'Figure out why the retry loop spins.', zhEx: '搞清楚重试循环为什么空转。', tags: ['phrase'] },
      { w: 'end up', ipa: '', pos: 'phr.', zh: '最终落到、结果变成', en: 'You end up rewriting the parser.', zhEx: '最后你把解析器重写了。', tags: ['phrase'] },
      { w: 'come up with', ipa: '', pos: 'phr.', zh: '想出、提出', en: 'Come up with two fallback plans.', zhEx: '想出两个备选方案。', tags: ['phrase'] },
      { w: 'point out', ipa: '', pos: 'phr.', zh: '指出', en: 'The review pointed out a stale check.', zhEx: '评审指出了一个过期检查。', tags: ['phrase'] },
      { w: 'deal with', ipa: '', pos: 'phr.', zh: '处理、应付', en: 'Deal with the warnings first.', zhEx: '先处理那些警告。', tags: ['phrase'] },
      { w: 'at first glance', ipa: '', pos: 'phr.', zh: '乍一看', en: 'At first glance the diff looks huge.', zhEx: '乍一看 diff 很大。', tags: ['phrase'] },
      { w: 'by and large', ipa: '', pos: 'phr.', zh: '总体上', en: 'By and large, the migration went smoothly.', zhEx: '总体上迁移还算顺利。', tags: ['phrase'] },
      { w: 'on second thought', ipa: '', pos: 'phr.', zh: '转念一想', en: 'On second thought, cache the parsed tree.', zhEx: '转念一想，还是缓存解析树吧。', tags: ['phrase'] },
      { w: 'the other way around', ipa: '', pos: 'phr.', zh: '反过来', en: 'The state owns the DOM, not the other way around.', zhEx: '是状态拥有 DOM，不是反过来。', tags: ['phrase'] },
      { w: 'to be fair', ipa: '', pos: 'phr.', zh: '平心而论', en: 'To be fair, the old design scaled well.', zhEx: '平心而论，旧设计扩展性不错。', tags: ['phrase'] },
      { w: 'long story short', ipa: '', pos: 'phr.', zh: '长话短说', en: 'Long story short, we shipped on Friday.', zhEx: '长话短说，我们周五发布了。', tags: ['phrase'] },
      { w: 'a couple of', ipa: '', pos: 'phr.', zh: '两三个、几个', en: 'A couple of tests still fail.', zhEx: '还有两三个测试没过。', tags: ['phrase'] },
      { w: 'sort of', ipa: '', pos: 'phr.', zh: '有几分、算是', en: 'It is sort of a mini state machine.', zhEx: '它算是个小型状态机。', tags: ['phrase'] },
      { w: 'schedule', ipa: '/ˈskedʒuːl/', pos: 'n./v.', zh: '日程；安排', en: 'The reminder is scheduled for nine.', zhEx: '提醒安排在九点。', tags: ['work'] },
      { w: 'recurring', ipa: '/rɪˈkɜːrɪŋ/', pos: 'adj.', zh: '周期性的', en: 'Make the report a recurring task.', zhEx: '把报告设成周期任务。', tags: ['work'] },
      { w: 'backlog', ipa: '/ˈbæklɔːɡ/', pos: 'n.', zh: '待办积压', en: 'The backlog finally hit zero.', zhEx: '待办积压终于清零了。', tags: ['work'] },
      { w: 'estimate', ipa: '/ˈestɪmeɪt/', pos: 'v./n.', zh: '估算', en: 'Estimate the migration in days, not hours.', zhEx: '用天而不是小时来估迁移工作量。', tags: ['work'] },
      { w: 'overdue', ipa: '/ˌoʊvərˈduː/', pos: 'adj.', zh: '逾期、拖了很久的', en: 'The doc update is long overdue.', zhEx: '文档更新拖得太久了。', tags: ['work'] },
      { w: 'checklist', ipa: '/ˈtʃeklɪst/', pos: 'n.', zh: '清单', en: 'Run through the release checklist.', zhEx: '过一遍发布清单。', tags: ['work'] },
      { w: 'consistency', ipa: '/kənˈsɪstənsi/', pos: 'n.', zh: '一致性', en: 'Consistency beats cleverness in naming.', zhEx: '命名上一致性胜过小巧思。', tags: ['work', 'design'] },
      { w: 'readable', ipa: '/ˈriːdəbl/', pos: 'adj.', zh: '可读的、易读的', en: 'Prefer readable code over dense tricks.', zhEx: '宁可代码易读，也别堆技巧。', tags: ['code'] },
      { w: 'concise', ipa: '/kənˈsaɪs/', pos: 'adj.', zh: '简洁的', en: 'Keep the summary concise.', zhEx: '摘要保持简洁。', tags: ['work'] },
      { w: 'explicit', ipa: '/ɪkˈsplɪsɪt/', pos: 'adj.', zh: '明确的、显式的', en: 'Make the fallback explicit in the config.', zhEx: '在配置里把回退写明确。', tags: ['code'] },
      { w: 'verbose', ipa: '/vɜːrˈboʊs/', pos: 'adj.', zh: '冗长的', en: 'Verbose logs help here, oddly enough.', zhEx: '说来奇怪，冗长的日志在这儿帮了大忙。', tags: ['code'] },
      { w: 'reproduce', ipa: '/ˌriːprəˈduːs/', pos: 'v.', zh: '复现', en: 'I cannot reproduce it on Windows.', zhEx: '在 Windows 上我复现不了。', tags: ['code'] },
      { w: 'isolate', ipa: '/ˈaɪsəleɪt/', pos: 'v.', zh: '隔离', en: 'Isolate the failing case in a test.', zhEx: '把失败用例隔离到一个测试里。', tags: ['code'] },
      { w: 'deceptive', ipa: '/dɪˈseptɪv/', pos: 'adj.', zh: '有迷惑性的', en: 'The simple API is deceptive; it hides retries.', zhEx: '这个简单 API 有迷惑性，它藏着重试。', tags: ['work'] },
      { w: 'intuitive', ipa: '/ɪnˈtuːɪtɪv/', pos: 'adj.', zh: '直觉的、好懂的', en: 'The shortcut should feel intuitive.', zhEx: '快捷键应当符合直觉。', tags: ['design', 'frontend'] },
      { w: 'polish', ipa: '/ˈpɑːlɪʃ/', pos: 'v./n.', zh: '打磨', en: 'One more day to polish the details.', zhEx: '再用一天打磨细节。', tags: ['design', 'work'] },
      { w: 'subtle', ipa: '/ˈsʌtl/', pos: 'adj.', zh: '细微的、不易察觉的', en: 'A subtle glow marks the focused pane.', zhEx: '细微的微光标记聚焦的面板。', tags: ['design'] },
      { w: 'muted', ipa: '/ˈmjuːtɪd/', pos: 'adj.', zh: '柔和的、低饱和的', en: 'Use a muted compass for the empty state.', zhEx: '空状态用一个柔和的罗盘。', tags: ['design'] },
      { w: 'redundant', ipa: '/rɪˈdʌndənt/', pos: 'adj.', zh: '多余的、冗余的', en: 'The second guard is redundant.', zhEx: '第二个守卫是多余的。', tags: ['code'] },
    ];

    const wordByWord = {};
    for (const entry of WORDS) wordByWord[entry.w] = entry;

    // --------------------------------------------------------- topics
    const TOPIC_RULES = [
      {
        id: 'code',
        chip: '#code',
        brief: 'This conversation is about code and engineering — building, debugging, and shipping software.',
        keys: ['代码', '重构', 'bug', '接口', '后端', '服务端', '数据库', 'sql', 'api', '脚本', '编译', '打包', '部署', 'deploy', 'compile', 'backend', 'server', '报错', '错误', '异常', '日志', 'log', '缓存', 'cache', '测试', 'test', '工具', 'tool', '依赖', '性能', 'memory', '进程', '脚本'],
      },
      {
        id: 'frontend',
        chip: '#frontend',
        brief: 'This conversation touches on frontend work — components, styling, and user interfaces.',
        keys: ['前端', '页面', '样式', 'css', 'vue', 'react', '组件', 'ui', '布局', '渲染', '动画', '按钮', 'tailwind', 'html', '浏览器', '交互', '暗色', '主题切换'],
      },
      {
        id: 'git',
        chip: '#git',
        brief: 'This conversation involves version control — commits, branches, merges, and history.',
        keys: ['git', '提交', 'commit', '分支', 'branch', '合并', 'merge', '仓库', 'repo', 'rebase', '推送', 'push', '回滚', 'revert', '版本控制', 'tag'],
      },
      {
        id: 'ai',
        chip: '#ai',
        brief: 'This conversation is about AI and agent tooling — prompts, models, plugins, and agent behaviour.',
        keys: ['模型', 'ai', 'prompt', '提示词', 'token', '推理', 'agent', '智能', 'llm', '训练', '插件', 'plugin', 'harness', 'dsh', '会话', 'session', '知识库', '向量', '翻译'],
      },
      {
        id: 'design',
        chip: '#design',
        brief: 'This conversation has a design angle — visual style, colour, and layout.',
        keys: ['设计', '风格', '配色', '图标', '视觉', 'design', 'style', 'theme', 'icon', '插画', '动效', '品牌'],
      },
      {
        id: 'work',
        chip: '#planning',
        brief: 'This conversation is about planning and day-to-day work — tasks, schedules, and follow-ups.',
        keys: ['任务', '计划', '日程', 'schedule', '待办', 'todo', '会议', '安排', 'deadline', '项目', '需求', '文档', '报告', '总结', '提醒', '清单', 'review', '评审'],
      },
    ];
    const GENERAL_BRIEF = 'This session is still unfolding — a good moment to absorb general-purpose words and phrases.';

    // ------------------------------------------------------- dictionary
    const zh = {
      'dock.brand': '英语角',
      'dock.running': '回复生成中，正好记一个词',
      'dock.next': '换一个',
      'dock.known': '认识了',
      'dock.fav': '收进生词本',
      'dock.favOn': '已在生词本',
      'dock.hide': '收起英语角',
      'dock.show': '展开英语角',
      'dock.openBrief': '在右侧栏查看主题英文简报',
      'tab.title': '英语角',
      'tab.briefHeading': '主题简报',
      'tab.wordsHeading': '主题词汇',
      'tab.viewWords': '主题词汇',
      'tab.viewBook': '生词本',
      'tab.knownCount': '已认识',
      'book.empty': '生词本是空的——点任意词卡上的 ☆，就能把生词收进来，随时来这里复习。',
      'tab.blank': '这个会话还没有形成主题，先聊几句；下面先给一组通用词。',
      'tab.running': '正在生成回复',
      'tab.more': '换一批',
      'tab.briefNote': '以下词条按当前主题匹配。',
      'card.known': '认识',
      'card.fav': '生词本',
      'card.favOn': '已在生词本',
      'card.knownOn': '已认识',
      'card.forget': '忘了',
      'card.unfav': '移出生词本',
      'guide.title': '英语角',
      'guide.desc': '等待时刷单词短语，看当前主题的英文简报',
    };
    const en = {
      'dock.brand': 'English Lounge',
      'dock.running': 'Response generating — pick up a word',
      'dock.next': 'Next',
      'dock.known': 'Got it',
      'dock.fav': 'Save to word book',
      'dock.favOn': 'In word book',
      'dock.hide': 'Hide English Lounge',
      'dock.show': 'Show English Lounge',
      'dock.openBrief': 'Open the topic brief in the right sidebar',
      'tab.title': 'English Lounge',
      'tab.briefHeading': 'Topic brief',
      'tab.wordsHeading': 'Topic vocabulary',
      'tab.viewWords': 'Topic words',
      'tab.viewBook': 'Word book',
      'tab.knownCount': 'Known',
      'book.empty': 'Your word book is empty. Tap ☆ on any card to keep a word here for later.',
      'tab.blank': 'This session has no topic yet. Chat a little; meanwhile here are some general words.',
      'tab.running': 'Generating response',
      'tab.more': 'Shuffle',
      'tab.briefNote': 'The vocabulary below is matched to this topic.',
      'card.known': 'Got it',
      'card.fav': 'Word book',
      'card.favOn': 'In book',
      'card.knownOn': 'Known',
      'card.forget': 'Forgot',
      'card.unfav': 'Remove',
      'guide.title': 'English Lounge',
      'guide.desc': 'Flashcards while you wait, plus an English topic brief',
    };
    const DICTS = { zh, en };

    // --------------------------------------------------- local ui store
    const STORE_KEY = 'dsh.english-lounge.v1';
    const listeners = new Set();
    let storeState = loadState();

    function loadState() {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw !== null) {
          const v = JSON.parse(raw);
          return {
            known: v && typeof v.known === 'object' && v.known !== null ? v.known : {},
            fav: v && typeof v.fav === 'object' && v.fav !== null ? v.fav : {},
            collapsed: !!(v && v.collapsed),
          };
        }
      } catch (error) { /* storage unavailable; start fresh */ }
      return { known: {}, fav: {}, collapsed: false };
    }
    function persistState() {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(storeState)); } catch (error) { /* ignore */ }
    }
    const store = {
      getSnapshot: () => storeState,
      subscribe(listener) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    };
    function setStore(patch) {
      const next = { ...storeState, ...patch };
      if (next === storeState) return;
      storeState = next;
      persistState();
      for (const listener of listeners) listener();
    }
    function markKnown(word) { setStore({ known: { ...storeState.known, [word]: true } }); }
    function unmarkKnown(word) {
      const known = { ...storeState.known };
      delete known[word];
      setStore({ known });
    }
    function toggleFav(word) {
      const fav = { ...storeState.fav };
      if (fav[word]) delete fav[word]; else fav[word] = true;
      setStore({ fav });
    }
    function setCollapsed(value) { setStore({ collapsed: value }); }

    // ------------------------------------------------------- helpers
    const MISSING_SOURCE = { getSnapshot: () => undefined, subscribe: () => () => {} };

    function hash(str) {
      let value = 2166136261;
      for (let i = 0; i < str.length; i++) {
        value ^= str.charCodeAt(i);
        value = Math.imul(value, 16777619);
      }
      return value >>> 0;
    }
    function mulberry32(seed) {
      let a = seed;
      return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    function shuffle(array, rng) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const tmp = array[i]; array[i] = array[j]; array[j] = tmp;
      }
      return array;
    }

    function detectTopics(title) {
      if (typeof title !== 'string' || title === '') return [];
      const lower = title.toLowerCase();
      const hits = [];
      for (const rule of TOPIC_RULES) {
        if (rule.keys.some((key) => lower.includes(key.toLowerCase()))) hits.push(rule);
      }
      return hits;
    }

    function topicPool(topics) {
      const wanted = new Set();
      for (const topic of topics) wanted.add(topic.id);
      return WORDS.filter((entry) => entry.tags.some((tag) => wanted.has(tag)));
    }

    function pickTopicWords(title, offset) {
      const topics = detectTopics(title);
      let pool = topicPool(topics);
      if (pool.length < 8) {
        const general = WORDS.filter((entry) => entry.tags.includes('work') || entry.tags.includes('phrase'));
        for (const entry of general) {
          if (pool.length >= 12) break;
          if (!pool.includes(entry)) pool.push(entry);
        }
      }
      const rng = mulberry32(hash(String(title || '') + '|' + String(offset)));
      return shuffle(pool.slice(), rng).slice(0, Math.min(10, pool.length));
    }

    function sessionStateSource(ctx, sessionId) {
      const session = ctx.sessions && typeof ctx.sessions.binding === 'function'
        ? ctx.sessions.binding(sessionId)?.session
        : undefined;
      if (session && typeof session.getSnapshot === 'function' && typeof session.subscribe === 'function') {
        return { getSnapshot: () => session.getSnapshot(), subscribe: (listener) => session.subscribe(listener) };
      }
      return MISSING_SOURCE;
    }
    function catalogSource(ctx) {
      const list = ctx.sessions && ctx.sessions.list;
      if (list && typeof list.getSnapshot === 'function' && typeof list.subscribe === 'function') {
        return { getSnapshot: () => list.getSnapshot(), subscribe: (listener) => list.subscribe(listener) };
      }
      return MISSING_SOURCE;
    }

    // ---------------------------------------------------------- styles
    // Theme-token styling only; literal colors appear solely in the brand glyph artwork.
    const CSS = [
      '.elz-root { font-size: 13px; }',
      '.elz-dock { box-sizing: border-box; width: calc(100% - var(--dsh-composer-side-clearance) * 2 - var(--dsh-composer-dock-inset) * 4); margin: 0 auto; }',
      '.elz-bar { display: flex; align-items: center; gap: 10px; box-sizing: border-box; padding: 8px 12px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-md); background: var(--dsw-alias-bg-layer-1); }',
      '.elz-chipbar { display: flex; align-items: center; gap: 8px; box-sizing: border-box; padding: 4px 10px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; background: var(--dsw-alias-bg-layer-1); width: max-content; }',
      '.elz-word { color: var(--dsw-alias-label-primary); font-weight: 600; font-size: 14px; white-space: nowrap; }',
      '.elz-ipa { color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; }',
      '.elz-pos { color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; }',
      '.elz-zh { color: var(--dsw-alias-label-secondary); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }',
      '.elz-ex { flex: 1; min-width: 0; color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
      '.elz-running { display: inline-flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-tertiary); font-size: 11px; white-space: nowrap; }',
      '.elz-dot { width: 6px; height: 6px; border-radius: 999px; background: #2f6f4f; animation: elz-pulse 1.6s ease-in-out infinite; }',
      '@keyframes elz-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }',
      '.elz-btn { flex: none; font: inherit; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-secondary); background: transparent; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 1px 10px; cursor: pointer; }',
      '.elz-btn:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
      '.elz-btn-on { color: #b98a1c; border-color: var(--dsw-alias-border-l3); }',
      'body[data-ds-dark-theme] .elz-btn-on { color: #e3b74a; }',
      '.elz-btn-ghost { border-color: transparent; }',
      '.elz-page { box-sizing: border-box; height: 100%; overflow-y: auto; padding: 4px 16px 28px; display: flex; flex-direction: column; gap: 18px; }',
      '.elz-h { color: var(--dsw-alias-label-tertiary); font-size: 12px; font-weight: 600; }',
      '.elz-topic { display: flex; flex-direction: column; gap: 8px; }',
      '.elz-topic-title { color: var(--dsw-alias-label-primary); font-size: 15px; font-weight: 600; line-height: 1.45; overflow-wrap: anywhere; }',
      '.elz-brief { color: var(--dsw-alias-label-secondary); font-size: 13px; line-height: 1.65; }',
      '.elz-note { color: var(--dsw-alias-label-tertiary); font-size: 12px; }',
      '.elz-chips { display: flex; flex-wrap: wrap; gap: 6px; }',
      '.elz-chip { font-size: 11px; line-height: 18px; color: var(--dsw-alias-label-secondary); border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 0 8px; }',
      '.elz-cards { display: flex; flex-direction: column; gap: 8px; }',
      '.elz-card { display: flex; flex-direction: column; gap: 4px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-md); background: var(--dsw-alias-bg-layer-1); padding: 10px 12px; }',
      '.elz-card-top { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }',
      '.elz-card-zh { color: var(--dsw-alias-label-primary-dimmed, var(--dsw-alias-label-secondary)); font-size: 13px; }',
      '.elz-card-ex { color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 1.55; overflow-wrap: anywhere; }',
      '.elz-card-actions { display: flex; gap: 6px; margin-top: 2px; }',
      '.elz-empty { color: var(--dsw-alias-label-tertiary); font-size: 12px; }',
      '.elz-head-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }',
      '.elz-title-chip { display: inline-flex; align-items: center; gap: 6px; }',
      '.elz-seg { display: flex; gap: 4px; padding: 3px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; background: var(--dsw-alias-bg-layer-1); width: max-content; }',
      '.elz-seg-btn { font: inherit; font-size: 12px; line-height: 20px; color: var(--dsw-alias-label-secondary); background: transparent; border: none; border-radius: 999px; padding: 1px 12px; cursor: pointer; }',
      '.elz-seg-btn:hover { color: var(--dsw-alias-label-primary); }',
      '.elz-seg-on { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); font-weight: 600; }',
      '.elz-card-known { opacity: 0.55; }',
      '.elz-known-badge { font-size: 11px; line-height: 18px; color: var(--dsw-alias-label-tertiary); border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 999px; padding: 0 8px; margin-left: auto; white-space: nowrap; }',
      '.elz-count { color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; }',
    ].join('\n');

    function Styles() { return h('style', null, CSS); }

    // --------------------------------------------------------- glyphs
    function BrandGlyph({ size = 16, className }) {
      return h('svg', {
        width: size, height: size, viewBox: '0 0 64 64', 'aria-hidden': true, className,
        style: { flex: 'none', display: 'inline-flex' },
      },
        h('rect', { x: 4, y: 4, width: 56, height: 56, rx: 14, fill: '#2f6f4f' }),
        h('path', {
          d: 'M32 22c-4.4-3.4-9.8-4.2-14-3.4v21.2c4.2-.8 9.6 0 14 3.4 4.4-3.4 9.8-4.2 14-3.4V18.6c-4.2-.8-9.6 0-14 3.4Z',
          fill: 'none', stroke: '#f4f1e8', 'stroke-width': 3, 'stroke-linejoin': 'round',
        }),
        h('path', { d: 'M32 22v21', stroke: '#f4f1e8', 'stroke-width': 3, 'stroke-linecap': 'round' }),
        h('path', { d: 'M32 13.5l1.9 3.6 3.6 1.9-3.6 1.9-1.9 3.6-1.9-3.6-3.6-1.9 3.6-1.9 1.9-3.6Z', fill: '#f2c94c' }),
      );
    }

    // ------------------------------------------------- shared card body
    function WordLine({ entry }) {
      return h('span', { className: 'elz-card-top' },
        h('span', { className: 'elz-word' }, entry.w),
        entry.ipa ? h('span', { className: 'elz-ipa' }, entry.ipa) : null,
        h('span', { className: 'elz-pos' }, entry.pos),
      );
    }
    function FavButton({ entry, favOn, t, iconOnly }) {
      const hint = favOn ? t('dock.favOn') : t('dock.fav');
      const label = iconOnly ? (favOn ? '★' : '☆') : (favOn ? '★ ' + t('card.favOn') : '☆ ' + t('card.fav'));
      return h('button', {
        type: 'button',
        className: iconOnly ? ('elz-btn' + (favOn ? ' elz-btn-on' : '')) : ('elz-btn elz-btn-ghost' + (favOn ? ' elz-btn-on' : '')),
        onClick: () => { toggleFav(entry.w); },
        'aria-pressed': favOn ? 'true' : 'false',
        'aria-label': hint + ' · ' + entry.w,
        title: hint,
      }, label);
    }

    // ----------------------------------------------------- dock strip
    function LoungeDock({ useSessionState, openBrief, t }) {
      const s = React.useSyncExternalStore(store.subscribe, store.getSnapshot);
      const snap = typeof useSessionState === 'function' ? useSessionState((value) => value) : undefined;
      const running = !!(snap && snap.running);
      const [cursor, setCursor] = React.useState(() => Math.floor(Math.random() * WORDS.length));
      const [paused, setPaused] = React.useState(false);

      const entry = WORDS[cursor] || WORDS[0];
      const favOn = !!(s.fav && s.fav[entry.w]);

      const advance = React.useCallback(() => {
        setCursor((current) => {
          for (let step = 1; step <= WORDS.length; step++) {
            const i = (current + step) % WORDS.length;
            const known = store.getSnapshot().known;
            if (!known[WORDS[i].w]) return i;
          }
          return (current + 1) % WORDS.length;
        });
      }, []);

      React.useEffect(() => {
        if (s.collapsed || paused) return undefined;
        const id = setInterval(advance, running ? 9000 : 22000);
        return () => { clearInterval(id); };
      }, [s.collapsed, paused, running, advance]);

      if (s.collapsed) {
        return h('div', { className: 'elz-root elz-dock' }, h(Styles),
          h('div', { className: 'elz-chipbar' },
            h(BrandGlyph, { size: 14 }),
            h('span', { className: 'elz-zh' }, t('dock.brand')),
            h('button', {
              type: 'button', className: 'elz-btn elz-btn-ghost',
              onClick: () => { setCollapsed(false); }, title: t('dock.show'), 'aria-label': t('dock.show'),
            }, '＋'),
          ));
      }

      return h('div', { className: 'elz-root elz-dock' }, h(Styles),
        h('div', {
          className: 'elz-bar',
          onMouseEnter: () => { setPaused(true); },
          onMouseLeave: () => { setPaused(false); },
        },
          h(BrandGlyph, { size: 18 }),
          h(WordLine, { entry }),
          h('span', { className: 'elz-zh' }, entry.zh),
          h('span', { className: 'elz-ex', title: entry.en + (entry.zhEx ? '\n' + entry.zhEx : '') }, entry.en),
          running ? h('span', { className: 'elz-running' }, h('span', { className: 'elz-dot' }), t('dock.running')) : null,
          h('span', { style: { display: 'flex', gap: 6, flex: 'none', alignItems: 'center' } },
            h('button', { type: 'button', className: 'elz-btn', onClick: advance }, t('dock.next')),
            h('button', {
              type: 'button', className: 'elz-btn', onClick: () => { markKnown(entry.w); advance(); }, title: t('dock.known'),
            }, '✓'),
            h(FavButton, { entry, favOn, t, iconOnly: true }),
            typeof openBrief === 'function' ? h('button', {
              type: 'button', className: 'elz-btn', onClick: openBrief, title: t('dock.openBrief'), 'aria-label': t('dock.openBrief'),
            }, '»') : null,
            h('button', {
              type: 'button', className: 'elz-btn elz-btn-ghost', onClick: () => { setCollapsed(true); },
              title: t('dock.hide'), 'aria-label': t('dock.hide'),
            }, '—'),
          ),
        ));
    }

    // -------------------------------------------------- sidebar tab body
    function BriefTab({ sessionId, useCatalog, useSessionState, t }) {
      const s = React.useSyncExternalStore(store.subscribe, store.getSnapshot);
      const catalog = typeof useCatalog === 'function' ? useCatalog((value) => value) : undefined;
      const snap = typeof useSessionState === 'function' ? useSessionState((value) => value) : undefined;
      const running = !!(snap && snap.running);
      const [offset, setOffset] = React.useState(0);
      const [view, setView] = React.useState('words');

      const row = catalog && catalog.byId ? catalog.byId[sessionId] : undefined;
      const title = (row && (row.title || row.displayTitle)) || '';
      const topics = React.useMemo(() => detectTopics(title), [title]);
      const briefLines = topics.length > 0 ? topics.map((topic) => topic.brief) : [GENERAL_BRIEF];

      const words = React.useMemo(() => pickTopicWords(title, offset), [title, offset]);
      const favWords = React.useMemo(
        () => Object.keys(s.fav || {}).map((w) => wordByWord[w]).filter(Boolean),
        [s.fav],
      );

      return h('div', { className: 'elz-root elz-page' }, h(Styles),
        // --- topic brief
        h('section', { className: 'elz-topic' },
          h('div', { className: 'elz-head-row' },
            h('span', { className: 'elz-h' }, t('tab.briefHeading')),
            running ? h('span', { className: 'elz-running' }, h('span', { className: 'elz-dot' }), t('tab.running')) : null,
          ),
          title === ''
            ? h('p', { className: 'elz-note' }, t('tab.blank'))
            : h('p', { className: 'elz-topic-title' }, title),
          h('p', { className: 'elz-brief' }, briefLines.join(' ')),
          topics.length > 0 ? h('div', { className: 'elz-chips' },
            topics.map((topic) => h('span', { className: 'elz-chip', key: topic.id }, topic.chip))) : null,
        ),
        // --- view switch: topic words / word book
        h('div', { className: 'elz-seg', role: 'tablist' },
          h('button', {
            type: 'button', 'aria-selected': view === 'words' ? 'true' : 'false',
            className: 'elz-seg-btn' + (view === 'words' ? ' elz-seg-on' : ''),
            onClick: () => { setView('words'); },
          }, t('tab.viewWords')),
          h('button', {
            type: 'button', 'aria-selected': view === 'book' ? 'true' : 'false',
            className: 'elz-seg-btn' + (view === 'book' ? ' elz-seg-on' : ''),
            onClick: () => { setView('book'); },
          }, t('tab.viewBook') + ' (' + favWords.length + ')'),
        ),
        view === 'book' ?
        // --- word book (saved words)
        h('section', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
          favWords.length === 0
            ? h('p', { className: 'elz-empty' }, t('book.empty'))
            : h('div', { className: 'elz-cards' }, favWords.map((entry) => {
              const isKnown = !!(s.known && s.known[entry.w]);
              return h('div', { className: 'elz-card' + (isKnown ? ' elz-card-known' : ''), key: entry.w },
                h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                  h(WordLine, { entry }),
                  isKnown ? h('span', { className: 'elz-known-badge' }, '✓ ' + t('card.knownOn')) : null,
                ),
                h('span', { className: 'elz-card-zh' }, entry.zh),
                h('span', { className: 'elz-card-ex' }, entry.en + (entry.zhEx ? '　' + entry.zhEx : '')),
                h('div', { className: 'elz-card-actions' },
                  isKnown ? h('button', {
                    type: 'button', className: 'elz-btn',
                    onClick: () => { unmarkKnown(entry.w); }, title: t('card.forget'), 'aria-label': t('card.forget') + ' · ' + entry.w,
                  }, '↩ ' + t('card.forget')) : h('button', {
                    type: 'button', className: 'elz-btn',
                    onClick: () => { markKnown(entry.w); }, title: t('card.known'), 'aria-label': t('card.known') + ' · ' + entry.w,
                  }, '✓ ' + t('card.known')),
                  h('button', {
                    type: 'button', className: 'elz-btn',
                    onClick: () => { toggleFav(entry.w); }, title: t('card.unfav'), 'aria-label': t('card.unfav') + ' · ' + entry.w,
                  }, '✕ ' + t('card.unfav')),
                ),
              );
            })),
        )
        :
        // --- topic words, with visible known state
        h('section', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
          h('div', { className: 'elz-head-row' },
            h('span', { className: 'elz-h' }, t('tab.wordsHeading')),
            h('span', { style: { display: 'flex', gap: 6, alignItems: 'center' } },
              h('span', { className: 'elz-count' },
                t('tab.knownCount') + ' ' + words.filter((entry) => s.known && s.known[entry.w]).length + '/' + words.length),
              h('button', { type: 'button', className: 'elz-btn', onClick: () => { setOffset((o) => o + 1); } }, t('tab.more')),
            ),
          ),
          h('p', { className: 'elz-note' }, t('tab.briefNote')),
          h('div', { className: 'elz-cards' }, words.map((entry) => {
            const isKnown = !!(s.known && s.known[entry.w]);
            return h('div', { className: 'elz-card' + (isKnown ? ' elz-card-known' : ''), key: entry.w },
              h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                h(WordLine, { entry }),
                isKnown ? h('span', { className: 'elz-known-badge' }, '✓ ' + t('card.knownOn')) : null,
              ),
              h('span', { className: 'elz-card-zh' }, entry.zh),
              h('span', { className: 'elz-card-ex' }, entry.en + (entry.zhEx ? '　' + entry.zhEx : '')),
              h('div', { className: 'elz-card-actions' },
                isKnown ? h('button', {
                  type: 'button', className: 'elz-btn',
                  onClick: () => { unmarkKnown(entry.w); }, title: t('card.forget'), 'aria-label': t('card.forget') + ' · ' + entry.w,
                }, '↩ ' + t('card.forget')) : h('button', {
                  type: 'button', className: 'elz-btn',
                  onClick: () => { markKnown(entry.w); }, title: t('card.known'), 'aria-label': t('card.known') + ' · ' + entry.w,
                }, '✓ ' + t('card.known')),
                h(FavButton, { entry, favOn: !!(s.fav && s.fav[entry.w]), t }),
              ),
            );
          })),
        ),
      );
    }

    // -------------------------------------------------- sidebar tab chip
    function BriefTitle({ useTabInfo, t }) {
      let label = t('tab.title');
      if (typeof useTabInfo === 'function') {
        try {
          const info = useTabInfo();
          if (info && info.tab && info.tab.title) label = info.tab.title;
        } catch (error) { /* tab not committed yet; keep the localized title */ }
      }
      return h('span', { className: 'elz-title-chip' }, h(BrandGlyph, { size: 13 }), label);
    }

    // -------------------------------------------------------- injection
    function dockInject(ctx, sessionId) {
      return {
        hooks: { sessionState: sessionStateSource(ctx, sessionId) },
        openBrief: () => {
          try {
            if (ctx.sidebarRight && typeof ctx.sidebarRight.openTab === 'function') {
              ctx.sidebarRight.openTab(TAB_KIND);
            }
          } catch (error) {
            console.warn('[english-lounge] openTab failed:', error);
          }
        },
      };
    }
    function briefInject(ctx, sessionId) {
      return {
        sessionId,
        hooks: {
          sessionState: sessionStateSource(ctx, sessionId),
          catalog: catalogSource(ctx),
        },
      };
    }

    // ------------------------------------------------------------ apply
    const inject = ['slots', 'sessions', 'locale', 'sidebarRightTabs', 'sidebarRight'];

    function apply(ctx) {
      const t = ctx.locale.bind(NS);
      ctx.effect(() => ctx.locale.register(NS, DICTS), 'english-lounge: dictionaries');
      ctx.effect(() => {
        const disposeType = ctx.sidebarRightTabs.register({
          id: TAB_ID,
          kind: TAB_KIND,
          priority: 'extension',
          keepMounted: true,
          title: () => t('tab.title'),
          guide: [{
            id: 'brief',
            order: 60,
            title: () => t('guide.title'),
            description: () => t('guide.desc'),
            icon: BrandGlyph,
          }],
        });
        const disposeBody = ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
          name: 'sidebar.right.pane.tab',
          key: TAB_ID,
          locale: NS,
          inject: (sessionId) => briefInject(ctx, sessionId),
        }, BriefTab));
        const disposeTitle = ctx.slots.inject('sidebar.right.pane.tab.title', () => ctx.slots.register({
          name: 'sidebar.right.pane.tab.title',
          key: TAB_ID,
          locale: NS,
        }, BriefTitle));
        const disposeDock = ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock',
          id: 'english-lounge-dock',
          order: 40,
          locale: NS,
          inject: (sessionId) => dockInject(ctx, sessionId),
        }, LoungeDock));
        return () => {
          disposeDock();
          disposeTitle();
          disposeBody();
          disposeType();
        };
      }, 'english-lounge: seats');
    }

    return { inject, apply };
  },
});
