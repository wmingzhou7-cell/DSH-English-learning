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
      { w: 'walk me through', ipa: '', pos: 'phr.', zh: '逐步讲解、带我过一遍', en: 'Could you walk me through the user story for this feature?', zhEx: '能带我过一下这个功能的用户故事吗？', tags: ['work'] },
      { w: 'just to clarify', ipa: '', pos: 'phr.', zh: '澄清一下（礼貌引导确认理解）', en: 'Just to clarify, are we saying that the API will be versioned?', zhEx: '澄清一下，我们是说这个 API 要做版本化吗？', tags: ['work'] },
      { w: 'elaborate on', ipa: '', pos: 'phr.', zh: '详细阐述', en: 'Could you elaborate on that point during the review?', zhEx: '评审时能详细说说那一点吗？', tags: ['work'] },
      { w: 'acceptance criteria', ipa: '', pos: 'phr.', zh: '验收标准', en: 'What are the acceptance criteria for this story?', zhEx: '这个用户故事的验收标准是什么？', tags: ['work', 'legal'] },
      { w: 'rephrase', ipa: '/riːˈfreɪz/', pos: 'v.', zh: '换种说法、复述', en: 'Let me rephrase that to make sure I understood correctly.', zhEx: '我换种说法复述一下，确保理解正确。', tags: ['work'] },
      { w: 'nice to have', ipa: '', pos: 'phr.', zh: '有了更好（非必需）', en: 'Is this a hard requirement, or is it nice to have?', zhEx: '这是硬性要求，还是有了更好？', tags: ['work'] },
      { w: 'from a technical standpoint', ipa: '', pos: 'phr.', zh: '从技术角度看', en: 'From a technical standpoint, this looks feasible.', zhEx: '从技术角度看，这是可行的。', tags: ['code'] },
      { w: 'rough estimate', ipa: '', pos: 'phr.', zh: '粗略估算', en: 'My rough estimate would be around 3 to 5 story points.', zhEx: '我粗略估算大概是 3 到 5 个故事点。', tags: ['work'] },
      { w: 'story point', ipa: '', pos: 'phr.', zh: '故事点（敏捷工作量单位）', en: 'This task is worth 5 story points.', zhEx: '这个任务值 5 个故事点。', tags: ['work'] },
      { w: 'performance impact', ipa: '', pos: 'phr.', zh: '性能影响', en: 'A potential risk here is the performance impact on the database.', zhEx: '这里的潜在风险是可能影响数据库性能。', tags: ['code'] },
      { w: 'alternative approach', ipa: '', pos: 'phr.', zh: '替代方案', en: 'Have we considered an alternative approach, for example a queue?', zhEx: '我们考虑过替代方案吗，比如用队列？', tags: ['work'] },
      { w: 'ballpark estimate', ipa: '', pos: 'phr.', zh: '大致估算、约数', en: 'Could you provide a ballpark estimate?', zhEx: '能给个大概估算吗？', tags: ['work'] },
      { w: 'on the same page', ipa: '', pos: 'phr.', zh: '达成共识、认知一致', en: 'Let\'s get on the same page before we start coding.', zhEx: '开始写代码前我们先对齐认知。', tags: ['work'] },
      { w: 'low-hanging fruit', ipa: '', pos: 'phr.', zh: '容易摘的成果、顺手就能完成的事', en: 'This task is low-hanging fruit; we can finish it quickly.', zhEx: '这个任务很容易完成，可以快速搞定。', tags: ['work'] },
      { w: 'boil the ocean', ipa: '', pos: 'phr.', zh: '贪多求全（想一次做完所有事）', en: 'Let\'s not boil the ocean; start with a smaller scope.', zhEx: '别贪多，先从小范围做起。', tags: ['work'] },
      { w: 'get a handle on', ipa: '', pos: 'phr.', zh: '把握住、理清', en: 'I\'m trying to get a better handle on the requirements.', zhEx: '我正试着更好地把握需求。', tags: ['work'] },
      { w: 'unpack', ipa: '/ʌnˈpæk/', pos: 'v.', zh: '拆解、深入分析（文件或问题）', en: 'There\'s a lot to unpack here; let\'s break it down.', zhEx: '这里信息量很大，我们分解一下。', tags: ['code'] },
      { w: 'break it down', ipa: '', pos: 'phr.', zh: '拆解成小块', en: 'The requirement is complex; let\'s break it down.', zhEx: '需求很复杂，我们拆开来看。', tags: ['work'] },
      { w: 'level of effort', ipa: '', pos: 'phr.', zh: '工作量级（LOE）', en: 'What\'s the level of effort for this task?', zhEx: '这个任务的工作量级是多少？', tags: ['work'] },
      { w: 'happy path', ipa: '', pos: 'phr.', zh: '理想路径（一切正常的流程）', en: 'What\'s the happy path for this user journey?', zhEx: '这个用户流程的理想路径是怎样的？', tags: ['code'] },
      { w: 'unhappy path', ipa: '', pos: 'phr.', zh: '异常路径（出错时的流程）', en: 'We should also consider unhappy paths, like network errors.', zhEx: '我们也该考虑异常路径，比如网络错误。', tags: ['code'] },
      { w: 'moving parts', ipa: '', pos: 'phr.', zh: '牵涉的变动环节', en: 'This task has a lot of moving parts.', zhEx: '这个任务牵涉很多变动的环节。', tags: ['work'] },
      { w: 'sprint', ipa: '/sprɪnt/', pos: 'n.', zh: '冲刺（敏捷开发迭代周期）', en: 'The scope of this story seems too large for one sprint.', zhEx: '这个故事的范围对一个冲刺来说太大了。', tags: ['core'] },
      { w: 'definition of done', ipa: '', pos: 'phr.', zh: '完成的定义（DoD 验收口径）', en: 'The definition of done for this task is unclear.', zhEx: '这个任务“完成”的定义不清晰。', tags: ['work'] },
      { w: 'set expectations', ipa: '', pos: 'phr.', zh: '设定预期', en: 'Just to set expectations, this might take a few days.', zhEx: '先说明预期：这可能需要几天。', tags: ['work'] },
      { w: 'get ahead of ourselves', ipa: '', pos: 'phr.', zh: '操之过急、想太远', en: 'Let\'s not get ahead of ourselves; focus on the MVP first.', zhEx: '别急着往前冲，先专注 MVP。', tags: ['work'] },
      { w: 'MVP', ipa: '', pos: 'phr.', zh: '最小可行产品', en: 'Let\'s focus on the MVP first and add features later.', zhEx: '先专注最小可行产品，功能以后再加。', tags: ['code'] },
      { w: 'gut check', ipa: '', pos: 'phr.', zh: '凭直觉的快速判断', en: 'Can we get a gut check on the complexity of this?', zhEx: '能凭直觉快速评估下复杂度吗？', tags: ['work'] },
      { w: 'tight deadline', ipa: '', pos: 'phr.', zh: '紧迫的截止日期', en: 'We have a tight deadline for this project.', zhEx: '这个项目截止日期很紧。', tags: ['work'] },
      { w: 'KPI', ipa: '', pos: 'phr.', zh: '关键绩效指标', en: 'What are the key performance indicators for this project?', zhEx: '这个项目的关键绩效指标是什么？', tags: ['work'] },
      { w: 'end game', ipa: '', pos: 'phr.', zh: '最终目标', en: 'What\'s the end game for this feature?', zhEx: '这个功能的最终目标是什么？', tags: ['work'] },
      { w: 'coordinated effort', ipa: '', pos: 'phr.', zh: '协同配合', en: 'This will require a coordinated effort across multiple teams.', zhEx: '这需要多个团队协同配合。', tags: ['work'] },
      { w: 'high-level architecture', ipa: '', pos: 'phr.', zh: '高阶架构（顶层设计）', en: 'Here\'s my proposal for the high-level architecture.', zhEx: '这是我关于高阶架构的方案。', tags: ['code', 'design'] },
      { w: 'microservices', ipa: '/ˈmaɪkroʊsɜːrvɪsɪz/', pos: 'n.', zh: '微服务（架构风格）', en: 'I\'m thinking of using a microservices architecture for this.', zhEx: '我在考虑用微服务架构做这个。', tags: ['code', 'design'] },
      { w: 'data flow', ipa: '', pos: 'phr.', zh: '数据流', en: 'The data flow goes from the service to the queue, then to the worker.', zhEx: '数据流从服务到队列，再到工作进程。', tags: ['code'] },
      { w: 'API contract', ipa: '', pos: 'phr.', zh: 'API 契约（接口约定）', en: 'We can define the API contract before implementation.', zhEx: '实现前先把 API 契约定下来。', tags: ['code'] },
      { w: 'scalability', ipa: '/ˌskeɪləˈbɪləti/', pos: 'n.', zh: '可扩展性', en: 'The main advantage of this design is its scalability.', zhEx: '这个设计的主要优点是可扩展性。', tags: ['code'] },
      { w: 'downside', ipa: '/ˈdaʊnsaɪd/', pos: 'n.', zh: '缺点、不利面', en: 'A potential downside is the increased complexity.', zhEx: '潜在缺点是复杂度增加。', tags: ['work'] },
      { w: 'pros and cons', ipa: '', pos: 'phr.', zh: '优缺点', en: 'What are the pros and cons of this approach?', zhEx: '这个方案的优缺点是什么？', tags: ['work'] },
      { w: 'use case', ipa: '', pos: 'phr.', zh: '使用场景、用例', en: 'This library seems like a good fit for our use case.', zhEx: '这个库很适合我们的使用场景。', tags: ['work'] },
      { w: 'spike', ipa: '/spaɪk/', pos: 'n.', zh: '激增；技术预研任务', en: 'How would this design handle a sudden spike in traffic?', zhEx: '这个设计怎么应对流量的突然激增？', tags: ['work'] },
      { w: 'backup and recovery', ipa: '', pos: 'phr.', zh: '备份与恢复', en: 'What\'s our strategy for data backup and recovery?', zhEx: '我们的数据备份与恢复策略是什么？', tags: ['code'] },
      { w: 'security implications', ipa: '', pos: 'phr.', zh: '安全影响', en: 'Have we thought about the security implications of this change?', zhEx: '考虑过这个改动的安全影响吗？', tags: ['code'] },
      { w: 'single point of failure', ipa: '', pos: 'phr.', zh: '单点故障', en: 'I\'m concerned about the potential single point of failure here.', zhEx: '我担心这里可能有单点故障。', tags: ['code'] },
      { w: 'pipeline', ipa: '/ˈpaɪplaɪn/', pos: 'n.', zh: '流水线（如 CI/CD）', en: 'Does this require any changes to our CI/CD pipeline?', zhEx: '这需要改 CI/CD 流水线吗？', tags: ['code'] },
      { w: 'aligned', ipa: '/əˈlaɪnd/', pos: 'adj.', zh: '对齐的、意见一致的', en: 'Are we all aligned on this approach?', zhEx: '大家对方案都达成一致了吗？', tags: ['work'] },
      { w: 'move forward with', ipa: '', pos: 'phr.', zh: '按……推进', en: 'Let\'s move forward with this plan.', zhEx: '我们就按这个计划推进。', tags: ['work'] },
      { w: 'design doc', ipa: '', pos: 'phr.', zh: '设计文档', en: 'I will create a design doc to capture the details.', zhEx: '我会建个设计文档记录细节。', tags: ['design', 'work'] },
      { w: 'overly complicated', ipa: '', pos: 'phr.', zh: '过于复杂', en: 'This seems overly complicated; is there a simpler way?', zhEx: '这好像过于复杂了，有更简单的方法吗？', tags: ['work'] },
      { w: 'reinvent the wheel', ipa: '', pos: 'phr.', zh: '重复造轮子', en: 'Let\'s not reinvent the wheel; there might be an existing library.', zhEx: '别重复造轮子，可能有现成的库。', tags: ['work'] },
      { w: 'blast radius', ipa: '', pos: 'phr.', zh: '影响范围（爆炸半径）', en: 'What is the blast radius of this change?', zhEx: '这个改动的影响范围有多大？', tags: ['code'] },
      { w: 'backward compatibility', ipa: '', pos: 'phr.', zh: '向后兼容性', en: 'We need to ensure backward compatibility for old clients.', zhEx: '要确保老客户端的向后兼容。', tags: ['code'] },
      { w: 'play devil\'s advocate', ipa: '', pos: 'phr.', zh: '唱反调（故意提对立观点）', en: 'Just to play devil\'s advocate for a moment, what if the queue is down?', zhEx: '我唱个反调：万一队列挂了呢？', tags: ['work'] },
      { w: 'technical debt', ipa: '', pos: 'phr.', zh: '技术债', en: 'This will introduce some technical debt; let\'s document it.', zhEx: '这会引入技术债，我们记录下来。', tags: ['code'] },
      { w: 'due diligence', ipa: '', pos: 'phr.', zh: '尽职调查、审慎评估', en: 'We need to do some due diligence before adopting this framework.', zhEx: '采用这个框架前要做些审慎评估。', tags: ['work'] },
      { w: 'lean towards', ipa: '', pos: 'phr.', zh: '倾向于', en: 'I\'m leaning towards the first option.', zhEx: '我比较倾向第一个选项。', tags: ['work'] },
      { w: 'proof of concept', ipa: '', pos: 'phr.', zh: '概念验证（POC）', en: 'This is a good candidate for a proof of concept.', zhEx: '这个很适合做概念验证。', tags: ['code'] },
      { w: 'buy-in', ipa: '/ˈbaɪɪn/', pos: 'n.', zh: '认可、支持（买账）', en: 'I\'d like to get your buy-in on this proposal.', zhEx: '希望这个方案能得到你的认可。', tags: ['work'] },
      { w: 'resilient', ipa: '/rɪˈzɪliənt/', pos: 'adj.', zh: '有弹性的、能快速恢复的', en: 'The system should be resilient to network failures.', zhEx: '系统应该能承受网络故障并恢复。', tags: ['code'] },
      { w: 'schema migration', ipa: '', pos: 'phr.', zh: '表结构变更（数据库迁移）', en: 'This will require a database schema migration.', zhEx: '这需要一次数据库表结构变更。', tags: ['code'] },
      { w: 'API versioning', ipa: '', pos: 'phr.', zh: 'API 版本化', en: 'We need to version our API to support old clients.', zhEx: '要做 API 版本化来支持老客户端。', tags: ['code'] },
      { w: 'downstream', ipa: '/ˈdaʊnstriːm/', pos: 'adj.', zh: '下游的', en: 'What are the downstream impacts of this change?', zhEx: '这个改动对下游有什么影响？', tags: ['code'] },
      { w: 'eventually consistent', ipa: '', pos: 'phr.', zh: '最终一致（分布式一致性模型）', en: 'The system is designed to be eventually consistent.', zhEx: '系统被设计为最终一致的。', tags: ['ai'] },
      { w: 'over-engineer', ipa: '', pos: 'phr.', zh: '过度设计', en: 'Let\'s not over-engineer this solution.', zhEx: '这个方案别过度设计。', tags: ['design'] },
      { w: 'single source of truth', ipa: '', pos: 'phr.', zh: '唯一可信数据源', en: 'What is the single source of truth for this data?', zhEx: '这个数据的唯一可信来源是什么？', tags: ['code'] },
      { w: 'fail fast', ipa: '', pos: 'phr.', zh: '快速失败（尽早暴露错误）', en: 'We need to fail fast if the upstream service is unavailable.', zhEx: '上游服务不可用时要快速失败。', tags: ['code'] },
      { w: 'one-off', ipa: '/ˈwʌnɒf/', pos: 'adj.', zh: '一次性的', en: 'This is a one-off script, so keep it simple.', zhEx: '这是一次性脚本，保持简单。', tags: ['work'] },
      { w: 'on the fence', ipa: '', pos: 'phr.', zh: '犹豫未决、拿不定主意', en: 'I\'m on the fence about this decision.', zhEx: '这个决定我还在犹豫。', tags: ['work'] },
      { w: 'scale', ipa: '/skeɪl/', pos: 'v.', zh: '扩展、伸缩', en: 'This approach doesn\'t scale well.', zhEx: '这个方案不太好扩展。', tags: ['code'] },
      { w: 'fault-tolerant', ipa: '', pos: 'phr.', zh: '容错的', en: 'The system needs to be fault-tolerant.', zhEx: '系统需要具备容错能力。', tags: ['code'] },
      { w: 'early draft', ipa: '', pos: 'phr.', zh: '初稿', en: 'I\'m looking for feedback on this early draft.', zhEx: '我想就初稿征求反馈。', tags: ['work'] },
      { w: 'be all for', ipa: '', pos: 'phr.', zh: '完全赞成', en: 'I\'m all for simplifying the architecture.', zhEx: '我完全赞成简化架构。', tags: ['work'] },
      { w: 'brainstorm', ipa: '/ˈbreɪnstɔːrm/', pos: 'v.', zh: '头脑风暴', en: 'Let\'s brainstorm some ideas on the whiteboard.', zhEx: '我们在白板上头脑风暴下想法。', tags: ['work'] },
      { w: 'circuit breaker', ipa: '', pos: 'phr.', zh: '断路器（防止级联故障）', en: 'The system uses a circuit breaker to prevent cascading failures.', zhEx: '系统用断路器防止雪崩式故障。', tags: ['code'] },
      { w: 'degrade gracefully', ipa: '', pos: 'phr.', zh: '优雅降级', en: 'The system should degrade gracefully under heavy load.', zhEx: '高负载下系统应能优雅降级。', tags: ['code'] },
      { w: 'self-healing', ipa: '', pos: 'phr.', zh: '自愈的（自动恢复）', en: 'The system is self-healing.', zhEx: '系统是自我修复的。', tags: ['code'] },
      { w: 'take the first stab at', ipa: '', pos: 'phr.', zh: '先试水、做第一次尝试', en: 'I\'ll take the first stab at writing the design doc.', zhEx: '我先来试试写设计文档初稿。', tags: ['work'] },
      { w: 'message queue', ipa: '', pos: 'phr.', zh: '消息队列', en: 'The system uses a message queue for asynchronous processing.', zhEx: '系统用消息队列做异步处理。', tags: ['code'] },
      { w: 'asynchronous', ipa: '/eɪˈsɪŋkrənəs/', pos: 'adj.', zh: '异步的', en: 'The task runs asynchronous processing in the background.', zhEx: '任务在后台做异步处理。', tags: ['code'] },
      { w: 'middle ground', ipa: '', pos: 'phr.', zh: '折中方案', en: 'Let\'s try to find a middle ground.', zhEx: '试着找个折中办法。', tags: ['work'] },
      { w: 'stateful', ipa: '/ˈsteɪtfəl/', pos: 'adj.', zh: '有状态的', en: 'This component is stateful, which makes it harder to test.', zhEx: '这个组件是有状态的，所以更难测试。', tags: ['code'] },
      { w: 'learning curve', ipa: '', pos: 'phr.', zh: '学习曲线', en: 'I\'m concerned about the learning curve of this new technology.', zhEx: '我担心这项新技术的学习曲线。', tags: ['education'] },
      { w: 'non-trivial', ipa: '', pos: 'phr.', zh: '不小的、非平凡的', en: 'This is a non-trivial change; we need a careful review.', zhEx: '这不是个小改动，需要仔细评审。', tags: ['code'] },
      { w: 'consensus', ipa: '/kənˈsensəs/', pos: 'n.', zh: '共识', en: 'Let\'s try to achieve consensus on this.', zhEx: '试着就此达成共识。', tags: ['work'] },
      { w: 'blocked', ipa: '/blɒkt/', pos: 'adj.', zh: '被阻塞的、卡住的', en: 'I\'m currently blocked by the slow response from the staging environment.', zhEx: '我目前被卡住了，因为测试环境响应很慢。', tags: ['work'] },
      { w: 'tricky', ipa: '/ˈtrɪki/', pos: 'adj.', zh: '棘手的、难搞的', en: 'I need some help with a tricky bug.', zhEx: '我遇到一个棘手的 bug 需要帮忙。', tags: ['work'] },
      { w: 'be stuck on', ipa: '', pos: 'phr.', zh: '被……卡住', en: 'I\'m stuck on this database query.', zhEx: '我被这个数据库查询卡住了。', tags: ['work'] },
      { w: 'drive', ipa: '/draɪv/', pos: 'v.', zh: '（结对编程中）主导编码', en: 'Let me drive for a bit; I have an idea.', zhEx: '让我来写一会儿，我有个想法。', tags: ['code'] },
      { w: 'take over', ipa: '', pos: 'phr.', zh: '接手', en: 'Okay, you can take over now.', zhEx: '好了，现在你来接手。', tags: ['work'] },
      { w: 'make sense', ipa: '', pos: 'phr.', zh: '有道理、说得通', en: 'That makes sense; let\'s try it.', zhEx: '有道理，试试看。', tags: ['work'] },
      { w: 'FYI', ipa: '', pos: 'phr.', zh: '供你参考（顺带告知）', en: 'FYI, I\'ve pushed the latest changes to the dev branch.', zhEx: '顺带说下，最新改动已推到 dev 分支。', tags: ['work'] },
      { w: 'OOO', ipa: '', pos: 'phr.', zh: '不在办公室（外出/休假）', en: 'I\'m OOO this afternoon.', zhEx: '我今天下午不在办公室。', tags: ['work'] },
      { w: 'PR', ipa: '', pos: 'phr.', zh: '合并请求（Pull Request）', en: 'I\'ve created a PR for this feature; could you take a look?', zhEx: '我为这个功能建了个 PR，能帮我看下吗？', tags: ['code', 'git'] },
      { w: 'address the feedback', ipa: '', pos: 'phr.', zh: '处理反馈意见', en: 'In this PR, I\'ve addressed the feedback from the design review.', zhEx: '这个 PR 里处理了设计评审的反馈。', tags: ['work'] },
      { w: 'accordingly', ipa: '/əˈkɔːrdɪŋli/', pos: 'adv.', zh: '相应地', en: 'Thanks for the feedback! I\'ve updated the code accordingly.', zhEx: '谢谢反馈，我已相应更新了代码。', tags: ['work'] },
      { w: 'valid concern', ipa: '', pos: 'phr.', zh: '合理的顾虑', en: 'That\'s a valid concern; however, the current implementation is acceptable for now.', zhEx: '顾虑合理，不过目前的实现暂时可以接受。', tags: ['work'] },
      { w: 'LGTM', ipa: '', pos: 'phr.', zh: '我看没问题（Looks good to me）', en: 'LGTM, merging it now.', zhEx: '我看没问题，现在合并。', tags: ['work'] },
      { w: 'clean', ipa: '/kliːn/', pos: 'adj.', zh: '整洁的（代码）', en: 'This refactoring makes the code much cleaner.', zhEx: '这次重构让代码清晰多了。', tags: ['code'] },
      { w: 'extract into', ipa: '', pos: 'phr.', zh: '抽取成（独立单元）', en: 'Let\'s extract this logic into a separate helper method.', zhEx: '把这块逻辑抽成独立的辅助方法。', tags: ['code'] },
      { w: 'magic number', ipa: '', pos: 'phr.', zh: '魔法数字（硬编码的神秘数值）', en: 'Use a constant here instead of a magic number.', zhEx: '这里用常量代替魔法数字更好。', tags: ['code'] },
      { w: 'descriptive', ipa: '/dɪˈskrɪptɪv/', pos: 'adj.', zh: '描述性的、表意的', en: 'Renaming this variable to be more descriptive would help.', zhEx: '把这个变量改得更表意一些会有帮助。', tags: ['code'] },
      { w: 'nit', ipa: '/nɪt/', pos: 'n.', zh: '小瑕疵（可改可不改的细节）', en: 'Nit: there\'s a small typo here.', zhEx: '小细节：这里有个拼写错误。', tags: ['work'] },
      { w: 'out of the scope of', ipa: '', pos: 'phr.', zh: '超出……的范围', en: 'This change is out of the scope of this PR.', zhEx: '这个改动超出了本次 PR 的范围。', tags: ['work'] },
      { w: 'breaking change', ipa: '', pos: 'phr.', zh: '破坏性变更', en: 'This seems to be a breaking change; have we notified the consumers?', zhEx: '这似乎是个破坏性变更，通知使用方了吗？', tags: ['code'] },
      { w: 'my plate is full', ipa: '', pos: 'phr.', zh: '手头排满了、没空', en: 'My plate is full right now; could someone else pick this up?', zhEx: '我现在手头满了，别人能接吗？', tags: ['work'] },
      { w: 'sync with', ipa: '', pos: 'phr.', zh: '与……同步/对齐', en: 'I will sync with the backend team on this API contract.', zhEx: '我会和后端团队就这个 API 契约同步。', tags: ['work'] },
      { w: 'ambiguous', ipa: '/æmˈbɪɡjuəs/', pos: 'adj.', zh: '模棱两可的', en: 'This variable name is a bit ambiguous.', zhEx: '这个变量名有点模棱两可。', tags: ['code'] },
      { w: 'deduplicate', ipa: '/diːˈduːplɪkeɪt/', pos: 'v.', zh: '去重', en: 'This looks like a copy-paste; can we deduplicate it?', zhEx: '这看起来像复制粘贴的，能去重吗？', tags: ['code'] },
      { w: 'chunk', ipa: '/tʃʌŋk/', pos: 'n.', zh: '块（工作量或数据的一段）', en: 'Could we split it into smaller, more manageable chunks?', zhEx: '能拆成更小、更好管理的块吗？', tags: ['work'] },
      { w: 'codebase', ipa: '/ˈkoʊdbeɪs/', pos: 'n.', zh: '代码库', en: 'I\'m not familiar with this part of the codebase.', zhEx: '我不太熟悉这部分代码库。', tags: ['code'] },
      { w: 'stretched thin', ipa: '', pos: 'phr.', zh: '忙不过来、分身乏术', en: 'I\'m a bit stretched thin this week.', zhEx: '我这周有点忙不过来。', tags: ['work'] },
      { w: 'follow-up ticket', ipa: '', pos: 'phr.', zh: '后续工单', en: 'I\'ll create a follow-up ticket for the refactoring work.', zhEx: '我会为重构工作建个后续工单。', tags: ['work'] },
      { w: 'ping', ipa: '/pɪŋ/', pos: 'v.', zh: '（线上）呼一下、通知', en: 'I\'ll ping you on Slack once it\'s ready.', zhEx: '准备好了我在 Slack 上叫你。', tags: ['work'] },
      { w: 'convoluted', ipa: '/ˈkɒnvəluːtɪd/', pos: 'adj.', zh: '绕的、复杂难懂的', en: 'This logic is a bit convoluted; could you simplify it?', zhEx: '这块逻辑有点绕，能简化一下吗？', tags: ['code'] },
      { w: 'play catch-up', ipa: '', pos: 'phr.', zh: '补进度、追赶', en: 'I\'m playing catch-up after my vacation.', zhEx: '休完假回来正在补进度。', tags: ['work'] },
      { w: 'decouple', ipa: '/diːˈkʌpl/', pos: 'v.', zh: '解耦', en: 'This code is tightly coupled with the UI; we should decouple it.', zhEx: '这段代码和 UI 紧耦合，应该解耦。', tags: ['code'] },
      { w: 'take the lead on', ipa: '', pos: 'phr.', zh: '牵头、主导', en: 'I\'ll take the lead on this task.', zhEx: '这个任务由我牵头。', tags: ['work'] },
      { w: 'single responsibility principle', ipa: '', pos: 'phr.', zh: '单一职责原则（SRP）', en: 'We should follow the single responsibility principle here.', zhEx: '这里应遵循单一职责原则。', tags: ['work'] },
      { w: 'dev environment', ipa: '', pos: 'phr.', zh: '开发环境', en: 'I\'m having trouble getting the dev environment set up.', zhEx: '我配开发环境时遇到麻烦。', tags: ['code'] },
      { w: 'out of date', ipa: '', pos: 'phr.', zh: '过时的', en: 'The documentation for this service is out of date.', zhEx: '这个服务的文档过时了。', tags: ['code'] },
      { w: 'memory leak', ipa: '', pos: 'phr.', zh: '内存泄漏', en: 'The current implementation has a memory leak.', zhEx: '目前的实现有内存泄漏。', tags: ['code'] },
      { w: 'reusable', ipa: '/riˈjuːzəbl/', pos: 'adj.', zh: '可复用的', en: 'We need to make this component more reusable.', zhEx: '要让这个组件更可复用。', tags: ['code'] },
      { w: 'introduce a dependency', ipa: '', pos: 'phr.', zh: '引入依赖', en: 'This change introduces a dependency on the auth service.', zhEx: '这个改动引入了对认证服务的依赖。', tags: ['code'] },
      { w: 'PTO', ipa: '', pos: 'phr.', zh: '带薪休假', en: 'I\'ll be on PTO next week.', zhEx: '我下周休带薪假。', tags: ['core'] },
      { w: 'user-friendly', ipa: '', pos: 'phr.', zh: '对用户友好的', en: 'The error message is not very user-friendly.', zhEx: '这个错误信息对用户不友好。', tags: ['frontend'] },
      { w: 'wrap my head around', ipa: '', pos: 'phr.', zh: '（努力）搞明白、想通', en: 'I\'m having a hard time wrapping my head around this logic.', zhEx: '我很难理解这块逻辑。', tags: ['work'] },
      { w: 'security vulnerability', ipa: '', pos: 'phr.', zh: '安全漏洞', en: 'We need to update the dependencies to patch the security vulnerabilities.', zhEx: '要更新依赖来修安全漏洞。', tags: ['code'] },
      { w: 'non-blocking', ipa: '', pos: 'phr.', zh: '非阻塞的（不拦合并的）', en: 'This is a non-blocking comment; you can merge it.', zhEx: '这是非阻塞意见，可以直接合并。', tags: ['git'] },
      { w: 'hit a wall', ipa: '', pos: 'phr.', zh: '撞墙、卡死', en: 'I\'m hitting a wall with this problem.', zhEx: '这个问题把我卡死了。', tags: ['work'] },
      { w: 'flag', ipa: '/flæɡ/', pos: 'v.', zh: '标记、指出（问题）', en: 'Thanks for flagging this; I wasn\'t aware of it.', zhEx: '谢谢你指出这个，我之前没意识到。', tags: ['code'] },
      { w: 'read-only access', ipa: '', pos: 'phr.', zh: '只读权限', en: 'Could you provide read-only access to the database?', zhEx: '能提供数据库只读权限吗？', tags: ['code'] },
      { w: 'good first issue', ipa: '', pos: 'phr.', zh: '入门级任务（适合新人）', en: 'This is a good first issue for a newcomer.', zhEx: '这适合新人上手。', tags: ['work'] },
      { w: 'thread-safe', ipa: '', pos: 'phr.', zh: '线程安全的', en: 'This code is not thread-safe.', zhEx: '这段代码不是线程安全的。', tags: ['code'] },
      { w: 'feature flag', ipa: '', pos: 'phr.', zh: '功能开关（灰度控制）', en: 'The feature is behind a feature flag, so it\'s safe to merge.', zhEx: '这个功能在功能开关后面，合并是安全的。', tags: ['code'] },
      { w: 'premature optimization', ipa: '', pos: 'phr.', zh: '过早优化', en: 'This seems like a premature optimization.', zhEx: '这像是过早优化。', tags: ['code'] },
      { w: 'ramp up on', ipa: '', pos: 'phr.', zh: '（对新领域）上手、爬坡', en: 'I\'m still ramping up on this project.', zhEx: '我还在熟悉这个项目。', tags: ['work'] },
      { w: 'mockup', ipa: '/ˈmɒkʌp/', pos: 'n.', zh: '设计稿、原型图', en: 'We\'re blocked on the design team to provide the final mockups.', zhEx: '我们被卡住，等设计团队的最终设计稿。', tags: ['design'] },
      { w: 'defer to', ipa: '', pos: 'phr.', zh: '听从、尊重（他人意见）', en: 'I will defer to your expertise on this.', zhEx: '这个问题我听你的专业意见。', tags: ['work'] },
      { w: 'on-call', ipa: '', pos: 'phr.', zh: '值班（线上告警响应）', en: 'I need to hand over my on-call duty to you.', zhEx: '我要把值班职责交接给你。', tags: ['code'] },
      { w: 'keep me in the loop', ipa: '', pos: 'phr.', zh: '随时让我知情', en: 'Please keep me in the loop on this issue.', zhEx: '这个问题请随时同步我。', tags: ['work'] },
      { w: 'code path', ipa: '', pos: 'phr.', zh: '代码路径（执行分支）', en: 'This code path is not covered by any tests.', zhEx: '这个代码路径没有被测试覆盖。', tags: ['code', 'git'] },
      { w: 'test coverage', ipa: '', pos: 'phr.', zh: '测试覆盖率', en: 'Improve the test coverage for the payment module.', zhEx: '提升支付模块的测试覆盖率。', tags: ['code'] },
      { w: 'work in progress', ipa: '', pos: 'phr.', zh: '进行中（WIP，尚未完成）', en: 'This PR is still a work in progress.', zhEx: '这个 PR 还在进行中。', tags: ['work'] },
      { w: 'swamped', ipa: '/swɒmpt/', pos: 'adj.', zh: '忙得不可开交的', en: 'I\'m swamped with work right now.', zhEx: '我现在忙得不可开交。', tags: ['work'] },
      { w: 'EOD', ipa: '', pos: 'phr.', zh: '今天下班前（End of Day）', en: 'I\'m trying to wrap up this task by EOD.', zhEx: '争取今天下班前搞定这个任务。', tags: ['work'] },
      { w: 'prerequisite', ipa: '/priːˈrekwəzɪt/', pos: 'n.', zh: '前置条件', en: 'This PR is a prerequisite for another task.', zhEx: '这个 PR 是另一个任务的前置。', tags: ['work'] },
      { w: 'do a quick pass', ipa: '', pos: 'phr.', zh: '快速过一遍', en: 'I\'ll do a quick pass on the code.', zhEx: '我快速过一遍代码。', tags: ['work'] },
      { w: 'reason about', ipa: '', pos: 'phr.', zh: '推理、理清（代码行为）', en: 'This code is hard to reason about.', zhEx: '这段代码很难理清。', tags: ['code', 'ai'] },
      { w: 'put our heads together', ipa: '', pos: 'phr.', zh: '集思广益、一起想办法', en: 'Let\'s put our heads together and solve this.', zhEx: '我们集思广益解决这个问题。', tags: ['work'] },
      { w: 'trivial', ipa: '/ˈtrɪviəl/', pos: 'adj.', zh: '琐碎的、不重要的', en: 'The change is trivial, so I\'ll merge it directly.', zhEx: '改动很小，我直接合并了。', tags: ['code'] },
      { w: 'housekeeping', ipa: '/ˈhaʊskiːpɪŋ/', pos: 'n.', zh: '整理性工作（清理杂务）', en: 'This is a housekeeping task.', zhEx: '这是个整理性任务。', tags: ['work'] },
      { w: 'developer experience', ipa: '', pos: 'phr.', zh: '开发者体验（DX）', en: 'This will have a positive impact on the developer experience.', zhEx: '这会改善开发者体验。', tags: ['code'] },
      { w: 'discovery work', ipa: '', pos: 'phr.', zh: '探索性工作（前期调研）', en: 'I need to do some discovery work on this topic.', zhEx: '我需要就这个主题做些前期调研。', tags: ['work'] },
      { w: 'self-explanatory', ipa: '/ˌselfɪkˈsplænətɔːri/', pos: 'adj.', zh: '不言自明的', en: 'The code is self-explanatory.', zhEx: '代码本身就说明了一切。', tags: ['core'] },
      { w: 'brute-force', ipa: '', pos: 'phr.', zh: '暴力（穷举式）的', en: 'The current approach is a bit brute-force; can we optimize it?', zhEx: '目前的方法有点暴力，能优化吗？', tags: ['code'] },
      { w: 'wheelhouse', ipa: '/ˈwiːlhaʊs/', pos: 'n.', zh: '专长领域', en: 'This task is a bit out of my wheelhouse.', zhEx: '这个任务有点超出我的专长。', tags: ['work'] },
      { w: 'DRY', ipa: '', pos: 'phr.', zh: '不要重复自己（代码复用原则）', en: 'This code is not DRY; extract the shared logic.', zhEx: '这段代码不符合 DRY 原则，抽一下公共逻辑。', tags: ['code'] },
      { w: 'AFK', ipa: '', pos: 'phr.', zh: '离开键盘（暂时不在）', en: 'I\'m AFK for a few minutes.', zhEx: '我离开几分钟。', tags: ['work'] },
      { w: 'pure function', ipa: '', pos: 'phr.', zh: '纯函数（无副作用、同输入同输出）', en: 'This function is a pure function, which is great.', zhEx: '这个函数是纯函数，很棒。', tags: ['code'] },
      { w: 'memoization', ipa: '/ˌmeməaɪˈzeɪʃn/', pos: 'n.', zh: '记忆化（缓存计算结果）', en: 'This is a good candidate for memoization.', zhEx: '这个很适合用记忆化优化。', tags: ['code', 'education'] },
      { w: 'net positive', ipa: '', pos: 'phr.', zh: '总体为正、利大于弊', en: 'This PR is a net positive, so I\'ll approve it.', zhEx: '这个 PR 总体是好的，我批准。', tags: ['work'] },
      { w: 'at capacity', ipa: '', pos: 'phr.', zh: '工作量饱和', en: 'I\'m at capacity for this sprint.', zhEx: '我这个冲刺的工作量已满。', tags: ['work'] },
      { w: 'cyclomatic complexity', ipa: '', pos: 'phr.', zh: '圈复杂度', en: 'This code has a high cyclomatic complexity.', zhEx: '这段代码圈复杂度很高。', tags: ['code'] },
      { w: 'flaky', ipa: '/ˈfleɪki/', pos: 'adj.', zh: '不稳定的（测试/连接时好时坏）', en: 'This seems to be a flaky connection.', zhEx: '这连接似乎不太稳定。', tags: ['code'] },
      { w: 'peer review', ipa: '', pos: 'phr.', zh: '同事评审', en: 'This change has been peer-reviewed.', zhEx: '这个改动已经过同事评审。', tags: ['work'] },
      { w: 'steps to reproduce', ipa: '', pos: 'phr.', zh: '复现步骤（STR）', en: 'Could you provide the steps to reproduce this bug?', zhEx: '能提供这个 bug 的复现步骤吗？', tags: ['code'] },
      { w: 'ticket', ipa: '/ˈtɪkɪt/', pos: 'n.', zh: '工单', en: 'I\'ve created a ticket with all the details.', zhEx: '我建了个工单，附上了所有细节。', tags: ['work'] },
      { w: 'expected behavior', ipa: '', pos: 'phr.', zh: '预期行为', en: 'This is actually the expected behavior, not a bug.', zhEx: '这其实是预期行为，不是 bug。', tags: ['code'] },
      { w: 'timeout', ipa: '/ˈtaɪmaʊt/', pos: 'n.', zh: '超时', en: 'The deployment failed due to a timeout.', zhEx: '部署因为超时失败了。', tags: ['code'] },
      { w: 'staging environment', ipa: '', pos: 'phr.', zh: '预发布/测试环境', en: 'The fix has been deployed to the staging environment.', zhEx: '修复已经部署到测试环境了。', tags: ['code'] },
      { w: 'intermittent', ipa: '/ˌɪntərˈmɪtnt/', pos: 'adj.', zh: '间歇性的', en: 'The service is experiencing intermittent timeouts.', zhEx: '服务正在出现间歇性超时。', tags: ['code'] },
      { w: 'CI pipeline', ipa: '', pos: 'phr.', zh: 'CI 流水线（持续集成）', en: 'The test is failing in the CI pipeline.', zhEx: '测试在 CI 流水线上失败了。', tags: ['code'] },
      { w: 'smoke test', ipa: '', pos: 'phr.', zh: '冒烟测试（基本功能快速验证）', en: 'Let\'s perform a smoke test after the deployment.', zhEx: '部署后我们做个冒烟测试。', tags: ['code'] },
      { w: 'regression test', ipa: '', pos: 'phr.', zh: '回归测试', en: 'We need a full regression test before the release.', zhEx: '发布前需要做一次完整的回归测试。', tags: ['code'] },
      { w: 'rollback plan', ipa: '', pos: 'phr.', zh: '回滚计划', en: 'Is there a rollback plan in case something goes wrong?', zhEx: '万一出了问题，有回滚计划吗？', tags: ['code', 'git'] },
      { w: 'code freeze', ipa: '', pos: 'phr.', zh: '代码冻结（发布前停止合码）', en: 'We are in a code freeze period for the major release.', zhEx: '大版本发布前我们处于代码冻结期。', tags: ['code'] },
      { w: 'version bump', ipa: '', pos: 'phr.', zh: '版本号提升', en: 'This is a breaking change and requires a major version bump.', zhEx: '这是破坏性变更，需要提升主版本号。', tags: ['code'] },
      { w: 'rollout strategy', ipa: '', pos: 'phr.', zh: '发布/推出策略', en: 'What\'s our rollout strategy for this feature?', zhEx: '这个功能我们的发布策略是什么？', tags: ['code'] },
      { w: 'canary release', ipa: '', pos: 'phr.', zh: '金丝雀发布（小流量先行）', en: 'Let\'s use a canary release to minimize risk.', zhEx: '我们用金丝雀发布来降低风险。', tags: ['code'] },
      { w: 'A/B test', ipa: '', pos: 'phr.', zh: 'A/B 测试（对照实验）', en: 'Is this an A/B test or a canary release?', zhEx: '这是 A/B 测试还是金丝雀发布？', tags: ['code'] },
      { w: 'dry run', ipa: '', pos: 'phr.', zh: '演练、排练（不走真流程）', en: 'Let\'s do a dry run of the deployment plan.', zhEx: '我们对部署计划做一次演练。', tags: ['code'] },
      { w: 'error rate', ipa: '', pos: 'n.', zh: '错误率', en: 'We\'re seeing a high error rate on the payment service.', zhEx: '支付服务的错误率很高。', tags: ['code'] },
      { w: 'incident', ipa: '/ˈɪnsɪdənt/', pos: 'n.', zh: '事故、故障事件', en: 'I\'m declaring a sev-1 incident.', zhEx: '我要宣布一起一级事故。', tags: ['code'] },
      { w: 'war room', ipa: '', pos: 'phr.', zh: '作战室（集中处理重大故障）', en: 'Let\'s open a war room for this incident.', zhEx: '为这次事故我们开个作战室。', tags: ['code'] },
      { w: 'root cause', ipa: '', pos: 'phr.', zh: '根本原因', en: 'No clear root cause yet; I\'m still investigating.', zhEx: '还没有明确的根因，仍在排查。', tags: ['code'] },
      { w: 'misconfiguration', ipa: '/ˌmɪskənˌfɪɡjəˈreɪʃn/', pos: 'n.', zh: '配置错误', en: 'The root cause is a misconfiguration in the new service.', zhEx: '根因是新服务里的一个配置错误。', tags: ['code'] },
      { w: 'workaround', ipa: '/ˈwɜːrkəraʊnd/', pos: 'n.', zh: '临时解决方案、绕过办法', en: 'As a quick workaround, we can restart the service.', zhEx: '快速绕过的办法是重启服务。', tags: ['code'] },
      { w: 'mitigate', ipa: '/ˈmɪtɪɡeɪt/', pos: 'v.', zh: '缓解、减轻（影响）', en: 'Let\'s roll back to mitigate the impact immediately.', zhEx: '我们先回滚以立即缓解影响。', tags: ['code'] },
      { w: 'post-mortem', ipa: '', pos: 'phr.', zh: '复盘、事后分析', en: 'We\'ll conduct a post-mortem to prevent it from happening again.', zhEx: '我们会做次复盘，防止再次发生。', tags: ['work'] },
      { w: 'incident commander', ipa: '', pos: 'phr.', zh: '事故指挥官（统筹响应）', en: 'The incident commander for this issue is Jane.', zhEx: '这次事故的指挥官是 Jane。', tags: ['code'] },
      { w: 'ETA', ipa: '', pos: 'phr.', zh: '预计完成时间', en: 'What\'s the ETA for the fix?', zhEx: '修复的预计完成时间是什么时候？', tags: ['work'] },
      { w: 'take ownership', ipa: '', pos: 'phr.', zh: '担起责任、负责到底', en: 'I\'ll take ownership of this issue.', zhEx: '这个问题我来负责。', tags: ['legal'] },
      { w: 'SLO', ipa: '', pos: 'phr.', zh: '服务水平目标（Service Level Objective）', en: 'The latency is within our SLOs.', zhEx: '延迟在我们 SLO 范围内。', tags: ['work'] },
      { w: 'degraded mode', ipa: '', pos: 'phr.', zh: '降级模式（部分功能可用）', en: 'The system is running in a degraded mode.', zhEx: '系统正运行在降级模式。', tags: ['code'] },
      { w: 'get to the bottom of', ipa: '', pos: 'phr.', zh: '彻底查清楚', en: 'Let\'s try to get to the bottom of this.', zhEx: '我们来把这件事彻底查清楚。', tags: ['work'] },
      { w: 'cascading failure', ipa: '', pos: 'phr.', zh: '级联故障（连锁雪崩）', en: 'We\'re experiencing a cascading failure.', zhEx: '我们正经历一次级联故障。', tags: ['code'] },
      { w: 'observability', ipa: '/əbˌzɜːrvəˈbɪləti/', pos: 'n.', zh: '可观测性（日志/指标/追踪）', en: 'We need better observability into our system.', zhEx: '我们需要对系统有更强的可观测性。', tags: ['code'] },
      { w: 'flapping', ipa: '/ˈflæpɪŋ/', pos: 'n.', zh: '（服务状态）来回抖动', en: 'The service is flapping between healthy and unhealthy states.', zhEx: '服务在健康和不健康状态间来回跳动。', tags: ['code'] },
      { w: 'runbook', ipa: '/ˈrʌnbʊk/', pos: 'n.', zh: '运维手册、操作手册', en: 'Let\'s check the runbook for this procedure.', zhEx: '我们查一下这个操作的运维手册。', tags: ['industry'] },
      { w: 'mission-critical', ipa: '', pos: 'phr.', zh: '任务关键型的（不能挂的）', en: 'This is a mission-critical service.', zhEx: '这是个任务关键型服务。', tags: ['work'] },
      { w: 'five-whys analysis', ipa: '', pos: 'phr.', zh: '五个为什么分析（连问五层找根因）', en: 'What\'s the five-whys analysis for this failure?', zhEx: '这次故障的五个为什么分析是什么？', tags: ['code'] },
      { w: 'escalate', ipa: '/ˈeskəleɪt/', pos: 'v.', zh: '上报、升级处理', en: 'I\'ve escalated the issue to the infrastructure team.', zhEx: '我已把问题上报给基础设施团队。', tags: ['work'] },
      { w: 'jump to conclusions', ipa: '', pos: 'phr.', zh: '过早下结论', en: 'Let\'s not jump to conclusions before we have data.', zhEx: '有数据之前别急着下结论。', tags: ['work'] },
      { w: 'symptom', ipa: '/ˈsɪmptəm/', pos: 'n.', zh: '症状（问题的表象）', en: 'We need to address the root cause, not just the symptoms.', zhEx: '我们要解决根因，而不只是症状。', tags: ['health'] },
      { w: 'alert', ipa: '/əˈlɜːrt/', pos: 'n.', zh: '告警', en: 'The monitoring alerts fired last night.', zhEx: '监控告警昨晚触发了。', tags: ['code'] },
      { w: 'red herring', ipa: '', pos: 'phr.', zh: '误导线索、烟雾弹', en: 'This issue is a red herring; the real problem is elsewhere.', zhEx: '这个问题是烟雾弹，真正的问题在别处。', tags: ['code'] },
      { w: 'human error', ipa: '', pos: 'phr.', zh: '人为失误', en: 'The root cause was human error.', zhEx: '根本原因是人为失误。', tags: ['work'] },
      { w: 'retrospective', ipa: '/ˌretrəˈspektɪv/', pos: 'n.', zh: '复盘会（敏捷 retro）', en: 'Let\'s kick off the retrospective for the last sprint.', zhEx: '我们来给上个迭代开个复盘会吧。', tags: ['work'] },
      { w: 'what went well', ipa: '', pos: 'phr.', zh: '（复盘）哪些做得好', en: 'First, let\'s talk about what went well this sprint.', zhEx: '先聊聊这个冲刺哪些做得好。', tags: ['work'] },
      { w: 'estimation', ipa: '/ˌestɪˈmeɪʃn/', pos: 'n.', zh: '（工作量）估算', en: 'Our estimations were a bit too optimistic.', zhEx: '我们的估算有点过于乐观了。', tags: ['work'] },
      { w: 'rework', ipa: '/ˈriːwɜːrk/', pos: 'n.', zh: '返工', en: 'The unclear requirements caused some rework.', zhEx: '需求不清晰导致了一些返工。', tags: ['work'] },
      { w: 'action item', ipa: '', pos: 'phr.', zh: '行动项（会后要干的事）', en: 'Let\'s create some action items based on our discussion.', zhEx: '我们根据讨论创建一些行动项。', tags: ['work'] },
      { w: 'action plan', ipa: '', pos: 'phr.', zh: '行动计划', en: 'What\'s the action plan to prevent this from happening again?', zhEx: '防止再次发生的行动计划是什么？', tags: ['work'] },
      { w: 'recurring problem', ipa: '', pos: 'phr.', zh: '反复出现的问题', en: 'This is a recurring problem; we need a permanent fix.', zhEx: '这是个反复出现的问题，需要永久修复。', tags: ['work'] },
      { w: 'permanent fix', ipa: '', pos: 'phr.', zh: '永久性修复', en: 'We need a permanent fix, not another workaround.', zhEx: '我们需要永久修复，而不是又一个临时方案。', tags: ['code'] },
      { w: 'lessons learned', ipa: '', pos: 'phr.', zh: '经验教训', en: 'The post-mortem lists the lessons learned.', zhEx: '复盘中列出了经验教训。', tags: ['work'] },
      { w: 'champion', ipa: '/ˈtʃæmpiən/', pos: 'v.', zh: '主导、力推（某事）', en: 'I\'m happy to champion this initiative.', zhEx: '我很乐意主导这项计划。', tags: ['work'] },
      { w: 'kudos', ipa: '/ˈkuːdɑːs/', pos: 'n.', zh: '称赞、点赞', en: 'Kudos to the team for handling it so quickly.', zhEx: '为团队如此快速的处理点赞。', tags: ['work'] },
      { w: 'shout-out', ipa: '', pos: 'phr.', zh: '公开表扬', en: 'Let\'s give a shout-out to Alex for his great work.', zhEx: '公开表扬一下 Alex 的出色工作。', tags: ['work'] },
      { w: 'give credit where credit is due', ipa: '', pos: 'phr.', zh: '该是谁的功劳就归谁', en: 'Let\'s give credit where credit is due.', zhEx: '该是谁的功劳就归谁。', tags: ['work'] },
      { w: 'jump in', ipa: '', pos: 'phr.', zh: '插一句话、加入讨论', en: 'If I could just jump in for a moment...', zhEx: '请允许我插一句……', tags: ['work'] },
      { w: 'perspective', ipa: '/pərˈspektɪv/', pos: 'n.', zh: '视角、看法', en: 'From my perspective, we should prioritize security.', zhEx: '在我看来，我们应该优先考虑安全。', tags: ['work'] },
      { w: 'prioritize', ipa: '/praɪˈɔːrətaɪz/', pos: 'v.', zh: '排优先级、优先处理', en: 'We should prioritize security over features this quarter.', zhEx: '这个季度我们应该优先安全，其次才是功能。', tags: ['work'] },
      { w: 'take this offline', ipa: '', pos: 'phr.', zh: '会后再单独聊', en: 'Let\'s take this offline; it\'s too detailed for now.', zhEx: '这个我们线下再聊，细节太多了。', tags: ['work'] },
      { w: 'agenda', ipa: '/əˈdʒendə/', pos: 'n.', zh: '议程', en: 'Let\'s move on to the next agenda item.', zhEx: '我们进入下一项议程。', tags: ['work'] },
      { w: 'takeaway', ipa: '/ˈteɪkəweɪ/', pos: 'n.', zh: '要点、收获', en: 'The key takeaway is that we ship on Friday.', zhEx: '关键要点是我们周五上线。', tags: ['work'] },
      { w: 'hard stop', ipa: '', pos: 'phr.', zh: '硬性截止（到点必须走）', en: 'Sorry, I have a hard stop at 3 PM.', zhEx: '抱歉，我三点整必须得走。', tags: ['work'] },
      { w: 'park', ipa: '/pɑːrk/', pos: 'v.', zh: '搁置（话题）', en: 'Let\'s park this topic and revisit it later.', zhEx: '这个话题先搁置，稍后再讨论。', tags: ['work'] },
      { w: 'timebox', ipa: '/ˈtaɪmbɑːks/', pos: 'v.', zh: '给讨论限时', en: 'Let\'s timebox this discussion to 10 minutes.', zhEx: '我们把这场讨论限制在十分钟内。', tags: ['work'] },
      { w: 'echo', ipa: '/ˈekoʊ/', pos: 'v.', zh: '附议、附和', en: 'I want to echo what Sarah said.', zhEx: '我附议 Sarah 刚才说的。', tags: ['work'] },
      { w: 'put a pin in', ipa: '', pos: 'phr.', zh: '先记下、暂缓（回头再谈）', en: 'Let\'s put a pin in that and come back later.', zhEx: '这个先记下，回头再谈。', tags: ['work'] },
      { w: 'bogged down', ipa: '', pos: 'phr.', zh: '陷入（细节）难以脱身', en: 'Let\'s not get bogged down in the details right now.', zhEx: '现在先别陷在细节里。', tags: ['work'] },
      { w: 'table', ipa: '/ˈteɪbl/', pos: 'v.', zh: '搁置（提案/讨论，美式）', en: 'Let\'s table this discussion for the next meeting.', zhEx: '这个讨论留到下次会议再谈。', tags: ['work', 'business'] },
      { w: 'drop off', ipa: '', pos: 'phr.', zh: '下线、先走一步', en: 'I need to drop off for another meeting.', zhEx: '我得下线去开另一个会了。', tags: ['work'] },
      { w: 'reschedule', ipa: '/ˌriːˈskedʒuːl/', pos: 'v.', zh: '改期、重新安排', en: 'I have a conflict; can we reschedule?', zhEx: '我时间冲突了，能改期吗？', tags: ['work'] },
      { w: 'mindful of', ipa: '', pos: 'phr.', zh: '注意到、顾及', en: 'I want to be mindful of everyone\'s time.', zhEx: '我想照顾到大家的时间。', tags: ['work'] },
      { w: 'recap', ipa: '/ˈriːkæp/', pos: 'n.', zh: '简要回顾、纪要', en: 'I\'ll send out a meeting recap with the key decisions.', zhEx: '我会发出包含关键决定的会议纪要。', tags: ['work'] },
      { w: 'open to suggestions', ipa: '', pos: 'phr.', zh: '乐于接受建议', en: 'I\'m open to suggestions on the design.', zhEx: '设计方面我乐于接受建议。', tags: ['work'] },
      { w: 'to the point', ipa: '', pos: 'phr.', zh: '切中要点、不绕弯', en: 'Let\'s keep the meeting concise and to the point.', zhEx: '会议尽量简洁、切中要点。', tags: ['work'] },
      { w: 'on the same wavelength', ipa: '', pos: 'phr.', zh: '想到一块儿去了', en: 'I think we\'re on the same wavelength here.', zhEx: '我觉得我们想到一块儿去了。', tags: ['work'] },
      { w: 'not sold on', ipa: '', pos: 'phr.', zh: '还没被说服', en: 'I\'m not sold on this idea yet.', zhEx: '这个想法我还没被说服。', tags: ['work'] },
      { w: 'back burner', ipa: '', pos: 'phr.', zh: '暂缓、先放一放（低优先级）', en: 'Let\'s put this on the back burner for now.', zhEx: '这件事我们先放一放。', tags: ['work'] },
      { w: 'going in circles', ipa: '', pos: 'phr.', zh: '原地打转、没有进展', en: 'This discussion is going in circles; let\'s reset.', zhEx: '讨论在原地打转，我们重新来。', tags: ['work'] },
      { w: 'bikeshed', ipa: '/ˈbaɪkʃed/', pos: 'v./n.', zh: '纠结琐碎细节（自行车棚效应）', en: 'Let\'s not bikeshed on the color of the button.', zhEx: '咱们别为按钮颜色纠结琐碎细节了。', tags: ['work'] },
      { w: 'quorum', ipa: '/ˈkwɔːrəm/', pos: 'n.', zh: '法定人数（到会门槛）', en: 'We\'ve reached a quorum, so we can start.', zhEx: '到会人数够了，可以开始了。', tags: ['work'] },
      { w: 'agree to disagree', ipa: '', pos: 'phr.', zh: '求同存异（各保留意见）', en: 'Let\'s agree to disagree on this and move on.', zhEx: '这点我们求同存异，继续往下。', tags: ['work'] },
      { w: 'rabbit hole', ipa: '', pos: 'phr.', zh: '兔子洞（越钻越深偏离主题）', en: 'I think we\'re going down a rabbit hole here.', zhEx: '我觉得我们在钻牛角尖了。', tags: ['work'] },
      { w: 'bio break', ipa: '', pos: 'phr.', zh: '短暂休息（上厕所）', en: 'Let\'s take a five-minute bio break.', zhEx: '我们休息五分钟。', tags: ['work'] },
      { w: 'on mute', ipa: '', pos: 'phr.', zh: '（麦克风）静音着', en: 'Sorry, I was on mute.', zhEx: '抱歉，我刚才静音了。', tags: ['work'] },
      { w: 'debrief', ipa: '/diːˈbriːf/', pos: 'n./v.', zh: '会后简要总结', en: 'Let\'s do a quick debrief after the meeting.', zhEx: '会后我们做个简要总结。', tags: ['work'] },
      { w: 'follow-up meeting', ipa: '', pos: 'phr.', zh: '后续会议', en: 'Let\'s schedule a follow-up meeting to dive deeper.', zhEx: '我们约个后续会议深入探讨。', tags: ['work'] },
      { w: 'dive deeper', ipa: '', pos: 'phr.', zh: '深入探讨', en: 'Let\'s dive deeper into the technical details.', zhEx: '我们深入聊聊技术细节。', tags: ['work'] },
      { w: 'tech talk', ipa: '', pos: 'phr.', zh: '技术分享会', en: 'The topic of my tech talk today is Kubernetes.', zhEx: '我今天技术分享的主题是 Kubernetes。', tags: ['work'] },
      { w: 'illustrate', ipa: '/ˈɪləstreɪt/', pos: 'v.', zh: '图示说明、举例说明', en: 'This diagram illustrates the overall architecture.', zhEx: '这张图展示了整体架构。', tags: ['core'] },
      { w: 'career goals', ipa: '', pos: 'phr.', zh: '职业目标', en: 'I\'d like to discuss my career goals with you.', zhEx: '我想和你聊聊我的职业目标。', tags: ['work'] },
      { w: 'take on', ipa: '', pos: 'phr.', zh: '承担（职责/任务）', en: 'I\'m interested in taking on more leadership responsibilities.', zhEx: '我有兴趣承担更多领导职责。', tags: ['work'] },
      { w: 'mentor', ipa: '/ˈmentɔːr/', pos: 'v./n.', zh: '指导（新人）；导师', en: 'This is a great chance to mentor junior engineers.', zhEx: '这是带新人的好机会。', tags: ['work'] },
      { w: 'engineering practices', ipa: '', pos: 'phr.', zh: '工程实践', en: 'I\'m passionate about improving our engineering practices.', zhEx: '我热衷于改进我们的工程实践。', tags: ['work'] },
      { w: 'best practices', ipa: '', pos: 'phr.', zh: '最佳实践', en: 'I need some guidance on the best practices for this.', zhEx: '这方面我需要一些最佳实践的指导。', tags: ['work'] },
      { w: 'get your thoughts', ipa: '', pos: 'phr.', zh: '听听你的想法', en: 'I\'d like to get your thoughts on this design.', zhEx: '我想听听你对这个设计的想法。', tags: ['work'] },
      { w: 'grab a coffee', ipa: '', pos: 'phr.', zh: '顺路买杯咖啡（顺便聊）', en: 'I\'m grabbing a coffee; want to join?', zhEx: '我去买杯咖啡，一起吗？', tags: ['work'] },
      { w: 'advice', ipa: '/ədˈvaɪs/', pos: 'n.', zh: '建议', en: 'Let me give you some advice on the API design.', zhEx: '关于 API 设计我给你一些建议。', tags: ['work'] },
      { w: 'break', ipa: '/breɪk/', pos: 'n.', zh: '休息、间歇', en: 'Let\'s take a short break before the next meeting.', zhEx: '下个会前我们稍作休息。', tags: ['work'] },
      { w: 'business', ipa: '/ˈbɪznəs/', pos: 'n.', zh: '业务、生意', en: 'This new feature is good for our business.', zhEx: '这个新功能对我们的业务有好处。', tags: ['core'] },
      { w: 'compare', ipa: '/kəmˈper/', pos: 'v.', zh: '比较', en: 'Let\'s compare the performance of both solutions.', zhEx: '我们比较一下两个方案的性能。', tags: ['core'] },
      { w: 'correct', ipa: '/kəˈrekt/', pos: 'v.', zh: '改正、纠正', en: 'Please correct the typo in the config file.', zhEx: '请改正配置文件里的拼写错误。', tags: ['core'] },
      { w: 'date', ipa: '/deɪt/', pos: 'n.', zh: '日期；约定时间', en: 'What\'s the target date for this release?', zhEx: '这次发布的目标日期是什么时候？', tags: ['core'] },
      { w: 'design', ipa: '/dɪˈzaɪn/', pos: 'v./n.', zh: '设计', en: 'We need to design the API before coding it.', zhEx: '写代码前要先设计 API。', tags: ['design'] },
      { w: 'email', ipa: '/ˈiːmeɪl/', pos: 'n./v.', zh: '电子邮件；发邮件', en: 'I\'ll email you the meeting notes after the call.', zhEx: '会后我把会议纪要用邮件发你。', tags: ['work'] },
      { w: 'important', ipa: '/ɪmˈpɔːrtnt/', pos: 'adj.', zh: '重要的', en: 'Backward compatibility is very important here.', zhEx: '向后兼容在这里非常重要。', tags: ['core'] },
      { w: 'interview', ipa: '/ˈɪntərvjuː/', pos: 'n.', zh: '面试；访谈', en: 'The coding interview covers algorithms and system design.', zhEx: '编码面试涵盖算法和系统设计。', tags: ['business'] },
      { w: 'leave', ipa: '/liːv/', pos: 'v./n.', zh: '休假；离开', en: 'I\'m on leave tomorrow; ping me only if it\'s urgent.', zhEx: '我明天休假，急事再呼我。', tags: ['core'] },
      { w: 'machine', ipa: '/məˈʃiːn/', pos: 'n.', zh: '机器', en: 'The build fails only on my machine.', zhEx: '这个构建只在我的机器上失败。', tags: ['core'] },
      { w: 'match', ipa: '/mætʃ/', pos: 'v./n.', zh: '匹配；相配', en: 'The query results don\'t match the expected output.', zhEx: '查询结果与预期输出不符。', tags: ['core'] },
      { w: 'menu', ipa: '/ˈmenjuː/', pos: 'n.', zh: '菜单', en: 'Add a dark-mode toggle to the settings menu.', zhEx: '在设置菜单里加个深色模式开关。', tags: ['core'] },
      { w: 'modern', ipa: '/ˈmɑːdərn/', pos: 'adj.', zh: '现代的', en: 'The codebase uses modern JavaScript features.', zhEx: '代码库使用了现代 JavaScript 特性。', tags: ['core'] },
      { w: 'natural', ipa: '/ˈnætʃrəl/', pos: 'adj.', zh: '自然的', en: 'It\'s natural to feel lost in a large legacy codebase.', zhEx: '在庞大的遗留代码库里感到迷失很正常。', tags: ['core'] },
      { w: 'plan', ipa: '/plæn/', pos: 'n./v.', zh: '计划', en: 'Let\'s plan the sprint for the next two weeks.', zhEx: '我们规划下未来两周的冲刺。', tags: ['work'] },
      { w: 'practise', ipa: '/ˈpræktɪs/', pos: 'v.', zh: '练习', en: 'Practise writing unit tests every day.', zhEx: '每天练习写单元测试。', tags: ['education'] },
      { w: 'product', ipa: '/ˈprɑːdʌkt/', pos: 'n.', zh: '产品', en: 'Ship the product when it\'s ready, not perfect.', zhEx: '产品就绪了就发布，不必等到完美。', tags: ['core'] },
      { w: 'return', ipa: '/rɪˈtɜːrn/', pos: 'n./v.', zh: '返回（值）', en: 'The function should return null for empty input.', zhEx: '函数对空输入应返回 null。', tags: ['core'] },
      { w: 'send', ipa: '/send/', pos: 'v.', zh: '发送', en: 'I\'ll send you the logs in a minute.', zhEx: '我马上把日志发给你。', tags: ['core'] },
      { w: 'short', ipa: '/ʃɔːrt/', pos: 'adj.', zh: '短的；简略的', en: 'Keep the commit message short and clear.', zhEx: '提交信息保持简短清晰。', tags: ['core'] },
      { w: 'situation', ipa: '/ˌsɪtʃuˈeɪʃn/', pos: 'n.', zh: '情况', en: 'In this situation, rolling back is the safest option.', zhEx: '这种情况下，回滚是最安全的选择。', tags: ['core'] },
      { w: 'understand', ipa: '/ˌʌndərˈstænd/', pos: 'v.', zh: '理解', en: 'I don\'t fully understand this part of the code yet.', zhEx: '这段代码我还没完全理解。', tags: ['core'] },
      { w: 'website', ipa: '/ˈwebsaɪt/', pos: 'n.', zh: '网站', en: 'The website is down; users can\'t place orders.', zhEx: '网站挂了，用户无法下单。', tags: ['core'] },
      { w: 'open', ipa: '/ˈəʊpən/', pos: 'adj./v.', zh: '开放的；打开', en: 'The position is open for internal candidates.', zhEx: '这个职位对内部候选人开放。', tags: ['core'] },
      { w: 'early', ipa: '/ˈɜːrli/', pos: 'adj./adv.', zh: '早期的；早', en: 'It\'s better to find bugs early in development.', zhEx: '最好在开发早期就发现 bug。', tags: ['core'] },
      { w: 'ability', ipa: '/əˈbɪləti/', pos: 'n.', zh: '能力', en: 'The tool boosts our ability to catch bugs early.', zhEx: '这个工具增强了我们尽早发现 bug 的能力。', tags: ['core'] },
      { w: 'advantage', ipa: '/ədˈvæntɪdʒ/', pos: 'n.', zh: '优势', en: 'Caching gives us a big performance advantage.', zhEx: '缓存给我们带来很大的性能优势。', tags: ['core'] },
      { w: 'architect', ipa: '/ˈɑːrkɪtekt/', pos: 'n.', zh: '架构师', en: 'Talk to the architect before changing the data model.', zhEx: '改数据模型前先和架构师沟通。', tags: ['code'] },
      { w: 'assistant', ipa: '/əˈsɪstənt/', pos: 'n.', zh: '助手', en: 'I set up an AI assistant to review pull requests.', zhEx: '我配了个 AI 助手来审查 PR。', tags: ['core'] },
      { w: 'average', ipa: '/ˈævərɪdʒ/', pos: 'adj./n.', zh: '平均的；平均数', en: 'The average response time dropped below 200 ms.', zhEx: '平均响应时间降到了 200 毫秒以下。', tags: ['core'] },
      { w: 'based', ipa: '/beɪst/', pos: 'adj.', zh: '基于……的', en: 'This is a browser-based tool, no installation needed.', zhEx: '这是基于浏览器的工具，无需安装。', tags: ['core'] },
      { w: 'colleague', ipa: '/ˈkɑːliːɡ/', pos: 'n.', zh: '同事', en: 'My colleague will cover the on-call duty tonight.', zhEx: '同事今晚替我值班。', tags: ['work'] },
      { w: 'complain', ipa: '/kəmˈpleɪn/', pos: 'v.', zh: '抱怨、投诉', en: 'Users complain that the app is slow on older phones.', zhEx: '用户抱怨应用在旧手机上很卡。', tags: ['core'] },
      { w: 'continue', ipa: '/kənˈtɪnjuː/', pos: 'v.', zh: '继续', en: 'Let\'s continue the discussion in the ticket.', zhEx: '我们在工单里继续讨论。', tags: ['core'] },
      { w: 'expert', ipa: '/ˈekspɜːrt/', pos: 'n.', zh: '专家', en: 'Ask the database expert before tuning the query.', zhEx: '调优查询前先问问数据库专家。', tags: ['core'] },
      { w: 'gap', ipa: '/ɡæp/', pos: 'n.', zh: '差距、缺口', en: 'There\'s a skills gap in cloud security.', zhEx: '云安全方面有技能缺口。', tags: ['core'] },
      { w: 'helpful', ipa: '/ˈhelpfl/', pos: 'adj.', zh: '有帮助的', en: 'Your feedback on the PR was really helpful.', zhEx: '你对 PR 的反馈非常有帮助。', tags: ['core'] },
      { w: 'individual', ipa: '/ˌɪndɪˈvɪdʒuəl/', pos: 'adj./n.', zh: '个人的；个体', en: 'Individual productivity matters less than team flow.', zhEx: '个人生产力不如团队流转重要。', tags: ['core'] },
      { w: 'item', ipa: '/ˈaɪtəm/', pos: 'n.', zh: '条目、事项', en: 'Please move this item to the next sprint.', zhEx: '请把这个事项挪到下个冲刺。', tags: ['core'] },
      { w: 'lead', ipa: '/liːd/', pos: 'v./n.', zh: '主导；领先', en: 'She will lead the migration to the new framework.', zhEx: '她将主导向新框架的迁移。', tags: ['core'] },
      { w: 'missing', ipa: '/ˈmɪsɪŋ/', pos: 'adj.', zh: '缺失的', en: 'The error message says a required field is missing.', zhEx: '报错提示缺少必填字段。', tags: ['core'] },
      { w: 'offer', ipa: '/ˈɔːfər/', pos: 'v./n.', zh: '提供；提议', en: 'The platform offers a free tier for developers.', zhEx: '平台为开发者提供免费档。', tags: ['core'] },
      { w: 'possibility', ipa: '/ˌpɑːsəˈbɪləti/', pos: 'n.', zh: '可能性', en: 'There\'s a possibility that the deployment overlaps the maintenance window.', zhEx: '部署有可能和维护窗口重叠。', tags: ['core'] },
      { w: 'quality', ipa: '/ˈkwɑːləti/', pos: 'n.', zh: '质量', en: 'Code reviews are our main quality gate.', zhEx: '代码评审是我们主要的质量关卡。', tags: ['core'] },
      { w: 'recommend', ipa: '/ˌrekəˈmend/', pos: 'v.', zh: '推荐', en: 'I recommend using a feature flag for this rollout.', zhEx: '我建议这次发布用功能开关。', tags: ['business'] },
      { w: 'relationship', ipa: '/rɪˈleɪʃnʃɪp/', pos: 'n.', zh: '关系', en: 'The table relationship is one-to-many.', zhEx: '这张表的关系是一对多。', tags: ['core'] },
      { w: 'research', ipa: '/rɪˈsɜːrtʃ/', pos: 'n./v.', zh: '调研、研究', en: 'Do some research before picking the library.', zhEx: '选库之前先做点调研。', tags: ['business'] },
      { w: 'run', ipa: '/rʌn/', pos: 'n.', zh: '（一次）运行', en: 'The test run passed after the fix.', zhEx: '修复后这轮测试跑通了。', tags: ['core'] },
      { w: 'save', ipa: '/seɪv/', pos: 'v.', zh: '保存；节省', en: 'This shortcut saves us hours every week.', zhEx: '这个捷径每周为我们省下数小时。', tags: ['core'] },
      { w: 'site', ipa: '/saɪt/', pos: 'n.', zh: '站点', en: 'The staging site is ready for QA.', zhEx: '预发布站点已准备好给 QA 测试。', tags: ['core'] },
      { w: 'successful', ipa: '/səkˈsesfl/', pos: 'adj.', zh: '成功的', en: 'The migration was successful with zero downtime.', zhEx: '迁移成功，零停机。', tags: ['core'] },
      { w: 'target', ipa: '/ˈtɑːrɡɪt/', pos: 'n./v.', zh: '目标；瞄准', en: 'Our target is to cut the load time in half.', zhEx: '我们的目标是把加载时间减半。', tags: ['work'] },
      { w: 'trouble', ipa: '/ˈtrʌbl/', pos: 'n.', zh: '麻烦、故障', en: 'I\'m having trouble installing the dependencies.', zhEx: '我装依赖时遇到麻烦。', tags: ['code'] },
      { w: 'variety', ipa: '/vəˈraɪəti/', pos: 'n.', zh: '多样性、种种', en: 'The team handles a wide variety of tasks.', zhEx: '团队要处理各种各样的任务。', tags: ['core'] },
      { w: 'aim', ipa: '/eɪm/', pos: 'n./v.', zh: '目标；旨在', en: 'Our aim is to ship a beta by Friday.', zhEx: '我们的目标是周五前发布 beta。', tags: ['work'] },
      { w: 'analyse', ipa: '/ˈænəlaɪz/', pos: 'v.', zh: '分析', en: 'Let\'s analyse the logs to find the pattern.', zhEx: '我们分析日志找出规律。', tags: ['core'] },
      { w: 'appointment', ipa: '/əˈpɔɪntmənt/', pos: 'n.', zh: '约定（会面）', en: 'I have a doctor\'s appointment at 2 PM.', zhEx: '我下午两点约了医生。', tags: ['daily'] },
      { w: 'attitude', ipa: '/ˈætɪtuːd/', pos: 'n.', zh: '态度', en: 'A blameless attitude makes post-mortems useful.', zhEx: '无指责的态度让复盘真正有用。', tags: ['core'] },
      { w: 'balance', ipa: '/ˈbæləns/', pos: 'n./v.', zh: '平衡', en: 'We need to balance speed and code quality.', zhEx: '我们需要平衡速度和代码质量。', tags: ['core'] },
      { w: 'block', ipa: '/blɑːk/', pos: 'v./n.', zh: '阻塞；块', en: 'The missing credentials block the deployment.', zhEx: '缺少凭证导致部署被阻塞。', tags: ['core'] },
      { w: 'campaign', ipa: '/kæmˈpeɪn/', pos: 'n.', zh: '活动（推广/营销）', en: 'The marketing campaign starts right after the launch.', zhEx: '营销活动在上线后立即开始。', tags: ['business'] },
      { w: 'central', ipa: '/ˈsentrəl/', pos: 'adj.', zh: '核心的；中央的', en: 'The config service is central to our deployment.', zhEx: '配置服务是我们部署体系的核心。', tags: ['core'] },
      { w: 'clear', ipa: '/klɪr/', pos: 'v./adj.', zh: '清除；清晰的', en: 'Let\'s clear the cache and try again.', zhEx: '清一下缓存再试。', tags: ['core'] },
      { w: 'competitive', ipa: '/kəmˈpetətɪv/', pos: 'adj.', zh: '有竞争力的', en: 'Our release cadence keeps us competitive.', zhEx: '我们的发布节奏保持了竞争力。', tags: ['business'] },
      { w: 'confused', ipa: '/kənˈfjuːzd/', pos: 'adj.', zh: '困惑的', en: 'I\'m confused about the ownership of this module.', zhEx: '我搞不清这个模块归谁管。', tags: ['core'] },
      { w: 'continuous', ipa: '/kənˈtɪnjuəs/', pos: 'adj.', zh: '连续的', en: 'We practise continuous deployment to staging.', zhEx: '我们对预发环境做持续部署。', tags: ['core'] },
      { w: 'cover', ipa: '/ˈkʌvər/', pos: 'v./n.', zh: '覆盖', en: 'The new tests cover the payment edge cases.', zhEx: '新测试覆盖了支付相关的边界情况。', tags: ['core'] },
      { w: 'definite', ipa: '/ˈdefɪnət/', pos: 'adj.', zh: '确定的', en: 'We need a definite answer on the scope today.', zhEx: '我们今天需要一个关于范围的确定答复。', tags: ['core'] },
      { w: 'difficulty', ipa: '/ˈdɪfɪkəlti/', pos: 'n.', zh: '困难', en: 'We ran into difficulty while migrating the database.', zhEx: '迁移数据库时我们遇到了困难。', tags: ['core'] },
      { w: 'emergency', ipa: '/ɪˈmɜːrdʒənsi/', pos: 'n.', zh: '紧急情况', en: 'Hot deploys are only for emergencies.', zhEx: '紧急部署只用于紧急情况。', tags: ['core'] },
      { w: 'eventually', ipa: '/ɪˈventʃuəli/', pos: 'adv.', zh: '最终', en: 'The flaky test eventually passed on the third run.', zhEx: '这个不稳定的测试第三次运行终于通过。', tags: ['core'] },
      { w: 'experienced', ipa: '/ɪkˈspɪriənst/', pos: 'adj.', zh: '有经验的', en: 'An experienced engineer can review this in ten minutes.', zhEx: '有经验的工程师十分钟能评审完。', tags: ['core'] },
      { w: 'fairly', ipa: '/ˈferli/', pos: 'adv.', zh: '相当地', en: 'The bug is fairly easy to reproduce.', zhEx: '这个 bug 相当容易复现。', tags: ['daily'] },
      { w: 'feature', ipa: '/ˈfiːtʃər/', pos: 'n./v.', zh: '功能；以……为特色', en: 'The feature ships behind a flag.', zhEx: '这个功能藏在开关后面发布。', tags: ['core'] },
      { w: 'graduate', ipa: '/ˈɡrædʒueɪt/', pos: 'n./v.', zh: '毕业生；毕业', en: 'She graduated from intern to full-time engineer.', zhEx: '她从实习生转成了全职工程师。', tags: ['education'] },
      { w: 'highly', ipa: '/ˈhaɪli/', pos: 'adv.', zh: '高度地', en: 'This module is highly coupled with the UI layer.', zhEx: '这个模块和 UI 层高度耦合。', tags: ['core'] },
      { w: 'intention', ipa: '/ɪnˈtenʃn/', pos: 'n.', zh: '意图', en: 'My intention was to fix it, not rewrite the module.', zhEx: '我的本意是修一下，而不是重写模块。', tags: ['core'] },
      { w: 'judge', ipa: '/dʒʌdʒ/', pos: 'v.', zh: '判断', en: 'Don\'t judge performance by a single benchmark.', zhEx: '别用一次基准测试判断性能。', tags: ['core'] },
      { w: 'leading', ipa: '/ˈliːdɪŋ/', pos: 'adj.', zh: '领先的；主要的', en: 'We migrated to the leading cloud provider.', zhEx: '我们迁移到了领先的云服务商。', tags: ['core'] },
      { w: 'limit', ipa: '/ˈlɪmɪt/', pos: 'n./v.', zh: '限制', en: 'Rate limiting protects the API from abuse.', zhEx: '限流保护 API 免受滥用。', tags: ['core'] },
      { w: 'medium', ipa: '/ˈmiːdiəm/', pos: 'adj./n.', zh: '中等的；媒介', en: 'The severity is medium, so it can wait for the next sprint.', zhEx: '严重程度中等，可以等下个冲刺。', tags: ['core'] },
      { w: 'official', ipa: '/əˈfɪʃl/', pos: 'adj.', zh: '官方的', en: 'The official docs are out of date again.', zhEx: '官方文档又过时了。', tags: ['core'] },
      { w: 'package', ipa: '/ˈpækɪdʒ/', pos: 'n./v.', zh: '包；打包', en: 'Publish the package with a new version number.', zhEx: '用新版本号发布这个包。', tags: ['code'] },
      { w: 'presentation', ipa: '/ˌpriːznˈteɪʃn/', pos: 'n.', zh: '演示、汇报', en: 'The architecture presentation is tomorrow morning.', zhEx: '架构汇报在明天上午。', tags: ['work'] },
      { w: 'proper', ipa: '/ˈprɑːpər/', pos: 'adj.', zh: '恰当的、完善的', en: 'We need proper logging before debugging in production.', zhEx: '在生产调试前我们需要完善的日志。', tags: ['core'] },
      { w: 'regularly', ipa: '/ˈreɡjələrli/', pos: 'adv.', zh: '定期地', en: 'We deploy to production regularly, twice a week.', zhEx: '我们定期发布生产，每周两次。', tags: ['core'] },
      { w: 'release', ipa: '/rɪˈliːs/', pos: 'n./v.', zh: '发布', en: 'The release went out without a rollback plan.', zhEx: '这次发布没有回滚计划就上线了。', tags: ['code'] },
      { w: 'repeat', ipa: '/rɪˈpiːt/', pos: 'v.', zh: '重复；复现', en: 'The issue repeats every time we restart the service.', zhEx: '每次重启服务问题都会复现。', tags: ['core'] },
      { w: 'responsible', ipa: '/rɪˈspɑːnsəbl/', pos: 'adj.', zh: '负责的', en: 'Who is responsible for the release checklist?', zhEx: '谁负责发布清单？', tags: ['core'] },
      { w: 'sensible', ipa: '/ˈsensəbl/', pos: 'adj.', zh: '合理的', en: 'Splitting the monolith by domain is a sensible first step.', zhEx: '按领域拆分单体是合理的第一步。', tags: ['core'] },
      { w: 'signal', ipa: '/ˈsɪɡnəl/', pos: 'n.', zh: '信号', en: 'The alert signal fired twice last night.', zhEx: '告警信号昨晚触发了两次。', tags: ['core'] },
      { w: 'standard', ipa: '/ˈstændərd/', pos: 'n./adj.', zh: '标准', en: 'The error handling doesn\'t follow our team standard.', zhEx: '错误处理不符合团队标准。', tags: ['core'] },
      { w: 'tend', ipa: '/tend/', pos: 'v.', zh: '往往会；趋向', en: 'New engineers tend to skip writing tests.', zhEx: '新工程师往往不写测试。', tags: ['core'] },
      { w: 'tight', ipa: '/taɪt/', pos: 'adj.', zh: '紧的', en: 'The schedule is tight, so let\'s cut some scope.', zhEx: '排期很紧，我们砍点范围。', tags: ['core'] },
      { w: 'trick', ipa: '/trɪk/', pos: 'n.', zh: '技巧、窍门', en: 'Here\'s a trick to debug race conditions faster.', zhEx: '这里有个更快调试竞态条件的窍门。', tags: ['core'] },
      { w: 'volunteer', ipa: '/ˌvɑːlənˈtɪr/', pos: 'n./v.', zh: '志愿者；主动承担', en: 'I\'ll volunteer to write the migration guide.', zhEx: '我来主动写迁移指南。', tags: ['business'] },
      { w: 'abandon', ipa: '/əˈbændən/', pos: 'v.', zh: '放弃、抛弃', en: 'We abandoned the homegrown framework in favor of a standard one.', zhEx: '我们放弃了自研框架，改用标准框架。', tags: ['core'] },
      { w: 'acknowledge', ipa: '/əkˈnɑːlɪdʒ/', pos: 'v.', zh: '确认；承认', en: 'The server acknowledges each message before processing the next one.', zhEx: '服务器先确认收到每条消息，再处理下一条。', tags: ['core'] },
      { w: 'affordable', ipa: '/əˈfɔːrdəbl/', pos: 'adj.', zh: '负担得起的', en: 'Cloud costs made the old plan no longer affordable.', zhEx: '云成本让旧方案不再划算。', tags: ['core'] },
      { w: 'appropriately', ipa: '/əˈprəʊpriətli/', pos: 'adv.', zh: '恰当地', en: 'Please escalate the issue appropriately instead of fixing it silently.', zhEx: '请恰当上报问题，不要悄悄修掉。', tags: ['core'] },
      { w: 'associate', ipa: '/əˈsəʊsieɪt/', pos: 'v./n.', zh: '关联；伙伴', en: 'Each log entry is associated with a request ID.', zhEx: '每条日志都关联一个请求 ID。', tags: ['core'] },
      { w: 'boost', ipa: '/buːst/', pos: 'v./n.', zh: '提升、推动', en: 'The new index gave a huge boost to query speed.', zhEx: '新索引极大提升了查询速度。', tags: ['core'] },
      { w: 'commitment', ipa: '/kəˈmɪtmənt/', pos: 'n.', zh: '承诺、投入', en: 'Don\'t make a delivery commitment without checking the ticket queue.', zhEx: '不看工单队列别轻易承诺交付时间。', tags: ['core'] },
      { w: 'concerned', ipa: '/kənˈsɜːrnd/', pos: 'adj.', zh: '担心的；相关的', en: 'I\'m concerned about the blast radius of this migration.', zhEx: '我担心这次迁移的影响范围。', tags: ['core'] },
      { w: 'consideration', ipa: '/kənˌsɪdəˈreɪʃn/', pos: 'n.', zh: '考虑因素', en: 'Latency was the main consideration in choosing the region.', zhEx: '延迟是选择区域的主要考虑因素。', tags: ['core'] },
      { w: 'controversial', ipa: '/ˌkɑːntrəˈvɜːrʃl/', pos: 'adj.', zh: '有争议的', en: 'Dropping Python 2 support is still controversial in the team.', zhEx: '在团队里放弃 Python 2 支持仍有争议。', tags: ['core'] },
      { w: 'criticize', ipa: '/ˈkrɪtɪsaɪz/', pos: 'v.', zh: '批评', en: 'Review the code, not the person; never criticize the author.', zhEx: '评审代码而非个人，永远不要攻击作者。', tags: ['core'] },
      { w: 'demonstrate', ipa: '/ˈdemənstreɪt/', pos: 'v.', zh: '演示；证明', en: 'Let me demonstrate the bug with a minimal example.', zhEx: '我用最小示例演示这个 bug。', tags: ['core'] },
      { w: 'detail', ipa: '/ˈdiːteɪl/', pos: 'v./n.', zh: '详述；细节', en: 'Please detail the reproduction steps in the ticket.', zhEx: '请在工单里详述复现步骤。', tags: ['core'] },
      { w: 'dismiss', ipa: '/dɪsˈmɪs/', pos: 'v.', zh: '不予理会；解雇', en: 'Don\'t dismiss intermittent failures; they often hide race conditions.', zhEx: '别忽视偶发失败，它们常藏着竞态条件。', tags: ['core'] },
      { w: 'eliminate', ipa: '/ɪˈlɪmɪneɪt/', pos: 'v.', zh: '消除', en: 'Automating deploys eliminated most release mistakes.', zhEx: '自动化部署消除了大部分发布失误。', tags: ['core'] },
      { w: 'external', ipa: '/ɪkˈstɜːrnl/', pos: 'adj.', zh: '外部的', en: 'Never log external user tokens.', zhEx: '永远不要记录外部用户的令牌。', tags: ['core'] },
      { w: 'generate', ipa: '/ˈdʒenəreɪt/', pos: 'v.', zh: '生成', en: 'The pipeline generates a report after each run.', zhEx: '流水线每次运行后都会生成报告。', tags: ['core'] },
      { w: 'incentive', ipa: '/ɪnˈsentɪv/', pos: 'n.', zh: '激励', en: 'Fast feedback loops are a strong incentive to write tests.', zhEx: '快速反馈是写测试的强大动力。', tags: ['business'] },
      { w: 'instance', ipa: '/ˈɪnstəns/', pos: 'n.', zh: '实例；情况', en: 'Spin up a second database instance for the shadow traffic.', zhEx: '为影子流量再起一个数据库实例。', tags: ['code'] },
      { w: 'level', ipa: '/ˈlevl/', pos: 'v./n.', zh: '级别；拉平', en: 'Log at the debug level in development.', zhEx: '开发环境用 debug 级别记日志。', tags: ['core'] },
      { w: 'long-term', ipa: '/ˌlɔːŋ ˈtɜːrm/', pos: 'adj.', zh: '长期的', en: 'Tech debt is a long-term cost, not a moral failing.', zhEx: '技术债是长期成本，不是道德问题。', tags: ['core'] },
      { w: 'minor', ipa: '/ˈmaɪnər/', pos: 'adj.', zh: '次要的', en: 'It\'s a minor bug; we can ship without fixing it today.', zhEx: '这是次要 bug，今天可以不带修复上线。', tags: ['core'] },
      { w: 'otherwise', ipa: '/ˈʌðərwaɪz/', pos: 'adv.', zh: '否则', en: 'Add the index, otherwise queries will time out under load.', zhEx: '加上索引，否则高负载下查询会超时。', tags: ['core'] },
      { w: 'pace', ipa: '/peɪs/', pos: 'n./v.', zh: '节奏；速度', en: 'The team picked a sustainable pace for the rewrite.', zhEx: '团队为重写选择了可持续的节奏。', tags: ['core'] },
      { w: 'patience', ipa: '/ˈpeɪʃns/', pos: 'n.', zh: '耐心', en: 'Debugging flaky tests requires patience and good logs.', zhEx: '调试不稳定的测试需要耐心和好日志。', tags: ['daily'] },
      { w: 'potential', ipa: '/pəˈtenʃl/', pos: 'n./adj.', zh: '潜力；潜在的', en: 'This bug has the potential to corrupt user data.', zhEx: '这个 bug 有破坏用户数据的潜在风险。', tags: ['core'] },
      { w: 'prime', ipa: '/praɪm/', pos: 'adj.', zh: '主要的；首选的', en: 'The prime suspect is the new caching layer.', zhEx: '头号嫌疑是新的缓存层。', tags: ['core'] },
      { w: 'project', ipa: '/prəˈdʒekt/', pos: 'v./n.', zh: '预测；项目', en: 'The dashboard projects next month\'s cloud spend.', zhEx: '仪表盘预测了下个月的云支出。', tags: ['work'] },
      { w: 'rank', ipa: '/ræŋk/', pos: 'v./n.', zh: '排名；排序', en: 'The search service ranks results by relevance.', zhEx: '搜索服务按相关度对结果排序。', tags: ['core'] },
      { w: 'recovery', ipa: '/rɪˈkʌvəri/', pos: 'n.', zh: '恢复', en: 'Disaster recovery drills happen twice a year.', zhEx: '灾难恢复演练每年举行两次。', tags: ['code'] },
      { w: 'relatively', ipa: '/ˈrelətɪvli/', pos: 'adv.', zh: '相对地', en: 'The API is relatively stable, so we rarely change it.', zhEx: '这个 API 相对稳定，我们很少改动。', tags: ['core'] },
      { w: 'reserve', ipa: '/rɪˈzɜːrv/', pos: 'v./n.', zh: '预留；保留', en: 'Reserve the last sprint day for bug bashing.', zhEx: '把冲刺最后一天留给集中修 bug。', tags: ['core'] },
      { w: 'reward', ipa: '/rɪˈwɔːrd/', pos: 'n./v.', zh: '回报；奖励', en: 'The reward for good docs is fewer interruptions.', zhEx: '好文档的回报是更少被打断。', tags: ['core'] },
      { w: 'senior', ipa: '/ˈsiːniər/', pos: 'adj.', zh: '资深的', en: 'A senior engineer unblocked me in five minutes.', zhEx: '资深工程师五分钟就帮我解了困。', tags: ['business'] },
      { w: 'status', ipa: '/ˈsteɪtəs/', pos: 'n.', zh: '状态', en: 'Check the build status before pushing.', zhEx: '推送前先看下构建状态。', tags: ['code'] },
      { w: 'tag', ipa: '/tæɡ/', pos: 'v./n.', zh: '打标签；标签', en: 'Tag the release before the weekend.', zhEx: '周末前给发布打上标签。', tags: ['core'] },
      { w: 'transition', ipa: '/trænˈzɪʃn/', pos: 'n.', zh: '过渡、转变', en: 'The transition to the new API completes next month.', zhEx: '新 API 的迁移下月完成。', tags: ['core'] },
      { w: 'virtual', ipa: '/ˈvɜːrtʃuəl/', pos: 'adj.', zh: '虚拟的；远程的', en: 'The team is fully virtual, across three time zones.', zhEx: '团队完全远程分布，横跨三个时区。', tags: ['core'] },
      { w: 'weird', ipa: '/wɪrd/', pos: 'adj.', zh: '奇怪的', en: 'I\'m seeing weird behavior only in production.', zhEx: '我只在生产环境看到奇怪的现象。', tags: ['daily'] },
      { w: 'workshop', ipa: '/ˈwɜːrkʃɑːp/', pos: 'n.', zh: '工作坊、研讨会', en: 'We ran a refactoring workshop for the new hires.', zhEx: '我们为新人办了一场重构工作坊。', tags: ['work'] },
      { w: 'accumulate', ipa: '/əˈkjuːmjəleɪt/', pos: 'v.', zh: '积累', en: 'Small design debts accumulate into a rewrite.', zhEx: '小的设计债积累起来就会导致重写。', tags: ['core'] },
      { w: 'administrator', ipa: '/ədˈmɪnɪstreɪtər/', pos: 'n.', zh: '管理员', en: 'The database administrator approved the migration window.', zhEx: '数据库管理员批准了迁移窗口。', tags: ['code'] },
      { w: 'analogy', ipa: '/əˈnælədʒi/', pos: 'n.', zh: '类比', en: 'A good analogy for caching is a desk drawer.', zhEx: '缓存的一个好类比是书桌抽屉。', tags: ['education'] },
      { w: 'bind', ipa: '/baɪnd/', pos: 'v.', zh: '绑定', en: 'Don\'t bind the service to all interfaces in production.', zhEx: '生产环境不要把服务绑定到所有网络接口。', tags: ['code'] },
      { w: 'boundary', ipa: '/ˈbaʊndri/', pos: 'n.', zh: '边界', en: 'Draw the module boundary before adding features.', zhEx: '加功能之前先画好模块边界。', tags: ['code'] },
      { w: 'burden', ipa: '/ˈbɜːrdn/', pos: 'n./v.', zh: '负担', en: 'Manual deploys put a heavy burden on the on-call engineer.', zhEx: '手工部署给值班工程师带来沉重负担。', tags: ['core'] },
      { w: 'collective', ipa: '/kəˈlektɪv/', pos: 'adj.', zh: '集体的', en: 'Code quality is a collective responsibility.', zhEx: '代码质量是集体的责任。', tags: ['core'] },
      { w: 'coordination', ipa: '/kəʊˌɔːrdɪˈneɪʃn/', pos: 'n.', zh: '协调', en: 'The migration needs tight coordination with the data team.', zhEx: '这次迁移需要和数据团队紧密协调。', tags: ['core'] },
      { w: 'dispute', ipa: '/dɪˈspjuːt/', pos: 'n./v.', zh: '争议', en: 'There\'s a dispute over who owns the shared library.', zhEx: '关于共享库的归属存在争议。', tags: ['core'] },
      { w: 'empirical', ipa: '/ɪmˈpɪrɪkl/', pos: 'adj.', zh: '实证的、经验的', en: 'We made the decision based on empirical profiling data.', zhEx: '我们基于实测剖析数据做了决定。', tags: ['education'] },
      { w: 'expire', ipa: '/ɪkˈspaɪər/', pos: 'v.', zh: '到期、失效', en: 'The token expires after 24 hours.', zhEx: '令牌 24 小时后失效。', tags: ['business'] },
      { w: 'frustrating', ipa: '/ˈfrʌstreɪtɪŋ/', pos: 'adj.', zh: '令人沮丧的', en: 'Chasing a bug that only appears in production is frustrating.', zhEx: '追踪只在生产出现的 bug 很让人沮丧。', tags: ['daily'] },
      { w: 'intensive', ipa: '/ɪnˈtensɪv/', pos: 'adj.', zh: '密集的', en: 'The migration needs two weeks of intensive testing.', zhEx: '这次迁移需要两周密集测试。', tags: ['core'] },
      { w: 'invoke', ipa: '/ɪnˈvəʊk/', pos: 'v.', zh: '调用；援引', en: 'Invoke the cleanup endpoint after the batch job.', zhEx: '批处理任务结束后调用清理接口。', tags: ['code'] },
      { w: 'memo', ipa: '/ˈmeməʊ/', pos: 'n.', zh: '备忘录', en: 'The decision was summarized in an internal memo.', zhEx: '这个决定总结在了内部备忘录里。', tags: ['core'] },
      { w: 'niche', ipa: '/niːʃ/', pos: 'n./adj.', zh: '细分领域；小众的', en: 'The tool serves a niche but devoted user base.', zhEx: '这个工具服务着一个小众但忠实的用户群。', tags: ['business'] },
      { w: 'objection', ipa: '/əbˈdʒekʃn/', pos: 'n.', zh: '反对意见', en: 'If there\'s no objection, we\'ll merge by Friday.', zhEx: '没有异议的话，周五前合并。', tags: ['business'] },
      { w: 'originate', ipa: '/əˈrɪdʒɪneɪt/', pos: 'v.', zh: '起源于', en: 'The outage originated from a DNS misconfiguration.', zhEx: '这次故障起源于 DNS 配置错误。', tags: ['core'] },
      { w: 'peculiar', ipa: '/pɪˈkjuːliər/', pos: 'adj.', zh: '奇特的', en: 'There\'s a peculiar bug that only appears on ARM builds.', zhEx: '有个奇怪 bug 只在 ARM 构建上出现。', tags: ['core'] },
      { w: 'presume', ipa: '/prɪˈzuːm/', pos: 'v.', zh: '假定', en: 'Don\'t presume the cache is warm after a redeploy.', zhEx: '重新部署后别假定缓存是热的。', tags: ['core'] },
      { w: 'productive', ipa: '/prəˈdʌktɪv/', pos: 'adj.', zh: '高效的', en: 'Shorter meetings make the afternoon far more productive.', zhEx: '更短的会让下午高效得多。', tags: ['core'] },
      { w: 'replacement', ipa: '/rɪˈpleɪsmənt/', pos: 'n.', zh: '替代品', en: 'We shipped a drop-in replacement for the old client.', zhEx: '我们发布了旧客户端的即插即用替代品。', tags: ['code'] },
      { w: 'resume', ipa: '/rɪˈzuːm/', pos: 'v.', zh: '恢复；重新开始', en: 'The service resumed normal operation after the rollback.', zhEx: '回滚后服务恢复正常运行。', tags: ['core'] },
      { w: 'soar', ipa: '/sɔːr/', pos: 'v.', zh: '猛涨、飙升', en: 'Cloud costs soared after the logging change was merged.', zhEx: '日志改动合入后云开销猛涨。', tags: ['core'] },
      { w: 'specification', ipa: '/ˌspesɪfɪˈkeɪʃn/', pos: 'n.', zh: '规格、规范', en: 'The API specification is the source of truth.', zhEx: 'API 规范是唯一的权威来源。', tags: ['code'] },
      { w: 'stability', ipa: '/stəˈbɪləti/', pos: 'n.', zh: '稳定性', en: 'We traded some features for stability this quarter.', zhEx: '这个季度我们用一些功能换稳定性。', tags: ['code'] },
      { w: 'strategic', ipa: '/strəˈtiːdʒɪk/', pos: 'adj.', zh: '战略的', en: 'Open-sourcing the SDK was a strategic decision.', zhEx: '开源 SDK 是个战略性决定。', tags: ['business'] },
      { w: 'supplement', ipa: '/ˈsʌplɪment/', pos: 'v./n.', zh: '补充', en: 'Automated checks supplement, not replace, code review.', zhEx: '自动化检查是代码评审的补充而非替代。', tags: ['core'] },
      { w: 'thrive', ipa: '/θraɪv/', pos: 'v.', zh: '兴旺、蓬勃发展', en: 'Async teams thrive on written documentation.', zhEx: '异步协作团队靠书面文档蓬勃发展。', tags: ['core'] },
      { w: 'unify', ipa: '/ˈjuːnɪfaɪ/', pos: 'v.', zh: '统一', en: 'The refactor unifies three payment paths into one.', zhEx: '这次重构把三条支付路径统一成了一条。', tags: ['code'] },
      { w: 'worthwhile', ipa: '/ˌwɜːrθˈwaɪl/', pos: 'adj.', zh: '值得的', en: 'Investing in test infrastructure is worthwhile long-term.', zhEx: '投资测试基础设施长期来看是值得的。', tags: ['core'] },
      { w: 'deadline', ipa: '/ˈdedlaɪn/', pos: 'n.', zh: '截止日期', en: 'The deadline for the review is this Friday.', zhEx: '这次评审的截止日期是本周五。', tags: ['business'] },
      { w: 'deliverable', ipa: '/dɪˈlɪvərəbl/', pos: 'n.', zh: '交付物', en: 'The doc is the main deliverable for this phase.', zhEx: '这份文档是本阶段的主要交付物。', tags: ['work'] },
      { w: 'sync up', ipa: '', pos: 'phr.', zh: '同步进度、对齐信息', en: 'Let\'s sync up after the standup.', zhEx: '站会之后我们对一下进度。', tags: ['work'] },
      { w: 'follow up', ipa: '', pos: 'phr.', zh: '跟进', en: 'I\'ll follow up on the ticket tomorrow.', zhEx: '明天我会跟进那张工单。', tags: ['work'] },
      { w: 'heads-up', ipa: '/ˈhedzʌp/', pos: 'n.', zh: '提前打招呼、预告', en: 'Thanks for the heads-up about the migration.', zhEx: '谢谢你提前告知迁移的事。', tags: ['work'] },
      { w: 'trade-off', ipa: '/ˈtreɪdɔːf/', pos: 'n.', zh: '权衡、取舍', en: 'Caching adds a trade-off between speed and freshness.', zhEx: '缓存带来了速度与新鲜度之间的取舍。', tags: ['work'] },
      { w: 'edge case', ipa: '', pos: 'n.', zh: '边界情况、极端用例', en: 'The empty input is an edge case we missed.', zhEx: '空输入是我们漏掉的边界情况。', tags: ['core'] },
      { w: 'bottleneck', ipa: '/ˈbɑːtlnek/', pos: 'n.', zh: '瓶颈', en: 'The database write is the bottleneck here.', zhEx: '数据库写入是这里的瓶颈。', tags: ['core'] },
      { w: 'milestone', ipa: '/ˈmaɪlstoʊn/', pos: 'n.', zh: '里程碑', en: 'Shipping v2 is the milestone for this quarter.', zhEx: '发布 v2 是本季度的里程碑。', tags: ['work'] },
      { w: 'bandwidth', ipa: '/ˈbændwɪdθ/', pos: 'n.', zh: '（引申）精力、余力', en: 'I don\'t have the bandwidth for another project this week.', zhEx: '这周我没有余力再接一个项目。', tags: ['core'] },
      { w: 'scope creep', ipa: '', pos: 'n.', zh: '需求范围蔓延', en: 'Small extra requests slowly cause scope creep.', zhEx: '小的额外请求会慢慢导致范围蔓延。', tags: ['work'] },
      { w: 'out of scope', ipa: '', pos: 'phr.', zh: '超出范围的', en: 'That feature is out of scope for v1.', zhEx: '那个功能不在 v1 范围内。', tags: ['code'] },
      { w: 'on track', ipa: '', pos: 'phr.', zh: '按计划推进', en: 'We are on track for the release.', zhEx: '我们按计划推进发布。', tags: ['work'] },
      { w: 'push back', ipa: '', pos: 'phr.', zh: '推迟；（对提议）反驳', en: 'Let\'s push back the release by one week.', zhEx: '我们把发布推迟一周吧。', tags: ['work'] },
      { w: 'wrap up', ipa: '', pos: 'phr.', zh: '收尾、结束', en: 'Let\'s wrap up before the meeting ends.', zhEx: '会议结束前我们收个尾。', tags: ['work'] },
      { w: 'in the loop', ipa: '', pos: 'phr.', zh: '知情的、被同步的', en: 'Keep me in the loop on this thread.', zhEx: '这个讨论串记得同步我。', tags: ['work'] },
      { w: 'circle back', ipa: '', pos: 'phr.', zh: '回头再谈', en: 'Let\'s circle back to this after the demo.', zhEx: '演示完我们再回头谈这个。', tags: ['work'] },
      { w: 'touch base', ipa: '', pos: 'phr.', zh: '简短沟通一下', en: 'Just touching base about the schedule.', zhEx: '简单同步一下日程。', tags: ['work'] },
      { w: 'get back to you', ipa: '', pos: 'phr.', zh: '稍后答复你', en: 'I\'ll get back to you once I check the logs.', zhEx: '我查完日志再答复你。', tags: ['work'] },
      { w: 'with a grain of salt', ipa: '', pos: 'phr.', zh: '半信半疑地', en: 'Take that estimate with a grain of salt.', zhEx: '那个估算要打个折扣听。', tags: ['work'] },
      { w: 'ballpark', ipa: '/ˈbɔːlpɑːk/', pos: 'n.', zh: '大约的数、粗略范围', en: 'Give me a ballpark estimate of the effort.', zhEx: '给我一个大致的工作量估计。', tags: ['work'] },
      { w: 'nudge', ipa: '/nʌdʒ/', pos: 'v.', zh: '轻轻提醒、催一下', en: 'Give me a nudge if the review stalls.', zhEx: '评审卡住的话提醒我一下。', tags: ['work'] },
      { w: 'blocker', ipa: '/ˈblɑːkər/', pos: 'n.', zh: '阻塞项、拦路的问题', en: 'The failing test is the only blocker.', zhEx: '失败的测试是唯一的阻塞项。', tags: ['work'] },
      { w: 'revisit', ipa: '/ˌriːˈvɪzɪt/', pos: 'v.', zh: '重新审视、再讨论', en: 'Let\'s revisit this design next sprint.', zhEx: '下个迭代我们重新审视这个设计。', tags: ['work'] },
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
      { w: 'ship', ipa: '/ʃɪp/', pos: 'v.', zh: '发布、上线', en: 'We ship every Thursday.', zhEx: '我们每周四发布。', tags: ['code'] },
      { w: 'rollback', ipa: '/ˈroʊlbæk/', pos: 'n./v.', zh: '回滚', en: 'The deploy failed and we did a rollback.', zhEx: '部署失败了，我们做了回滚。', tags: ['code', 'git'] },
      { w: 'hotfix', ipa: '/ˈhɑːtfɪks/', pos: 'n.', zh: '紧急修复', en: 'The hotfix went out within the hour.', zhEx: '紧急修复一小时内就发出去了。', tags: ['code'] },
      { w: 'canonical', ipa: '/kəˈnɑːnɪkl/', pos: 'adj.', zh: '规范的、权威的', en: 'Read the canonical schema, not the copy.', zhEx: '读规范的 schema，不要看复制品。', tags: ['code'] },
      { w: 'dangling', ipa: '/ˈdæŋɡlɪŋ/', pos: 'adj.', zh: '悬空的、指向失效目标的', en: 'The cache path was a dangling junction.', zhEx: '那个缓存路径是个悬空的 junction。', tags: ['work'] },
      { w: 'stale', ipa: '/steɪl/', pos: 'adj.', zh: '过期的、陈旧的', en: 'Stale checkpoints are discarded on startup.', zhEx: '过期的检查点会在启动时丢弃。', tags: ['code'] },
      { w: 'throughput', ipa: '/ˈθruːpʊt/', pos: 'n.', zh: '吞吐量', en: 'Batching doubled the throughput.', zhEx: '批处理让吞吐量翻了一倍。', tags: ['code'] },
      { w: 'latency', ipa: '/ˈleɪtənsi/', pos: 'n.', zh: '延迟', en: 'The first token sets the perceived latency.', zhEx: '首 token 时间决定了感知延迟。', tags: ['code'] },
      { w: 'quota', ipa: '/ˈkwoʊtə/', pos: 'n.', zh: '配额、限额', en: 'We hit the request quota at noon.', zhEx: '中午就撞到了请求配额。', tags: ['finance'] },
      { w: 'throttle', ipa: '/ˈθrɑːtl/', pos: 'v.', zh: '限流、节流', en: 'The API throttles bursts to five per second.', zhEx: '这个 API 把突发限到每秒五次。', tags: ['code'] },
      { w: 'backfill', ipa: '/ˈbækfɪl/', pos: 'v.', zh: '回填、补数据', en: 'Backfill the missing rows from the export.', zhEx: '从导出文件回填缺失的行。', tags: ['code'] },
      { w: 'teardown', ipa: '/ˈterdaʊn/', pos: 'n.', zh: '拆卸、清理阶段', en: 'Register every disposer for teardown.', zhEx: '把每个清理函数都注册到拆卸阶段。', tags: ['code'] },
      { w: 'snapshot', ipa: '/ˈsnæpʃɑːt/', pos: 'n.', zh: '快照', en: 'The store publishes an immutable snapshot.', zhEx: 'store 发布不可变的快照。', tags: ['code'] },
      { w: 'side effect', ipa: '', pos: 'n.', zh: '副作用', en: 'Keep side effects out of the render path.', zhEx: '把副作用挡在渲染路径之外。', tags: ['code'] },
      { w: 'poll', ipa: '/poʊl/', pos: 'v.', zh: '轮询', en: 'Do not poll the status; wait on events.', zhEx: '别轮询状态，等事件就好。', tags: ['code'] },
      { w: 'deterministic', ipa: '/dɪˌtɜːrmɪˈnɪstɪk/', pos: 'adj.', zh: '确定性的', en: 'Replaying the log is deterministic.', zhEx: '重放日志的结果是确定的。', tags: ['code'] },
      { w: 'overflow', ipa: '/ˌoʊvərˈfloʊ/', pos: 'n.', zh: '溢出', en: 'Long words cause a layout overflow.', zhEx: '超长单词会导致布局溢出。', tags: ['code'] },
      { w: 'fallback', ipa: '/ˈfɔːlbæk/', pos: 'n.', zh: '回退方案', en: 'A bundled snapshot may be returned as a fallback.', zhEx: '内置快照可以作为回退返回。', tags: ['code'] },
      { w: 'responsive', ipa: '/rɪˈspɑːnsɪv/', pos: 'adj.', zh: '响应式的', en: 'The layout stays responsive down to 360px.', zhEx: '布局到 360px 仍保持响应式。', tags: ['frontend'] },
      { w: 'breakpoint', ipa: '/ˈbreɪkpɔɪnt/', pos: 'n.', zh: '断点', en: 'Add a breakpoint for narrow panes.', zhEx: '为窄面板加一个断点。', tags: ['frontend'] },
      { w: 'viewport', ipa: '/ˈvjuːpɔːnt/', pos: 'n.', zh: '视口', en: 'The panel covers the whole viewport.', zhEx: '面板覆盖整个视口。', tags: ['frontend'] },
      { w: 'layout shift', ipa: '', pos: 'n.', zh: '布局偏移', en: 'Late icons cause an annoying layout shift.', zhEx: '晚出现的图标会造成恼人的布局偏移。', tags: ['frontend'] },
      { w: 'accessibility', ipa: '/əkˌsesəˈbɪləti/', pos: 'n.', zh: '无障碍、可访问性', en: 'Accessibility starts with correct roles and labels.', zhEx: '无障碍从正确的角色和标签开始。', tags: ['frontend'] },
      { w: 'tooltip', ipa: '/ˈtʊltɪp/', pos: 'n.', zh: '提示框', en: 'The tooltip shows the effective shortcut.', zhEx: '提示框里显示实际生效的快捷键。', tags: ['frontend'] },
      { w: 'placeholder', ipa: '/ˈpleɪshoʊldər/', pos: 'n.', zh: '占位符', en: 'A placeholder keeps the row height stable.', zhEx: '占位符让行高保持稳定。', tags: ['frontend'] },
      { w: 'typography', ipa: '/taɪˈpɑːɡrəfi/', pos: 'n.', zh: '排版、字体设计', en: 'Good typography carries the whole page.', zhEx: '好的排版撑起整个页面。', tags: ['design', 'frontend'] },
      { w: 'spacing', ipa: '/ˈspeɪsɪŋ/', pos: 'n.', zh: '间距', en: 'Keep the spacing rhythm consistent.', zhEx: '保持间距节奏一致。', tags: ['frontend'] },
      { w: 'contrast', ipa: '/ˈkɑːntræst/', pos: 'n.', zh: '对比度', en: 'Low contrast fails the check in dark mode.', zhEx: '低对比度在暗色模式下过不了检查。', tags: ['design'] },
      { w: 'sticky', ipa: '/ˈstɪki/', pos: 'adj.', zh: '粘性定位的', en: 'The header is sticky above the list.', zhEx: '表头粘性定位在列表上方。', tags: ['frontend'] },
      { w: 'skeleton', ipa: '/ˈskelɪtn/', pos: 'n.', zh: '骨架屏', en: 'Show a skeleton while the data loads.', zhEx: '数据加载时先显示骨架屏。', tags: ['frontend'] },
      { w: 'dropdown', ipa: '/ˈdrɑːpdaʊn/', pos: 'n.', zh: '下拉菜单', en: 'The dropdown closes on outside clicks.', zhEx: '点击外部时下拉菜单关闭。', tags: ['frontend'] },
      { w: 'breadcrumb', ipa: '/ˈbredkrʌm/', pos: 'n.', zh: '面包屑导航', en: 'The breadcrumb shows the nested path.', zhEx: '面包屑显示嵌套路径。', tags: ['frontend'] },
      { w: 'rebase', ipa: '/ˌriːˈbeɪs/', pos: 'v.', zh: '变基', en: 'Rebase onto main before opening the PR.', zhEx: '开 PR 前先向 main 变基。', tags: ['git'] },
      { w: 'squash', ipa: '/skwɑːʃ/', pos: 'v.', zh: '压缩（提交）', en: 'Squash the fixups into one commit.', zhEx: '把修补提交压成一个。', tags: ['code', 'git'] },
      { w: 'cherry-pick', ipa: '', pos: 'phr.', zh: '摘选提交', en: 'Cherry-pick the hotfix onto the release branch.', zhEx: '把紧急修复摘到发布分支上。', tags: ['git'] },
      { w: 'stash', ipa: '/stæʃ/', pos: 'v./n.', zh: '暂存（改动）', en: 'Stash the local changes and pull.', zhEx: '先暂存本地改动再拉取。', tags: ['git'] },
      { w: 'blame', ipa: '/bleɪm/', pos: 'n.', zh: '追溯（git blame）', en: 'Git blame points to last Tuesday.', zhEx: 'git blame 指向上周二。', tags: ['core'] },
      { w: 'upstream', ipa: '/ˈʌpstriːm/', pos: 'n.', zh: '上游（仓库/依赖）', en: 'The fix landed upstream last week.', zhEx: '修复上周已进入上游。', tags: ['git', 'code'] },
      { w: 'fork', ipa: '/fɔːrk/', pos: 'v./n.', zh: '复刻、分叉', en: 'Fork the repo and open a draft PR.', zhEx: '复刻仓库并开一个草稿 PR。', tags: ['core'] },
      { w: 'revert', ipa: '/rɪˈvɜːrt/', pos: 'v.', zh: '回退（提交）', en: 'Revert the commit instead of rewriting history.', zhEx: '回退提交，别改写历史。', tags: ['git'] },
      { w: 'merge conflict', ipa: '', pos: 'n.', zh: '合并冲突', en: 'The merge conflict is only in the lockfile.', zhEx: '合并冲突只在锁文件里。', tags: ['git'] },
      { w: 'force push', ipa: '', pos: 'phr.', zh: '强推', en: 'Never force push to a shared branch.', zhEx: '永远别向共享分支强推。', tags: ['core'] },
      { w: 'checkout', ipa: '/ˈtʃaʊkaʊt/', pos: 'v.', zh: '检出（分支）', en: 'Checkout the branch and run the tests.', zhEx: '检出分支并跑测试。', tags: ['git'] },
      { w: 'prompt', ipa: '/prɑːmpt/', pos: 'n.', zh: '提示词', en: 'A tighter prompt beats more examples.', zhEx: '更紧凑的提示词胜过更多示例。', tags: ['ai'] },
      { w: 'inference', ipa: '/ˈɪnfərəns/', pos: 'n.', zh: '推理（模型推理）', en: 'Local inference keeps the data on device.', zhEx: '本地推理让数据不出设备。', tags: ['ai'] },
      { w: 'embedding', ipa: '/ɪmˈbedɪŋ/', pos: 'n.', zh: '向量嵌入', en: 'Embeddings power the semantic search.', zhEx: '向量嵌入支撑语义搜索。', tags: ['ai'] },
      { w: 'fine-tune', ipa: '', pos: 'phr.', zh: '微调', en: 'Fine-tune only after the data is clean.', zhEx: '数据干净了再微调。', tags: ['ai'] },
      { w: 'hallucinate', ipa: '/həˈluːsɪneɪt/', pos: 'v.', zh: '（模型）胡编、产生幻觉', en: 'The model hallucinated a missing API.', zhEx: '模型编造了一个不存在的 API。', tags: ['ai'] },
      { w: 'context window', ipa: '', pos: 'n.', zh: '上下文窗口', en: 'Compaction frees up the context window.', zhEx: '压缩腾出了上下文窗口。', tags: ['ai'] },
      { w: 'orchestration', ipa: '/ˌɔːrkəstreɪʃn/', pos: 'n.', zh: '编排', en: 'The script handles orchestration of subagents.', zhEx: '这个脚本负责子代理的编排。', tags: ['ai'] },
      { w: 'guardrail', ipa: '/ˈɡɑːrdreɪl/', pos: 'n.', zh: '防护栏、约束', en: 'A guardrail denies the risky tool call.', zhEx: '防护栏拒绝了有风险的工具调用。', tags: ['ai'] },
      { w: 'telemetry', ipa: '/təˈlemətri/', pos: 'n.', zh: '遥测', en: 'Telemetry is opt-in and byte-bounded.', zhEx: '遥测是可选的且按字节限额。', tags: ['industry'] },
      { w: 'evict', ipa: '/ɪˈvɪkt/', pos: 'v.', zh: '驱逐、淘汰（缓存）', en: 'The cache evicts the oldest entries first.', zhEx: '缓存优先淘汰最旧的条目。', tags: ['code'] },
      { w: 'serialize', ipa: '/ˈsɪriəlaɪz/', pos: 'v.', zh: '序列化', en: 'Serialize the config before the write.', zhEx: '写入前先序列化配置。', tags: ['code'] },
      { w: 'digest', ipa: '/ˈdaɪdʒest/', pos: 'n.', zh: '摘要、文摘', en: 'The release digest lists every change.', zhEx: '发布摘要列出了所有变更。', tags: ['code'] },
      { w: 'sanity check', ipa: '', pos: 'n.', zh: '合理性检查', en: 'Do a sanity check before the full run.', zhEx: '全量跑之前先做个合理性检查。', tags: ['code'] },
      { w: 'deep dive', ipa: '', pos: 'n.', zh: '深入研究', en: 'Let\'s do a deep dive into the failure logs.', zhEx: '我们对失败日志做个深入分析。', tags: ['work'] },
      { w: 'under the hood', ipa: '', pos: 'phr.', zh: '在底层、表象之下', en: 'Under the hood, the harness replays the log.', zhEx: '底层上，harness 是重放日志实现的。', tags: ['code'] },
      { w: 'quick win', ipa: '', pos: 'n.', zh: '速赢、轻松的收益', en: 'Renaming it is a quick win.', zhEx: '重命名是个速赢的改进。', tags: ['finance'] },
      { w: 'pain point', ipa: '', pos: 'n.', zh: '痛点', en: 'Slow reviews are the team\'s main pain point.', zhEx: '评审慢是团队的主要痛点。', tags: ['work'] },
      { w: 'silver bullet', ipa: '', pos: 'n.', zh: '银弹、万能解法', en: 'There is no silver bullet for legacy code.', zhEx: '遗留代码没有银弹。', tags: ['work'] },
      { w: 'no-brainer', ipa: '/ˌnoʊˈbreɪnər/', pos: 'n.', zh: '不假思索的选择', en: 'Automating it is a no-brainer.', zhEx: '把它自动化是显而易见的选择。', tags: ['work'] },
      { w: 'as well as', ipa: '', pos: 'phr.', zh: '以及、和…一样', en: 'It reads events as well as projections.', zhEx: '它既读事件也读投影。', tags: ['work'] },
      { w: 'in terms of', ipa: '', pos: 'phr.', zh: '就…而言', en: 'In terms of latency, batching wins.', zhEx: '就延迟而言，批处理更优。', tags: ['work'] },
      { w: 'keep track of', ipa: '', pos: 'phr.', zh: '跟踪、掌握', en: 'Keep track of every flaky test.', zhEx: '把每个不稳定的测试记下来。', tags: ['education'] },
      { w: 'run into', ipa: '', pos: 'phr.', zh: '遇到（问题）', en: 'We ran into a permission error.', zhEx: '我们遇到了一个权限错误。', tags: ['work'] },
      { w: 'figure out', ipa: '', pos: 'phr.', zh: '弄清楚、想明白', en: 'Figure out why the retry loop spins.', zhEx: '搞清楚重试循环为什么空转。', tags: ['work'] },
      { w: 'end up', ipa: '', pos: 'phr.', zh: '最终落到、结果变成', en: 'You end up rewriting the parser.', zhEx: '最后你把解析器重写了。', tags: ['work'] },
      { w: 'come up with', ipa: '', pos: 'phr.', zh: '想出、提出', en: 'Come up with two fallback plans.', zhEx: '想出两个备选方案。', tags: ['work'] },
      { w: 'point out', ipa: '', pos: 'phr.', zh: '指出', en: 'The review pointed out a stale check.', zhEx: '评审指出了一个过期检查。', tags: ['work'] },
      { w: 'deal with', ipa: '', pos: 'phr.', zh: '处理、应付', en: 'Deal with the warnings first.', zhEx: '先处理那些警告。', tags: ['work'] },
      { w: 'at first glance', ipa: '', pos: 'phr.', zh: '乍一看', en: 'At first glance the diff looks huge.', zhEx: '乍一看 diff 很大。', tags: ['work'] },
      { w: 'by and large', ipa: '', pos: 'phr.', zh: '总体上', en: 'By and large, the migration went smoothly.', zhEx: '总体上迁移还算顺利。', tags: ['work'] },
      { w: 'on second thought', ipa: '', pos: 'phr.', zh: '转念一想', en: 'On second thought, cache the parsed tree.', zhEx: '转念一想，还是缓存解析树吧。', tags: ['work'] },
      { w: 'the other way around', ipa: '', pos: 'phr.', zh: '反过来', en: 'The state owns the DOM, not the other way around.', zhEx: '是状态拥有 DOM，不是反过来。', tags: ['work'] },
      { w: 'to be fair', ipa: '', pos: 'phr.', zh: '平心而论', en: 'To be fair, the old design scaled well.', zhEx: '平心而论，旧设计扩展性不错。', tags: ['work'] },
      { w: 'long story short', ipa: '', pos: 'phr.', zh: '长话短说', en: 'Long story short, we shipped on Friday.', zhEx: '长话短说，我们周五发布了。', tags: ['work'] },
      { w: 'a couple of', ipa: '', pos: 'phr.', zh: '两三个、几个', en: 'A couple of tests still fail.', zhEx: '还有两三个测试没过。', tags: ['work'] },
      { w: 'sort of', ipa: '', pos: 'phr.', zh: '有几分、算是', en: 'It is sort of a mini state machine.', zhEx: '它算是个小型状态机。', tags: ['work'] },
      { w: 'schedule', ipa: '/ˈskedʒuːl/', pos: 'n./v.', zh: '日程；安排', en: 'The reminder is scheduled for nine.', zhEx: '提醒安排在九点。', tags: ['work'] },
      { w: 'recurring', ipa: '/rɪˈkɜːrɪŋ/', pos: 'adj.', zh: '周期性的', en: 'Make the report a recurring task.', zhEx: '把报告设成周期任务。', tags: ['work'] },
      { w: 'backlog', ipa: '/ˈbæklɔːɡ/', pos: 'n.', zh: '待办积压', en: 'The backlog finally hit zero.', zhEx: '待办积压终于清零了。', tags: ['work'] },
      { w: 'estimate', ipa: '/ˈestɪmeɪt/', pos: 'v./n.', zh: '估算', en: 'Estimate the migration in days, not hours.', zhEx: '用天而不是小时来估迁移工作量。', tags: ['work'] },
      { w: 'overdue', ipa: '/ˌoʊvərˈduː/', pos: 'adj.', zh: '逾期、拖了很久的', en: 'The doc update is long overdue.', zhEx: '文档更新拖得太久了。', tags: ['core'] },
      { w: 'checklist', ipa: '/ˈtʃeklɪst/', pos: 'n.', zh: '清单', en: 'Run through the release checklist.', zhEx: '过一遍发布清单。', tags: ['work'] },
      { w: 'consistency', ipa: '/kənˈsɪstənsi/', pos: 'n.', zh: '一致性', en: 'Consistency beats cleverness in naming.', zhEx: '命名上一致性胜过小巧思。', tags: ['code'] },
      { w: 'readable', ipa: '/ˈriːdəbl/', pos: 'adj.', zh: '可读的、易读的', en: 'Prefer readable code over dense tricks.', zhEx: '宁可代码易读，也别堆技巧。', tags: ['code'] },
      { w: 'concise', ipa: '/kənˈsaɪs/', pos: 'adj.', zh: '简洁的', en: 'Keep the summary concise.', zhEx: '摘要保持简洁。', tags: ['code'] },
      { w: 'explicit', ipa: '/ɪkˈsplɪsɪt/', pos: 'adj.', zh: '明确的、显式的', en: 'Make the fallback explicit in the config.', zhEx: '在配置里把回退写明确。', tags: ['code'] },
      { w: 'verbose', ipa: '/vɜːrˈboʊs/', pos: 'adj.', zh: '冗长的', en: 'Verbose logs help here, oddly enough.', zhEx: '说来奇怪，冗长的日志在这儿帮了大忙。', tags: ['code'] },
      { w: 'reproduce', ipa: '/ˌriːprəˈduːs/', pos: 'v.', zh: '复现', en: 'I cannot reproduce it on Windows.', zhEx: '在 Windows 上我复现不了。', tags: ['code'] },
      { w: 'isolate', ipa: '/ˈaɪsəleɪt/', pos: 'v.', zh: '隔离', en: 'Isolate the failing case in a test.', zhEx: '把失败用例隔离到一个测试里。', tags: ['code'] },
      { w: 'deceptive', ipa: '/dɪˈseptɪv/', pos: 'adj.', zh: '有迷惑性的', en: 'The simple API is deceptive; it hides retries.', zhEx: '这个简单 API 有迷惑性，它藏着重试。', tags: ['core'] },
      { w: 'intuitive', ipa: '/ɪnˈtuːɪtɪv/', pos: 'adj.', zh: '直觉的、好懂的', en: 'The shortcut should feel intuitive.', zhEx: '快捷键应当符合直觉。', tags: ['frontend'] },
      { w: 'polish', ipa: '/ˈpɑːlɪʃ/', pos: 'v./n.', zh: '打磨', en: 'One more day to polish the details.', zhEx: '再用一天打磨细节。', tags: ['design'] },
      { w: 'subtle', ipa: '/ˈsʌtl/', pos: 'adj.', zh: '细微的、不易察觉的', en: 'A subtle glow marks the focused pane.', zhEx: '细微的微光标记聚焦的面板。', tags: ['design'] },
      { w: 'muted', ipa: '/ˈmjuːtɪd/', pos: 'adj.', zh: '柔和的、低饱和的', en: 'Use a muted compass for the empty state.', zhEx: '空状态用一个柔和的罗盘。', tags: ['design'] },
      { w: 'redundant', ipa: '/rɪˈdʌndənt/', pos: 'adj.', zh: '多余的、冗余的', en: 'The second guard is redundant.', zhEx: '第二个守卫是多余的。', tags: ['code'] },
      { w: 'power trading', ipa: '', pos: 'n.', zh: '电力交易', en: 'Power trading volumes have grown fast this year.', zhEx: '今年电力交易量增长很快。', tags: ['finance', 'industry'] },
      { w: 'electricity market', ipa: '', pos: 'n.', zh: '电力市场', en: 'The electricity market opens at 9 a.m.', zhEx: '电力市场每天早上九点开市。', tags: ['finance'] },
      { w: 'spot price', ipa: '', pos: 'n.', zh: '现货价格', en: 'Spot price jumped during the evening peak.', zhEx: '晚高峰时现货价格跳涨。', tags: ['finance'] },
      { w: 'peak load', ipa: '', pos: 'n.', zh: '高峰负荷', en: 'Peak load usually happens around 8 p.m.', zhEx: '高峰负荷通常出现在晚上八点前后。', tags: ['industry'] },
      { w: 'load curve', ipa: '', pos: 'n.', zh: '负荷曲线', en: 'The load curve is flattening thanks to storage.', zhEx: '有了储能，负荷曲线变得平缓了。', tags: ['industry'] },
      { w: 'bid', ipa: '/bɪd/', pos: 'n./v.', zh: '报价；出价', en: 'Our bid cleared at 0.42 yuan per kWh.', zhEx: '我们的报价以每度电 0.42 元出清。', tags: ['finance'] },
      { w: 'clearing price', ipa: '', pos: 'n.', zh: '出清价格', en: 'The clearing price fell below last week\'s average.', zhEx: '出清价格跌到上周平均水平以下。', tags: ['finance'] },
      { w: 'settlement', ipa: '/ˈsetlmənt/', pos: 'n.', zh: '结算', en: 'Monthly settlement takes about five working days.', zhEx: '月度结算大约需要五个工作日。', tags: ['finance'] },
      { w: 'deviation assessment', ipa: '', pos: 'n.', zh: '偏差考核', en: 'We got a fine in the deviation assessment.', zhEx: '我们在偏差考核里被罚了款。', tags: ['finance'] },
      { w: 'forecast error', ipa: '', pos: 'n.', zh: '预测偏差', en: 'Forecast error above 5% triggers a penalty.', zhEx: '预测偏差超过 5% 就会触发罚款。', tags: ['industry'] },
      { w: 'load forecasting', ipa: '', pos: 'n.', zh: '负荷预测', en: 'Load forecasting accuracy keeps improving.', zhEx: '负荷预测的准确率不断提高。', tags: ['industry'] },
      { w: 'renewable energy', ipa: '/rɪˈnjuːəbl ˈenədʒi/', pos: 'n.', zh: '可再生能源', en: 'Renewable energy now covers a third of our load.', zhEx: '可再生能源现在覆盖了我们三分之一的负荷。', tags: ['industry'] },
      { w: 'photovoltaic', ipa: '/ˌfoʊtoʊvɒlˈteɪɪk/', pos: 'adj.', zh: '光伏的', en: 'The photovoltaic plant was connected yesterday.', zhEx: '光伏电站昨天并网了。', tags: ['industry'] },
      { w: 'grid connection', ipa: '', pos: 'n.', zh: '并网', en: 'Grid connection tests passed on the first try.', zhEx: '并网测试一次通过。', tags: ['industry'] },
      { w: 'energy storage', ipa: '', pos: 'n.', zh: '储能', en: 'Energy storage helps us avoid peak prices.', zhEx: '储能帮我们避开高峰电价。', tags: ['industry'] },
      { w: 'ancillary services', ipa: '', pos: 'n.', zh: '辅助服务', en: 'Ancillary services bring extra revenue.', zhEx: '辅助服务带来额外收入。', tags: ['finance'] },
      { w: 'capacity market', ipa: '', pos: 'n.', zh: '容量市场', en: 'The capacity market rewards long-term supply.', zhEx: '容量市场奖励长期供给。', tags: ['finance'] },
      { w: 'time-of-use tariff', ipa: '', pos: 'n.', zh: '分时电价', en: 'A time-of-use tariff shifts usage to night hours.', zhEx: '分时电价把用电挪到了夜间。', tags: ['finance'] },
      { w: 'power purchase agreement', ipa: '', pos: 'n.', zh: '购电协议', en: 'They signed a ten-year power purchase agreement.', zhEx: '他们签了一份十年期购电协议。', tags: ['finance'] },
      { w: 'green certificate', ipa: '', pos: 'n.', zh: '绿证', en: 'Green certificates can be sold with the power.', zhEx: '绿证可以随电量一起出售。', tags: ['finance'] },
      { w: 'carbon emission', ipa: '', pos: 'n.', zh: '碳排放', en: 'Carbon emission targets are getting stricter.', zhEx: '碳排放目标越来越严格。', tags: ['industry'] },
      { w: 'curtailment', ipa: '/kɜːrˈteɪlmənt/', pos: 'n.', zh: '限电；弃电', en: 'Curtailment lost us 8% of output.', zhEx: '限电让我们损失了 8% 的出力。', tags: ['industry'] },
      { w: 'virtual power plant', ipa: '', pos: 'n.', zh: '虚拟电厂', en: 'A virtual power plant bundles small resources.', zhEx: '虚拟电厂把小资源打包起来。', tags: ['industry'] },
      { w: 'demand response', ipa: '', pos: 'n.', zh: '需求响应', en: 'Demand response pays users to cut load.', zhEx: '需求响应付费让用户削减负荷。', tags: ['industry'] },
      { w: 'sensor', ipa: '/ˈsensər/', pos: 'n.', zh: '传感器', en: 'Each sensor reports every ten seconds.', zhEx: '每个传感器每十秒上报一次。', tags: ['industry'] },
      { w: 'actuator', ipa: '/ˈæktʃueɪtər/', pos: 'n.', zh: '执行器', en: 'The actuator did not respond to the command.', zhEx: '执行器没有响应指令。', tags: ['industry'] },
      { w: 'gateway', ipa: '/ˈɡeɪtweɪ/', pos: 'n.', zh: '网关', en: 'The gateway buffers data when offline.', zhEx: '网关在断网时会缓存数据。', tags: ['industry'] },
      { w: 'field device', ipa: '', pos: 'n.', zh: '现场设备', en: 'Field devices were upgraded last month.', zhEx: '现场设备上个月完成了升级。', tags: ['industry'] },
      { w: 'firmware', ipa: '/ˈfɜːrmwer/', pos: 'n.', zh: '固件', en: 'The firmware update fixes a memory leak.', zhEx: '这次固件更新修复了内存泄漏。', tags: ['industry'] },
      { w: 'real-time monitoring', ipa: '', pos: 'n.', zh: '实时监控', en: 'Real-time monitoring cut downtime in half.', zhEx: '实时监控把停机时间减了一半。', tags: ['industry'] },
      { w: 'predictive maintenance', ipa: '', pos: 'n.', zh: '预测性维护', en: 'Predictive maintenance flags worn bearings early.', zhEx: '预测性维护能提前发现磨损的轴承。', tags: ['industry'] },
      { w: 'production line', ipa: '', pos: 'n.', zh: '生产线', en: 'The production line stops if pressure drops.', zhEx: '压力一降生产线就会停。', tags: ['industry'] },
      { w: 'yield', ipa: '/jiːld/', pos: 'n.', zh: '良率；产出', en: 'Yield improved after recalibration.', zhEx: '重新校准后良率提高了。', tags: ['industry'] },
      { w: 'commissioning', ipa: '/kəˈmɪʃənɪŋ/', pos: 'n.', zh: '调试验收', en: 'Commissioning starts next Monday.', zhEx: '调试验收下周一开始。', tags: ['industry'] },
      { w: 'programmable logic controller', ipa: '', pos: 'n.', zh: '可编程控制器（PLC）', en: 'The programmable logic controller lost its config.', zhEx: '可编程控制器的配置丢了。', tags: ['industry'] },
      { w: 'modbus', ipa: '', pos: 'n.', zh: 'Modbus 协议', en: 'The meter speaks Modbus over RS-485.', zhEx: '电表通过 RS-485 走 Modbus 协议。', tags: ['industry'] },
      { w: 'edge computing', ipa: '', pos: 'n.', zh: '边缘计算', en: 'Edge computing filters noise before upload.', zhEx: '边缘计算在上传前先滤掉噪声。', tags: ['industry'] },
      { w: 'protocol adaptation', ipa: '', pos: 'n.', zh: '协议适配', en: 'Protocol adaptation took two weeks.', zhEx: '协议适配花了两个星期。', tags: ['industry'] },
      { w: 'site survey', ipa: '', pos: 'n.', zh: '现场勘察', en: 'The site survey found weak signal coverage.', zhEx: '现场勘察发现信号覆盖较弱。', tags: ['industry'] },
      { w: 'downtime', ipa: '/ˈdaʊntaɪm/', pos: 'n.', zh: '停机时间', en: 'Unplanned downtime costs us a lot.', zhEx: '非计划停机让我们损失很大。', tags: ['industry'] },
      { w: 'alarm threshold', ipa: '', pos: 'n.', zh: '告警阈值', en: 'We lowered the alarm threshold to 80 ℃.', zhEx: '我们把告警阈值降到了 80 摄氏度。', tags: ['industry'] },
      { w: 'operating condition', ipa: '', pos: 'n.', zh: '工况', en: 'The pump works under harsh conditions.', zhEx: '这台泵在恶劣工况下运行。', tags: ['industry'] },
      { w: 'digital twin', ipa: '', pos: 'n.', zh: '数字孪生', en: 'A digital twin mirrors the whole plant.', zhEx: '数字孪生映射整个工厂。', tags: ['industry'] },
      { w: 'contract', ipa: '/ˈkɒntrækt/', pos: 'n.', zh: '合同', en: 'Please review the contract before Friday.', zhEx: '请在周五前审阅这份合同。', tags: ['legal'] },
      { w: 'terms and conditions', ipa: '', pos: 'n.', zh: '条款', en: 'Read the terms and conditions carefully.', zhEx: '请仔细阅读这些条款。', tags: ['legal'] },
      { w: 'liability', ipa: '/ˌlaɪəˈbɪləti/', pos: 'n.', zh: '责任；负债', en: 'The cap on liability is one year\'s fee.', zhEx: '责任上限为一年的费用。', tags: ['legal'] },
      { w: 'compliance', ipa: '/kəmˈplaɪəns/', pos: 'n.', zh: '合规', en: 'Compliance review happens every quarter.', zhEx: '合规审查每季度进行一次。', tags: ['legal'] },
      { w: 'regulation', ipa: '/ˌreɡjuˈleɪʃn/', pos: 'n.', zh: '法规；监管', en: 'New regulation takes effect in March.', zhEx: '新法规三月生效。', tags: ['legal'] },
      { w: 'negotiate', ipa: '/nɪˈɡoʊʃieɪt/', pos: 'v.', zh: '谈判；协商', en: 'We still need to negotiate the price.', zhEx: '我们还需要谈一下价格。', tags: ['business'] },
      { w: 'quote', ipa: '/kwoʊt/', pos: 'n./v.', zh: '报价', en: 'Send me a quote by the end of today.', zhEx: '今天下班前给我一份报价。', tags: ['business'] },
      { w: 'invoice', ipa: '/ˈɪnvɔɪs/', pos: 'n.', zh: '发票', en: 'The invoice was paid this morning.', zhEx: '发票今天上午已付。', tags: ['business'] },
      { w: 'budget', ipa: '/ˈbʌdʒɪt/', pos: 'n.', zh: '预算', en: 'The budget for next year is not fixed yet.', zhEx: '明年的预算还没定下来。', tags: ['business'] },
      { w: 'client', ipa: '/ˈklaɪənt/', pos: 'n.', zh: '客户', en: 'The client asked for a demo next week.', zhEx: '客户要求下周做一次演示。', tags: ['business'] },
      { w: 'supplier', ipa: '/səˈplaɪər/', pos: 'n.', zh: '供应商', en: 'We have three suppliers for this part.', zhEx: '这个零件我们有三家供应商。', tags: ['business'] },
      { w: 'profit margin', ipa: '', pos: 'n.', zh: '利润率', en: 'Our profit margin is getting thinner.', zhEx: '我们的利润率越来越薄。', tags: ['business'] },
      { w: 'cash flow', ipa: '', pos: 'n.', zh: '现金流', en: 'Cash flow is tight this quarter.', zhEx: '这个季度现金流比较紧。', tags: ['business'] },
      { w: 'stakeholder', ipa: '/ˈsteɪkhoʊldər/', pos: 'n.', zh: '干系人；利益相关方', en: 'Align with all stakeholders first.', zhEx: '先和所有干系人对齐。', tags: ['business'] },
      { w: 'deliver on time', ipa: '', pos: 'phr.', zh: '按时交付', en: 'We promised to deliver on time.', zhEx: '我们承诺过按时交付。', tags: ['business'] },
      { w: 'a complete line of', ipa: '', pos: 'adj. n.', zh: '完整系列产品/服务', en: 'We offer a complete line of office supplies, from pens to printers.', zhEx: '我们提供完整的办公用品系列，从笔到打印机。', tags: ['business'] },
      { w: 'a copy of', ipa: '', pos: 'phr.', zh: '一份副本；一份复本（通常指文档或数据）', en: 'Could you please send me a copy of the contract for review?', zhEx: '您能请寄一份合约副本给我审阅吗？', tags: ['work'] },
      { w: 'a glass of', ipa: '', pos: 'n.', zh: '一杯（装液体）', en: 'Could I have a glass of water, please?', zhEx: '请问可以给我一杯水吗？', tags: ['daily'] },
      { w: 'a great deal', ipa: '', pos: 'adv. adj.', zh: '大量的；许多（用于强调数量或程度）', en: 'The company invested a great deal of money in research and development.', zhEx: '公司在研发上投入了大量的资金。', tags: ['work'] },
      { w: 'a great deal of', ipa: '', pos: 'adv.', zh: '大量的；许多（用于不可数名词）', en: 'The company invested a great deal of money in research and development.', zhEx: '公司在研发上投入了大量的资金。', tags: ['work'] },
      { w: 'a large attendance', ipa: '', pos: 'n.', zh: '出席人数众多；参与人数庞大', en: 'The conference saw a large attendance, exceeding all expectations.', zhEx: '这次会议的出席人数非常踊跃，远超预期。', tags: ['work'] },
      { w: 'a letter of gratitude', ipa: '', pos: 'n.', zh: '感谢信；表达感谢的书面信函，通常用于正式场合。', en: 'After receiving excellent service, the manager sent a letter of gratitude to the hotel staff.', zhEx: '在获得了卓越的服务后，经理向酒店员工寄了一封感谢信。', tags: ['work'] },
      { w: 'a loaf of', ipa: '', pos: 'n.', zh: '一条（面包）；一整条（面包）', en: 'Could I have a loaf of whole wheat bread, please?', zhEx: '请问可以给我一条全麦面包吗？', tags: ['daily'] },
      { w: 'a number of', ipa: '', pos: 'adj.', zh: '许多；大量（指不确定数量，通常用于表示多个事物）', en: 'A number of employees have expressed concerns about the new policy.', zhEx: '许多员工对新政策表示担忧。', tags: ['work'] },
      { w: 'a piece of equipment', ipa: '', pos: 'n.', zh: '设备；机器（通常指用于特定目的的实体物品）', en: 'The IT department needs to purchase a new piece of equipment to upgrade the server.', zhEx: '信息部门需要购买新的设备来升级服务器。', tags: ['code'] },
      { w: 'a range of', ipa: '', pos: 'n.', zh: '一系列；多种选择；范围', en: 'The company offers a range of services to meet diverse client needs.', zhEx: '该公司提供一系列服务以满足不同的客户需求。', tags: ['work'] },
      { w: 'a selection of', ipa: '', pos: 'phr.', zh: '一系列；多种选择', en: 'The catalog offers a selection of high-quality office supplies.', zhEx: '这本目录提供了一系列高品质的办公用品。', tags: ['work'] },
      { w: 'a series of', ipa: '', pos: 'n.', zh: '一系列；一连串（通常指事件、步骤或项目）', en: 'The company is implementing a series of cost-cutting measures to improve profitability.', zhEx: '公司正在实施一系列降低成本的措施以提高盈利能力。', tags: ['work'] },
      { w: 'a sheet of', ipa: '', pos: 'n.', zh: '一张（纸）；一份（文档）', en: 'Could you please hand me a sheet of paper to take notes?', zhEx: '能请你把一张纸传给我做笔记吗？', tags: ['work'] },
      { w: 'a string of', ipa: '', pos: 'n.', zh: '一系列；一连串', en: 'The email contained a string of errors that needed to be corrected.', zhEx: '这封邮件包含了一连串需要修正的错误。', tags: ['work'] },
      { w: 'a variety of (= various)', ipa: '', pos: 'adj.', zh: '各式各样的；多种多样的（指数量或种类很多）', en: 'The company offers a variety of products to cater to different customer needs.', zhEx: '该公司提供多种产品以满足不同客户的需求。', tags: ['work'] },
      { w: 'abandoned', ipa: '', pos: 'adj.', zh: '被遗弃的；废弃的；（计划、项目等）被搁置的', en: 'The project was abandoned due to budget cuts and lack of resources.', zhEx: '由于预算削减和资源不足，该项目被搁置。', tags: ['business'] },
      { w: 'abbreviate', ipa: '', pos: 'v.', zh: '缩写；简略化（表达方式）', en: 'To save space, we often abbreviate company names in internal memos.', zhEx: '为了节省空间，我们经常在内部备忘录中缩写公司名称。', tags: ['work'] },
      { w: 'abide', ipa: '', pos: 'v.', zh: '忍受；遵守（规则、协议等）', en: 'All employees must abide by the company\'s code of conduct.', zhEx: '所有员工都必须遵守公司的行为准则。', tags: ['legal'] },
      { w: 'able', ipa: '', pos: 'adj. adv.', zh: '有能力、能够；胜任', en: 'The candidate is able to manage multiple projects simultaneously.', zhEx: '这位候选人能够同时管理多个项目。', tags: ['work'] },
      { w: 'aboard', ipa: '', pos: 'adv. prep.', zh: '登上（船、飞机、火车等）；在船、飞机、火车等上面', en: 'All passengers are requested to board the flight immediately.', zhEx: '请所有乘客立即登上飞机。', tags: ['travel'] },
      { w: 'abolish', ipa: '', pos: 'v.', zh: '废除；取消（法律、制度等）', en: 'The company decided to abolish the outdated policy to improve efficiency.', zhEx: '为了提高效率，公司决定废除过时的政策。', tags: ['legal'] },
      { w: 'about', ipa: '', pos: 'prep. adv.', zh: '关于；大约；在…周围；即将', en: 'The meeting is about the new marketing strategy.', zhEx: '这次会议是关于新的行销策略。', tags: ['work'] },
      { w: 'above', ipa: '', pos: 'prep. adv.', zh: '在...上方；高于；超过（数量、程度）；优于；上述的；在上方', en: 'The temperature is expected to rise above 30 degrees Celsius today.', zhEx: '今天气温预计会升至摄氏30度以上。', tags: ['work'] },
      { w: 'abroad', ipa: '', pos: 'adv. prep.', zh: '在国外；在海外', en: 'The company is expanding its operations abroad.', zhEx: '该公司正在海外扩展业务。', tags: ['work'] },
      { w: 'abruptly', ipa: '', pos: 'adv.', zh: '突然地；骤然地', en: 'The meeting was abruptly canceled due to unforeseen circumstances.', zhEx: '由于突发状况，会议突然被取消。', tags: ['work'] },
      { w: 'absence', ipa: '', pos: 'n.', zh: '缺席；不在场', en: 'Due to his absence from the meeting, Mr. Lee missed the crucial decision.', zhEx: '由于李先生缺席会议，他错过了重要的决策。', tags: ['work'] },
      { w: 'absent', ipa: '', pos: 'adj. adv.', zh: '缺席的；不在场的；缺勤的', en: 'The employee was absent from the meeting due to a family emergency.', zhEx: '这位员工因家里突发状况缺席会议。', tags: ['work'] },
      { w: 'absolute', ipa: '', pos: 'adj. adv.', zh: '绝对的；完全的；无可争议的', en: 'The company has an absolute commitment to providing high-quality products.', zhEx: '公司对提供高品质产品有绝对的承诺。', tags: ['work'] },
      { w: 'absolutely', ipa: '', pos: 'adv.', zh: '完全地；绝对地，表示肯定或无疑。', en: 'I absolutely agree with your proposal to streamline the workflow.', zhEx: '我完全同意你简化工作流程的建议。', tags: ['work'] },
      { w: 'absorb', ipa: '', pos: 'v.', zh: '吸收；接收（信息、知识、冲击等）；（材料）吸收（液体、热量等）', en: 'The company needs to absorb the new regulations into its operational procedures.', zhEx: '公司需要将新的法规纳入其营运进程。', tags: ['work'] },
      { w: 'absorption', ipa: '', pos: 'n.', zh: '吸收；全神贯注；并购', en: 'The absorption of the smaller company into the large corporation boosted their market share.', zhEx: '较小的公司被大企业并购后，提升了他们的市场占有率。', tags: ['finance'] },
      { w: 'abstract', ipa: '', pos: 'adj. n.', zh: '抽象的；概括的；不具体的；概念性的', en: 'The report contains some abstract ideas that require further clarification.', zhEx: '这份报告包含一些需要进一步澄清的抽象概念。', tags: ['work'] },
      { w: 'abundant', ipa: '', pos: 'adj.', zh: '丰富的；大量的；充沛的', en: 'The company has abundant resources to invest in new technologies.', zhEx: '公司拥有充足的资源来投资新技术。', tags: ['business'] },
      { w: 'abundantly', ipa: '', pos: 'adv.', zh: '充裕地；大量地；丰富地', en: 'The company has resources abundantly available to support the new project.', zhEx: '公司拥有大量资源来支持新项目。', tags: ['business'] },
      { w: 'abuse', ipa: '', pos: 'v. n.', zh: '滥用；不当利用；虐待（权力、资源等）', en: 'The company has a strict policy against the abuse of company resources.', zhEx: '公司对公司资源的滥用有严格的政策。', tags: ['work'] },
      { w: 'abused', ipa: '', pos: 'v. adj.', zh: '遭受虐待或不当对待；被滥用（资源、权力等）', en: 'The company is investigating allegations that employees were abused by a supervisor.', zhEx: '公司正在调查关于员工被主管虐待的指控。', tags: ['work'] },
      { w: 'abusing', ipa: '', pos: 'v.', zh: '滥用；不当利用（资源、权力等）', en: 'The company has a strict policy against employees abusing their expense accounts.', zhEx: '公司对员工滥用费用报销帐户有严格的政策。', tags: ['work'] },
      { w: 'academic', ipa: '', pos: 'adj.', zh: '与学术相关的；学术性的', en: 'The conference focused on academic research in the field of artificial intelligence.', zhEx: '这次会议的重点是人工智能领域的学术研究。', tags: ['work'] },
      { w: 'accelerate', ipa: '', pos: 'v.', zh: '加速；加快（速度、进度等）', en: 'The company needs to accelerate its product development to stay competitive.', zhEx: '为了保持竞争力，公司需要加速其产品开发进度。', tags: ['business'] },
      { w: 'acceleration', ipa: '', pos: 'n.', zh: '加速；促进', en: 'The department implemented innovative acceleration procedures to improve operational efficiency.', zhEx: '部门实施创新的acceleration进程以提高营运效率。', tags: ['work'] },
      { w: 'accent', ipa: '', pos: 'n.', zh: '口音；语调，指说话者所使用的方言或地区性语言特征。', en: 'Despite his slight American accent, he speaks fluent Mandarin.', zhEx: '尽管他带有一点美国口音，但他讲流利的普通话。', tags: ['work'] },
      { w: 'accept', ipa: '', pos: 'v.', zh: '接受；同意；答允', en: 'The company will accept credit card payments from now on.', zhEx: '从现在开始，公司将接受信用卡付款。', tags: ['work'] },
      { w: 'acceptable', ipa: '', pos: 'adj.', zh: '可接受的；令人满意的（通常指符合标准或期望）', en: 'The project proposal was deemed acceptable by the board of directors.', zhEx: '该项目提案已获得董事会的批准。', tags: ['work'] },
      { w: 'acceptance', ipa: '', pos: 'n.', zh: '接受；同意；批准', en: 'We are awaiting formal acceptance of the contract from the vendor.', zhEx: '我们正在等待供应商正式接受合约。', tags: ['work'] },
      { w: 'accepted', ipa: '', pos: 'adj.', zh: '被接受；同意；批准', en: 'The proposal was accepted by the board of directors.', zhEx: '该提案已获得董事会的批准。', tags: ['work'] },
      { w: 'accepting', ipa: '', pos: 'adj. v.', zh: '接受；同意；容纳', en: 'The company is accepting applications for the marketing manager position until the end of the month.', zhEx: '公司将接受市场经理职位的申请，截止日期为本月底。', tags: ['work'] },
      { w: 'access', ipa: '', pos: 'n. v.', zh: '访问；接近权限；进入权限', en: 'Employees need to access the company\'s database to retrieve sales figures.', zhEx: '员工需要访问公司数据库以取得销售数据。', tags: ['code'] },
      { w: 'accessible', ipa: '', pos: 'adj.', zh: '易于取得或使用的；可进入的；可负担的', en: 'The company website is designed to be accessible to users with disabilities.', zhEx: '该公司网站的设计旨在方便身心障碍人士使用。', tags: ['work'] },
      { w: 'accessories', ipa: '', pos: 'n.', zh: '配饰；附加品（通常指服装、包袋等用于装饰或搭配的物品）', en: 'The boutique offers a wide range of accessories, including scarves, belts, and jewelry.', zhEx: '这家精品店提供各式各样的配饰，包括围巾、皮带和珠宝。', tags: ['business'] },
      { w: 'accessory', ipa: '', pos: 'n. adj.', zh: '配件；附件；从犯；附属的；辅助的', en: 'The store offers a wide range of car accessories, from seat covers to navigation systems.', zhEx: '这家商店提供各种汽车配件，从座套到导航系统一应俱全。', tags: ['work'] },
      { w: 'accident', ipa: '', pos: 'n.', zh: '意外事故；意外事件，通常指造成损害或伤害的事件。', en: 'The company is investigating the accident to determine the cause and prevent future incidents.', zhEx: '公司正在调查这起意外事故，以确定原因并防止未来发生类似事件。', tags: ['legal'] },
      { w: 'accidentally', ipa: '', pos: 'adv.', zh: '不小心地；意外地（指因疏忽或未经意间发生的事情）', en: 'I accidentally deleted the important file; I\'m so sorry.', zhEx: '我不小心删除了重要的文件，我非常抱歉。', tags: ['work'] },
      { w: 'acclaim', ipa: '', pos: 'v. n.', zh: '赞誉；好评；盛赞', en: 'The new product received widespread acclaim from industry experts.', zhEx: '这款新产品获得了业界专家们的广泛赞誉。', tags: ['business'] },
      { w: 'accommodate', ipa: '', pos: 'v.', zh: '容纳、适应、满足（需求或要求）', en: 'The hotel can accommodate up to 200 guests for the conference.', zhEx: '这家饭店可以容纳最多 200 位嘉宾参加会议。', tags: ['business'] },
      { w: 'accommodation', ipa: '', pos: 'n.', zh: '住宿；膳宿安排；（公司提供的）住宿福利', en: 'The company provides accommodation and meals for all overseas employees.', zhEx: '公司为所有海外员工提供住宿和膳食。', tags: ['daily'] },
      { w: 'accompanied', ipa: '', pos: 'v.', zh: '伴随；随同；与...同时发生', en: 'The sales representative was accompanied by a technical expert during the client meeting.', zhEx: '销售代表在客户会议期间与一位技术专家一同出席。', tags: ['work'] },
      { w: 'accompany', ipa: '', pos: 'v.', zh: '陪伴；随同；伴随', en: 'The marketing team will accompany the CEO on the business trip to Tokyo.', zhEx: '行销团队将陪同 CEO 前往东京进行商务旅行。', tags: ['work'] },
      { w: 'accomplish', ipa: '', pos: 'v.', zh: '完成；达成（目标、任务等）', en: 'The project team managed to accomplish all the objectives within the deadline.', zhEx: '项目团队成功在期限内完成了所有目标。', tags: ['work'] },
      { w: 'accomplished', ipa: '', pos: 'adj.', zh: '（尤指在某方面）有成就的；技艺精湛的', en: 'The company is proud to have an accomplished sales team that consistently exceeds targets.', zhEx: '公司很自豪拥有一支技艺精湛的销售团队，他们始终能超越目标。', tags: ['work'] },
      { w: 'accomplishment', ipa: '', pos: 'n.', zh: '成就；完成', en: 'The department implemented innovative accomplishment procedures to improve operational efficiency.', zhEx: '部门实施创新的accomplishment进程以提高营运效率。', tags: ['work'] },
      { w: 'accord', ipa: '', pos: 'n. v.', zh: '一致；协调；达成协议', en: 'The two companies reached an accord on the terms of the merger.', zhEx: '这两家公司就合并条款达成一致。', tags: ['work'] },
      { w: 'accordance', ipa: '', pos: 'prep. adv.', zh: '依照；符合；根据', en: 'The company operates in accordance with all relevant regulations.', zhEx: '公司依照所有相关法规运作。', tags: ['work'] },
      { w: 'according', ipa: '', pos: 'adv. prep.', zh: '根据；依照；根据…的', en: 'The project timeline is according to the client\'s specifications.', zhEx: '项目时间表依照客户的规格。', tags: ['work'] },
      { w: 'according to', ipa: '', pos: 'adv. prep.', zh: '根据；依照；根据…的说法', en: 'According to the report, sales increased by 15% this quarter.', zhEx: '根据报告，本季销售额增加了 15%。', tags: ['work'] },
      { w: 'account', ipa: '', pos: 'n. v.', zh: '帐户；纪录；说明；负责人', en: 'The company needs to reconcile its bank accounts monthly.', zhEx: '公司需要每月对帐户进行核对。', tags: ['finance'] },
      { w: 'account payable', ipa: '', pos: 'n.', zh: '应付帐款，指企业欠供应商或其他债权人的款项，尚未支付的负债。', en: 'The accounts payable department is responsible for processing invoices and ensuring timely payments to vendors.', zhEx: '应付帐款部门负责处理发票并确保及时向供应商付款。', tags: ['finance'] },
      { w: 'accountability', ipa: '', pos: 'n.', zh: '责任制', en: 'The company\'s new accountability initiative exceeded expectations in the first quarter.', zhEx: '公司的新accountability计划在第一季度超出了预期。', tags: ['work'] },
      { w: 'accountable', ipa: '', pos: 'adj. v.', zh: '负责；对...负责；可追溯的', en: 'Each department is accountable for meeting its quarterly sales targets.', zhEx: '每个部门都需对达成季度销售目标负责。', tags: ['business'] },
      { w: 'accountant', ipa: '', pos: 'n.', zh: '会计师；负责公司财务帐务处理的人员。', en: 'The company hired an accountant to manage their financial records.', zhEx: '公司聘请了一位会计师来管理他们的财务记录。', tags: ['finance'] },
      { w: 'accounting', ipa: '', pos: 'n.', zh: '会计；指企业或组织对财务交易的记录、分类、汇总与报告的系统与进程。', en: 'The accounting department will finalize the quarterly financial statements by Friday.', zhEx: '会计部门将于周五完成本季财务报表的最终整理。', tags: ['finance'] },
      { w: 'accredit', ipa: '', pos: 'v.', zh: '认证；核可（某机构或组织符合特定标准）', en: 'The university is seeking accreditation from a recognized international body.', zhEx: '这所大学正在寻求从国际认可机构获得认证。', tags: ['business'] },
      { w: 'accrue', ipa: '', pos: 'v.', zh: '累积；逐渐增加（通常指金额、利息、权益等）', en: 'Interest will accrue on the outstanding balance if payment is not received by the due date.', zhEx: '如果未在到期日之前收到付款，未偿余额将产生利息。', tags: ['finance'] },
      { w: 'accumulated', ipa: '', pos: 'adj.', zh: '累积的；积累的；(费用、债务等) 累积的', en: 'The company has accumulated a significant amount of debt over the past year.', zhEx: '过去一年，该公司累积了相当多的债务。', tags: ['finance'] },
      { w: 'accumulation', ipa: '', pos: 'n.', zh: '累积；积累；堆积', en: 'The company is experiencing a significant accumulation of inventory due to decreased sales.', zhEx: '由于销售额下降，公司正经历大量库存积累。', tags: ['business'] },
      { w: 'accuracy', ipa: '', pos: 'n. adj.', zh: '精确度；准确性，指符合事实或标准的程度。', en: 'The report needs to be checked for accuracy before it\'s submitted to the board.', zhEx: '报告在提交给董事会之前，需要检查其准确性。', tags: ['work'] },
      { w: 'accurate', ipa: '', pos: 'adj.', zh: '精确的；准确的；无误的，符合事实的', en: 'The report needs to be reviewed to ensure the data is accurate.', zhEx: '需要审阅报告以确保数据的准确性。', tags: ['work'] },
      { w: 'accurately', ipa: '', pos: 'adv.', zh: '精确地；准确地，尤其指在数据、报告或信息方面', en: 'The report needs to be updated to accurately reflect the current market trends.', zhEx: '报告需要更新，以准确反映目前的市场趋势。', tags: ['work'] },
      { w: 'accusation', ipa: '', pos: 'n.', zh: '控告；指控；谴责', en: 'The manager faced an accusation of unethical behavior.', zhEx: '经理面临不道德行为的指控。', tags: ['work'] },
      { w: 'accuse', ipa: '', pos: 'v.', zh: '指控；指责', en: 'The company accused the supplier of delivering substandard materials.', zhEx: '该公司指控供应商交付了品质不佳的材料。', tags: ['work'] },
      { w: 'accused', ipa: '', pos: 'adj. v.', zh: '被指控；被控告', en: 'The former employee was accused of leaking confidential company data.', zhEx: '这位前员工被指控泄漏了公司的机密数据。', tags: ['legal'] },
      { w: 'accustom', ipa: '', pos: 'v. adj.', zh: '使习惯于；使适应', en: 'It takes time to accustom yourself to a new working environment.', zhEx: '习惯新的工作环境需要时间。', tags: ['work'] },
      { w: 'accustomed', ipa: '', pos: 'adj.', zh: '习惯于；适应于', en: 'Our team is accustomed to working long hours during peak season.', zhEx: '我们的团队习惯在旺季工作长时间。', tags: ['work'] },
      { w: 'achievable', ipa: '', pos: 'adj.', zh: '可实现的；可达成的', en: 'The company set an achievable sales target for the new quarter.', zhEx: '公司为新季度设置了一个可实现的销售目标。', tags: ['work'] },
      { w: 'achieve', ipa: '', pos: 'v.', zh: '达成；实现（目标、成就）', en: 'The company aims to achieve a 15% increase in sales this quarter.', zhEx: '本公司本季目标达成 15% 的销售额增长。', tags: ['business'] },
      { w: 'achieve one’s goal', ipa: '', pos: 'v.', zh: '达成目标；实现目标', en: 'The company aims to achieve a 15% increase in sales this quarter.', zhEx: '本公司本季目标是达成 15% 的销售额增长。', tags: ['business'] },
      { w: 'achievement', ipa: '', pos: 'n.', zh: '成就', en: 'The company\'s new achievement initiative exceeded expectations in the first quarter.', zhEx: '公司的新achievement计划在第一季度超出了预期。', tags: ['work'] },
      { w: 'achiever', ipa: '', pos: 'n.', zh: '绩效达成者；有成就者，通常指在工作或学业上表现出色的人。', en: 'Our company seeks to identify and recruit high-potential achievers.', zhEx: '我们公司致力于识别并招募具有高潜力的绩效达成者。', tags: ['work'] },
      { w: 'achieving', ipa: '', pos: 'v. adj.', zh: '达成；实现；完成（目标、成就等）', en: 'The company is focused on achieving its sales targets for the quarter.', zhEx: '公司专注于实现本季的销售目标。', tags: ['business'] },
      { w: 'acknowledging', ipa: '', pos: 'v.', zh: '表示理解、同意或接受某事；认可', en: 'The company acknowledged the customer\'s complaint and offered a full refund.', zhEx: '公司已承认客户的投诉，并提供全额退款。', tags: ['work'] },
      { w: 'acquaint', ipa: '', pos: 'v.', zh: '使…熟悉；使…认识（某人或某事）', en: 'The new employee needs to be acquainted with the company\'s policies and procedures.', zhEx: '这位新进员工需要熟悉公司的政策和流程。', tags: ['work'] },
      { w: 'acquaintance', ipa: '', pos: 'n.', zh: '认识的人，熟人（但不深交）', en: 'I have a few acquaintances in the marketing department, but I don\'t know them very well.', zhEx: '我在行销部门有一些熟人，但我不认识他们很熟。', tags: ['work'] },
      { w: 'acquire', ipa: '', pos: 'v.', zh: '获得；取得（通常指通过努力或购买）', en: 'The company aims to acquire a new software license to improve operational efficiency.', zhEx: '公司计划购买新的软件授权，以提高营运效率。', tags: ['work'] },
      { w: 'acquired', ipa: '', pos: 'adj.', zh: '获得的；后天学得的；取得的', en: 'The company has acquired a reputation for excellent customer service.', zhEx: '该公司已获得良好的客户服务声誉。', tags: ['work'] },
      { w: 'acquisition', ipa: '', pos: 'n.', zh: '收购；取得；获得（通常指企业或资产）', en: 'The company announced the acquisition of a smaller competitor to expand its market share.', zhEx: '该公司宣布收购一家规模较小的竞争对手，以扩大其市场份额。', tags: ['business'] },
      { w: 'across', ipa: '', pos: 'prep. adv.', zh: '横跨；穿过；在...的另一边', en: 'The new bridge will allow employees to walk across the street to the office building.', zhEx: '新的桥梁将允许员工横过马路前往办公大楼。', tags: ['work'] },
      { w: 'across from', ipa: '', pos: 'prep. adv.', zh: '在...的对面；位于...的另一侧', en: 'The office building is located across from the train station, making it easily accessible for employees.', zhEx: '办公大楼位于火车站的对面，方便员工前往。', tags: ['work'] },
      { w: 'across the street', ipa: '', pos: 'prep. adv.', zh: '在...的对街；位于...的另一侧', en: 'The office building is located across the street from the train station.', zhEx: '办公大楼位于火车站的对街。', tags: ['travel'] },
      { w: 'act', ipa: '', pos: 'n. v.', zh: '行动；行为；扮演（角色）', en: 'The company is taking swift action to address the recent data breach.', zhEx: '公司正迅速采取行动以应对最近发生的数据外泄事件。', tags: ['work'] },
      { w: 'acting', ipa: '', pos: 'n. v.', zh: '表演；演出（通常指戏剧、电影等）', en: 'The company hired an acting coach to improve the team\'s presentation skills.', zhEx: '公司聘请了一位表演老师来提升团队的演示文稿技巧。', tags: ['work'] },
      { w: 'action', ipa: '', pos: 'n. v.', zh: '行动；为解决问题或达成目标而采取的具体措施或步骤，常用于商务环境中。', en: 'The project manager outlined the next actions required to meet the deadline.', zhEx: '项目经理说明了为了赶上截止日期所需采取的下一步行动。', tags: ['business'] },
      { w: 'activate', ipa: '', pos: 'v.', zh: '启动；激活；使生效', en: 'Please activate your account by clicking the link in the confirmation email.', zhEx: '请点击确认邮件中的链接以激活您的帐户。', tags: ['code'] },
      { w: 'activated', ipa: '', pos: 'v. adj.', zh: '启动；激活；使生效', en: 'The security system was activated by the motion sensor.', zhEx: '运动感应器启动了安全系统。', tags: ['code'] },
      { w: 'activation', ipa: '', pos: 'n.', zh: '启动；激活；触发', en: 'Please follow the instructions for product activation after installation.', zhEx: '请按照说明在安装后完成产品启动。', tags: ['code'] },
      { w: 'active', ipa: '', pos: 'adj. v.', zh: '积极的；活跃的；正在运作的', en: 'The company is actively seeking new markets to expand its business.', zhEx: '该公司正积极寻找新的市场以扩展其业务。', tags: ['work'] },
      { w: 'actively', ipa: '', pos: 'adv.', zh: '积极地；活跃地；主动地', en: 'The company is actively seeking new talent to join its team.', zhEx: '该公司正积极寻找新人才加入其团队。', tags: ['work'] },
      { w: 'activities', ipa: '', pos: 'n.', zh: '活动；事务；业务', en: 'The company organizes team-building activities to improve employee morale.', zhEx: '公司组织团队建设活动以提升员工士气。', tags: ['work'] },
      { w: 'activity', ipa: '', pos: 'n.', zh: '活动；事务；业务', en: 'The company organized a team-building activity to improve employee morale.', zhEx: '公司组织了一项团队建设活动以提升员工士气。', tags: ['work'] },
      { w: 'actor', ipa: '', pos: 'n.', zh: '演员；表演者（通常指电影、电视或舞台上的）', en: 'The company hired a well-known actor to endorse their new product.', zhEx: '该公司聘请了一位知名的演员来代言他们的新产品。', tags: ['business'] },
      { w: 'actual', ipa: '', pos: 'adj.', zh: '实际的；真实的；现实的', en: 'The actual cost of the project exceeded the initial budget by 15%.', zhEx: '项目的实际成本比最初预算高出 15%。', tags: ['work'] },
      { w: 'actually', ipa: '', pos: 'adv.', zh: '实际上；原来；事实上（用于强调或修正之前的说法）', en: 'Actually, the project deadline has been extended to next Friday.', zhEx: '实际上，这个项目的截止日期已经延迟到下周五。', tags: ['work'] },
      { w: 'acute', ipa: '', pos: 'adj.', zh: '急性的；严重的；敏锐的（指疼痛、问题或情况）', en: 'The company is facing an acute shortage of skilled labor.', zhEx: '公司正面临严重的技术人才短缺。', tags: ['work'] },
      { w: 'ad', ipa: '', pos: 'n.', zh: '广告（advertisement 的缩写）', en: 'We need to run an ad in the local newspaper to promote our new product.', zhEx: '我们需要在当地报纸上刊登一则广告来推广我们的新产品。', tags: ['business'] },
      { w: 'adapt', ipa: '', pos: 'v.', zh: '适应；调整；使符合', en: 'The company needs to adapt its marketing strategy to the changing market trends.', zhEx: '公司需要调整其行销策略以适应不断变化的市场趋势。', tags: ['business'] },
      { w: 'adaptability', ipa: '', pos: 'n.', zh: '适应性；变通能力，指在不同环境或情况下调整和应变的能力。', en: 'The company values employees with a high degree of adaptability to handle unexpected changes in the market.', zhEx: '公司重视具备高度适应性的员工，以应对市场上突发的变化。', tags: ['work'] },
      { w: 'adaptable', ipa: '', pos: 'adj.', zh: '适应性强的；能适应变化的', en: 'The company needs employees who are adaptable to changing market conditions.', zhEx: '公司需要能够适应市场变化的人才。', tags: ['work'] },
      { w: 'adaptation', ipa: '', pos: 'n.', zh: '适应；改编', en: 'The company\'s adaptation approach needs to be updated.', zhEx: '公司的适应方法需要更新。', tags: ['work'] },
      { w: 'adapted', ipa: '', pos: 'v. adj.', zh: '调整、适应（以符合新的条件或需求）', en: 'The company has adapted its marketing strategy to appeal to a younger demographic.', zhEx: '公司已调整其行销策略，以吸引年轻族群。', tags: ['business'] },
      { w: 'adapter', ipa: '', pos: 'n.', zh: '转接器；转换器；适配器', en: 'I need an adapter to connect my old monitor to the new laptop.', zhEx: '我需要一个转接器才能把我的旧屏幕接到新笔电上。', tags: ['code'] },
      { w: 'adapting', ipa: '', pos: 'v. adj.', zh: '适应；调整以符合新的条件或情况', en: 'The company is adapting its marketing strategy to reach a younger demographic.', zhEx: '公司正在调整其行销策略，以接触年轻族群。', tags: ['business'] },
      { w: 'adaptive', ipa: '', pos: 'adj.', zh: '适应性的；能适应的', en: 'The company needs an adaptive strategy to respond to rapid market changes.', zhEx: '公司需要一个适应性策略来应对快速的市场变化。', tags: ['work'] },
      { w: 'add', ipa: '', pos: 'v.', zh: '增加；加上；添加', en: 'Could you please add this item to the purchase order?', zhEx: '您能请将此项目加入购买订单吗？', tags: ['work'] },
      { w: 'add up to', ipa: '', pos: 'v.', zh: '加总后等于；总计为', en: 'The total expenses for the project add up to $10,000.', zhEx: '这个项目的总费用加总后等于 10,000 美元。', tags: ['finance'] },
      { w: 'added', ipa: '', pos: 'v. adj.', zh: '添加；附加；增加', en: 'The marketing team added a new feature to the product to attract more customers.', zhEx: '行销团队为产品添加了一个功能，以吸引更多客户。', tags: ['work'] },
      { w: 'added benefits', ipa: '', pos: 'n.', zh: '额外福利；附加价值', en: 'The company offers a competitive salary and a range of added benefits, such as health insurance and a retirement plan.', zhEx: '该公司提供具竞争力的薪资以及一系列额外福利，例如健康保险和退休计划。', tags: ['work'] },
      { w: 'addicted', ipa: '', pos: 'adj. v.', zh: '对某事物产生强烈成瘾，无法自拔；沉迷于某事物。', en: 'The company is concerned that some employees are addicted to social media during work hours.', zhEx: '公司担心有些员工在工作时间沉迷于社群媒体。', tags: ['business'] },
      { w: 'adding', ipa: '', pos: 'v. adj.', zh: '增加；附加；增添', en: 'The company is adding new features to its software to improve user experience.', zhEx: '该公司正在为其软件添加功能，以改善用户体验。', tags: ['work'] },
      { w: 'addition', ipa: '', pos: 'n.', zh: '加法；额外增加；附加物', en: 'The project budget requires an addition of $5,000 for unexpected expenses.', zhEx: '项目预算需要额外增加 5,000 美元以应付 непредвиденные расходы。', tags: ['work'] },
      { w: 'additional', ipa: '', pos: 'adj. adv.', zh: '额外的；附加的；补充的', en: 'The company is offering an additional 10% discount for loyal customers.', zhEx: '公司为忠诚客户提供额外 10% 的折扣。', tags: ['work'] },
      { w: 'additional charge', ipa: '', pos: 'n.', zh: '额外费用；附加费用', en: 'There will be an additional charge for baggage exceeding the weight limit.', zhEx: '超重行李将收取额外费用。', tags: ['daily'] },
      { w: 'additional fee', ipa: '', pos: 'n.', zh: '额外费用；附加费用（通常指超出基本价格的额外收费）', en: 'Please note that there may be an additional fee for express shipping.', zhEx: '请注意，快递服务可能会有额外费用。', tags: ['travel'] },
      { w: 'additionally', ipa: '', pos: 'adv.', zh: '此外；另外；额外地', en: 'The project budget has increased; additionally, the deadline has been extended.', zhEx: '项目预算已增加；此外，截止日期也已延长。', tags: ['work'] },
      { w: 'address', ipa: '', pos: 'n. v.', zh: '地址；（正式）称谓；处理（问题、信件等）', en: 'Please send the invoice to the following address.', zhEx: '请将发票寄至以下地址。', tags: ['work'] },
      { w: 'address the audience', ipa: '', pos: 'v.', zh: '向听众发表演讲或说明；就某议题向听众提出看法。', en: 'The CEO will address the audience regarding the company\'s quarterly performance.', zhEx: '首席执行官将向听众说明公司本季的业绩表现。', tags: ['work'] },
      { w: 'addressed', ipa: '', pos: 'v.', zh: '（正式地）处理；解决；（信件、包裹等）寄达', en: 'The manager addressed the team\'s concerns about the new project timeline.', zhEx: '经理解决了团队对新项目时间表的担忧。', tags: ['work'] },
      { w: 'addressing', ipa: '', pos: 'v. adj.', zh: '处理；解决；（信件、包裹等）寄送至；（问题、议题等）探讨', en: 'The IT department is addressing the network outage as a top priority.', zhEx: '信息部门正将网络中断视为首要任务来处理。', tags: ['work'] },
      { w: 'adept', ipa: '', pos: 'adj.', zh: '擅长；精通；熟练', en: 'She is adept at using various software programs, making her a valuable asset to the team.', zhEx: '她擅长使用各种软件程序，使她成为团队中宝贵的资产。', tags: ['work'] },
      { w: 'adequate', ipa: '', pos: 'adj.', zh: '足够的；适当的；满足需求的', en: 'The company\'s current resources are adequate to handle the project\'s initial phase.', zhEx: '目前公司的资源足以应付项目的初步阶段。', tags: ['work'] },
      { w: 'adequately', ipa: '', pos: 'adv.', zh: '充份地；适当地；足以', en: 'The company ensured that all employees were adequately trained before taking on new responsibilities.', zhEx: '公司确保所有员工在承担新职责之前都得到了充分的培训。', tags: ['work'] },
      { w: 'adhere', ipa: '', pos: 'v.', zh: '遵守；坚持；黏附', en: 'All employees are required to adhere to the company\'s code of conduct.', zhEx: '所有员工都必须遵守公司的行为准则。', tags: ['work'] },
      { w: 'adjacent', ipa: '', pos: 'adj.', zh: '紧邻的；相邻的', en: 'The conference room is adjacent to the cafeteria, making it convenient for attendees to grab lunch.', zhEx: '会议室紧邻餐厅，让与会者方便用餐。', tags: ['work'] },
      { w: 'adjourn', ipa: '', pos: 'v.', zh: '暂缓、延期（会议、审判等）', en: 'Due to unforeseen circumstances, the meeting will be adjourned until next week.', zhEx: '由于突发状况，会议将延期至下周举行。', tags: ['work'] },
      { w: 'adjust', ipa: '', pos: 'v.', zh: '调整；适应；修改', en: 'Please adjust the font size to 12 points for better readability.', zhEx: '请将字体大小调整为 12 点，以提高可读性。', tags: ['work'] },
      { w: 'adjust the mirror', ipa: '', pos: 'v.', zh: '调整镜子，通常指调整车辆后视镜或化妆镜等。', en: 'Before driving, please adjust the mirror to ensure optimal visibility.', zhEx: '开车前，请调整后视镜以确保最佳视野。', tags: ['travel'] },
      { w: 'adjusted', ipa: '', pos: 'adj. v.', zh: '调整；修改（以符合特定标准或需求）', en: 'The project timeline was adjusted to accommodate the unexpected delay.', zhEx: '项目时程因突发延迟而被调整。', tags: ['work'] },
      { w: 'adjustment', ipa: '', pos: 'n.', zh: '调整；适应', en: 'The department implemented innovative adjustment procedures to improve operational efficiency.', zhEx: '部门实施创新的adjustment进程以提高营运效率。', tags: ['work'] },
      { w: 'admin', ipa: '', pos: 'n.', zh: '管理者；管理员；系统管理员', en: 'The IT admin is responsible for maintaining the company\'s network security.', zhEx: 'IT 管理员负责维护公司的网络安全。', tags: ['code'] },
      { w: 'administer', ipa: '', pos: 'v.', zh: '管理；运行；提供（测试、药物等）', en: 'The HR department will administer the employee performance review process.', zhEx: '人力资源部门将管理员工绩效考核流程。', tags: ['work'] },
      { w: 'administration', ipa: '', pos: 'n.', zh: '行政管理；管理层；行政部门', en: 'The company\'s administration is responsible for handling employee benefits and payroll.', zhEx: '公司的行政部门负责处理员工福利和薪资。', tags: ['work'] },
      { w: 'administrative', ipa: '', pos: 'adj.', zh: '与行政管理相关的；行政上的', en: 'The administrative assistant is responsible for scheduling meetings and managing correspondence.', zhEx: '行政助理负责安排会议和管理邮件。', tags: ['work'] },
      { w: 'admire', ipa: '', pos: 'v.', zh: '钦佩；赞赏；欣赏', en: 'I really admire her dedication to her work.', zhEx: '我真的很欣赏她对工作的奉献。', tags: ['work'] },
      { w: 'admired', ipa: '', pos: 'adj.', zh: '受到赞赏、尊敬；被推崇', en: 'The company\'s commitment to sustainability is widely admired by its stakeholders.', zhEx: '公司对可持续发展的承诺广受其利害关系人的赞赏。', tags: ['work'] },
      { w: 'admission', ipa: '', pos: 'n. v.', zh: '入学许可；入场费；（对某事）承认、同意', en: 'The university requires an admission fee of $50 for the application process.', zhEx: '大学要求申请流程的入学费为 50 美元。', tags: ['work'] },
      { w: 'admission to', ipa: '', pos: 'n.', zh: '进入许可；入场资格', en: 'The company requires admission to the annual conference to be confirmed at least one week in advance.', zhEx: '公司要求提前至少一周确认参加年度会议的入场资格。', tags: ['business'] },
      { w: 'admit', ipa: '', pos: 'v.', zh: '承认；坦白；允许进入', en: 'The company admitted a slight delay in the project\'s completion.', zhEx: '公司承认项目完成略有延迟。', tags: ['work'] },
      { w: 'admitted', ipa: '', pos: 'v.', zh: '承认；允许进入；接纳（某事）', en: 'The company admitted a mistake in the report and issued a public apology.', zhEx: '公司承认报告中存在错误，并发布了公开道歉。', tags: ['work'] },
      { w: 'admittedly', ipa: '', pos: 'adv.', zh: '坦率地说；不得不承认', en: 'Admittedly, the project faced some unexpected challenges, but the team worked diligently to overcome them.', zhEx: '坦率地说，这个项目面临了一些意想不到的挑战，但团队努力克服了它们。', tags: ['work'] },
      { w: 'adopt', ipa: '', pos: 'v.', zh: '采用；收养；实施；运行', en: 'The company decided to adopt a new performance evaluation system to improve employee productivity.', zhEx: '公司决定采用新的绩效评估系统以提高员工生产力。', tags: ['work'] },
      { w: 'adoption', ipa: '', pos: 'n.', zh: '领养；采纳；采用；接受', en: 'The company announced the adoption of a new privacy policy.', zhEx: '公司宣布采用新的隐私政策。', tags: ['work'] },
      { w: 'adult', ipa: '', pos: 'n.', zh: '成年人；成人（指已达到法定成年年龄的人）', en: 'The company offers a comprehensive benefits package for all adult employees.', zhEx: '公司为所有成年员工提供全面的福利方案。', tags: ['work'] },
      { w: 'advance', ipa: '', pos: 'v. n.', zh: '提前；预先；晋升；提高', en: 'The company decided to advance the project deadline by a week.', zhEx: '公司决定将项目截止日期提前一周。', tags: ['work'] },
      { w: 'advance reservation', ipa: '', pos: 'n.', zh: '提前预约；事先订位', en: 'To ensure a table, we highly recommend making an advance reservation, especially during peak season.', zhEx: '为了确保有座位，我们强烈建议在用餐高峰期提前预约。', tags: ['daily'] },
      { w: 'advanced', ipa: '', pos: 'adj.', zh: '高级的；高端的；高端的（指程度、技能或知识等达到较高的水平）', en: 'The company is looking for candidates with advanced Excel skills.', zhEx: '公司正在寻找具备高端 Excel 技能的候选人。', tags: ['work'] },
      { w: 'advancement', ipa: '', pos: 'n.', zh: '进步；提前', en: 'The department implemented innovative advancement procedures to improve operational efficiency.', zhEx: '部门实施创新的advancement进程以提高营运效率。', tags: ['work'] },
      { w: 'adventure', ipa: '', pos: 'n. v.', zh: '冒险；刺激的经历，通常涉及风险或挑战。', en: 'The company is planning a team-building adventure trip to promote collaboration.', zhEx: '公司正在计划一次团队建设冒险旅行，以促进合作。', tags: ['travel'] },
      { w: 'adverse', ipa: '', pos: 'adj. adv.', zh: '不利的；负面的；相反的', en: 'The company faced adverse market conditions after the economic downturn.', zhEx: '在经济衰退后，该公司面临不利的市场环境。', tags: ['business'] },
      { w: 'adversely', ipa: '', pos: 'adv.', zh: '不利地；负面地；相反地', en: 'The company\'s reputation was adversely affected by the negative publicity.', zhEx: '负面新闻对公司的声誉产生了不利影响。', tags: ['business'] },
      { w: 'adversity', ipa: '', pos: 'n.', zh: '逆境；困境；不利情况', en: 'The company faced significant adversity due to the global economic downturn.', zhEx: '由于全球经济衰退，该公司面临着严重的逆境。', tags: ['business'] },
      { w: 'advertise', ipa: '', pos: 'v.', zh: '（通过媒体等）宣传、广告；推销', en: 'The company plans to advertise its new product on social media platforms.', zhEx: '该公司计划在社交媒体平台上宣传其新产品。', tags: ['business'] },
      { w: 'advertised', ipa: '', pos: 'adj.', zh: '（商品、服务等）已做广告的；宣传过的', en: 'The company\'s new product was heavily advertised on television and online.', zhEx: '该公司的最新产品在电视和在线大力宣传。', tags: ['business'] },
      { w: 'advertisement', ipa: '', pos: 'n.', zh: '广告；宣传（通常指付费的消息，用于推广产品或服务）', en: 'The company launched a new advertisement campaign to boost sales.', zhEx: '该公司推出了一项新的广告活动以提高销售额。', tags: ['business'] },
      { w: 'advertiser', ipa: '', pos: 'n.', zh: '广告商；刊登广告者；登广告的公司', en: 'The advertiser launched a new campaign to reach a younger audience.', zhEx: '该广告商推出了一项新活动，以接触更年轻的受众。', tags: ['business'] },
      { w: 'advertising', ipa: '', pos: 'n.', zh: '广告；广告活动；（公司）宣传推广', en: 'The company invested heavily in advertising to boost sales during the holiday season.', zhEx: '为了在节假日期间提高销售额，该公司投入了大量资金进行广告宣传。', tags: ['business'] },
      { w: 'advertising campaign', ipa: '', pos: 'n.', zh: '一系列有组织的宣传活动，旨在推广特定产品、服务或品牌。', en: 'The company launched a new advertising campaign targeting young adults.', zhEx: '该公司启动了一项针对年轻成人的新宣传活动。', tags: ['business'] },
      { w: 'advisable', ipa: '', pos: 'adj.', zh: '建议的；可取的；明智的', en: 'It\'s advisable to review the contract carefully before signing.', zhEx: '签署合约前仔细审阅是明智的。', tags: ['work'] },
      { w: 'advise', ipa: '', pos: 'v.', zh: '建议；劝告（通常基于专业知识或经验）', en: 'The consultant advised the company to invest in new technology to improve efficiency.', zhEx: '顾问建议公司投资新技术以提高效率。', tags: ['work'] },
      { w: 'advised', ipa: '', pos: 'v. adj.', zh: '建议；忠告（过去式或形容词，表示已被建议的）', en: 'The manager advised the team to submit the report by Friday.', zhEx: '经理建议团队在星期五前提交报告。', tags: ['work'] },
      { w: 'adviser', ipa: '', pos: 'n.', zh: '顾问；建议人，通常指在特定领域提供专业意见的人。', en: 'Before making a significant investment, it\'s wise to consult a financial adviser.', zhEx: '在做出重大投资之前，最好咨询财务顾问。', tags: ['work'] },
      { w: 'advisor', ipa: '', pos: 'n.', zh: '顾问；建议人（通常指在特定领域提供专业意见的人）', en: 'Before making any investment decisions, it\'s wise to consult a financial advisor.', zhEx: '在做出任何投资决策之前，最好咨询财务顾问。', tags: ['work'] },
      { w: 'advisory', ipa: '', pos: 'adj.', zh: '咨询的；建议性的；提供建议的', en: 'The company released an advisory notice regarding the potential risks of the new product.', zhEx: '公司发布了一份咨询公告，说明了新产品潜在的风险。', tags: ['work'] },
      { w: 'advocate', ipa: '', pos: 'v. n.', zh: '支持；倡导；为...辩护', en: 'The company advocates for sustainable practices throughout its supply chain.', zhEx: '该公司在其供应链的各个环节倡导可持续发展的措施。', tags: ['work'] },
      { w: 'affair', ipa: '', pos: 'n.', zh: '（通常指不公开的）婚外情；（公司内部）事务、事件', en: 'The company is investigating an affair of interest involving a senior manager.', zhEx: '公司正在调查一位高端经理的不当利益冲突事件。', tags: ['work'] },
      { w: 'affect', ipa: '', pos: 'v.', zh: '影响；左右；改变（某事物）', en: 'The recent economic downturn has significantly affected the company\'s profits.', zhEx: '最近的经济衰退对公司的利润产生了显著影响。', tags: ['work'] },
      { w: 'affected', ipa: '', pos: 'adj. v.', zh: '受到…影响；受…所及', en: 'The company\'s profits were significantly affected by the recent economic downturn.', zhEx: '近期经济衰退对公司的利润产生了显著影响。', tags: ['work'] },
      { w: 'affecting', ipa: '', pos: 'adj. v.', zh: '影响；左右；产生影响', en: 'The recent economic downturn is significantly affecting the company\'s sales figures.', zhEx: '最近的经济衰退正在显著影响公司的销售数据。', tags: ['work'] },
      { w: 'affiliate', ipa: '', pos: 'v.', zh: '关联公司', en: 'Our marketing affiliate program generates 30% of total online revenue.', zhEx: '我们的行销affiliate计划产生了在线总收入的30%。', tags: ['business'] },
      { w: 'affiliation', ipa: '', pos: 'n.', zh: '隶属关系；关联；会员资格', en: 'The company values employee affiliations with professional organizations.', zhEx: '公司重视员工与专业组织的隶属关系。', tags: ['work'] },
      { w: 'affirm', ipa: '', pos: 'v.', zh: '肯定；断言；证实；重申（承诺、立场等）；申明（在法庭上不宣誓而作证）', en: 'The company affirmed its commitment to environmental protection.', zhEx: '该公司重申其对环境保护的承诺。', tags: ['work'] },
      { w: 'affirmation', ipa: '', pos: 'n.', zh: '肯定；证实；宣言；（对信仰、感受的）申明', en: 'His daily affirmations help him maintain a positive mindset.', zhEx: '他的每日肯定语帮助他保持积极的心态。', tags: ['work'] },
      { w: 'afford', ipa: '', pos: 'v.', zh: '负担得起；经得起（费用、开销）', en: 'The company can afford to invest in new technology to improve efficiency.', zhEx: '公司有能力投资新技术来提高效率。', tags: ['finance'] },
      { w: 'afford to do', ipa: '', pos: 'phr.', zh: '有能力负担；有能力做某事（通常指经济上的能力）', en: 'The company can afford to invest in new technology to improve efficiency.', zhEx: '公司有能力投资新技术来提高效率。', tags: ['finance'] },
      { w: 'affordability', ipa: '', pos: 'n.', zh: '可负担性；价格合理性，指某物或服务的价格在经济上是可以接受的。', en: 'The company is focusing on developing more affordable housing options for its employees.', zhEx: '公司正致力于为员工开发更多可负担的住房选项。', tags: ['finance'] },
      { w: 'afraid', ipa: '', pos: 'adj. adv.', zh: '害怕、担心，通常指对潜在风险或负面结果的恐惧。', en: 'I\'m afraid I won\'t be able to meet the deadline due to unforeseen circumstances.', zhEx: '恐怕由于一些不可预见的情况，我无法按时完成任务。', tags: ['work'] },
      { w: 'after', ipa: '', pos: 'prep. adv.', zh: '在...之后；以后；然后', en: 'Let\'s discuss this after the meeting.', zhEx: '我们在会议结束后讨论这件事吧。', tags: ['work'] },
      { w: 'after all', ipa: '', pos: 'adv. prep.', zh: '毕竟；最终；考虑到所有因素后', en: 'After all the negotiations, we managed to reach a mutually beneficial agreement.', zhEx: '经过所有的谈判，我们最终达成了一项互利的协议。', tags: ['work'] },
      { w: 'afternoon', ipa: '', pos: 'n.', zh: '下午', en: 'I have a meeting scheduled for this afternoon.', zhEx: '我今天下午有一个会议。', tags: ['work'] },
      { w: 'afterward', ipa: '', pos: 'adv.', zh: '其后；事后；之后', en: 'Afterward, please submit your expense report to the accounting department.', zhEx: '事后，请将您的费用报表提交给会计部门。', tags: ['work'] },
      { w: 'again', ipa: '', pos: 'adv.', zh: '再次；又；再一次', en: 'Could you please repeat that again?', zhEx: '你可以再重复一次吗？', tags: ['work'] },
      { w: 'against', ipa: '', pos: 'prep. adv.', zh: '对抗；反对；与...相对；根据', en: 'The company is taking legal action against the supplier for breach of contract.', zhEx: '该公司因违反合约而对供应商采取法律行动。', tags: ['work'] },
      { w: 'against the law', ipa: '', pos: 'adj. adv.', zh: '违反法律的；非法', en: 'Importing counterfeit goods is against the law and carries severe penalties.', zhEx: '进口假冒商品是违法的，并将面临严厉的惩罚。', tags: ['legal'] },
      { w: 'age', ipa: '', pos: 'n.', zh: '年龄；年岁', en: 'The company has a policy of not discriminating based on age.', zhEx: '公司有不因年龄而歧视的政策。', tags: ['work'] },
      { w: 'agencies', ipa: '', pos: 'n.', zh: '机构；代理商（通常指政府或公司设立的运行特定任务的组织）', en: 'The recruitment agencies are assisting the company in finding qualified candidates.', zhEx: '招聘机构正在协助公司寻找合格的候选人。', tags: ['work'] },
      { w: 'agency', ipa: '', pos: 'n.', zh: '经纪公司；代理商；机构', en: 'Our company uses a recruitment agency to find qualified candidates for the marketing position.', zhEx: '我们公司使用招聘机构来为行销职位寻找合格的候选人。', tags: ['work'] },
      { w: 'agent', ipa: '', pos: 'n.', zh: '代表、代理人；经纪人（通常指处理特定事务的人员）', en: 'Our travel agent booked our flights and hotel.', zhEx: '我们的旅行社代理人帮我们预订了机票和酒店。', tags: ['work'] },
      { w: 'aggravate', ipa: '', pos: 'v.', zh: '使恶化；加重（问题、情况等）', en: 'The project delays will only aggravate the company\'s financial situation.', zhEx: '项目延迟只会加剧公司的财务状况。', tags: ['business'] },
      { w: 'aggregate', ipa: '', pos: 'v. n.', zh: '（动词）聚集；合计；（名词）总计；总数；集合体；（形容词）合计的；总计的', en: 'We need to aggregate the sales figures from all branches to get a complete picture.', zhEx: '我们需要汇集所有分公司的销售数据才能了解全貌。', tags: ['work'] },
      { w: 'aggressive', ipa: '', pos: 'adj.', zh: '具有攻击性或冒进的，通常指态度强硬、不顾及他人感受的行为或言辞。', en: 'The salesperson\'s aggressive sales tactics alienated several potential clients.', zhEx: '这位销售人员的强硬销售策略让几位潜在客户感到疏远。', tags: ['work'] },
      { w: 'aggressively', ipa: '', pos: 'adv.', zh: '强势地；激进地（通常指以不妥协或具有侵略性的方式）', en: 'The company aggressively pursued new markets to increase its revenue.', zhEx: '该公司积极开拓新市场以增加收入。', tags: ['work'] },
      { w: 'agile', ipa: '', pos: 'adj.', zh: '灵活的；适应性强的，能快速应变的。', en: 'Our company needs to be more agile to respond quickly to changing market conditions.', zhEx: '为了快速应对不断变化的市场状况，我们公司需要更具灵活性。', tags: ['business'] },
      { w: 'aging', ipa: '', pos: 'adj. n.', zh: '老化；逐渐变老（尤指人口结构中老年人口比例增加的趋势）', en: 'The company is developing new products to appeal to the aging population.', zhEx: '该公司正在开发新产品，以吸引逐渐老化的消费族群。', tags: ['work'] },
      { w: 'ago', ipa: '', pos: 'adv.', zh: '…以前；…之前 (表示时间距离)', en: 'The project was completed three months ago.', zhEx: '这个项目是三个月前完成的。', tags: ['work'] },
      { w: 'agree', ipa: '', pos: 'v.', zh: '同意；在讨论或协商中达成一致意见', en: 'After reviewing the contract terms, both parties agreed to proceed with the partnership.', zhEx: '在审阅合约条款后，双方同意继续合作。', tags: ['work'] },
      { w: 'agreeable', ipa: '', pos: 'adj.', zh: '（对某人或某事）欣然同意的；友善的；好相处的', en: 'The client found the proposal agreeable and requested a follow-up meeting.', zhEx: '客户认为提案内容可接受，并要求安排后续会议。', tags: ['work'] },
      { w: 'agreed', ipa: '', pos: 'v. adj.', zh: '同意；赞同', en: 'The board of directors agreed to the proposed merger.', zhEx: '董事会同意了这项拟定的合并案。', tags: ['work'] },
      { w: 'agreeing', ipa: '', pos: 'adj. v.', zh: '表示赞同或同意的状态或动作。', en: 'The board members were generally agreeing with the proposed merger.', zhEx: '董事会成员普遍对拟议的合并表示赞同。', tags: ['work'] },
      { w: 'agreement', ipa: '', pos: 'n.', zh: '协议；合约；一致的意见', en: 'Both parties signed the agreement to finalize the deal.', zhEx: '双方签署协议以完成交易。', tags: ['work'] },
      { w: 'agricultural', ipa: '', pos: 'adj.', zh: '与农业相关的；农业的', en: 'The company is investing heavily in agricultural technology to improve crop yields.', zhEx: '该公司正在大力投资农业技术以提高作物产量。', tags: ['business'] },
      { w: 'agriculture', ipa: '', pos: 'n.', zh: '农业；农产品生产业', en: 'The company is investing heavily in sustainable agriculture to reduce its environmental impact.', zhEx: '该公司正大力投资永续农业，以减少其对环境的影响。', tags: ['business'] },
      { w: 'ahead', ipa: '', pos: 'adv. prep.', zh: '在...之前；领先；提前', en: 'The project is currently ahead of schedule and we expect to complete it by next week.', zhEx: '该项目目前进度领先，我们预计下周完成。', tags: ['work'] },
      { w: 'ahead of schedule', ipa: '', pos: 'adv. adj.', zh: '比原定时间提前；提早完成', en: 'The project was completed ahead of schedule, thanks to the team\'s efficient work.', zhEx: '由于团队高效的工作，这个项目提早完成了。', tags: ['work'] },
      { w: 'aid', ipa: '', pos: 'n.', zh: '援助；帮助', en: 'The department implemented innovative aid procedures to improve operational efficiency.', zhEx: '部门实施创新的aid进程以提高营运效率。', tags: ['work'] },
      { w: 'aimed', ipa: '', pos: 'v.', zh: '针对...而定；以...为目标', en: 'The marketing campaign was aimed at young professionals.', zhEx: '这项行销活动的目标是针对年轻专业人士。', tags: ['business'] },
      { w: 'air', ipa: '', pos: 'n. v.', zh: '空气；气流；（广播）空中传输', en: 'The company is investing in air purification systems to improve indoor air quality.', zhEx: '公司正在投资空气净化系统以改善室内空气品质。', tags: ['work'] },
      { w: 'aircraft', ipa: '', pos: 'n.', zh: '飞机；航空器（通常指大型客机或货机）', en: 'The airline announced a delay due to adverse weather conditions affecting aircraft operations.', zhEx: '航空公司宣布延误，原因是恶劣天气状况影响飞机运营。', tags: ['travel'] },
      { w: 'airfare', ipa: '', pos: 'n.', zh: '机票费用；航空票价', en: 'The company will reimburse employees for their airfare and accommodation expenses.', zhEx: '公司将会退偿员工的机票费用和住宿费用。', tags: ['travel'] },
      { w: 'airline', ipa: '', pos: 'n.', zh: '航空公司；航空运输公司', en: 'Our company has a partnership with several major airlines to offer discounted travel packages.', zhEx: '我们公司与多家主要航空公司合作，提供折扣旅游套装。', tags: ['travel'] },
      { w: 'airplane', ipa: '', pos: 'n.', zh: '飞机，一种用于空中运输人员或货物的交通工具。', en: 'The company is considering purchasing a new airplane to expand its international routes.', zhEx: '公司正在考虑购买一架新飞机以扩展其国际航线。', tags: ['travel'] },
      { w: 'airport', ipa: '', pos: 'n.', zh: '机场，是飞机起降及旅客搭乘的设施。', en: 'The flight is scheduled to depart from Narita Airport at 10:00 AM.', zhEx: '这趟航班预计在上午 10:00 从成田机场起飞。', tags: ['travel'] },
      { w: 'aisle', ipa: '', pos: 'n.', zh: '（商店、飞机等）走道；信道', en: 'The manager asked the staff to keep the aisles clear of boxes for safety reasons.', zhEx: '经理要求员工为了安全起见，保持走道上没有任何箱子。', tags: ['business'] },
      { w: 'aisle seat', ipa: '', pos: 'n.', zh: '机上座位，位于机舱走道旁，方便乘客进出。', en: 'I prefer an aisle seat so I can easily get up to use the restroom.', zhEx: '我喜欢走道旁座位，这样我可以方便地起身去洗手间。', tags: ['travel'] },
      { w: 'alarm', ipa: '', pos: 'n. v.', zh: '警报；警铃；引起注意的信号', en: 'The security system will alarm if there\'s any unauthorized access.', zhEx: '如果有人未经授权进入，安全系统会发出警报。', tags: ['work'] },
      { w: 'alarming', ipa: '', pos: 'adj.', zh: '令人担忧的；引起恐惧的；警讯的', en: 'The sudden drop in sales figures is an alarming trend that needs immediate attention.', zhEx: '销售数字的突然下降是一个令人担忧的趋势，需要立即关注。', tags: ['business'] },
      { w: 'album', ipa: '', pos: 'n.', zh: '专辑；图库；集邮册', en: 'The band released their new album last month, and it quickly topped the charts.', zhEx: '乐团上个月发行了他们的新专辑，并迅速登上排行榜榜首。', tags: ['work'] },
      { w: 'align', ipa: '', pos: 'v.', zh: '使一致；对准；校准', en: 'Please align the documents along the left margin.', zhEx: '请将文档沿着左边界对齐。', tags: ['work'] },
      { w: 'alignment', ipa: '', pos: 'n.', zh: '对齐；校准；一致；结盟', en: 'Ensure proper alignment of text and images in the document.', zhEx: '请确保文档中文本和图片的正确对齐。', tags: ['business'] },
      { w: 'alike', ipa: '', pos: 'adj. adv.', zh: '相似的；相同的', en: 'The two companies\' business strategies are remarkably alike.', zhEx: '这两家公司的商业策略非常相似。', tags: ['work'] },
      { w: 'alive', ipa: '', pos: 'adj.', zh: '活着的，活的；有活力的，活跃的；仍然存在的', en: 'Is your grandfather still alive?', zhEx: '你的祖父还活着吗？', tags: ['work'] },
      { w: 'all', ipa: '', pos: 'phr. pron.', zh: '所有、全部', en: 'All the employees are required to attend the mandatory training session.', zhEx: '所有员工都必须参加强制性的培训课程。', tags: ['work'] },
      { w: 'all the way', ipa: '', pos: 'adv.', zh: '完全地；从头到尾；一路', en: 'The delivery service guarantees to transport the goods all the way to your doorstep.', zhEx: '货运服务保证将货物一路送到您家门口。', tags: ['work'] },
      { w: 'all walks of life', ipa: '', pos: 'n.', zh: '各行各业的人；来自不同背景的人', en: 'Our company strives to recruit talented individuals from all walks of life.', zhEx: '我们公司致力于从各行各业招募有才华的人才。', tags: ['work'] },
      { w: 'all-out', ipa: '', pos: 'adv. adj.', zh: '全力以赴；全心全意', en: 'The company is going all-out to launch the new product before the end of the quarter.', zhEx: '公司正全力以赴，力求在季度结束前推出新产品。', tags: ['business'] },
      { w: 'allegation', ipa: '', pos: 'n.', zh: '（未经证实的）指控；说法；断言', en: 'The company denied the allegations of financial misconduct.', zhEx: '该公司否认了财务不当行为的指控。', tags: ['legal'] },
      { w: 'allege', ipa: '', pos: 'v.', zh: '（未经证实地）声称；指控；断言', en: 'The company is alleged to have violated environmental regulations.', zhEx: '该公司被指控违反了环境法规。', tags: ['legal'] },
      { w: 'allergic', ipa: '', pos: 'adj.', zh: '对特定物质过敏，产生不良反应。', en: 'I\'m allergic to peanuts, so I can\'t have any snacks containing them.', zhEx: '我对花生过敏，所以不能吃含有花生的任何零食。', tags: ['work'] },
      { w: 'allergies', ipa: '', pos: 'n.', zh: '过敏症；对特定物质的异常免疫反应，可能导致健康问题。', en: 'Please inform HR of any allergies you may have so we can ensure a safe and comfortable working environment.', zhEx: '请告知人力资源部门您可能有的任何过敏症，以便我们确保安全舒适的工作环境。', tags: ['work'] },
      { w: 'allergy', ipa: '', pos: 'n.', zh: '过敏反应；对特定物质的异常免疫反应，可能导致不适或健康问题。', en: 'The company policy requires employees to disclose any allergies that may affect their ability to perform their duties safely.', zhEx: '公司政策要求员工告知任何可能影响其安全运行职责的过敏反应。', tags: ['work'] },
      { w: 'alleviate', ipa: '', pos: 'v.', zh: '减轻（痛苦、压力等）；舒缓', en: 'The company is offering stress management workshops to alleviate employee burnout.', zhEx: '公司提供压力管理工作坊，以减轻员工的倦怠。', tags: ['work'] },
      { w: 'alliance', ipa: '', pos: 'n.', zh: '联盟；结盟', en: 'The strategic alliance between airlines has improved customer service and route coverage.', zhEx: '航空公司之间的战略alliance改善了客户服务和航线覆盖。', tags: ['work'] },
      { w: 'allies', ipa: '', pos: 'n.', zh: '盟友；合作伙伴（指在特定目标或行动中互相支持的团体或国家）', en: 'Our company is seeking strategic allies to expand into the Asian market.', zhEx: '我们公司正在寻找战略盟友，以扩展到亚洲市场。', tags: ['business'] },
      { w: 'allocate', ipa: '', pos: 'v.', zh: '分配；指派；拨款', en: 'The company needs to allocate more resources to the marketing department to boost sales.', zhEx: '公司需要将更多资源分配给行销部门以提升销售业绩。', tags: ['business'] },
      { w: 'allocated', ipa: '', pos: 'v.', zh: '（资源、时间、空间等）被分配、指定给；拨遣给', en: 'The company has allocated a budget of $10,000 for employee training.', zhEx: '公司已拨款 10,000 美元用于员工培训。', tags: ['work'] },
      { w: 'allocation', ipa: '', pos: 'n.', zh: '分配', en: 'The company\'s new allocation initiative exceeded expectations in the first quarter.', zhEx: '公司的新allocation计划在第一季度超出了预期。', tags: ['work'] },
      { w: 'allot', ipa: '', pos: 'v.', zh: '分配；指派（资源、任务等）', en: 'The manager decided to allot each team member a specific project.', zhEx: '经理决定将特定项目分配给每位团队成员。', tags: ['work'] },
      { w: 'allotment', ipa: '', pos: 'n.', zh: '（公司、政府等）分配；配额；（土地）地块', en: 'The company made an allotment of 100 shares to each employee as a bonus.', zhEx: '公司将每位员工的奖金分配为 100 股。', tags: ['work'] },
      { w: 'allow', ipa: '', pos: 'v.', zh: '允许；容许（在商务或工作环境中指允许某人或某事发生）', en: 'The manager will allow employees to work from home on Fridays.', zhEx: '经理将允许员工在星期五在家工作。', tags: ['work'] },
      { w: 'allowance', ipa: '', pos: 'n.', zh: '津贴；生活费（通常指给予员工或家属的固定金额，用于支付日常开销）', en: 'The company provides a generous housing allowance for expatriate employees.', zhEx: '公司为外派员工提供丰厚的住房津贴。', tags: ['work'] },
      { w: 'allowed', ipa: '', pos: 'v. adj.', zh: '被允许的；符合公司政策或法规的', en: 'All employees are allowed to work remotely on Fridays, provided they meet the security requirements.', zhEx: '只要符合安全要求，所有员工在星期五都被允许远程工作。', tags: ['legal'] },
      { w: 'allowing', ipa: '', pos: 'v.', zh: '允许；容许；使...可以', en: 'The company policy allows employees to work remotely up to three days a week.', zhEx: '公司政策允许员工每周最多远程工作三天。', tags: ['work'] },
      { w: 'ally', ipa: '', pos: 'n. v.', zh: '盟友；同盟国；伙伴；与…结盟', en: 'The two companies decided to ally themselves to develop a new product.', zhEx: '这两家公司决定结盟以开发新产品。', tags: ['work'] },
      { w: 'alone', ipa: '', pos: 'adj. adv.', zh: '独自一人；孤单的', en: 'The manager felt alone in his decision to restructure the department.', zhEx: '经理在重组部门的决定中感到孤单。', tags: ['work'] },
      { w: 'along the shore', ipa: '', pos: 'adv. prep.', zh: '沿着海岸线', en: 'The resort is located along the shore, offering stunning ocean views.', zhEx: '度假村位于海岸线沿，提供令人惊艳的海洋景观。', tags: ['travel'] },
      { w: 'alongside', ipa: '', pos: 'prep. adv.', zh: '在...旁边；与...一起；和...同时', en: 'The new intern will work alongside the marketing team to learn the ropes.', zhEx: '新实习生将与行销团队一起工作以学习基本知识。', tags: ['work'] },
      { w: 'alright', ipa: '', pos: 'adj. adv.', zh: '好的；没问题的；可以的；安然无恙的', en: 'Is everything alright with you?', zhEx: '你一切都还好吗？', tags: ['work'] },
      { w: 'also', ipa: '', pos: 'adv.', zh: '也；此外；又', en: 'She is a talented singer, and she also plays the piano.', zhEx: '她是一位才华洋溢的歌手，她也弹钢琴。', tags: ['work'] },
      { w: 'alteration', ipa: '', pos: 'n.', zh: '改变；变更', en: 'The department implemented innovative alteration procedures to improve operational efficiency.', zhEx: '部门实施创新的alteration进程以提高营运效率。', tags: ['work'] },
      { w: 'altitude', ipa: '', pos: 'n.', zh: '海拔；高度', en: 'The aircraft is flying at an altitude of 35,000 feet.', zhEx: '该飞机正以35,000英尺的高度飞行。', tags: ['travel'] },
      { w: 'alumni', ipa: '', pos: 'n.', zh: '校友；毕业生（泛指）', en: 'The university actively engages with its alumni network to foster career opportunities for current students.', zhEx: '大学积极与其校友网络交互，以促进在校生的职业发展机会。', tags: ['work'] },
      { w: 'alumni association', ipa: '', pos: 'n.', zh: '校友会：由一所学校的毕业生组成的组织，旨在促进校友之间的联系、提供支持和维护学校的声誉。', en: 'The alumni association is organizing a networking event for recent graduates.', zhEx: '校友会正在组织一场为新毕业生举办的社交活动。', tags: ['work'] },
      { w: 'amateur', ipa: '', pos: 'n. adj.', zh: '业余爱好者；外行；业余的', en: 'He\'s an amateur photographer, but his work is very professional.', zhEx: '他是一名业余摄影师，但他的作品非常专业。', tags: ['work'] },
      { w: 'amaze', ipa: '', pos: 'v.', zh: '使惊讶；令人印象深刻', en: 'The innovative design of the new product amazed our potential investors.', zhEx: '这款新产品的创新设计令我们的潜在投资人感到惊艳。', tags: ['work'] },
      { w: 'amazed', ipa: '', pos: 'adj.', zh: '惊讶、赞赏，通常指对某事感到非常惊奇或印象深刻。', en: 'The team was amazed by the innovative design of the new product.', zhEx: '团队对新产品的创新设计感到惊讶。', tags: ['work'] },
      { w: 'amazement', ipa: '', pos: 'n.', zh: '惊讶、震惊，通常指因出乎意料的事件或成就而产生的强烈情感。', en: 'The team\'s innovative solution to the project\'s challenges was met with widespread amazement.', zhEx: '团队对项目挑战的创新解决方案受到了广泛的赞赏和惊讶。', tags: ['work'] },
      { w: 'ambiance (= ambience)', ipa: '', pos: 'n.', zh: '环境氛围；气氛（通常指某个场所的整体感觉，包括装饰、光线、声音等）', en: 'The restaurant\'s warm ambiance, with soft lighting and gentle music, created a relaxing dining experience.', zhEx: '这家餐厅温馨的氛围，配以柔和的灯光和舒缓的音乐，营造了轻松愉快的用餐体验。', tags: ['daily'] },
      { w: 'ambition', ipa: '', pos: 'n.', zh: '抱负; 雄心; 野心; 志向; 志气', en: 'Her ambition is to become a successful entrepreneur.', zhEx: '她的抱负是成为一名成功的企业家。', tags: ['work'] },
      { w: 'ambitious', ipa: '', pos: 'adj.', zh: '抱有雄心壮志的；渴望成功的', en: 'She is an ambitious employee who is always looking for opportunities to advance her career.', zhEx: '她是一位抱有雄心壮志的员工，总是寻找晋升的机会。', tags: ['work'] },
      { w: 'amendment', ipa: '', pos: 'n.', zh: '修正案', en: 'The company\'s new amendment initiative exceeded expectations in the first quarter.', zhEx: '公司的新amendment计划在第一季度超出了预期。', tags: ['legal'] },
      { w: 'amenities', ipa: '', pos: 'n.', zh: '便利设施；俱乐部设施（指饭店、公寓等提供的附加服务或设备，例如健身房、游泳池等）', en: 'The hotel boasts a wide range of amenities, including a spa, a fitness center, and a rooftop pool.', zhEx: '这家饭店提供丰富的便利设施，包括水疗中心、健身中心和屋顶游泳池。', tags: ['daily'] },
      { w: 'amenity', ipa: '', pos: 'n.', zh: '便利设施；俱乐部设施；舒适的服务或设备（通常指饭店、度假村等提供的）', en: 'The hotel boasts a wide range of amenities, including a swimming pool, fitness center, and spa.', zhEx: '这家饭店提供丰富的便利设施，包括游泳池、健身中心和水疗中心。', tags: ['daily'] },
      { w: 'amid', ipa: '', pos: 'prep.', zh: '在...之中；被...环绕；在...过程中', en: 'The company announced a new policy amid widespread protests from employees.', zhEx: '在员工广泛抗议声中，公司宣布了一项新政策。', tags: ['work'] },
      { w: 'among', ipa: '', pos: 'prep.', zh: '在...之中；其中之一', en: 'She found her lost wallet among the piles of old newspapers.', zhEx: '她在旧报纸堆中找到了她遗失的钱包。', tags: ['work'] },
      { w: 'amongst', ipa: '', pos: 'prep. adv.', zh: '在...之中，在...中间（指多个事物中，通常是混杂或分散的状态）', en: 'The company\'s products are distributed amongst various retailers across the country.', zhEx: '该公司的产品在全国各地的零售商之间分销。', tags: ['work'] },
      { w: 'amount', ipa: '', pos: 'n.', zh: '数量；总数（通常指无法精确计量的东西）', en: 'The company reported a significant increase in the amount of sales this quarter.', zhEx: '本季公司报告销售总额大幅增加。', tags: ['finance'] },
      { w: 'amplify', ipa: '', pos: 'v.', zh: '扩大；增强（声音、信号等）；加强强调（观点、感受等）', en: 'The microphone system is designed to amplify the speaker\'s voice for better audience reach.', zhEx: '麦克风系统旨在扩大演讲者的声音，以提高听众的覆盖率。', tags: ['work'] },
      { w: 'amusement', ipa: '', pos: 'n.', zh: '娱乐；消遣；（公司）员工福利娱乐活动', en: 'The company provides various amusements, such as bowling and mini-golf, to boost employee morale.', zhEx: '该公司提供各种娱乐活动，例如保龄球和迷你高尔夫，以提高员工士气。', tags: ['business'] },
      { w: 'analyst', ipa: '', pos: 'n.', zh: '分析师，通常指在商业、金融或数据领域进行分析和评估的专业人员。', en: 'The financial analyst presented a comprehensive report on the company\'s performance.', zhEx: '财务分析师提交了一份关于公司表现的全面报告。', tags: ['finance'] },
      { w: 'analytic', ipa: '', pos: 'adj.', zh: '分析的；分析性的', en: 'The company uses analytic tools to understand customer behavior.', zhEx: '该公司使用分析工具来了解客户行为。', tags: ['code'] },
      { w: 'analytical', ipa: '', pos: 'adj.', zh: '分析的；善于分析的；逻辑的', en: 'She has strong analytical skills, which are crucial for this research position.', zhEx: '她具备很强的分析能力，这对这个研究职位来说至关重要。', tags: ['work'] },
      { w: 'anchor', ipa: '', pos: 'n. v.', zh: '固定；锚点；（新闻）主持人', en: 'The company used the successful marketing campaign as an anchor for its new product launch.', zhEx: '公司将成功的行销活动作为其新产品发布的锚点。', tags: ['work'] },
      { w: 'anger', ipa: '', pos: 'n. v.', zh: '愤怒；生气；激怒', en: 'She felt a surge of anger when she heard the news.', zhEx: '她听到这个消息时，一股怒火涌上心头。', tags: ['work'] },
      { w: 'angle', ipa: '', pos: 'n. v.', zh: '角度；观点；立场；从某个角度看；倾斜；有特定观点地提出', en: 'Let\'s try to look at the issue from a different angle.', zhEx: '让我们试着从不同的角度来看待这个问题。', tags: ['work'] },
      { w: 'angry', ipa: '', pos: 'adj.', zh: '愤怒；生气，通常指因不满或失望而产生的情绪。', en: 'The manager was angry about the missed deadline and called an emergency meeting.', zhEx: '经理对于错过期限感到愤怒，并召开了紧急会议。', tags: ['work'] },
      { w: 'anniversary celebration', ipa: '', pos: 'n.', zh: '周年庆典；纪念活动', en: 'The company is planning a grand anniversary celebration to mark its 20th year in business.', zhEx: '公司正在规划一场盛大的周年庆典，以庆祝其在商场上 20 年的岁月。', tags: ['business'] },
      { w: 'announce', ipa: '', pos: 'v.', zh: '声明；公布；宣布', en: 'The CEO announced the company\'s record profits during the annual meeting.', zhEx: '首席执行官在年度会议上宣布了公司创纪录的利润。', tags: ['work'] },
      { w: 'announced', ipa: '', pos: 'v.', zh: '宣布；公布；宣示', en: 'The CEO announced the company\'s record profits during the annual shareholders\' meeting.', zhEx: '首席执行官在年度股东大会上宣布了公司创纪录的利润。', tags: ['work'] },
      { w: 'announcement', ipa: '', pos: 'n.', zh: '公告；宣布（通常是正式的消息，用于告知大家重要信息）', en: 'The company made an announcement regarding the upcoming restructuring.', zhEx: '公司发布了关于即将进行的重组公告。', tags: ['work'] },
      { w: 'announcer', ipa: '', pos: 'n.', zh: '播音员；广播员；节目主持人', en: 'The announcer introduced the next segment of the live show.', zhEx: '播音员介绍了直播节目的下一部分。', tags: ['work'] },
      { w: 'announcing', ipa: '', pos: 'v. adj.', zh: '声明；公布；发布（消息、信息等）', en: 'The company is announcing a new product launch next month.', zhEx: '公司将于下个月宣布推出新产品。', tags: ['work'] },
      { w: 'annoy', ipa: '', pos: 'v.', zh: '使人感到烦躁或恼怒；激怒', en: 'Constant interruptions during the meeting annoyed the project manager.', zhEx: '会议中持续的中断让项目经理感到烦躁。', tags: ['work'] },
      { w: 'annoyed', ipa: '', pos: 'adj.', zh: '因不满或烦躁而感到不悦，通常是因某事打断或延迟了进度。', en: 'The manager was annoyed by the constant interruptions during the meeting.', zhEx: '会议中不断被打断，让经理感到非常不悦。', tags: ['work'] },
      { w: 'annoying', ipa: '', pos: 'adj.', zh: '令人烦恼的；恼人的；令人不快的', en: 'The constant background noise during the conference call was incredibly annoying.', zhEx: '会议期间持续的背景噪音非常令人烦恼。', tags: ['work'] },
      { w: 'annual', ipa: '', pos: 'adj.', zh: '每年的；一年一次的（形容词），常用于描述年度报告、会议或计划等。', en: 'The company will hold its annual shareholders\' meeting next Thursday.', zhEx: '公司将于下周四举行年度股东大会。', tags: ['work'] },
      { w: 'annual budget', ipa: '', pos: 'n.', zh: '年度预算：指公司或组织在一年内规划和分配的资金总额。', en: 'The marketing department submitted its annual budget request to the finance team.', zhEx: '行销部门将其年度预算请求提交给财务团队。', tags: ['finance'] },
      { w: 'annual meeting', ipa: '', pos: 'n.', zh: '年度股东会/年度会议，通常用于报告公司年度财务状况和业务成果。', en: 'The annual meeting is scheduled for next Thursday at the Grand Ballroom.', zhEx: '年度股东会已排定于下周四在豪华宴会厅举行。', tags: ['business'] },
      { w: 'annual report', ipa: '', pos: 'n.', zh: '年度报告，通常包含公司在过去一年的财务状况、营运成果和未来展望。', en: 'Investors carefully review the company\'s annual report before making investment decisions.', zhEx: '投资人会在做出投资决策前仔细审阅公司的年度报告。', tags: ['finance'] },
      { w: 'annually', ipa: '', pos: 'adv.', zh: '每年；一年一次', en: 'The company reports its financial results annually.', zhEx: '公司每年报告其财务业绩。', tags: ['finance'] },
      { w: 'annum', ipa: '', pos: 'n.', zh: '年，一年（常用于词组per annum，意为「每年」）', en: 'The company offers an attractive salary of $60,000 per annum.', zhEx: '公司提供每年六万美元的优渥薪资。', tags: ['finance'] },
      { w: 'anonymous', ipa: '', pos: 'adj. adv.', zh: '不具名；匿名；未公开身分', en: 'The company received an anonymous tip about potential safety violations.', zhEx: '公司收到一份关於潜在安全违规行为的匿名举报。', tags: ['work'] },
      { w: 'another', ipa: '', pos: 'phr. pron.', zh: '另一个；又一个；再一个；另一位', en: 'Could you please give me another chance?', zhEx: '请再给我一次机会好吗？', tags: ['work'] },
      { w: 'answer', ipa: '', pos: 'n. v.', zh: '回复；答复；回应', en: 'Could you please answer the questionnaire before the meeting?', zhEx: '请在会议前填写问卷并回复。', tags: ['work'] },
      { w: 'answer the phone', ipa: '', pos: 'v.', zh: '接听电话；回应电话，处理电话查找。', en: 'Could you please answer the phone? I\'m on an important video conference.', zhEx: '能请你接听电话吗？我正在进行重要的视频会议。', tags: ['work'] },
      { w: 'answering', ipa: '', pos: 'v. n.', zh: '回应；答复；处理（问题、电话等）', en: 'The receptionist is responsible for answering phone calls and directing them to the appropriate department.', zhEx: '接待员负责接听电话并将其转至相关部门。', tags: ['work'] },
      { w: 'anti', ipa: '', pos: 'adj. n.', zh: '作为前缀，意指「反对」、「相反」或「对抗」；亦可作形容词，意指反对的、敌对的，或作名词，意指反对者、反对论者。', en: 'Many citizens are strongly anti the new tax proposal.', zhEx: '许多市民强烈反对这项新的税收提案。', tags: ['work'] },
      { w: 'antique', ipa: '', pos: 'n. adj.', zh: '古董；古老且有价值的物品', en: 'The company specializes in selling antique furniture to collectors worldwide.', zhEx: '这家公司专门向世界各地的收藏家销售古董家具。', tags: ['business'] },
      { w: 'anxiety', ipa: '', pos: 'n.', zh: '焦虑；忧虑', en: 'The department implemented innovative anxiety procedures to improve operational efficiency.', zhEx: '部门实施创新的anxiety进程以提高营运效率。', tags: ['work'] },
      { w: 'anybody', ipa: '', pos: 'pron.', zh: '任何人；无论谁', en: 'Is anybody home?', zhEx: '家里有人吗？', tags: ['work'] },
      { w: 'anyhow', ipa: '', pos: 'adv.', zh: '无论如何；反正；总之；无论用何种方式', en: 'I don\'t know if it\'ll work, but I\'ll try it anyhow.', zhEx: '我不知道这是否会成功，但无论如何我都会试试看。', tags: ['work'] },
      { w: 'anyone', ipa: '', pos: 'pron.', zh: '任何人；任何一人（通常用于表示不确定性或询问是否有人符合条件）', en: 'Is there anyone who can speak fluent Spanish to assist our client?', zhEx: '请问有谁能流利地说西班牙语来协助我们的客户吗？', tags: ['work'] },
      { w: 'anyway', ipa: '', pos: 'adv.', zh: '无论如何；话虽如此；总之', en: 'The project is behind schedule, but anyway, we\'re making progress.', zhEx: '项目落后于原定进度，但总之，我们正在取得进展。', tags: ['work'] },
      { w: 'apartment', ipa: '', pos: 'n.', zh: '公寓；租赁住宅单位', en: 'The company provides temporary apartments for relocating employees.', zhEx: '公司为调职员工提供临时公寓住宿。', tags: ['daily'] },
      { w: 'apologies', ipa: '', pos: 'n. v.', zh: '道歉；致歉', en: 'Please accept our apologies for the delay in shipment.', zhEx: '对于货运延迟，敬请谅解，并接受我们的致歉。', tags: ['work'] },
      { w: 'apologize', ipa: '', pos: 'v.', zh: '对造成的不便或错误表示遗憾并说明原因，以维护关系或弥补过失。', en: 'We apologize for the delay in delivering your order and will expedite the shipment.', zhEx: '我们对订单延迟表示歉意，并将加快出货速度。', tags: ['business'] },
      { w: 'apology', ipa: '', pos: 'n. v.', zh: '道歉；对不起的表示', en: 'The company issued an apology for the shipping delay.', zhEx: '该公司就运输延误发布了道歉声明。', tags: ['work'] },
      { w: 'app', ipa: '', pos: 'n.', zh: '应用程序，通常指手机或电脑上的软件应用。', en: 'Our company is developing a new app to streamline the order processing system.', zhEx: '我们公司正在开发一个新的应用程序，以简化订单处理系统。', tags: ['code'] },
      { w: 'apparent', ipa: '', pos: 'adj.', zh: '明显的；显而易见的；表面上的', en: 'It was apparent that the project would be delayed due to unforeseen circumstances.', zhEx: '很明显，由于不可预见的情况，该项目将会延迟。', tags: ['work'] },
      { w: 'appeal', ipa: '', pos: 'n. v.', zh: '诉愿；上诉；吸引力；吸引', en: 'The company decided to appeal the court\'s decision.', zhEx: '公司决定对法院的决定提出上诉。', tags: ['legal'] },
      { w: 'appealing', ipa: '', pos: 'adj.', zh: '具有吸引力，引人入胜的；令人愉悦的', en: 'The company launched a new advertising campaign to make their product more appealing to younger consumers.', zhEx: '该公司推出了一项新的广告活动，旨在使他们的产品对年轻消费者更具吸引力。', tags: ['business'] },
      { w: 'appearance', ipa: '', pos: 'n.', zh: '外观；外貌；给人的印象', en: 'The candidate\'s professional appearance helped him secure the job.', zhEx: '这位候选人的专业外貌帮助他获得了这份工作。', tags: ['work'] },
      { w: 'appetite', ipa: '', pos: 'n.', zh: '食欲;胃口;欲望;渴望', en: 'Exercising regularly can help improve your appetite.', zhEx: '规律运动有助于增进你的食欲。', tags: ['work'] },
      { w: 'appetizer', ipa: '', pos: 'n.', zh: '开胃菜；餐前小点', en: 'The restaurant offers a selection of complimentary appetizers to start the meal.', zhEx: '这家餐厅提供一系列免费开胃菜，以打开用餐体验。', tags: ['daily'] },
      { w: 'appliances', ipa: '', pos: 'n.', zh: '家用电器；办公室设备', en: 'The company is investing in new kitchen appliances to improve employee satisfaction.', zhEx: '公司正在投资新的厨房电器，以提高员工满意度。', tags: ['business'] },
      { w: 'applicable', ipa: '', pos: 'adj.', zh: '可应用的；适用的；相关的', en: 'Please refer to the applicable terms and conditions.', zhEx: '请参阅适用的条款和条件。', tags: ['work'] },
      { w: 'applicant', ipa: '', pos: 'n.', zh: '求职者；申请人', en: 'The HR department is reviewing the applications of several qualified applicants.', zhEx: '人力资源部门正在审阅多位合格求职者的申请。', tags: ['work'] },
      { w: 'application', ipa: '', pos: 'n. v.', zh: '申请；应用；请求', en: 'Please submit your job application by Friday.', zhEx: '请在星期五前提交您的求职申请。', tags: ['work'] },
      { w: 'application form', ipa: '', pos: 'n.', zh: '申请表格；报名表', en: 'Please complete the application form and submit it to the HR department by Friday.', zhEx: '请在星期五前填写申请表格并提交给人资部门。', tags: ['work'] },
      { w: 'apply', ipa: '', pos: 'v.', zh: '申请；涂抹；适用', en: 'Applicants should apply for the position online before the deadline.', zhEx: '应征者应在截止日期前通过网络申请该职位。', tags: ['work'] },
      { w: 'apply for', ipa: '', pos: 'v.', zh: '申请（职位、贷款、许可等）；递交（申请表、文档等）', en: 'To be considered for the position, please apply for the job online by Friday.', zhEx: '为了能获得这个职位，请在星期五前在网上申请该工作。', tags: ['work'] },
      { w: 'applying', ipa: '', pos: 'v.', zh: '申请（职位、许可等）或将某项规则、方法等实施于实务中', en: 'She is applying for the marketing manager position at the headquarters.', zhEx: '她正在总公司申请行销经理的职位。', tags: ['work'] },
      { w: 'appoint', ipa: '', pos: 'v.', zh: '任命；委派；指定（时间、地点）', en: 'The committee will appoint a new director next month.', zhEx: '委员会将在下个月任命一位新主任。', tags: ['work'] },
      { w: 'appraisal', ipa: '', pos: 'n. v.', zh: '评估；评鉴；估价（尤指工作绩效）', en: 'The annual performance appraisal will help employees identify areas for improvement.', zhEx: '年度绩效评估将帮助员工找出需要改进的领域。', tags: ['work'] },
      { w: 'apprentice', ipa: '', pos: 'n.', zh: '学徒；见习者（通常指在专业领域接受训练并学习技能的人）', en: 'The company offers an apprenticeship program for recent graduates interested in a career in engineering.', zhEx: '该公司为对工程领域有兴趣的应届毕业生提供学徒计划。', tags: ['work'] },
      { w: 'approximate', ipa: '', pos: 'adj. v.', zh: '大约的；近似的；估计的 (adj.)；近似；估计 (v.)', en: 'The approximate cost of the project is $10,000.', zhEx: '该项目的预估成本约为一万元。', tags: ['work'] },
      { w: 'approximation', ipa: '', pos: 'n.', zh: '估计值；约略值，通常用于在缺乏精确数据时提供一个接近的数字。', en: 'The financial report provided an approximation of the company\'s profits for the quarter.', zhEx: '财务报告提供了本季公司利润的估计值。', tags: ['finance'] },
      { w: 'aptitude', ipa: '', pos: 'n.', zh: '天赋、潜能、能力倾向', en: 'The company is looking for candidates with a strong aptitude for sales and customer service.', zhEx: '公司正在寻找具备销售和客户服务潜能的候选人。', tags: ['work'] },
      { w: 'architectural', ipa: '', pos: 'adj.', zh: '与建筑设计或风格相关的；建筑学的', en: 'The building\'s architectural design incorporates modern and traditional elements.', zhEx: '这栋建筑的建筑设计融合了现代和传统元素。', tags: ['business'] },
      { w: 'architecture', ipa: '', pos: 'n.', zh: '建筑设计；建筑结构；建筑风格', en: 'The company is investing heavily in modern architecture to attract high-profile tenants.', zhEx: '公司正在大量投资现代建筑设计，以吸引知名租户。', tags: ['business'] },
      { w: 'arguably', ipa: '', pos: 'adv.', zh: '可论证地；可以说是；据说', en: 'She is arguably the best basketball player of her generation.', zhEx: '她可以说是她那一代最棒的篮球选手。', tags: ['work'] },
      { w: 'arm', ipa: '', pos: 'n. v.', zh: '手臂；胳膊；(机构的)臂，部门；武器，兵器；武装，装备', en: 'She extended her arm to shake hands with the new client.', zhEx: '她伸出手臂与新客户握手。', tags: ['work'] },
      { w: 'armchair', ipa: '', pos: 'n.', zh: '扶手椅；配有扶手的椅子，通常用于休息或阅读。', en: 'The waiting area is furnished with comfortable armchairs to accommodate clients.', zhEx: '等候区配备了舒适的扶手椅，以容纳客户。', tags: ['business'] },
      { w: 'around the world', ipa: '', pos: 'adv. prep.', zh: '遍布全球；环绕世界', en: 'Our company\'s products are now distributed around the world, reaching a wider customer base.', zhEx: '我们公司的产品现在遍布全球，触及更广大的客户群。', tags: ['business'] },
      { w: 'arrange a conference', ipa: '', pos: 'v.', zh: '安排会议，通常指协调时间、地点、议程等细节。', en: 'Could you arrange a conference call between our team and the overseas branch next week?', zhEx: '您能安排下周我们团队和海外分公司进行电话会议吗？', tags: ['work'] },
      { w: 'arrange items on the shelf', ipa: '', pos: 'v.', zh: '将物品整齐地陈列在架子上', en: 'The store manager asked the staff to arrange items on the shelf alphabetically.', zhEx: '店长请员工按照字母顺序将商品陈列在架子上。', tags: ['business'] },
      { w: 'arrange the furniture', ipa: '', pos: 'v.', zh: '重新排列家具；调整家具摆设', en: 'The interior designer will arrange the furniture to maximize space and create a more inviting atmosphere.', zhEx: '室内设计师将重新排列家具，以最大化空间并营造更具吸引力的氛围。', tags: ['business'] },
      { w: 'array', ipa: '', pos: 'n.', zh: '排列；数组（通常指数据或信息的有序排列）', en: 'The database administrator needs to optimize the data array for faster query processing.', zhEx: '数据库管理员需要优化数据数组以加快查找处理速度。', tags: ['code'] },
      { w: 'arrest', ipa: '', pos: 'v. n.', zh: '逮捕；拘捕；阻止；抑制；吸引（注意力）；（心跳、呼吸等）停止', en: 'The police made an arrest in connection with the robbery.', zhEx: '警方因抢劫案逮捕了一名嫌犯。', tags: ['legal'] },
      { w: 'arrival', ipa: '', pos: 'n.', zh: '抵达；到达', en: 'The scheduled arrival of the shipment is next Monday.', zhEx: '货物预计下周一抵达。', tags: ['travel'] },
      { w: 'arrive', ipa: '', pos: 'v.', zh: '抵达；到达', en: 'The flight is scheduled to arrive at 10:00 AM.', zhEx: '航班预计于上午 10:00 抵达。', tags: ['travel'] },
      { w: 'arrived', ipa: '', pos: 'v.', zh: '抵达；到达', en: 'The shipment arrived at the warehouse on schedule.', zhEx: '货物已如期抵达仓库。', tags: ['travel'] },
      { w: 'arriving', ipa: '', pos: 'v. adj.', zh: '抵达；到达（指人或物）', en: 'The flight is arriving at Gate 12 on time.', zhEx: '航班预计准时抵达 12 号登机门。', tags: ['travel'] },
      { w: 'arrow', ipa: '', pos: 'n. v.', zh: '箭；箭头；方向箭头；箭号', en: 'The sign has an arrow pointing towards the emergency exit.', zhEx: '这个标志有一个箭头指向紧急出口。', tags: ['work'] },
      { w: 'art', ipa: '', pos: 'n.', zh: '艺术品、艺术创作；(比喻)技巧、能力', en: 'The company commissioned a local artist to create artwork for the new office lobby.', zhEx: '公司委托一位当地艺术家为新办公室大厅创作艺术品。', tags: ['business'] },
      { w: 'art museum', ipa: '', pos: 'n.', zh: '艺术博物馆，通常展示和保存艺术作品，是企业活动中文化交流或商务接待的场所。', en: 'Our company is planning a corporate event at the art museum next month.', zhEx: '我们公司下个月计划在艺术博物馆举办一场公司活动。', tags: ['travel'] },
      { w: 'artificial', ipa: '', pos: 'adj.', zh: '人为的；非天然的；仿造的', en: 'The company is investing in artificial intelligence to automate customer service inquiries.', zhEx: '该公司正在投资人工智能以自动化客户服务咨询。', tags: ['code'] },
      { w: 'artist', ipa: '', pos: 'n.', zh: '艺术家；以绘画、雕塑或其他艺术形式从事创作的人。', en: 'The company hired an artist to create a unique logo for their new product line.', zhEx: '该公司聘请了一位艺术家为他们的新产品线设计一个独特的标志。', tags: ['business'] },
      { w: 'artistic', ipa: '', pos: 'adj.', zh: '具有艺术天赋或风格的；与艺术相关的', en: 'The company\'s artistic advertising campaign significantly boosted brand recognition.', zhEx: '该公司的艺术化广告活动显著提升了品牌知名度。', tags: ['business'] },
      { w: 'artwork', ipa: '', pos: 'n.', zh: '艺术品；艺术作品，通常指绘画、雕塑等视觉艺术品。', en: 'The company is showcasing its latest artworks at the international art fair to attract potential investors.', zhEx: '该公司正在国际艺术博览会上展示其最新艺术作品，以吸引潜在投资者。', tags: ['business'] },
      { w: 'as a courtesy (= as a favor)', ipa: '', pos: 'adv.', zh: '作为礼貌（的表示），出于好意', en: 'As a courtesy, we offer complimentary coffee and tea to all our guests.', zhEx: '作为礼貌，我们为所有客人提供免费咖啡和茶。', tags: ['business'] },
      { w: 'as requested', ipa: '', pos: 'adv.', zh: '依据要求；如所请求', en: 'Your invoice, as requested, is attached to this email.', zhEx: '如您所要求，发票已附加于此电子邮件中。', tags: ['business'] },
      { w: 'aspiration', ipa: '', pos: 'n.', zh: '抱负、期望，尤指职业或事业上的目标。', en: 'Her career aspiration is to become a senior manager in the company.', zhEx: '她的职业抱负是成为公司的高级经理。', tags: ['work'] },
      { w: 'aspire to', ipa: '', pos: 'v.', zh: '渴望、期盼（达到某目标或职位）', en: 'Many young professionals aspire to leadership roles within their companies.', zhEx: '许多年轻专业人士渴望在公司内担任领导职位。', tags: ['work'] },
      { w: 'assemble', ipa: '', pos: 'v.', zh: '组装；组合；聚集', en: 'The production team needs to assemble the new furniture pieces before the store opening.', zhEx: '在店铺开幕前，生产团队需要组装新的家具。', tags: ['business'] },
      { w: 'assembled', ipa: '', pos: 'adj.', zh: '组装完成的；已组装好的', en: 'The furniture was delivered unassembled, so we had to assemble it ourselves.', zhEx: '家具是未组装的状态送达，所以我们必须自行组装。', tags: ['business'] },
      { w: 'assess', ipa: '', pos: 'v.', zh: '评估；估计；评估价值或能力', en: 'The manager will assess each employee\'s performance during the annual review.', zhEx: '经理将在年度审查期间评估每位员工的绩效。', tags: ['work'] },
      { w: 'assessed', ipa: '', pos: 'v. adj.', zh: '评估；评估结果', en: 'The employee\'s performance was assessed based on the quarterly sales figures.', zhEx: '根据季度销售数字，对员工的绩效进行了评估。', tags: ['work'] },
      { w: 'assessment', ipa: '', pos: 'n.', zh: '评估；评量；考核', en: 'The annual performance assessment will help identify areas for employee development.', zhEx: '年度绩效评估将有助于识别员工发展的领域。', tags: ['work'] },
      { w: 'asset', ipa: '', pos: 'n.', zh: '资产；资源；财产（指对公司有价值且能产生收入的物品或权利）', en: 'The company\'s most valuable asset is its skilled workforce.', zhEx: '公司最宝贵的资产是其技术熟练的员工。', tags: ['finance'] },
      { w: 'assigning', ipa: '', pos: 'v.', zh: '指派；分配（任务、职责等）', en: 'The manager is assigning tasks to team members based on their skills.', zhEx: '经理根据团队成员的技能，指派任务。', tags: ['work'] },
      { w: 'assistance', ipa: '', pos: 'n.', zh: '协助；支持；帮助', en: 'The IT department provides technical assistance to all employees.', zhEx: '信息部门为所有员工提供技术支持。', tags: ['business'] },
      { w: 'association', ipa: '', pos: 'n.', zh: '关联；结合；会员组织', en: 'The company is a member of several industry associations.', zhEx: '该公司是几个行业协会的会员。', tags: ['work'] },
      { w: 'assorted', ipa: '', pos: 'adj.', zh: '各式各样的；多样化的', en: 'The store offers an assorted selection of teas from around the world.', zhEx: '这家商店提供来自世界各地的各式各样的茶品。', tags: ['business'] },
      { w: 'at a substantial discount', ipa: '', pos: 'adj. adv.', zh: '以大幅折扣', en: 'We\'re offering the new software at a substantial discount to encourage early adoption.', zhEx: '为了鼓励早期采用，我们正在以大幅折扣提供新软件。', tags: ['business'] },
      { w: 'at all costs', ipa: '', pos: 'adv.', zh: '不惜一切代价；务必，无论如何', en: 'We must complete this project on time, at all costs.', zhEx: '我们务必按时完成这个项目。', tags: ['business'] },
      { w: 'at full speed', ipa: '', pos: 'adv.', zh: '全速；以最快的速度', en: 'The delivery truck is operating at full speed to meet the tight deadline.', zhEx: '为了赶上紧迫的期限，货运卡车正全速行驶。', tags: ['business'] },
      { w: 'at no charge (= at no cost)', ipa: '', pos: 'adv. adj.', zh: '免费的；不收取任何费用', en: 'We offer free consultations at no charge to potential clients.', zhEx: '我们为潜在客户提供免费咨询，不收取任何费用。', tags: ['business'] },
      { w: 'at no extra charge', ipa: '', pos: 'phr.', zh: '免费的；不收取额外费用', en: 'We offer complimentary Wi-Fi access to all guests at no extra charge.', zhEx: '我们为所有住客提供免费的 Wi-Fi 服务，无需额外费用。', tags: ['business'] },
      { w: 'at the discretion of', ipa: '', pos: 'phr.', zh: '由…决定；根据…的判断', en: 'The final decision regarding the project budget rests at the discretion of the CEO.', zhEx: '项目预算最终的决定权由首席执行官决定。', tags: ['business'] },
      { w: 'ate', ipa: '', pos: 'v.', zh: '吃掉；食用', en: 'The company catered the meeting, and everyone ate the delicious sandwiches.', zhEx: '公司为会议提供餐点，每个人都吃了美味的三明治。', tags: ['daily'] },
      { w: 'athlete', ipa: '', pos: 'n.', zh: '运动员；体育运动者', en: 'Our company sponsors several athletes to promote our brand and support the local community.', zhEx: '我们公司赞助多位运动员，以推广我们的品牌并支持当地社区。', tags: ['work'] },
      { w: 'athletic', ipa: '', pos: 'adj.', zh: '具有运动能力或体能的；体育的', en: 'The company is looking for athletic candidates for the new sports team.', zhEx: '公司正在寻找具备运动能力的候选人加入新的运动队。', tags: ['work'] },
      { w: 'atmosphere', ipa: '', pos: 'n.', zh: '大气层；(比喻) 气氛、氛围', en: 'The company is committed to reducing its carbon footprint and improving the atmosphere for future generations.', zhEx: '公司致力于减少碳足迹，并为后代创造更美好的环境。', tags: ['business'] },
      { w: 'attack', ipa: '', pos: 'n. v.', zh: '突袭；攻击；进攻；（网络）攻击', en: 'The company\'s IT department is working to prevent cyberattacks.', zhEx: '公司信息技术部门正在努力防止网络攻击。', tags: ['code'] },
      { w: 'attain', ipa: '', pos: 'v.', zh: '达成；获得；实现（目标、成就等）', en: 'The company aims to attain a 10% increase in market share this year.', zhEx: '公司今年目标是达成 10% 的市场份额增长。', tags: ['business'] },
      { w: 'attend a conference', ipa: '', pos: 'v.', zh: '参加会议；出席会议', en: 'All department heads are required to attend the annual management conference.', zhEx: '所有部门主管都必须参加年度管理会议。', tags: ['work'] },
      { w: 'attend to a client', ipa: '', pos: 'v.', zh: '专心处理客户的需求或问题；悉心照料客户', en: 'Our staff is trained to attend to clients promptly and efficiently.', zhEx: '我们的员工接受过训练，能够迅速且有效地处理客户的需求。', tags: ['business'] },
      { w: 'attendant', ipa: '', pos: 'n.', zh: '服务人员；（火车、飞机等）乘务员', en: 'The flight attendant demonstrated the safety procedures before takeoff.', zhEx: '在起飞前，空服人员示范了安全进程。', tags: ['travel'] },
      { w: 'attended', ipa: '', pos: 'v.', zh: '出席；参加（会议、活动等）', en: 'All employees are required to attend the mandatory safety training session.', zhEx: '所有员工都必须参加强制性的安全培训课程。', tags: ['work'] },
      { w: 'attendee', ipa: '', pos: 'n.', zh: '参加者；出席者', en: 'All attendees are requested to register at the front desk before the workshop begins.', zhEx: '所有与会者都被要求在研讨会开始前到前台登记。', tags: ['work'] },
      { w: 'attention', ipa: '', pos: 'n.', zh: '注意；关注；在工作、会议或其他商务情境中对信息、指示或细节的专注与留意。', en: 'Please give your full attention to the quarterly sales figures during the presentation.', zhEx: '请在演示文稿期间全神贯注于季度销售数据。', tags: ['work'] },
      { w: 'attorney', ipa: '', pos: 'n.', zh: '律师；诉讼代理人', en: 'The company hired an attorney to review the contract before signing.', zhEx: '公司聘请了一位律师在签署合约前审阅。', tags: ['legal'] },
      { w: 'attract', ipa: '', pos: 'v.', zh: '吸引（注意力、客户、投资等）；引起兴趣', en: 'The company\'s innovative marketing campaign is designed to attract new customers.', zhEx: '该公司的创新行销活动旨在吸引新客户。', tags: ['business'] },
      { w: 'attracted', ipa: '', pos: 'v. adj.', zh: '被吸引；引起兴趣（通常指对某事物或某人产生好感或注意力）', en: 'The company\'s innovative marketing campaign attracted a large number of potential customers.', zhEx: '该公司的创新行销活动吸引了大量的潜在客户。', tags: ['business'] },
      { w: 'attracting', ipa: '', pos: 'v. adj.', zh: '吸引（注意力、客户、投资等）', en: 'The company\'s innovative marketing campaign is attracting a large number of potential customers.', zhEx: '该公司的创新行销活动正在吸引大量的潜在客户。', tags: ['business'] },
      { w: 'attraction', ipa: '', pos: 'n.', zh: '吸引力；游客吸引力；吸引力（指对某事物的喜好或兴趣）', en: 'The city\'s main attraction is its historical architecture and vibrant cultural scene.', zhEx: '这个城市的 главная достопримечательность – это его историческая архитектура и яркая культурная сцена。', tags: ['business'] },
      { w: 'attractive', ipa: '', pos: 'adj.', zh: '具有吸引力，引人注目，在商业情境中通常指产品、设计或个人形象具有吸引顾客或提升品牌形象的能力。', en: 'The company redesigned its website to make it more attractive to potential clients.', zhEx: '该公司重新设计其网站，使其对潜在客户更具吸引力。', tags: ['business'] },
      { w: 'attributable', ipa: '', pos: 'adj.', zh: '可归因于...的；应归因于...的', en: 'The recent increase in sales is largely attributable to our new marketing campaign.', zhEx: '最近的销售额增长主要归因于我们新的行销活动。', tags: ['work'] },
      { w: 'auction', ipa: '', pos: 'n. v.', zh: '拍卖；以竞价方式出售', en: 'The company decided to auction off the surplus inventory to reduce storage costs.', zhEx: '公司决定将多余的库存以拍卖的方式出售，以减少仓储成本。', tags: ['business'] },
      { w: 'audio', ipa: '', pos: 'n.', zh: '音频；声音频号', en: 'The IT department is troubleshooting the audio issues during the online meeting.', zhEx: 'IT 部门正在解决在线会议期间的音频问题。', tags: ['code'] },
      { w: 'audiobook', ipa: '', pos: 'n.', zh: '有声书；数字音频书籍，通常用于通勤或学习。', en: 'Many employees listen to audiobooks during their commute to improve their English skills.', zhEx: '许多员工在通勤途中收听有声书以提高他们的英语水平。', tags: ['code'] },
      { w: 'audiovisual', ipa: '', pos: 'adj.', zh: '结合视觉和听觉的，指利用声音和影像共同传达信息的。', en: 'The presentation room is equipped with state-of-the-art audiovisual equipment.', zhEx: '该演示文稿室配备了最先进的视听设备。', tags: ['code'] },
      { w: 'audit', ipa: '', pos: 'n. v.', zh: '审计；检查（财务、帐户等）', en: 'The company is undergoing a quarterly audit to ensure financial accuracy.', zhEx: '公司正在进行季度审计，以确保财务准确性。', tags: ['finance'] },
      { w: 'auditing', ipa: '', pos: 'adj.', zh: '审计', en: 'The company\'s new auditing initiative exceeded expectations in the first quarter.', zhEx: '公司的新auditing计划在第一季度超出了预期。', tags: ['finance'] },
      { w: 'audition', ipa: '', pos: 'n. v.', zh: '试镜；审查（演员、音乐家等）', en: 'The company is holding auditions for the new commercial.', zhEx: '公司正在为新的广告进行试镜。', tags: ['work'] },
      { w: 'auditor', ipa: '', pos: 'n.', zh: '查帐员；稽核员', en: 'The external auditor reviewed the company\'s financial statements.', zhEx: '外部查帐员审查了公司的财务报表。', tags: ['finance'] },
      { w: 'auditorium', ipa: '', pos: 'n.', zh: '演讲厅；礼堂，通常用于大型会议或演讲。', en: 'The annual company conference will be held in the auditorium.', zhEx: '年度公司会议将在演讲厅举行。', tags: ['work'] },
      { w: 'augment', ipa: '', pos: 'v.', zh: '增加；扩大；提升（数量、程度等）', en: 'The company plans to augment its production capacity to meet the increasing demand.', zhEx: '公司计划扩大其生产能力以满足不断增长的需求。', tags: ['business'] },
      { w: 'authenticate', ipa: '', pos: 'v.', zh: '验证；确认（身分、信息等）的真实性', en: 'Before accessing the secure server, users must authenticate their identity.', zhEx: '在访问安全服务器之前，用户必须验证其身分。', tags: ['code'] },
      { w: 'authorities', ipa: '', pos: 'n.', zh: '主管机关；权威机构（通常指政府部门或具有法律授权的组织）', en: 'The company is cooperating fully with the authorities regarding the investigation.', zhEx: '公司正在全力配合主管机关进行调查。', tags: ['legal'] },
      { w: 'authorized', ipa: '', pos: 'adj.', zh: '授权的；被批准的；正式允许的', en: 'Only authorized personnel are allowed to access the company\'s confidential data.', zhEx: '只有授权人员才能访问公司的机密数据。', tags: ['legal'] },
      { w: 'auto', ipa: '', pos: 'adj. n.', zh: '自动化；自动的', en: 'The company is investing in automated systems to improve efficiency.', zhEx: '公司正在投资自动化系统以提高效率。', tags: ['code'] },
      { w: 'automate', ipa: '', pos: 'v.', zh: '自动化；使…自动运作', en: 'The company is planning to automate several key processes to improve efficiency.', zhEx: '公司计划自动化几个关键流程以提高效率。', tags: ['code'] },
      { w: 'automated', ipa: '', pos: 'adj.', zh: '自动化的；使用机器或电脑系统来运行任务。', en: 'The company is investing in automated systems to improve efficiency.', zhEx: '该公司正在投资自动化系统以提高效率。', tags: ['code'] },
      { w: 'automatic', ipa: '', pos: 'adj.', zh: '自动的；无需人工干预的，通常指系统或设备能够自行运作。', en: 'The factory has implemented an automatic production line to increase efficiency.', zhEx: '工厂已实施自动化生产线以提高效率。', tags: ['code'] },
      { w: 'automatic payment', ipa: '', pos: 'n.', zh: '自动付款；自动扣款，指设置定期自动从银行帐户扣款支付费用。', en: 'To avoid late fees, we recommend setting up automatic payments for your monthly utility bills.', zhEx: '为了避免滞纳金，我们建议设置每月水电费的自动付款。', tags: ['finance'] },
      { w: 'automatically', ipa: '', pos: 'adv.', zh: '自动地；不需人工控制地', en: 'The system automatically generates reports at the end of each month.', zhEx: '系统会在每个月底自动生成报告。', tags: ['code'] },
      { w: 'automation', ipa: '', pos: 'n.', zh: '自动化', en: 'The department implemented innovative automation procedures to improve operational efficiency.', zhEx: '部门实施创新的automation进程以提高营运效率。', tags: ['code'] },
      { w: 'automobile', ipa: '', pos: 'n.', zh: '汽车；机动车（通常指乘用车，在商务情境中指个人或公司拥有的车辆）', en: 'The company provides employees with a vehicle allowance to cover the cost of their automobiles.', zhEx: '公司为员工提供车辆津贴，以支付他们汽车的费用。', tags: ['travel'] },
      { w: 'automotive', ipa: '', pos: 'adj.', zh: '与汽车产业相关的；汽车工业的', en: 'The company is investing heavily in automotive technology to stay competitive.', zhEx: '为了保持竞争力，该公司正在大力投资汽车技术。', tags: ['business'] },
      { w: 'automotive repair shop', ipa: '', pos: 'n.', zh: '汽车维修店，提供汽车保养、维修及相关服务的商业场所。', en: 'Our company has a contract with a local automotive repair shop for vehicle maintenance.', zhEx: '我们公司与一家当地汽车维修店签订了车辆维护合约。', tags: ['travel'] },
      { w: 'autonomous', ipa: '', pos: 'adj.', zh: '自主的；自治的；独立的', en: 'The company is investing heavily in developing autonomous driving technology.', zhEx: '该公司正大力投资开发自动驾驶技术。', tags: ['code'] },
      { w: 'autonomy', ipa: '', pos: 'n.', zh: '自主权；自治', en: 'The company encourages employees to have more autonomy in their work.', zhEx: '该公司鼓励员工在工作中拥有更多自主权。', tags: ['work'] },
      { w: 'autumn', ipa: '', pos: 'n.', zh: '秋季；秋天', en: 'The leaves turn golden and red in autumn.', zhEx: '树叶在秋天变成金黄色和红色。', tags: ['work'] },
      { w: 'ave', ipa: '', pos: 'n. adv.', zh: '平均；平均值', en: 'The company\'s average profit margin for the last quarter was 15%.', zhEx: '公司上个季的平均利润率为 15%。', tags: ['finance'] },
      { w: 'avenue', ipa: '', pos: 'n.', zh: '宽阔的街道，通常是城市中的主要干道。', en: 'The conference venue is located on Fifth Avenue, a major thoroughfare in the city.', zhEx: '会议场地位于第五大道，这是城市中的一条主要干道。', tags: ['travel'] },
      { w: 'aversion', ipa: '', pos: 'n.', zh: '厌恶; 反感', en: 'She has a strong aversion to snakes.', zhEx: '她对蛇有强烈的厌恶感。', tags: ['work'] },
      { w: 'aviation', ipa: '', pos: 'n.', zh: '航空业；航空领域', en: 'The company\'s expansion into the aviation sector presents significant growth opportunities.', zhEx: '公司扩展至航空业，带来了显著的增长机会。', tags: ['travel'] },
      { w: 'award', ipa: '', pos: 'n. v.', zh: '奖励；奖项；授予', en: 'The company will award a bonus to employees who exceed their sales targets.', zhEx: '公司将会对超过销售目标的员工颁发奖金。', tags: ['work'] },
      { w: 'award ceremony', ipa: '', pos: 'n.', zh: '颁奖典礼；表彰仪式', en: 'The annual employee award ceremony will be held next Friday to recognize outstanding performance.', zhEx: '为了表彰优秀表现，我们将在下周五举行年度员工颁奖典礼。', tags: ['business'] },
      { w: 'awarded', ipa: '', pos: 'v.', zh: '授予（奖项、荣誉等）；颁发', en: 'The company awarded her a bonus for exceeding her sales targets.', zhEx: '由于她超额完成销售目标，公司授予她奖金。', tags: ['work'] },
      { w: 'awful', ipa: '', pos: 'adj.', zh: '极差的；令人不快的；糟糕的（通常指品质、服务或体验）', en: 'The hotel room was awful; it was dirty and the air conditioning didn\'t work.', zhEx: '饭店房间非常糟糕，脏乱而且冷气坏了。', tags: ['business'] },
      { w: 'bachelor', ipa: '', pos: 'n.', zh: '单身男性；学士学位（指未婚的男性或大学学士学位）', en: 'The company is looking for a bachelor\'s degree holder for the entry-level position.', zhEx: '公司正在寻找学士学位持有者来填补入门级职位。', tags: ['work'] },
      { w: 'back injury', ipa: '', pos: 'n.', zh: '因背部受伤，导致身体机能受损或疼痛的状况，通常与工作或运动等活动有关。', en: 'The company is implementing ergonomic training to reduce the risk of back injuries among employees.', zhEx: '公司正在实施符合人体工学的培训，以减少员工发生背部受伤的风险。', tags: ['work'] },
      { w: 'back order', ipa: '', pos: 'n.', zh: '预订未交货的商品，通常是因为供应商缺货或延迟交货。', en: 'We have a back order for 500 units of the product due to high demand.', zhEx: '由于需求量大，我们有 500 单位商品的预订未交货。', tags: ['business'] },
      { w: 'backed', ipa: '', pos: 'v. adj.', zh: '支持；赞助；背书；（在交通工具上）倒退', en: 'The project received backing from several key investors.', zhEx: '这个项目获得了几位关键投资者的支持。', tags: ['business'] },
      { w: 'background', ipa: '', pos: 'n.', zh: '指个人或事物过去的经历、教育、工作等信息，常用于评估或说明其相关背景。', en: 'Please review the candidate\'s background before scheduling the interview.', zhEx: '请在安排面试前审查应征者的背景。', tags: ['work'] },
      { w: 'backing', ipa: '', pos: 'n. v.', zh: '支持；赞助；后援；备份材料', en: 'The company received strong backing from investors for its new product line.', zhEx: '该公司在新产品线的投资者获得了强大的支持。', tags: ['business'] },
      { w: 'backpack', ipa: '', pos: 'n.', zh: '后背包；登山背包，通常用于携带个人物品。', en: 'The salesperson recommended a lightweight backpack for the business trip.', zhEx: '销售人员建议一位轻便后背包用于商务旅行。', tags: ['travel'] },
      { w: 'backup', ipa: '', pos: 'n. v.', zh: '备份数据、后援、支持', en: 'We regularly back up our data to prevent data loss in case of a system failure.', zhEx: '我们定期备份数据，以防止系统故障时发生数据遗失。', tags: ['code'] },
      { w: 'backward', ipa: '', pos: 'adj. adv.', zh: '向后地；落后的；倒退的', en: 'He took a step backward to get a better view of the painting.', zhEx: '他向后退了一步，以便更好地欣赏这幅画。', tags: ['work'] },
      { w: 'baggage', ipa: '', pos: 'n.', zh: '行李；行李物资', en: 'Please ensure your baggage is tagged with the correct destination.', zhEx: '请确保您的行李已标示正确的抵达目的地。', tags: ['travel'] },
      { w: 'bags', ipa: '', pos: 'n.', zh: '袋子；行李（通常指装物品的容器或行李箱）', en: 'The shipping department needs to pack these fragile items in sturdy bags.', zhEx: '运输部门需要将这些易碎物品装入坚固的袋子中。', tags: ['business'] },
      { w: 'bail', ipa: '', pos: 'n. v.', zh: '保释；保释金；取保；帮助(某人)脱离困境；将水舀出', en: 'The judge set bail at $50,000 for the defendant.', zhEx: '法官为被告设置了五万美元的保释金。', tags: ['legal'] },
      { w: 'bake', ipa: '', pos: 'v.', zh: '烘焙；烤制（食物）', en: 'The hotel kitchen will bake fresh bread daily for the breakfast buffet.', zhEx: '饭店厨房将每天为早餐自助餐烘焙新鲜面包。', tags: ['daily'] },
      { w: 'baker', ipa: '', pos: 'n.', zh: '面包师傅；烘焙师', en: 'The hotel is looking for a skilled baker to create fresh pastries for breakfast.', zhEx: '饭店正在寻找一位熟练的面包师傅，为早餐制作新鲜的糕点。', tags: ['daily'] },
      { w: 'bakery', ipa: '', pos: 'n.', zh: '面包店；烘焙坊（通常指销售面包、糕点等烘焙食品的商店）', en: 'The company is partnering with a local bakery to provide fresh pastries for the conference attendees.', zhEx: '公司正在与一家当地面包店合作，为会议参与者提供新鲜的糕点。', tags: ['daily'] },
      { w: 'baking', ipa: '', pos: 'n. v.', zh: '烘焙；烘烤（食物）', en: 'The hotel kitchen is known for its delicious baking, especially the chocolate cake.', zhEx: '这家饭店的厨房以其美味的烘焙闻名，尤其是巧克力蛋糕。', tags: ['daily'] },
      { w: 'balanced', ipa: '', pos: 'adj.', zh: '均匀的；平衡的；（财务上）收支平衡的', en: 'The company needs to maintain a balanced budget to ensure long-term financial stability.', zhEx: '公司需要维持收支平衡的预算，以确保长期的财务稳定性。', tags: ['business'] },
      { w: 'balcony', ipa: '', pos: 'n.', zh: '阳台，通常指建筑物外墙伸出的平台，可供观景或休憩。', en: 'The hotel room boasts a spacious balcony with a stunning ocean view.', zhEx: '这间饭店房间设有宽敞的阳台，享有迷人的海景。', tags: ['daily'] },
      { w: 'ball', ipa: '', pos: 'n. v.', zh: '球; 舞会; (俚语) 好时光; (俚语) 勇气', en: 'The children were playing with a colorful ball in the park.', zhEx: '孩子们在公园里玩一个彩色的球。', tags: ['work'] },
      { w: 'ballot', ipa: '', pos: 'n. v.', zh: '投票；选票；选举；（无记名）投票表决', en: 'Employees will cast their ballots for the new union representative next week.', zhEx: '员工将于下周投票选出新的工会代表。', tags: ['work'] },
      { w: 'ballroom', ipa: '', pos: 'n.', zh: '舞厅；宴会厅', en: 'The hotel\'s grand ballroom can accommodate up to 500 guests for the wedding reception.', zhEx: '这家饭店的豪华宴会厅可容纳多达500位宾客举办婚礼招待会。', tags: ['daily'] },
      { w: 'ban', ipa: '', pos: 'v. n.', zh: '禁止；阻止；限制', en: 'The company has banned the use of personal devices during work hours to enhance security.', zhEx: '为了提升安全性，公司禁止在工作时间使用个人设备。', tags: ['business'] },
      { w: 'band', ipa: '', pos: 'n. v.', zh: '一组具有相似特征或相同范围的事物；在商务环境中常指薪资等级、价格区间或频率范围。', en: 'The company has established a new salary band for entry‑level engineers.', zhEx: '公司已为初级工程师设置了新的薪资等级。', tags: ['work'] },
      { w: 'bank', ipa: '', pos: 'n. v.', zh: '银行；金融机构', en: 'The company deposited a large sum of money into the bank last week.', zhEx: '本公司上周将一大笔资金存入银行。', tags: ['finance'] },
      { w: 'bank account', ipa: '', pos: 'n.', zh: '银行帐户，指在银行开设的存款帐户，用于储蓄、支付和管理资金。', en: 'Please transfer the invoice payment to our bank account.', zhEx: '请将发票款项转帐至我们的银行帐户。', tags: ['finance'] },
      { w: 'bank loan', ipa: '', pos: 'n.', zh: '银行贷款；银行借款', en: 'The company secured a bank loan to finance its expansion plans.', zhEx: '该公司获得银行贷款以资助其扩张计划。', tags: ['finance'] },
      { w: 'bank teller', ipa: '', pos: 'n.', zh: '银行出纳员，负责处理客户存款、提款、转帐等金融交易的银行员工。', en: 'The bank teller asked me to fill out a withdrawal slip.', zhEx: '银行出纳员请我填写一张提款单。', tags: ['finance'] },
      { w: 'banker', ipa: '', pos: 'n.', zh: '银行家；金融从业人员', en: 'The banker advised the company on securing a loan for expansion.', zhEx: '这位银行家建议公司获得扩张贷款。', tags: ['finance'] },
      { w: 'banking', ipa: '', pos: 'n.', zh: '银行业；银行服务；金融交易', en: 'The company is seeking a consultant with expertise in international banking regulations.', zhEx: '公司正在寻找一位在国际银行法规方面有专业知识的顾问。', tags: ['finance'] },
      { w: 'bankrupt', ipa: '', pos: 'adj. v.', zh: '破产；（公司或个人）财务无力，无力偿还债务', en: 'The company declared bankruptcy after failing to secure a crucial loan.', zhEx: '由于未能获得一项关键贷款，该公司宣布破产。', tags: ['finance'] },
      { w: 'bankruptcy', ipa: '', pos: 'n.', zh: '破产；（公司或个人）无力偿还债务的状态', en: 'The company filed for bankruptcy after suffering significant financial losses.', zhEx: '该公司在遭受重大财务损失后申请破产。', tags: ['finance'] },
      { w: 'banned', ipa: '', pos: 'v. adj.', zh: '禁止；严禁（某物或某行为）', en: 'The use of mobile phones is banned during the board meeting.', zhEx: '董事会会议期间禁止使用手机。', tags: ['legal'] },
      { w: 'banner', ipa: '', pos: 'n.', zh: '横幅；招牌（通常用于宣传或公告）', en: 'The company hung a large banner outside the conference hall to promote their new product.', zhEx: '为了推广他们的新产品，公司在会议厅外悬挂了一个大型横幅。', tags: ['business'] },
      { w: 'banning', ipa: '', pos: 'v.', zh: '禁止；严禁（某事物）', en: 'The company is banning the use of personal devices on the factory floor for safety reasons.', zhEx: '由于安全考量，公司禁止在工厂地板上使用个人设备。', tags: ['legal'] },
      { w: 'banquet', ipa: '', pos: 'n. v.', zh: '盛大的宴会，通常用于庆祝或接待重要客户的正式餐饮活动', en: 'The company organized a banquet to thank its top-performing sales team.', zhEx: '公司举办了一场宴会，以感谢表现最优秀的销售团队。', tags: ['daily'] },
      { w: 'bar', ipa: '', pos: 'n. v.', zh: '吧台；酒吧；测量单位（英吋）', en: 'The hotel guests often gather at the bar for a pre-dinner cocktail.', zhEx: '饭店的住客经常在吧台享用晚餐前的鸡尾酒。', tags: ['daily'] },
      { w: 'barbecue', ipa: '', pos: 'n. v.', zh: '烧烤（食物）；烤肉；户外烧烤野餐', en: 'We\'re planning a big barbecue for the holiday weekend.', zhEx: '我们计划在假日周末举办一场大型烤肉活动。', tags: ['daily'] },
      { w: 'barcode', ipa: '', pos: 'n.', zh: '一组条码，通常用于商品识别和库存管理，包含一系列的条纹和空格，经由扫描仪读取。', en: 'The cashier scanned the barcode to process the payment quickly.', zhEx: '收银员扫描条码以便快速处理付款。', tags: ['business'] },
      { w: 'bargain', ipa: '', pos: 'n. v.', zh: '议价；以低廉的价格购买；划算的交易', en: 'We managed to secure a great bargain on the raw materials, significantly reducing production costs.', zhEx: '我们成功地以划算的价格获得了原材料，大大降低了生产成本。', tags: ['business'] },
      { w: 'bargain over prices', ipa: '', pos: 'v.', zh: '就价格协商；就价格讨价还价', en: 'The purchasing manager had to bargain over prices with the supplier to stay within budget.', zhEx: '采购经理不得不与供应商协商价格，以控制在预算内。', tags: ['business'] },
      { w: 'bargaining', ipa: '', pos: 'n. v.', zh: '议价；协商价格', en: 'The company is currently bargaining with the supplier to secure a better price for the raw materials.', zhEx: '公司目前正在与供应商协商，以获得更优惠的原材料价格。', tags: ['business'] },
      { w: 'barrel', ipa: '', pos: 'n.', zh: '大型木桶或金属桶，常用于保存或运输液体或大宗商品。', en: 'The shipping department needs to order more barrels to store the imported oil.', zhEx: '运输部门需要订购更多木桶来保存进口石油。', tags: ['business'] },
      { w: 'barring', ipa: '', pos: 'prep. adv.', zh: '除非…情况下；在…前提下', en: 'Barring any unforeseen circumstances, the project should be completed by the end of the month.', zhEx: '除非出现任何不可预见的情况，否则项目应在本月底前完成。', tags: ['legal'] },
      { w: 'baseline', ipa: '', pos: 'n. adj.', zh: '基线；基准；最低标准', en: 'We need to establish a baseline for performance before we can measure improvements.', zhEx: '在衡量改进之前，我们需要创建一个绩效基准。', tags: ['business'] },
      { w: 'basement', ipa: '', pos: 'n.', zh: '地下室；地基室', en: 'The company is considering converting the basement into a storage area for excess inventory.', zhEx: '公司正在考虑将地下室改造成多余库存的保存空间。', tags: ['business'] },
      { w: 'basket', ipa: '', pos: 'n.', zh: '篮子；一篮的量；（篮球）篮框；投篮得分', en: 'Please put the dirty towels in the laundry basket.', zhEx: '请把脏毛巾放到洗衣篮里。', tags: ['work'] },
      { w: 'batch', ipa: '', pos: 'n.', zh: '一批；一批量（通常指数量较多的物品或工作），尤其指在同一时间生产或处理的。', en: 'The factory is producing a large batch of smartphones this month.', zhEx: '工厂本月将生产一批大量的智能型手机。', tags: ['business'] },
      { w: 'bathroom', ipa: '', pos: 'n.', zh: '浴室；盥洗室（通常指酒店、办公室等场所提供的设施）', en: 'The hotel room includes a private bathroom with a shower and a hairdryer.', zhEx: '这间酒店房间配备私人浴室，内有淋浴和吹风机。', tags: ['daily'] },
      { w: 'batteries', ipa: '', pos: 'n.', zh: '电池（复数）；电力来源', en: 'The IT department needs to replace the batteries in all the backup generators.', zhEx: '信息部门需要更换所有备用发电机的电池。', tags: ['code'] },
      { w: 'battery', ipa: '', pos: 'n.', zh: '电池；电力来源', en: 'The laptop\'s battery needs to be replaced as it\'s no longer holding a charge.', zhEx: '笔记型电脑的电池需要更换，因为它不再能充电。', tags: ['code'] },
      { w: 'battle', ipa: '', pos: 'n. v.', zh: '竞争；争夺（资源、市场等）；激烈的对抗', en: 'The company is engaged in a fierce battle for market share with its competitors.', zhEx: '该公司正在与竞争对手展开激烈的市场份额争夺战。', tags: ['business'] },
      { w: 'bay', ipa: '', pos: 'n.', zh: '海湾；(船舶)停泊处', en: 'The cruise ship docked in the bay, offering stunning views of the city.', zhEx: '邮轮停靠在海湾，提供了城市令人惊叹的景色。', tags: ['travel'] },
      { w: 'be admitted to', ipa: '', pos: 'v.', zh: '被允许进入；被接纳（某机构、学校等）', en: 'Applicants must meet the minimum requirements to be admitted to the university.', zhEx: '申请人必须符合最低要求才能被大学接纳。', tags: ['work'] },
      { w: 'be arranged on the patio', ipa: '', pos: 'adj. v.', zh: '被安排在露台', en: 'The outdoor furniture will be arranged on the patio for the company picnic.', zhEx: '户外家具将被安排在露台上，以举办公司野餐。', tags: ['business'] },
      { w: 'be booked up', ipa: '', pos: 'adj.', zh: '已满额；预订额满，无法安排', en: 'I\'m sorry, sir, but the conference room is booked up for the entire week.', zhEx: '很抱歉，先生，这整周的会议室都已满额。', tags: ['travel'] },
      { w: 'be carried out', ipa: '', pos: 'v.', zh: '运行；实施（计划、进程等）', en: 'The project manager confirmed that all safety protocols will be carried out meticulously.', zhEx: '项目经理确认所有安全协议将会被严谨地运行。', tags: ['business'] },
      { w: 'be caught in', ipa: '', pos: 'v.', zh: '陷入（困境、延迟等）；受困于（某情况）', en: 'The project was caught in a series of unexpected delays due to supply chain issues.', zhEx: '由于供应链问题，该项目陷入了一系列意想不到的延迟。', tags: ['business'] },
      { w: 'be closed for the day', ipa: '', pos: 'adj. v.', zh: '因故暂停营业，全天停止服务。', en: 'Due to the unexpected power outage, the office will be closed for the day.', zhEx: '由于突发的停电，办公室将全天暂停营业。', tags: ['business'] },
      { w: 'be closed to the public', ipa: '', pos: 'adj.', zh: '对公众关闭；不对公众开放', en: 'Due to the ongoing renovations, the museum will be closed to the public until further notice.', zhEx: '由于正在进行的装修，博物馆将在进一步通知之前对公众关闭。', tags: ['business'] },
      { w: 'be closed to traffic', ipa: '', pos: 'adj. v.', zh: '因施工或活动等原因，对车辆交通限制或禁止通行。', en: 'Due to the marathon, Main Street will be closed to traffic from 7 AM to 12 PM.', zhEx: '由于马拉松比赛，主街将在早上 7 点至中午 12 点对车辆交通限制。', tags: ['travel'] },
      { w: 'be composed of', ipa: '', pos: 'v.', zh: '由…组成；包含…', en: 'The company\'s annual report is composed of several sections, including financial statements and market analysis.', zhEx: '公司的年度报告由几个部分组成，包括财务报表和市场分析。', tags: ['business'] },
      { w: 'be designed to do', ipa: '', pos: 'phr.', zh: '被设计用于做某事；旨在做某事', en: 'The software is designed to streamline the data entry process.', zhEx: '这款软件旨在简化数据输入流程。', tags: ['business'] },
      { w: 'be geared to', ipa: '', pos: 'adj. v.', zh: '专注于；为…设计/调整；以…为目标', en: 'The company\'s marketing strategy is geared towards attracting younger consumers.', zhEx: '该公司的行销策略专注于吸引年轻消费者。', tags: ['business'] },
      { w: 'be held', ipa: '', pos: 'v.', zh: '举行；举办（活动、会议等）', en: 'The annual sales conference will be held in New York City next month.', zhEx: '我们的年度销售会议将下个月在纽约市举行。', tags: ['work'] },
      { w: 'be held up', ipa: '', pos: 'v.', zh: '因故延迟；被耽搁', en: 'The flight was held up due to severe weather conditions.', zhEx: '由于恶劣的天气状况，航班延误了。', tags: ['travel'] },
      { w: 'be held up in traffic', ipa: '', pos: 'phr.', zh: '因交通延误而耽搁；因塞车而停滞', en: 'I\'m sorry for the delay; I was held up in traffic this morning.', zhEx: '对于延迟，我深感抱歉；今天早上我因塞车而耽搁了。', tags: ['travel'] },
      { w: 'be highly regarded', ipa: '', pos: 'adj.', zh: '受到高度尊重、备受推崇', en: 'The company\'s commitment to ethical practices is highly regarded by investors.', zhEx: '投资者对公司对伦理准则的承诺给予高度评价。', tags: ['work'] },
      { w: 'be in line', ipa: '', pos: 'v.', zh: '排队等候；在队伍中', en: 'Please be in line at the security checkpoint to ensure a smooth boarding process.', zhEx: '请在安全检查点排队，以确保顺畅的登机流程。', tags: ['travel'] },
      { w: 'be in the black', ipa: '', pos: 'adj. adv.', zh: '（公司或组织）财务状况良好，盈利且无亏损；在盈利状态。', en: 'The company is finally in the black after a difficult year.', zhEx: '经过一年的艰难时期，公司终于恢复盈利。', tags: ['finance'] },
      { w: 'be in the red', ipa: '', pos: 'adj. v.', zh: '入不敷出；财务状况不佳；亏损', en: 'The company\'s quarterly report showed that it was in the red due to declining sales.', zhEx: '公司的季度报告显示，由于销售额下降，公司处于入不敷出的状况。', tags: ['finance'] },
      { w: 'be known for', ipa: '', pos: 'v.', zh: '以...而闻名；因...而著称', en: 'Our company is known for its innovative product designs and excellent customer service.', zhEx: '我们公司以其创新产品设计和卓越的客户服务而闻名。', tags: ['business'] },
      { w: 'be left unattended', ipa: '', pos: 'adj. phr.', zh: '被遗留无人看管；未经监督而留下', en: 'For safety reasons, equipment must never be left unattended during operation.', zhEx: '为了安全起见，设备在操作期间绝不能被遗留无人看管。', tags: ['legal'] },
      { w: 'be lined with', ipa: '', pos: 'v.', zh: '覆盖着；排列着（某物），通常指内衬或边缘。', en: 'The conference room is lined with soundproofing panels to minimize noise.', zhEx: '会议室内壁覆盖着隔音板，以减少噪音。', tags: ['business'] },
      { w: 'be made up of', ipa: '', pos: 'v.', zh: '由…组成；包含…', en: 'The company\'s revenue is made up of sales from three main product lines.', zhEx: '公司的收入由三个主要产品线的销售额组成。', tags: ['business'] },
      { w: 'be mounted on', ipa: '', pos: 'v.', zh: '安装于；固定于（某物表面或结构上）', en: 'The security cameras are mounted on the walls to monitor the entire facility.', zhEx: '为了监控整个设施，安全摄影机安装在墙上。', tags: ['business'] },
      { w: 'be noted for', ipa: '', pos: 'v.', zh: '以...而闻名；以...著称', en: 'The company is noted for its innovative product designs and excellent customer service.', zhEx: '这家公司以其创新的产品设计和优质的客户服务而闻名。', tags: ['business'] },
      { w: 'be on a special diet', ipa: '', pos: 'adj.', zh: '遵循特殊饮食计划', en: 'Due to a medical condition, Mr. Lee is on a special diet and requires gluten-free options.', zhEx: '由于健康状况，李先生正在遵循特殊饮食计划，需要无麸质的选择。', tags: ['daily'] },
      { w: 'be on a trip', ipa: '', pos: 'phr.', zh: '正在旅行；出差', en: 'Mr. Lee is on a business trip to Tokyo next week to negotiate a new contract.', zhEx: '李先生下周将出差到东京，以协商一份新的合约。', tags: ['travel'] },
      { w: 'be on medication', ipa: '', pos: 'adj. v.', zh: '正在服用药物；因健康问题正在接受治疗', en: 'Due to a recent illness, Mr. Lee is currently on medication and will be working remotely for the next two weeks.', zhEx: '由于最近一次的疾病，李先生目前正在服药，并将在接下来的两周内远程工作。', tags: ['work'] },
      { w: 'be open for business', ipa: '', pos: 'adj. v.', zh: '营业中；已开始营业', en: 'The new store is now open for business and offering a 20% discount on all items.', zhEx: '新店现在已开始营业，所有商品都有 20% 的折扣。', tags: ['business'] },
      { w: 'be oriented to', ipa: '', pos: 'adj.', zh: '以...为导向；专注于...', en: 'Our marketing strategy is oriented towards attracting younger customers.', zhEx: '我们的行销策略专注于吸引年轻客户。', tags: ['business'] },
      { w: 'be paid for', ipa: '', pos: 'phr.', zh: '因工作或服务而获得报酬；因劳务而获得支付', en: 'Employees are paid for their overtime hours at a rate of 1.5 times their regular salary.', zhEx: '员工加班时段的薪资将以正常薪资的 1.5 倍支付。', tags: ['finance'] },
      { w: 'be qualified for', ipa: '', pos: 'v.', zh: '符合资格；具备条件', en: 'To be qualified for the position, candidates must have at least five years of experience in project management.', zhEx: '要符合这个职位的资格，候选人必须具备至少五年的项目管理经验。', tags: ['work'] },
      { w: 'be seated', ipa: '', pos: 'v.', zh: '请入座', en: 'The hostess politely said, \'Please be seated, sir.\'', zhEx: '女接待员礼貌地说：「先生，请入座。」', tags: ['daily'] },
      { w: 'be shaded', ipa: '', pos: 'adj.', zh: '被屏蔽；位于阴影中', en: 'The building\'s south-facing windows are be shaded by the trees to reduce heat gain.', zhEx: '为了减少热量吸收，建筑物朝南的窗户将被树木屏蔽。', tags: ['business'] },
      { w: 'be stacked on top of each other', ipa: '', pos: 'v.', zh: '堆栈在一起；一层层叠放', en: 'The boxes were stacked on top of each other to maximize space in the warehouse.', zhEx: '为了最大化仓库空间，这些箱子被堆栈在一起。', tags: ['business'] },
      { w: 'be suited for', ipa: '', pos: 'adj.', zh: '适合、符合要求，适用于（某种情况或职位）', en: 'This software is well-suited for managing large datasets.', zhEx: '这款软件非常适合管理大型数据集。', tags: ['work'] },
      { w: 'be surrounded by', ipa: '', pos: 'v.', zh: '被…环绕；被…包围，通常指被某事物或环境所包围，暗示一种被限制或被影响的状态。', en: 'The company\'s headquarters are surrounded by lush greenery, creating a peaceful working environment.', zhEx: '该公司的总部被茂密的绿地所环绕，营造了宁静的工作环境。', tags: ['business'] },
      { w: 'be towed away', ipa: '', pos: 'v.', zh: '因违规停车而被拖吊', en: 'Your vehicle will be towed away if you park in a restricted zone.', zhEx: '如果您在限制区域停车，您的车辆将会被拖吊。', tags: ['travel'] },
      { w: 'beach', ipa: '', pos: 'n.', zh: '沙滩；海滨，通常指供游憩或活动的沿海地区。', en: 'The resort offers complimentary shuttle service to the beach.', zhEx: '该度假村提供免费接驳服务到沙滩。', tags: ['travel'] },
      { w: 'bear', ipa: '', pos: 'n. v.', zh: '承受；负担；容忍；（熊）熊', en: 'The company needs to bear the cost of the unexpected equipment failure.', zhEx: '公司需要负担意外设备故障的费用。', tags: ['business'] },
      { w: 'bear (= carry)', ipa: '', pos: 'v.', zh: '负担；承载；支撑（重量、责任等）', en: 'The company needs to bear the cost of the employee\'s training program.', zhEx: '公司需要负担员工培训计划的费用。', tags: ['business'] },
      { w: 'beat', ipa: '', pos: 'v. n.', zh: '击败；超越；节奏；（心脏）跳动', en: 'Our sales team needs to beat last quarter\'s performance to meet the annual target.', zhEx: '我们的销售团队需要超越上个季度的业绩，才能达成年度目标。', tags: ['business'] },
      { w: 'beaten', ipa: '', pos: 'v. adj.', zh: '击败；被打败；受挫', en: 'Our team was beaten by a stronger competitor in the final round.', zhEx: '我们团队在决赛中被更强大的竞争对手击败。', tags: ['business'] },
      { w: 'beautiful', ipa: '', pos: 'adj.', zh: '美丽的；优美的，通常指外观或设计上的吸引力，在商务情境中可用于描述产品、环境或视觉呈现。', en: 'The marketing campaign highlighted the beautiful design of the new smartphone.', zhEx: '行销活动强调了这款新智能型手机的美丽设计。', tags: ['business'] },
      { w: 'beauty', ipa: '', pos: 'n. adj.', zh: '美观；吸引力；优雅。', en: 'The company\'s marketing campaign emphasized the beauty of the product\'s design.', zhEx: '该公司的行销活动强调了产品设计的美观。', tags: ['business'] },
      { w: 'bed', ipa: '', pos: 'n. v.', zh: '床；床铺；河床；海床；苗圃；花坛；（把某物）安置在床上；（在花园里）栽种（植物）', en: 'The hotel room has a comfortable king-size bed.', zhEx: '这间旅馆房间有一张舒适的特大号床。', tags: ['daily'] },
      { w: 'bedroom', ipa: '', pos: 'n.', zh: '卧室；睡眠房间', en: 'The hotel room features a comfortable bedroom with a king-size bed and a private balcony.', zhEx: '这间饭店房间设有舒适的卧室，配备一张特大床和一个私人阳台。', tags: ['daily'] },
      { w: 'before', ipa: '', pos: 'prep. conj.', zh: '在...之前；以前；在...前面', en: 'Please submit your report before Friday.', zhEx: '请在星期五之前提交您的报告。', tags: ['work'] },
      { w: 'behavioral', ipa: '', pos: 'adj.', zh: '行为的；与行为有关的', en: 'The company implemented a new behavioral assessment for job candidates.', zhEx: '公司为求职者实施了一项新的行为评估。', tags: ['work'] },
      { w: 'bells', ipa: '', pos: 'n. v.', zh: '铃声；警铃；钟声，通常用于提醒或通知。', en: 'The security system\'s bells alerted the staff to the potential break-in.', zhEx: '安全系统的警铃通知了工作人员潜在的入侵。', tags: ['business'] },
      { w: 'below', ipa: '', pos: 'prep. adv.', zh: '在...下面；低于；不及；在下层', en: 'Please find the instructions below regarding the new policy.', zhEx: '有关新政策的说明，请见下方。', tags: ['work'] },
      { w: 'belt', ipa: '', pos: 'n. v.', zh: '皮带；腰带；（机械）传动带；地带；区域；用皮带系紧；用皮带抽打；沿着…疾驰；猛击', en: 'Please make sure your seatbelt is securely fastened before the plane takes off.', zhEx: '请确保飞机起飞前您的安全带已牢固系好。', tags: ['work'] },
      { w: 'bench', ipa: '', pos: 'n.', zh: '长条型座椅，通常设在公共场所供人休息。', en: 'The waiting area has several benches for passengers to relax before their flight.', zhEx: '等候区设有多张长椅，供旅客在航班前休息。', tags: ['business'] },
      { w: 'benchmark', ipa: '', pos: 'n.', zh: '基准', en: 'The company\'s new benchmark initiative exceeded expectations in the first quarter.', zhEx: '公司的新benchmark计划在第一季度超出了预期。', tags: ['business'] },
      { w: 'beneficiary', ipa: '', pos: 'n.', zh: '受益人；受惠者', en: 'She was named as the sole beneficiary in her uncle\'s will.', zhEx: '她被指定为她叔叔遗嘱中的唯一受益人。', tags: ['finance'] },
      { w: 'benefit', ipa: '', pos: 'n. v.', zh: '利益；好处；优势', en: 'The company offers a comprehensive benefits package, including health insurance and paid vacation.', zhEx: '公司提供全面的福利待遇，包括医疗保险和带薪休假。', tags: ['work'] },
      { w: 'best-selling', ipa: '', pos: 'adj.', zh: '销售纪录最佳的；最畅销的', en: 'This novel is a best-selling book in several countries.', zhEx: '这本小说在多个国家都是销售纪录最佳的畅销书。', tags: ['business'] },
      { w: 'best-selling author', ipa: '', pos: 'n.', zh: '畅销书作家，指其作品销售量非常高的作家。', en: 'Our marketing campaign aims to promote the new book by the best-selling author.', zhEx: '我们的行销活动旨在推广这位畅销书作家的新书。', tags: ['business'] },
      { w: 'bet', ipa: '', pos: 'v. n.', zh: '赌；下注；(风险)冒险', en: 'The company is betting heavily on the success of its new product line.', zhEx: '公司押注其新产品线会成功，投入了大量资源。', tags: ['business'] },
      { w: 'bias', ipa: '', pos: 'n. v.', zh: '偏见；偏袒；倾向；斜线', en: 'The company needs to address the unconscious bias in its hiring process.', zhEx: '公司需要解决其招聘流程中的无意识偏见。', tags: ['work'] },
      { w: 'bicycle', ipa: '', pos: 'n.', zh: '自行车；自行车（通常指用于通勤或休闲活动的交通工具）', en: 'The company is offering a bicycle allowance to encourage employees to commute sustainably.', zhEx: '公司提供自行车津贴，以鼓励员工以可持续的方式通勤。', tags: ['travel'] },
      { w: 'bicycle rack', ipa: '', pos: 'n.', zh: '自行车架；自行车停放架', en: 'The office building provides a secure bicycle rack for employees who commute by bike.', zhEx: '该办公大楼为骑自行车通勤的员工提供安全的自行车架。', tags: ['business'] },
      { w: 'bidder', ipa: '', pos: 'n.', zh: '竞标者；出价人；投标人', en: 'Several bidders showed interest in acquiring the company.', zhEx: '有几位竞标者表示对收购该公司感兴趣。', tags: ['business'] },
      { w: 'big', ipa: '', pos: 'adj.', zh: '大的；重要的；大量的；显赫的', en: 'We are planning a big event for the company\'s anniversary.', zhEx: '我们正在为公司的周年纪念日策划一个大型活动。', tags: ['work'] },
      { w: 'bike', ipa: '', pos: 'n.', zh: '自行车；自行车（通常指通勤或休闲使用的单速或多速自行车）', en: 'The company is offering a bike-sharing program to encourage employees to commute sustainably.', zhEx: '公司提供自行车共享计划，以鼓励员工以可持续的方式通勤。', tags: ['travel'] },
      { w: 'biking', ipa: '', pos: 'v. n.', zh: '骑自行车；骑自行车（作为一种通勤或休闲活动）', en: 'Many employees are encouraged to bike to work to reduce traffic congestion and promote a healthier lifestyle.', zhEx: '许多员工被鼓励骑自行车上班，以减少交通拥堵并促进更健康的生活方式。', tags: ['travel'] },
      { w: 'bill', ipa: '', pos: 'n.', zh: '帐单；费用单据', en: 'Could you please settle the bill before you leave the restaurant?', zhEx: '请您在离开餐厅前结帐。', tags: ['finance'] },
      { w: 'billing', ipa: '', pos: 'n. v.', zh: '帐单处理；费用开立', en: 'The accounting department is responsible for processing all customer billings.', zhEx: '会计部门负责处理所有客户帐单。', tags: ['finance'] },
      { w: 'billing address', ipa: '', pos: 'n.', zh: '帐单地址；收费地址，指用于发送帐单的地址，通常与付款地址不同。', en: 'Please confirm your billing address matches the credit card statement.', zhEx: '请确认您的帐单地址与信用卡帐单地址一致。', tags: ['finance'] },
      { w: 'billing information', ipa: '', pos: 'n.', zh: '帐单信息，指与帐单相关的数据，例如客户姓名、地址、付款方式等。', en: 'Please double-check your billing information to ensure accurate charges.', zhEx: '请仔细核对您的帐单信息，以确保收费准确。', tags: ['finance'] },
      { w: 'biological', ipa: '', pos: 'adj.', zh: '生物的；生物学的', en: 'The experiment investigates the biological effects of pollutants on marine life.', zhEx: '这项实验探讨污染物对海洋生物的生物学影响。', tags: ['code'] },
      { w: 'bit', ipa: '', pos: 'n.', zh: '少量信息的单位，通常指电脑数据的最小保存单位。', en: 'The file size is 2 megabytes, which is equivalent to 16 million bits.', zhEx: '文件大小为 2 百兆字节，相当于 1600 万比特。', tags: ['code'] },
      { w: 'bitter', ipa: '', pos: 'adj. n.', zh: '苦的；痛苦的；严酷的', en: 'The coffee was very bitter, so I added some sugar.', zhEx: '这咖啡很苦，所以我加了一些糖。', tags: ['work'] },
      { w: 'blackout', ipa: '', pos: 'n.', zh: '停电；断电', en: 'Due to a sudden blackout, we had to postpone the online presentation.', zhEx: '由于突发停电，我们不得不延迟在线演示文稿。', tags: ['code'] },
      { w: 'blast', ipa: '', pos: 'n. v.', zh: '爆炸；一阵强风/气流；巨响；严厉批评；发送（大量电子邮件/消息）', en: 'The construction crew used a controlled blast to demolish the old building.', zhEx: '施工人员使用受控爆炸拆除了旧建筑。', tags: ['work'] },
      { w: 'blog', ipa: '', pos: 'n.', zh: '博客；个人或团体定期在网络上发布文章、图片或视频的个人网站。', en: 'The company uses its blog to announce new product releases and updates.', zhEx: '公司利用其博客来宣布新产品发布和更新。', tags: ['code'] },
      { w: 'blurry', ipa: '', pos: 'adj.', zh: '模糊不清的；影像不清晰的', en: 'The screenshot was blurry, making it difficult to read the data.', zhEx: '屏幕截屏模糊不清，导致难以阅读数据。', tags: ['code'] },
      { w: 'board a flight', ipa: '', pos: 'v.', zh: '登上飞机；搭乘飞机', en: 'Passengers are requested to board the flight 30 minutes prior to departure.', zhEx: '乘客们请于起飞前 30 分钟登上飞机。', tags: ['travel'] },
      { w: 'boarding', ipa: '', pos: 'v. n.', zh: '登机；（船只）上船', en: 'Passengers are requested to begin boarding the aircraft 30 minutes prior to departure.', zhEx: '乘客们请于起飞前 30 分钟开始登机。', tags: ['travel'] },
      { w: 'boarding gate', ipa: '', pos: 'n.', zh: '登机口，指旅客在机场搭乘飞机的指定位置。', en: 'Please proceed to boarding gate 42 for your flight to New York.', zhEx: '请前往登机口 42 搭乘前往纽约的航班。', tags: ['travel'] },
      { w: 'boasts', ipa: '', pos: 'v.', zh: '以自豪地炫耀或吹嘘；以引以为傲地宣称拥有或做到某事', en: 'Our company boasts a 10% increase in sales this quarter.', zhEx: '本公司本季的销售额增长了 10%，这是一个值得骄傲的成就。', tags: ['business'] },
      { w: 'body', ipa: '', pos: 'n. v.', zh: '身体；主体；主要部分；团体；实体', en: 'Regular exercise helps maintain a healthy body.', zhEx: '规律运动有助于维持健康的身体。', tags: ['work'] },
      { w: 'bolster', ipa: '', pos: 'v. n.', zh: '支持；增强；巩固', en: 'The new policies are expected to bolster economic growth.', zhEx: '预计新政策将会刺激经济成长。', tags: ['work'] },
      { w: 'bond', ipa: '', pos: 'n. v.', zh: '（金融）债券；（关系）联系、链接；（法律）保证、担保', en: 'The company issued new bonds to finance its expansion plans.', zhEx: '该公司发行新的债券以资助其扩张计划。', tags: ['finance'] },
      { w: 'bookkeeper', ipa: '', pos: 'n.', zh: '专职会计人员；簿记员，负责记录和管理公司的财务帐簿。', en: 'The company hired a skilled bookkeeper to manage their daily financial transactions.', zhEx: '公司聘请了一位熟练的簿记员来管理他们日常的财务交易。', tags: ['finance'] },
      { w: 'bookkeeping', ipa: '', pos: 'n.', zh: '记帐；会计工作', en: 'Our company is looking for a skilled bookkeeper to manage our financial records.', zhEx: '我们公司正在寻找一位熟练的记帐员来管理我们的财务记录。', tags: ['finance'] },
      { w: 'boom', ipa: '', pos: 'n. v.', zh: '（经济）繁荣，快速增长；（声音）巨大的响声', en: 'The company experienced a significant boom in sales after the product launch.', zhEx: '产品上市后，该公司销售额出现了显著的繁荣。', tags: ['business'] },
      { w: 'boot', ipa: '', pos: 'n. v.', zh: '靴子；长筒靴；启动（电脑）；解雇；踢', en: 'Please boot up your computer before the online meeting starts.', zhEx: '请在在线会议开始前启动你的电脑。', tags: ['code'] },
      { w: 'booth', ipa: '', pos: 'n.', zh: '摊位；展览摊位', en: 'Our company will have a booth at the international trade fair to showcase our latest products.', zhEx: '我们公司将在国际贸易展览会上设立摊位，展示我们最新的产品。', tags: ['business'] },
      { w: 'borrower', ipa: '', pos: 'n.', zh: '借款人；借方', en: 'The borrower must repay the loan by the agreed-upon date.', zhEx: '借款人必须在约定日期前偿还贷款。', tags: ['finance'] },
      { w: 'both', ipa: '', pos: 'phr. pron.', zh: '两者；双方', en: 'Both proposals received positive feedback from the board.', zhEx: '两份提案都从董事会获得了积极的回馈。', tags: ['work'] },
      { w: 'bottle', ipa: '', pos: 'n.', zh: '容器；瓶子（通常指装液体或粉末的容器）', en: 'The supplier confirmed that the shipment of mineral water bottles arrived on schedule.', zhEx: '供应商确认，矿泉水瓶的货物已按时到货。', tags: ['business'] },
      { w: 'bottom', ipa: '', pos: 'n. v.', zh: '底部；下端；末端；最低点；臀部。作为动词：达到底部；垫底。', en: 'Please check the bottom of the report for the summary.', zhEx: '请查看报告底部以获取摘要。', tags: ['work'] },
      { w: 'bought', ipa: '', pos: 'v.', zh: '购买；采购', en: 'The company bought a new server to handle increased website traffic.', zhEx: '公司购买了新的服务器以应付增加的网站流量。', tags: ['business'] },
      { w: 'boutique', ipa: '', pos: 'n.', zh: '精品店；专卖店（通常指服装、饰品等，强调独特性和高品质）', en: 'The company plans to open a new boutique in the upscale shopping district.', zhEx: '公司计划在高级购物区开设一家新精品店。', tags: ['business'] },
      { w: 'bow', ipa: '', pos: 'v. n.', zh: '鞠躬；弯腰；点头；船首；弓（武器或乐器）；蝴蝶结', en: 'The employees bowed respectfully to the CEO.', zhEx: '员工们恭敬地向首席执行官鞠躬。', tags: ['work'] },
      { w: 'box', ipa: '', pos: 'n. v.', zh: '用于装载、运送或保存物品的纸箱或木箱；亦指将物品装入箱中。', en: 'Please ensure that all fragile items are packed in sturdy boxes before shipment.', zhEx: '请确保所有易碎物品在出货前都装在结实的箱子里。', tags: ['business'] },
      { w: 'box office', ipa: '', pos: 'n.', zh: '票房（指电影、戏剧等售票收入的总额）', en: 'The film\'s strong box office performance exceeded all expectations.', zhEx: '这部电影的票房表现远超预期。', tags: ['business'] },
      { w: 'boxes', ipa: '', pos: 'n.', zh: '箱子；容器（通常指大型的、用于运输或保存物品的箱体）', en: 'The warehouse staff are responsible for stacking the boxes neatly.', zhEx: '仓库员工负责整齐地堆栈箱子。', tags: ['business'] },
      { w: 'boy', ipa: '', pos: 'n.', zh: '男孩；儿子；小伙子', en: 'The boy is playing in the park.', zhEx: '那个男孩正在公园里玩耍。', tags: ['work'] },
      { w: 'boycott', ipa: '', pos: 'v. n.', zh: '抵制；拒绝购买或使用，以表达对某项政策或产品的不满。', en: 'The consumer group is planning a boycott of the company\'s products due to the unethical labor practices.', zhEx: '由于不道德的劳工行为，消费者团体正在计划抵制该公司的产品。', tags: ['business'] },
      { w: 'bracket', ipa: '', pos: 'n. v.', zh: '括号；等级；范围；组别；支架；(v.)将...归入同一类；用括号括起来', en: 'Many people fall into a higher tax bracket after receiving a promotion.', zhEx: '许多人在升职后会进入更高的税率等级。', tags: ['finance'] },
      { w: 'brand', ipa: '', pos: 'n.', zh: '品牌；商标；知名度', en: 'Our company is investing heavily in building a strong brand image.', zhEx: '我们公司正在大力投资以创建强大的品牌形象。', tags: ['business'] },
      { w: 'brand new', ipa: '', pos: 'adj.', zh: '全新的；簇新的', en: 'Our company is launching a brand new product line to attract younger consumers.', zhEx: '我们公司正在推出全新的产品线，以吸引年轻消费者。', tags: ['business'] },
      { w: 'branding', ipa: '', pos: 'adj.', zh: '品牌化', en: 'The company\'s new branding initiative exceeded expectations in the first quarter.', zhEx: '公司的新branding计划在第一季度超出了预期。', tags: ['business'] },
      { w: 'breach', ipa: '', pos: 'n. v.', zh: '违反（协议、条款、安全规定等）；破坏；漏洞', en: 'The company is facing a data breach that may compromise sensitive customer information.', zhEx: '该公司正面临一例数据外泄事件，可能导致敏感客户信息外泄。', tags: ['legal'] },
      { w: 'break-even point', ipa: '', pos: 'n.', zh: '损益平衡点，指销售额等于总成本的销售量或销售额，从此开始公司开始获利。', en: 'The company\'s break-even point is 10,000 units per month.', zhEx: '该公司的损益平衡点是每月 10,000 个单位。', tags: ['finance'] },
      { w: 'breath', ipa: '', pos: 'n.', zh: '呼吸; 气息; 一口气', en: 'Take a deep breath and try to relax.', zhEx: '深呼吸，试着放松。', tags: ['work'] },
      { w: 'bribe', ipa: '', pos: 'n. v.', zh: '(n.) 贿赂；贿款；(v.) 贿赂；行贿', en: 'The politician was accused of taking bribes from a construction company.', zhEx: '这名政治家被指控收受一家建筑公司的贿赂。', tags: ['legal'] },
      { w: 'brick', ipa: '', pos: 'n. v.', zh: '砖块；砖（砌的墙或建筑物）；（尤指电子设备）因损坏而无法使用；用砖建造', en: 'The entire building was constructed with durable red bricks.', zhEx: '整栋建筑物都是用耐用的红砖建造的。', tags: ['business'] },
      { w: 'bridge', ipa: '', pos: 'n. v.', zh: '桥；桥梁；连接；弥合；渡过；（牌戏的）桥牌', en: 'The new government project aims to build a bridge that connects the island to the mainland.', zhEx: '政府的新项目旨在建造一座连接岛屿和大陆的桥梁。', tags: ['work'] },
      { w: 'brilliant', ipa: '', pos: 'adj.', zh: '杰出的；聪明的；光辉的；灿烂的', en: 'She came up with a brilliant idea for the new marketing campaign.', zhEx: '她为新的行销活动提出了一个绝妙的点子。', tags: ['work'] },
      { w: 'bring out', ipa: '', pos: 'v.', zh: '（使）呈现、发布、推出（新产品或服务）；（使）显现、引出（某种特质或结果）', en: 'The company is planning to bring out a new line of eco-friendly products next quarter.', zhEx: '公司计划在下个季度推出一系列环保产品。', tags: ['business'] },
      { w: 'broadband', ipa: '', pos: 'n.', zh: '宽带网络，指比传统拨接电话线路提供更高传输速度的网络连接方式，通常用于企业数据传输和高速上网。', en: 'Our company is investing in broadband infrastructure to improve employee productivity.', zhEx: '我们公司正在投资宽带网络基础建设，以提高员工生产力。', tags: ['code'] },
      { w: 'broaden', ipa: '', pos: 'v.', zh: '拓宽；扩大；增广 (使...变宽广或更广泛)', en: 'We encourage our employees to broaden their skill sets through continuous learning and training.', zhEx: '我们鼓励员工通过持续学习和培训来拓宽他们的技能组合。', tags: ['work'] },
      { w: 'brochure', ipa: '', pos: 'n.', zh: '产品宣传册；小册子（通常包含公司或产品的信息，用于推广或提供详细介绍）', en: 'The company distributed brochures at the trade show to attract potential clients.', zhEx: '该公司在贸易展览中发放产品宣传册，以吸引潜在客户。', tags: ['business'] },
      { w: 'broken', ipa: '', pos: 'adj.', zh: '损坏的；故障的；破碎的（指物品或设备无法正常运作）', en: 'The printer is broken, so we need to order a replacement immediately.', zhEx: '打印机已损坏，我们需要立即订购替换机。', tags: ['code'] },
      { w: 'broker', ipa: '', pos: 'n.', zh: '经纪人；仲介人，通常指在金融或房地产市场中促成交易的人。', en: 'Our company uses a reputable broker to manage its investment portfolio.', zhEx: '我们公司使用一位信誉良好的经纪人来管理其投资组合。', tags: ['finance'] },
      { w: 'brokerage', ipa: '', pos: 'n.', zh: '经纪公司；券商', en: 'Our company uses a reputable brokerage to manage its investments.', zhEx: '我们公司使用一家信誉良好的券商来管理我们的投资。', tags: ['finance'] },
      { w: 'browse', ipa: '', pos: 'v.', zh: '浏览（网站、数据库等），浏览查阅', en: 'Before making a purchase, I like to browse the online store to compare prices.', zhEx: '在购买之前，我喜欢浏览在线商店以比较价格。', tags: ['code'] },
      { w: 'browser', ipa: '', pos: 'n.', zh: '浏览器；用于在互联网上查看和交互的软件应用程序。', en: 'I use Google Chrome as my default web browser.', zhEx: '我使用 Google Chrome 作为我的缺省网络浏览器。', tags: ['code'] },
      { w: 'browsing', ipa: '', pos: 'v. phr.', zh: '浏览（网站、数据库等），通常指随机查看信息，而非有特定目的。', en: 'The marketing team is currently browsing online platforms to identify potential advertising opportunities.', zhEx: '行销团队目前正在浏览在线平台，以寻找潜在的广告机会。', tags: ['code'] },
      { w: 'bubble', ipa: '', pos: 'n. v.', zh: '泡泡；气泡；（经济等领域的）泡沫；（困难或危险的）隔绝状态；沸腾，冒泡；充满（情感）', en: 'The soda had tiny bubbles fizzing at the top.', zhEx: '汽水顶部冒着细小的气泡。', tags: ['work'] },
      { w: 'bucket', ipa: '', pos: 'n. v.', zh: '桶；一桶的量；水桶；（动词）将…分类；将（数据、物品等）放入桶中。', en: 'Please fill the bucket with clean water.', zhEx: '请将水桶装满干净的水。', tags: ['work'] },
      { w: 'bug', ipa: '', pos: 'n. v.', zh: '（软件或系统中的）错误、缺陷；（昆虫）虫子', en: 'The software developers are working to fix the bugs in the latest version.', zhEx: '软件开发人员正在努力修复最新版本中的错误。', tags: ['code'] },
      { w: 'builder', ipa: '', pos: 'n.', zh: '建筑商；建造者；营造商', en: 'The construction company is a leading builder of commercial properties.', zhEx: '这家营造公司是商业地产的领先建筑商。', tags: ['business'] },
      { w: 'built-in', ipa: '', pos: 'adj.', zh: '内置的；集成在设备或系统中的，无需额外安装或购买。', en: 'The new laptop features a built-in webcam and microphone for convenient video conferencing.', zhEx: '这款新笔记型电脑配备了内置的网络摄影机和麦克风，方便进行视频会议。', tags: ['code'] },
      { w: 'bulk', ipa: '', pos: 'n.', zh: '大量；大批（通常指数量或容量）', en: 'We purchase raw materials in bulk to reduce costs.', zhEx: '我们大量采购原材料以降低成本。', tags: ['business'] },
      { w: 'bull', ipa: '', pos: 'n. v.', zh: '公牛；（股市）多头，看涨者；（俚语）胡说八道，废话；（动词）推动，猛冲；（股市）推高股价', en: 'The analyst predicted a bull market for the next quarter due to strong economic indicators.', zhEx: '由于经济指针强劲，分析师预测下个季度将是牛市。', tags: ['finance'] },
      { w: 'bunch', ipa: '', pos: 'n. v.', zh: '一束；一串；一群；大量', en: 'She bought a bunch of red roses for her mother.', zhEx: '她为母亲买了一束红玫瑰。', tags: ['work'] },
      { w: 'bundle', ipa: '', pos: 'n.', zh: '一包；一叠；大量（指捆绑在一起的物品）', en: 'The shipping department received a bundle of documents related to the new contract.', zhEx: '运输部门收到一包与新合约相关的文档。', tags: ['business'] },
      { w: 'bush', ipa: '', pos: 'n.', zh: '灌木丛，矮灌木', en: 'The landscaping team is responsible for trimming the bushes around the office building.', zhEx: '景观团队负责修剪办公大楼周围的灌木丛。', tags: ['business'] },
      { w: 'businessman', ipa: '', pos: 'n.', zh: '商人；企业家', en: 'The successful businessman expanded his company into new markets.', zhEx: '这位成功的商人将他的公司扩展到新的市场。', tags: ['work'] },
      { w: 'businessperson', ipa: '', pos: 'n.', zh: '从事商业活动的人，尤指企业主或经理人；商人，企业家。', en: 'She is a successful businessperson who built her company from the ground up.', zhEx: '她是一位成功的企业家，从零开始创建了她的公司。', tags: ['work'] },
      { w: 'bust', ipa: '', pos: 'n. v.', zh: '（名词）半身像；失败；不景气；逮捕（动词）破产；逮捕；打破；突击搜查', en: 'Many small businesses go bust during an economic downturn.', zhEx: '许多小型企业在经济衰退期间倒闭。', tags: ['work'] },
      { w: 'buy', ipa: '', pos: 'v.', zh: '购买；采购', en: 'The company needs to buy new equipment to improve production efficiency.', zhEx: '公司需要购买新的设备以提高生产效率。', tags: ['business'] },
      { w: 'buyer', ipa: '', pos: 'n.', zh: '购买者；客户', en: 'The company is actively seeking new buyers for its products in overseas markets.', zhEx: '该公司正在积极寻找海外市场的新买家。', tags: ['business'] },
      { w: 'buying', ipa: '', pos: 'v. adj.', zh: '购买；采购', en: 'The company is currently buying new equipment to upgrade its production line.', zhEx: '公司目前正在采购新设备以升级其生产线。', tags: ['business'] },
      { w: 'buyout', ipa: '', pos: 'n.', zh: '企业收购；买断（指买下公司、企业或组织的全部或大部分股份，从而取得控制权；或指付钱让人放弃工作或合约）', en: 'The private equity firm announced a leveraged buyout of the struggling retail chain.', zhEx: '该私募股权公司宣布对这家陷入困境的零售连锁店进行杠杆收购。', tags: ['finance'] },
      { w: 'buzzing', ipa: '', pos: 'v. adj.', zh: '嗡嗡作响；持续低沉的声音（通常指机械或电器发出的声音）', en: 'The server is buzzing, indicating a potential overload.', zhEx: '服务器正在嗡嗡作响，表示可能超载。', tags: ['code'] },
      { w: 'by air', ipa: '', pos: 'adv.', zh: '经由空运；搭乘飞机', en: 'The company ships its products by air to ensure timely delivery.', zhEx: '为了确保及时送达，公司选择空运其产品。', tags: ['business'] },
      { w: 'by check', ipa: '', pos: 'adv.', zh: '支票支付；以支票结算', en: 'Please remit the invoice amount by check payable to ABC Corporation.', zhEx: '请以开给 ABC 公司擡头的支票支付发票金额。', tags: ['finance'] },
      { w: 'by credit card', ipa: '', pos: 'phr.', zh: '使用信用卡', en: 'You can pay for the goods by credit card.', zhEx: '您可以选择使用信用卡支付商品费用。', tags: ['business'] },
      { w: 'cabinet', ipa: '', pos: 'n.', zh: '柜子；橱柜；内阁（政府的）', en: 'She keeps all her financial records in a locked filing cabinet.', zhEx: '她把所有财务记录都放在一个上锁的文档柜里。', tags: ['work'] },
      { w: 'cable', ipa: '', pos: 'n.', zh: '连接线、缆线，用于传输电信号或数据。', en: 'The IT department needs to replace the damaged network cable.', zhEx: '信息部门需要更换损坏的网络缆线。', tags: ['code'] },
      { w: 'calculate', ipa: '', pos: 'v.', zh: '计算；估算；衡量', en: 'The finance department needs to calculate the company\'s quarterly profits.', zhEx: '财务部门需要计算公司的季度利润。', tags: ['finance'] },
      { w: 'calculation', ipa: '', pos: 'n.', zh: '计算；估算；计算过程', en: 'The finance department needs to verify the accuracy of the sales calculation before finalizing the budget.', zhEx: '财务部门需要在确认预算之前，验证销售额计算的准确性。', tags: ['finance'] },
      { w: 'call an urgent meeting', ipa: '', pos: 'phr.', zh: '召开紧急会议', en: 'The CEO decided to call an urgent meeting to address the declining sales figures.', zhEx: '由于销售数字持续下降，首席执行官决定召开紧急会议来处理这个问题。', tags: ['work'] },
      { w: 'calorie', ipa: '', pos: 'n.', zh: '卡路里；热量单位', en: 'A typical adult needs about 2,000 calories per day.', zhEx: '一个典型的成年人每天需要大约2,000卡路里。', tags: ['work'] },
      { w: 'camera', ipa: '', pos: 'n.', zh: '摄影机，照相机；用于捕捉图像或视频的设备。', en: 'The company invested in high-resolution cameras for quality control purposes.', zhEx: '公司为了品质管制目的，投资了高分辨率的摄影机。', tags: ['code'] },
      { w: 'canvas', ipa: '', pos: 'n.', zh: '帆布；画布（通常指用于绘画或展示作品的材质）', en: 'The marketing team decided to display the new product designs on large canvases at the trade show.', zhEx: '行销团队决定在贸易展览上使用大型帆布展示新的产品设计。', tags: ['business'] },
      { w: 'capita', ipa: '', pos: 'n.', zh: '人均；每人。(源自拉丁文 \'caput\' 的复数形式，用于表示总数除以人数时)', en: 'The country\'s GDP per capita has increased steadily over the past decade.', zhEx: '该国的人均国内生产总值(GDP)在过去十年中稳步增长。', tags: ['finance'] },
      { w: 'capital', ipa: '', pos: 'n.', zh: '资本；主要城市；资金', en: 'The company\'s capital investment in research and development is crucial for innovation.', zhEx: '公司在研发方面的资本投入对于创新至关重要。', tags: ['finance'] },
      { w: 'capitalist', ipa: '', pos: 'n. adj.', zh: '资本家；资本主义者；资本主义的', en: 'The capitalist invested a large sum in the new startup, hoping for significant returns.', zhEx: '这位资本家在新创公司投入巨额资金，希望能获得可观的回报。', tags: ['finance'] },
      { w: 'capitalize', ipa: '', pos: 'v.', zh: '将（字母）大写；利用，从中获利；为...提供资本', en: 'The company plans to capitalize on the new market trend by launching innovative products.', zhEx: '该公司计划推出创新产品，以利用新的市场趋势从中获利。', tags: ['work'] },
      { w: 'capitalize on', ipa: '', pos: 'v.', zh: '利用（机会、优势等）以获利或达到特定目标', en: 'The company is capitalizing on the growing demand for eco-friendly products.', zhEx: '该公司正利用对环保产品日益增长的需求来获利。', tags: ['business'] },
      { w: 'capture', ipa: '', pos: 'v.', zh: '捕捉；记录；获得（信息、数据等）', en: 'The software automatically captures all user activity for security purposes.', zhEx: '为了安全起见，该软件会自动捕捉所有用户活动。', tags: ['code'] },
      { w: 'carbon', ipa: '', pos: 'n.', zh: '碳；碳素', en: 'Carbon dioxide is a major greenhouse gas contributing to climate change.', zhEx: '二氧化碳是导致气候变化的主要温室气体。', tags: ['code'] },
      { w: 'card', ipa: '', pos: 'n.', zh: '卡片；（金融）信用卡/金融卡', en: 'Please swipe your credit card to complete the payment.', zhEx: '请刷您的信用卡以完成付款。', tags: ['finance'] },
      { w: 'careless', ipa: '', pos: 'adj.', zh: '粗心的；不小心的；草率的；疏忽的', en: 'It was careless of him to leave the company\'s confidential documents on the desk.', zhEx: '他粗心地把公司的机密文档留在桌上。', tags: ['work'] },
      { w: 'cargo', ipa: '', pos: 'n.', zh: '货物', en: 'The company\'s new cargo initiative exceeded expectations in the first quarter.', zhEx: '公司的新cargo计划在第一季度超出了预期。', tags: ['business'] },
      { w: 'carousel', ipa: '', pos: 'n.', zh: '旋转木马；（商业情境下指）循环展示或活动', en: 'The company launched a carousel of promotional banners on their website to highlight new products.', zhEx: '公司在其网站上推出了一个循环展示的促销横幅，以突出新产品。', tags: ['business'] },
      { w: 'carpenter', ipa: '', pos: 'n.', zh: '木匠', en: 'The carpenter built custom cabinets for the kitchen.', zhEx: '木匠为厨房订制了橱柜。', tags: ['work'] },
      { w: 'carrier', ipa: '', pos: 'n.', zh: '承载者；运输工具（如飞机、轮船）；传输媒介（如电信业者）', en: 'The company is seeking a reliable carrier to transport goods to overseas markets.', zhEx: '公司正在寻找一家可靠的承运商将货物运往海外市场。', tags: ['business'] },
      { w: 'carries', ipa: '', pos: 'v.', zh: '携带；运送；承载', en: 'The shipping company carries a wide range of goods, including fragile items.', zhEx: '这家运输公司承运各种货品，包括易碎品。', tags: ['business'] },
      { w: 'carry', ipa: '', pos: 'v.', zh: '携带；运送；承载', en: 'The shipping company will carry the goods to the warehouse.', zhEx: '运输公司将把货物运送到仓库。', tags: ['business'] },
      { w: 'carry a large parcel', ipa: '', pos: 'v.', zh: '携带大型包裹', en: 'The delivery service requires customers to carry a large parcel to the designated drop-off point.', zhEx: '快递服务要求客户将大型包裹运送到指定的取件点。', tags: ['business'] },
      { w: 'carry out market studies', ipa: '', pos: 'v.', zh: '运行市场调查；进行市场研究', en: 'The marketing team needs to carry out market studies to determine consumer preferences.', zhEx: '行销团队需要运行市场调查，以确定消费者偏好。', tags: ['business'] },
      { w: 'carrying', ipa: '', pos: 'v. adj.', zh: '携带；运送；承载', en: 'The shipping company is responsible for carrying the goods safely to the destination.', zhEx: '运输公司负责安全地将货物运送到目的地。', tags: ['business'] },
      { w: 'cart', ipa: '', pos: 'n.', zh: '手推车；购物车（通常指在商店或超市使用的）', en: 'The store manager instructed employees to restock the carts with fresh produce.', zhEx: '店长指示员工将手推车上补充新鲜农产品。', tags: ['business'] },
      { w: 'carton', ipa: '', pos: 'n.', zh: '纸箱；瓦楞纸箱（通常指用于运输货物的包装容器）', en: 'The shipping department needs to order more cartons to pack the new inventory.', zhEx: '运输部门需要订购更多纸箱来包装新的库存。', tags: ['business'] },
      { w: 'cartridge', ipa: '', pos: 'n.', zh: '（打印机、复印机等）墨盒；匣子', en: 'The IT department needs to order more printer cartridges before they run out.', zhEx: '在墨盒耗尽之前，IT部门需要订购更多打印机墨盒。', tags: ['code'] },
      { w: 'case', ipa: '', pos: 'n.', zh: '案件；情况；案例；(法律)诉讼', en: 'The legal team is currently investigating the intellectual property case.', zhEx: '法律团队目前正在调查智能财产案件。', tags: ['legal'] },
      { w: 'cash', ipa: '', pos: 'n.', zh: '现金；现款', en: 'We prefer to receive payment in cash for large orders.', zhEx: '我们喜欢收到大订单的现金付款。', tags: ['finance'] },
      { w: 'cash reserves', ipa: '', pos: 'n.', zh: '现金储备，指公司拥有的可立即使用的现金或高流动性资产，用于应付紧急情况或抓住投资机会。', en: 'The company\'s strong cash reserves allowed it to weather the economic downturn.', zhEx: '该公司的雄厚的现金储备使其能够度过经济衰退。', tags: ['finance'] },
      { w: 'casualty', ipa: '', pos: 'n.', zh: '伤亡人员；（事故、战争等造成的）损失', en: 'The company issued a statement expressing condolences for the casualties resulting from the factory accident.', zhEx: '公司发布声明，对工厂事故造成的伤亡表示哀悼。', tags: ['business'] },
      { w: 'catalog', ipa: '', pos: 'n.', zh: '产品目录；清单，通常包含商品或服务的详细描述和价格。', en: 'The purchasing department is reviewing the latest catalog to identify potential suppliers.', zhEx: '采购部门正在审阅最新的产品目录，以识别潜在供应商。', tags: ['business'] },
      { w: 'catalogue', ipa: '', pos: 'n.', zh: '目录；清单（通常包含商品、服务或信息的详细描述）', en: 'The purchasing department is reviewing the latest catalogue to identify potential suppliers.', zhEx: '采购部门正在审阅最新的目录，以识别潜在供应商。', tags: ['business'] },
      { w: 'caution', ipa: '', pos: 'n. v.', zh: '谨慎；警告；注意', en: 'The safety manual issues a caution regarding the use of heavy machinery.', zhEx: '安全手册对重型机械的使用发布了警告。', tags: ['legal'] },
      { w: 'celebrated', ipa: '', pos: 'adj.', zh: '广受赞扬的；著名的；盛大的', en: 'The company\'s anniversary was a celebrated event, attended by key stakeholders and media representatives.', zhEx: '该公司的周年庆典是一个盛大的活动，吸引了关键利益相关者和媒体代表参加。', tags: ['business'] },
      { w: 'celebrating', ipa: '', pos: 'v. adj.', zh: '庆祝；欢庆', en: 'The company is celebrating its 20th anniversary with a special promotion.', zhEx: '公司正以特别促销活动庆祝其成立 20 周年。', tags: ['business'] },
      { w: 'celebration', ipa: '', pos: 'n.', zh: '庆祝活动；欢庆仪式', en: 'The company is planning a grand celebration to mark its 20th anniversary.', zhEx: '公司正在规划一场盛大的庆祝活动，以庆祝其成立 20 周年。', tags: ['business'] },
      { w: 'cell', ipa: '', pos: 'n.', zh: '手机；可携式通信设备，常用于商务联系。', en: 'Please make sure your cell is fully charged before the conference call this afternoon.', zhEx: '请在今天下午的会议电话前，确保您的手机已充满电。', tags: ['code'] },
      { w: 'cellphone', ipa: '', pos: 'n.', zh: '移动电话，手机', en: 'Please turn off your cellphone before entering the cinema.', zhEx: '进入电影院前请关闭您的手机。', tags: ['code'] },
      { w: 'cellular', ipa: '', pos: 'adj.', zh: '移动电话的；细胞的（指生物学意义），在商务情境中通常指移动通信相关的。', en: 'The company is investing in cellular infrastructure to improve network coverage.', zhEx: '公司正在投资移动通信基础设施以改善网络覆盖率。', tags: ['code'] },
      { w: 'cent', ipa: '', pos: 'n.', zh: '分 (货币单位)', en: 'I only have fifty cents in my pocket.', zhEx: '我的口袋里只有五十美分。', tags: ['finance'] },
      { w: 'chain', ipa: '', pos: 'n. v.', zh: '一连串的事件、物品或供应商，通常指相互关联或依赖的链接。', en: 'The company is building a supply chain to ensure timely delivery of goods.', zhEx: '该公司正在创建供应链，以确保商品及时交付。', tags: ['business'] },
      { w: 'chairman', ipa: '', pos: 'n.', zh: '董事会主席；主导会议的人', en: 'The chairman opened the meeting by thanking everyone for attending.', zhEx: '主席感谢所有出席者，并打开了会议。', tags: ['work'] },
      { w: 'chairperson', ipa: '', pos: 'n.', zh: '会议主持人；主席', en: 'The chairperson will begin the meeting promptly at 9:00 AM.', zhEx: '会议主持人将于上午 9:00 准时开始会议。', tags: ['work'] },
      { w: 'channel', ipa: '', pos: 'n. v.', zh: '频道；管道（指传递信息或产品的途径）', en: 'The company uses various online channels to reach potential customers.', zhEx: '公司使用多种在线管道来接触潜在客户。', tags: ['code'] },
      { w: 'charts', ipa: '', pos: 'n.', zh: '图表；数据图表（用于呈现数据和趋势）', en: 'The presentation included several charts illustrating the company\'s sales performance over the past year.', zhEx: '演示文稿中包含多个图表，展示了公司过去一年的销售业绩。', tags: ['work'] },
      { w: 'cheap', ipa: '', pos: 'adj.', zh: '价格低廉；廉价，通常指物超所值，而非品质差。', en: 'We\'re looking for a cheap supplier of raw materials to reduce production costs.', zhEx: '我们正在寻找一家廉价的原材料供应商，以降低生产成本。', tags: ['business'] },
      { w: 'cheaper', ipa: '', pos: 'adj.', zh: '价格更低廉的；较便宜的', en: 'We\'re looking for a cheaper supplier to reduce our production costs.', zhEx: '我们正在寻找更便宜的供应商以降低我们的生产成本。', tags: ['business'] },
      { w: 'cheapest', ipa: '', pos: 'adj.', zh: '最便宜的；价格最低的', en: 'We\'re looking for the cheapest supplier for these raw materials.', zhEx: '我们正在寻找这些原材料最便宜的供应商。', tags: ['business'] },
      { w: 'check the manual', ipa: '', pos: 'phr.', zh: '查阅使用手册；参阅操作说明', en: 'If you\'re having trouble setting up the device, please check the manual for instructions.', zhEx: '如果您在设置设备时遇到问题，请查阅使用手册以获取说明。', tags: ['code'] },
      { w: 'chemical', ipa: '', pos: 'n. adj.', zh: '化学物质；化学产品', en: 'The company is seeking a reliable supplier of industrial chemicals.', zhEx: '该公司正在寻找可靠的工业化学品供应商。', tags: ['business'] },
      { w: 'chemist', ipa: '', pos: 'n.', zh: '化学家，指从事化学研究或应用的人员。', en: 'Our company employs several chemists to develop new environmentally friendly materials.', zhEx: '我们公司聘请了几位化学家来开发新的环保材料。', tags: ['code'] },
      { w: 'chemistry', ipa: '', pos: 'n.', zh: '化学；化学性质；相互作用，融洽关系 (特别指人际关系)', en: 'She has a degree in organic chemistry.', zhEx: '她拥有有机化学学位。', tags: ['code'] },
      { w: 'chip', ipa: '', pos: 'n.', zh: '（半导体）芯片；（电脑）微处理器；（口语）一小部分，少量', en: 'The company is investing heavily in developing new microchips for their upcoming product line.', zhEx: '该公司正在大量投资于开发其即将推出的产品线的新微处理器。', tags: ['code'] },
      { w: 'circuit', ipa: '', pos: 'n.', zh: '电路；巡回路线；环状路线', en: 'The factory\'s new machinery requires a highly efficient electrical circuit.', zhEx: '工厂的新机械需要高性能的电路。', tags: ['code'] },
      { w: 'claim', ipa: '', pos: 'v. n.', zh: '声称；主张；索赔（通常指要求赔偿或权益）', en: 'The passenger filed a claim with the airline after his luggage was lost.', zhEx: '乘客在行李遗失后向航空公司提出索赔。', tags: ['business'] },
      { w: 'claims department', ipa: '', pos: 'n.', zh: '理赔部门；负责处理客户索赔的部门', en: 'Please submit all insurance claims to the claims department for processing.', zhEx: '请将所有保险理赔申请提交给理赔部门进行处理。', tags: ['business'] },
      { w: 'clause', ipa: '', pos: 'n.', zh: '条款；子句（通常指合同、法律或协议中的特定规定）', en: 'The contract includes a clause stating that all disputes will be resolved through arbitration.', zhEx: '这份合约包含一条款，规定所有争议都将通过仲裁解决。', tags: ['legal'] },
      { w: 'clearance', ipa: '', pos: 'n. v.', zh: '许可、批准；（机场、港口等地的）安全检查、通关进程', en: 'The shipment was delayed due to customs clearance issues.', zhEx: '由于海关通关问题，货物延迟了。', tags: ['business'] },
      { w: 'clearing', ipa: '', pos: 'n. v.', zh: '清理；空出；（债务、库存等）清偿', en: 'The warehouse is undergoing a clearing process to make room for new inventory.', zhEx: '仓库正在进行清理进程，以便为新的库存腾出空间。', tags: ['business'] },
      { w: 'click', ipa: '', pos: 'v. n.', zh: '（电脑操作中）点击；（网络）浏览、访问', en: 'Please click on the \'Submit\' button to finalize your order.', zhEx: '请点击「提交」按钮以完成您的订单。', tags: ['code'] },
      { w: 'clicked', ipa: '', pos: 'v.', zh: '（电脑或设备）发出咔嗒声；点击（鼠标、按钮等）', en: 'The IT support team confirmed that the mouse clicked intermittently.', zhEx: 'IT 支持团队确认鼠标偶尔会发出点击声。', tags: ['code'] },
      { w: 'closet', ipa: '', pos: 'n.', zh: '壁橱；衣帽间；储藏室', en: 'The hotel room has a spacious closet for guests to hang their clothes.', zhEx: '饭店房间里有一个宽敞的衣帽间供客人挂衣服。', tags: ['business'] },
      { w: 'cloud', ipa: '', pos: 'n.', zh: '云端；云存储/运算', en: 'Our company is migrating its data to the cloud for increased accessibility and cost savings.', zhEx: '我们公司正在将数据迁移到云端，以提高可访问性并节省成本。', tags: ['code'] },
      { w: 'coating', ipa: '', pos: 'n. v.', zh: '涂层；覆层，通常指用于保护或美化物体的薄层。', en: 'The manufacturer applied a protective coating to the metal components to prevent rust.', zhEx: '制造商在金属零件上涂上保护性涂层以防止生锈。', tags: ['business'] },
      { w: 'code', ipa: '', pos: 'n. v.', zh: '用于辨识、分类或指示信息的符号或文本组合；在信息技术领域指程序编写的指令集合。', en: 'The development team will code the new feature by the end of the week.', zhEx: '开发团队将于本周末前完成新功能的程序编写。', tags: ['code'] },
      { w: 'come loose', ipa: '', pos: 'v.', zh: '松脱；脱落（指连接物或零件不再固定）', en: 'During shipping, several screws came loose from the equipment, requiring immediate repair.', zhEx: '在运输过程中，设备上的几个螺丝松脱了，需要立即维修。', tags: ['business'] },
      { w: 'commerce', ipa: '', pos: 'n.', zh: '商业；贸易；商务活动', en: 'The company\'s primary focus is international commerce.', zhEx: '该公司的主要重点是国际贸易。', tags: ['business'] },
      { w: 'commercial relations', ipa: '', pos: 'n.', zh: '商业关系；贸易关系', en: 'Maintaining strong commercial relations with overseas suppliers is crucial for our company\'s success.', zhEx: '维持与海外供应商的良好商业关系对我们公司的成功至关重要。', tags: ['business'] },
      { w: 'commodities', ipa: '', pos: 'n.', zh: '商品；（可交易的）农产品、矿产或其他原材料。', en: 'The company\'s profits were significantly impacted by the fluctuating prices of agricultural commodities.', zhEx: '农业商品价格的波动对公司的利润产生了显著影响。', tags: ['business'] },
      { w: 'compatible', ipa: '', pos: 'adj.', zh: '兼容的；可以一起使用的；一致的', en: 'Before purchasing the software, ensure it\'s compatible with your existing operating system.', zhEx: '在购买软件之前，请确保它与您现有的操作系统兼容。', tags: ['code'] },
      { w: 'compile', ipa: '', pos: 'v.', zh: '编译；将代码转换成可运行的形式', en: 'The software engineer needs to compile the code before releasing the new version.', zhEx: '软件工程师需要在发布新版本之前编译代码。', tags: ['code'] },
      { w: 'complaining', ipa: '', pos: 'v. adj.', zh: '抱怨；投诉（通常指对产品、服务或情况的不满）', en: 'We\'ve received several complaints about the delayed shipment.', zhEx: '我们收到了一些关于延迟交货的投诉。', tags: ['business'] },
      { w: 'complaint', ipa: '', pos: 'n. v.', zh: '投诉；抱怨；异议', en: 'We received a complaint about the delayed shipment.', zhEx: '我们收到了一份关于延迟交货的投诉。', tags: ['business'] },
      { w: 'compliant', ipa: '', pos: 'adj.', zh: '符合规范的；遵从的；顺从的（通常指遵守规则、标准或要求）', en: 'The company must ensure all products are compliant with safety regulations.', zhEx: '公司必须确保所有产品都符合安全法规。', tags: ['legal'] },
      { w: 'complimentary', ipa: '', pos: 'adj.', zh: '免费提供的；作为赠送的（常用于形容免费的服务或产品）', en: 'The hotel offers a complimentary shuttle service to the airport for all guests.', zhEx: '饭店为所有住客提供免费的机场接驳服务。', tags: ['business'] },
      { w: 'comply', ipa: '', pos: 'v.', zh: '遵守；遵循（规定、法律、指令等）', en: 'All employees are required to comply with the company\'s safety regulations.', zhEx: '所有员工都必须遵守公司的安全规定。', tags: ['legal'] },
      { w: 'condominium', ipa: '', pos: 'n.', zh: '公寓大厦；分层产权式公寓（屋主拥有自己的单位，并与其他屋主共同拥有公共区域）', en: 'They decided to buy a condominium instead of a house because it required less maintenance.', zhEx: '他们决定买一间公寓大厦而不是一栋房子，因为它所需的维护较少。', tags: ['business'] },
      { w: 'conducting', ipa: '', pos: 'v.', zh: '进行、运行（研究、调查、会议等）', en: 'The research team is conducting a survey to gather customer feedback.', zhEx: '研究团队正在进行一项调查，以收集客户的回馈。', tags: ['work'] },
      { w: 'confer', ipa: '', pos: 'v.', zh: '商议；讨论（通常指正式的会议或讨论）', en: 'The board of directors will confer on the proposed merger.', zhEx: '董事会将商议拟定的合并案。', tags: ['work'] },
      { w: 'conference', ipa: '', pos: 'n.', zh: '会议；研讨会）', en: 'The annual sales conference will be held in New York City next month.', zhEx: '我们下个月会在纽约市举办年度销售会议。', tags: ['work'] },
      { w: 'confidence', ipa: '', pos: 'n.', zh: '对自身能力或结果的确信；信任', en: 'The manager delivered the sales forecast with great confidence, convincing the board of its feasibility.', zhEx: '经理以极大的自信呈报销售预测，说服董事会其可行性。', tags: ['work'] },
      { w: 'confiscate', ipa: '', pos: 'v.', zh: '没收；扣押（通常指政府或官方机构因违规行为而没收物品）', en: 'Customs officials confiscated the undeclared goods at the border.', zhEx: '海关人员在边境扣押了未申报的商品。', tags: ['legal'] },
      { w: 'congress', ipa: '', pos: 'n.', zh: '国会；议会（通常指美国国会，也指其他国家或组织的议会机构）', en: 'The bill is currently being debated in Congress.', zhEx: '该法案目前正在国会讨论中。', tags: ['work'] },
      { w: 'contractual', ipa: '', pos: 'adj.', zh: '合约的；契约上的', en: 'The company has a contractual obligation to deliver the goods by the end of the month.', zhEx: '公司有合约义务在月底前交货。', tags: ['legal'] },
      { w: 'convene', ipa: '', pos: 'v.', zh: '召集；集会（通常指正式会议）', en: 'The board of directors will convene next week to discuss the quarterly results.', zhEx: '董事会将下周召开会议，讨论季度业绩。', tags: ['work'] },
      { w: 'convention', ipa: '', pos: 'n.', zh: '约定、惯例、大会（会议）', en: 'The annual sales convention will be held in New York this year.', zhEx: '今年的年度销售大会将在纽约举行。', tags: ['work'] },
      { w: 'copyright', ipa: '', pos: 'n.', zh: '版权', en: 'The company\'s new copyright initiative exceeded expectations in the first quarter.', zhEx: '公司的新copyright计划在第一季度超出了预期。', tags: ['legal'] },
      { w: 'corrupt', ipa: '', pos: 'adj. v.', zh: '腐败的；贪污的；堕落的 (adj.)；使腐败；使堕落；破坏 (v.)', en: 'The company was investigated for corrupt business practices.', zhEx: '该公司因涉嫌腐败的商业行为而受到调查。', tags: ['legal'] },
      { w: 'corruption', ipa: '', pos: 'n. v.', zh: '贪污；腐败；不道德行为（通常指利用职权谋取私利）', en: 'The company launched an internal investigation to uncover any potential corruption within the procurement department.', zhEx: '公司启动了内部调查，以揭露采购部门可能存在的贪污行为。', tags: ['legal'] },
      { w: 'counterfeit', ipa: '', pos: 'adj.', zh: '伪造的；仿造的；假冒的（通常指非法拷贝或模仿商品或文档）', en: 'The company is taking legal action against the manufacturer of the counterfeit goods.', zhEx: '该公司正在对假冒商品的制造商采取法律行动。', tags: ['legal'] },
      { w: 'court', ipa: '', pos: 'n. v.', zh: '法院；法庭；(体育)球场', en: 'The company is facing a lawsuit and will need to appear in court next month.', zhEx: '该公司正面临诉讼，下个月需要出庭。', tags: ['legal'] },
      { w: 'courtyard', ipa: '', pos: 'n.', zh: '庭院；中庭（通常指建筑物周围的开放空间）', en: 'The hotel\'s courtyard provides a tranquil space for guests to relax.', zhEx: '饭店的中庭提供一个宁静的空间供客人放松。', tags: ['business'] },
      { w: 'crime', ipa: '', pos: 'n.', zh: '犯罪行为；违法行为', en: 'The company has a strict policy against any form of corporate crime.', zhEx: '公司对任何形式的企业犯罪都有严格的政策。', tags: ['legal'] },
      { w: 'criminal', ipa: '', pos: 'n. adj.', zh: '罪犯 (n.); 犯罪的, 刑事的 (adj.)', en: 'The police apprehended the criminal after a long pursuit.', zhEx: '警方经过长时间追捕后逮捕了这名罪犯。', tags: ['legal'] },
      { w: 'critique', ipa: '', pos: 'n. v.', zh: '评论；批评；评论文章', en: 'The director asked for a constructive critique of his new film.', zhEx: '导演要求对他的新电影提出建设性的评论。', tags: ['work'] },
      { w: 'curtains', ipa: '', pos: 'n.', zh: '窗帘；帷幕', en: 'The hotel room features blackout curtains to ensure a restful night\'s sleep for guests.', zhEx: '这间饭店房间配备遮光窗帘，以确保住客能安心睡觉。', tags: ['business'] },
      { w: 'customer', ipa: '', pos: 'n.', zh: '顾客；客户，指购买商品或接受服务的人。', en: 'Our priority is to provide excellent service to every customer.', zhEx: '我们的首要任务是为每一位顾客提供卓越的服务。', tags: ['business'] },
      { w: 'customer survey', ipa: '', pos: 'n.', zh: '客户意见调查；顾客满意度调查', en: 'We conduct customer surveys regularly to improve our services.', zhEx: '我们定期进行客户意见调查，以提升我们的服务。', tags: ['business'] },
      { w: 'dangerous', ipa: '', pos: 'adj.', zh: '危险的；具有潜在危害的，可能导致损害或伤害。', en: 'The company halted operations due to the dangerous working conditions.', zhEx: '由于工作环境危险，公司暂停了营运。', tags: ['legal'] },
      { w: 'dangers', ipa: '', pos: 'n.', zh: '潜在的危险或威胁；风险', en: 'The company conducted a risk assessment to identify potential dangers in the manufacturing process.', zhEx: '公司进行了风险评估，以识别制造过程中潜在的危险。', tags: ['legal'] },
      { w: 'deed', ipa: '', pos: 'n.', zh: '行为；行动；契约；房契', en: 'Performing a good deed can bring a sense of satisfaction.', zhEx: '做一件善事能带来满足感。', tags: ['legal'] },
      { w: 'defend', ipa: '', pos: 'v.', zh: '捍卫；为…辩护；保护', en: 'The company\'s legal team will defend its intellectual property rights.', zhEx: '公司法律团队将捍卫其知识产权。', tags: ['legal'] },
      { w: 'defense', ipa: '', pos: 'n. v.', zh: '防御；保护；辩护', en: 'The company\'s legal team is preparing a strong defense against the lawsuit.', zhEx: '公司的法律团队正在准备强有力的辩护，以应对这项诉讼。', tags: ['legal'] },
      { w: 'deliberation', ipa: '', pos: 'n. v.', zh: '深思熟虑；仔细讨论', en: 'The board of directors engaged in lengthy deliberations before making a final decision.', zhEx: '董事会进行了冗长的讨论后，才做出最终决定。', tags: ['work'] },
      { w: 'diagram', ipa: '', pos: 'n. v.', zh: '图表；图解；示意图', en: 'The architect presented a detailed diagram of the building\'s layout.', zhEx: '建筑师展示了建筑物布局的详细图表。', tags: ['work'] },
      { w: 'disappointing', ipa: '', pos: 'adj.', zh: '令人失望的；未达预期的', en: 'The sales figures for this quarter were disappointing, falling short of our projections.', zhEx: '本季的销售数字令人失望，未达我们的预测目标。', tags: ['business'] },
      { w: 'dissatisfaction', ipa: '', pos: 'n.', zh: '不满意；对某事物的负面感受或意见，通常与期望未达而产生。', en: 'The company is addressing customer dissatisfaction regarding the delayed shipment.', zhEx: '公司正在处理客户对延迟交货的不满。', tags: ['business'] },
      { w: 'dissatisfied', ipa: '', pos: 'adj.', zh: '不满意；对品质或服务感到失望', en: 'The client expressed dissatisfaction with the delayed shipment.', zhEx: '客户对延迟的货物运输表示不满意。', tags: ['business'] },
      { w: 'dissatisfy', ipa: '', pos: 'v.', zh: '使不满意；使不满足', en: 'The company\'s slow response time began to dissatisfy many customers.', zhEx: '公司缓慢的反应时间开始让许多客户感到不满。', tags: ['business'] },
      { w: 'dissatisfying', ipa: '', pos: 'adj.', zh: '令人不满意的；未达标的', en: 'The customer complained that the product\'s performance was dissatisfying.', zhEx: '客户投诉产品的性能令人不满意。', tags: ['business'] },
      { w: 'distress', ipa: '', pos: 'n. v.', zh: '困扰；焦虑；紧急状况', en: 'The airline is offering compensation to passengers who experienced distress during the flight delay.', zhEx: '航空公司正在为因航班延误而感到困扰的乘客提供赔偿。', tags: ['business'] },
      { w: 'district', ipa: '', pos: 'n.', zh: '特定的行政或商业区域，常用于说明公司、工厂、办公室或店铺的所在地。', en: 'Our new warehouse will be located in the industrial district of Kaohsiung to reduce transportation costs.', zhEx: '为了降低运输成本，我们的新仓库将设在高雄的工业区。', tags: ['business'] },
      { w: 'dresser', ipa: '', pos: 'n.', zh: '梳妆台；抽屉柜（通常放置衣物或个人物品）', en: 'The hotel room included a spacious dresser with ample storage space.', zhEx: '这间饭店房间配备了一个宽敞的梳妆台，提供充足的储物空间。', tags: ['business'] },
      { w: 'driveway', ipa: '', pos: 'n.', zh: '车道；车辆进入住宅或建筑物的路径', en: 'The delivery truck had difficulty navigating the narrow driveway.', zhEx: '送货车在狭窄的车道上难以通行。', tags: ['business'] },
      { w: 'elderly', ipa: '', pos: 'adj.', zh: '年长的；高龄的（通常指 65 岁以上，在商务情境中指退休人士或需要特殊服务的顾客）', en: 'Our hotel offers special discounts and accessible rooms for elderly guests.', zhEx: '我们饭店为老年顾客提供特别折扣和无障碍客房。', tags: ['business'] },
      { w: 'estate', ipa: '', pos: 'n.', zh: '资产、房地产、遗产（尤指房地产及相关财产）', en: 'The company is looking to expand its real estate portfolio.', zhEx: '该公司正在寻求扩展其房地产投资组合。', tags: ['business'] },
      { w: 'evicted', ipa: '', pos: 'v.', zh: '将...强行驱逐（出房屋、公寓等）；逐出', en: 'The landlord evicted the tenant for failing to pay rent for three months.', zhEx: '房东因为租客未缴租金三个月而被强行驱逐。', tags: ['business'] },
      { w: 'follow-up', ipa: '', pos: 'n. v.', zh: '后续跟进；追踪处理', en: 'We\'ll send a follow-up email to confirm your order details.', zhEx: '我们会发送一封追踪邮件以确认您的订单细节。', tags: ['business'] },
      { w: 'free of charge', ipa: '', pos: 'adj.', zh: '免费的；不收取费用的', en: 'We offer complimentary Wi-Fi access to all our guests, free of charge.', zhEx: '我们为所有客人提供免费的 Wi-Fi 服务，无需额外费用。', tags: ['business'] },
      { w: 'guarantee', ipa: '', pos: 'v. n.', zh: '保证；担保；确保', en: 'The company guarantees a 100% satisfaction rate for all its products.', zhEx: '公司对其所有产品保证 100% 的客户满意度。', tags: ['business'] },
      { w: 'day-ahead market', ipa: '', pos: 'phr.', zh: '日前市场（提前一天的电力现货交易）', en: 'Bids for tomorrow must be submitted before the day-ahead market gate closes.', zhEx: '明天的申报必须在日前市场申报截止前提交。', tags: ['industry'] },
      { w: 'intraday market', ipa: '', pos: 'phr.', zh: '日内市场（当天滚动交易）', en: 'We bought back the shortfall on the intraday market to reduce the deviation.', zhEx: '我们在日内市场买回了缺口，以减小偏差。', tags: ['industry'] },
      { w: 'clearing price', ipa: '', pos: 'phr.', zh: '出清价格', en: 'The clearing price jumped when two units were forced offline.', zhEx: '两台机组被迫停机后，出清价格跳涨。', tags: ['industry'] },
      { w: 'market clearing', ipa: '', pos: 'phr.', zh: '市场出清', en: 'Market clearing takes about thirty minutes after the gate closure.', zhEx: '申报截止后大约三十分钟完成市场出清。', tags: ['industry'] },
      { w: 'locational marginal price', ipa: '', pos: 'phr.', zh: '节点边际电价（LMP）', en: 'Our node\'s locational marginal price is twice the system average during peak hours.', zhEx: '高峰时段我们节点的边际电价是系统均价的两倍。', tags: ['industry'] },
      { w: 'spot market', ipa: '', pos: 'phr.', zh: '现货市场', en: 'A bigger share of our volume now clears on the spot market.', zhEx: '我们现在更大比例的电量在现货市场出清。', tags: ['industry'] },
      { w: 'imbalance settlement', ipa: '', pos: 'phr.', zh: '偏差结算', en: 'Imbalance settlement penalizes both surplus and shortfall equally.', zhEx: '偏差结算对盈余和缺口的惩罚是对等的。', tags: ['industry'] },
      { w: 'deviation assessment', ipa: '', pos: 'phr.', zh: '偏差考核', en: 'We tightened our forecasting to pass the deviation assessment this month.', zhEx: '我们收紧了预测精度，本月偏差考核顺利过关。', tags: ['industry'] },
      { w: 'load forecasting', ipa: '', pos: 'phr.', zh: '负荷预测', en: 'Better load forecasting directly cuts our imbalance costs.', zhEx: '更准的负荷预测直接压降我们的偏差费用。', tags: ['industry'] },
      { w: 'generation schedule', ipa: '', pos: 'phr.', zh: '发电计划', en: 'The generation schedule was revised after the maintenance window moved.', zhEx: '检修窗口调整后，发电计划也跟着修订了。', tags: ['industry'] },
      { w: 'ancillary services', ipa: '', pos: 'phr.', zh: '辅助服务', en: 'Ancillary services revenue now covers a tenth of our fixed costs.', zhEx: '辅助服务收入现在能覆盖十分之一的固定成本。', tags: ['industry'] },
      { w: 'frequency regulation', ipa: '', pos: 'phr.', zh: '调频', en: 'Our storage fleet earns most of its margin from frequency regulation.', zhEx: '我们的储能资产大部分收益来自调频。', tags: ['industry'] },
      { w: 'peak shaving', ipa: '', pos: 'phr.', zh: '削峰（填谷）', en: 'Peak shaving with batteries avoided two costly demand charges.', zhEx: '用电池削峰避免了两次高昂的需量电费。', tags: ['industry'] },
      { w: 'demand response', ipa: '', pos: 'phr.', zh: '需求响应', en: 'The plant joined the demand response program for the summer season.', zhEx: '该工厂报名参加了夏季需求响应项目。', tags: ['industry'] },
      { w: 'virtual power plant', ipa: '', pos: 'phr.', zh: '虚拟电厂（VPP）', en: 'Our virtual power plant aggregates rooftop solar and storage.', zhEx: '我们的虚拟电厂聚合了屋顶光伏和储能。', tags: ['industry'] },
      { w: 'energy storage', ipa: '', pos: 'phr.', zh: '储能', en: 'Energy storage is sized against the daily price spread.', zhEx: '储能容量是按每日价差来配置的。', tags: ['industry'] },
      { w: 'state of charge', ipa: '', pos: 'phr.', zh: '荷电状态（SOC）', en: 'Keep the state of charge above sixty percent before the evening peak.', zhEx: '晚高峰前把荷电状态保持在六成以上。', tags: ['industry'] },
      { w: 'curtailment', ipa: '', pos: 'n.', zh: '弃风弃光（出力受限）', en: 'Curtailment spiked when transmission maintenance overlapped with high wind.', zhEx: '输电检修赶上大风期，弃风率骤升。', tags: ['industry'] },
      { w: 'renewable output', ipa: '', pos: 'phr.', zh: '新能源出力', en: 'Renewable output forecasts drive our day-ahead bidding strategy.', zhEx: '新能源出力预测直接驱动我们的日前申报策略。', tags: ['industry'] },
      { w: 'capacity market', ipa: '', pos: 'phr.', zh: '容量市场', en: 'The capacity market auction cleared at a record-low price this year.', zhEx: '今年容量市场出清价创了新低。', tags: ['industry'] },
      { w: 'green certificate', ipa: '', pos: 'phr.', zh: '绿证', en: 'Green certificate sales added a new revenue stream for our wind farms.', zhEx: '绿证交易为我们的风电场开辟了新的收入来源。', tags: ['industry'] },
      { w: 'carbon trading', ipa: '', pos: 'phr.', zh: '碳交易', en: 'Carbon trading costs are now factored into our marginal bids.', zhEx: '碳交易成本已纳入我们的边际报价。', tags: ['industry'] },
      { w: 'power purchase agreement', ipa: '', pos: 'phr.', zh: '购电协议（PPA）', en: 'The power purchase agreement locks in price for ten years.', zhEx: '这份购电协议锁定了十年价格。', tags: ['industry'] },
      { w: 'retail package', ipa: '', pos: 'phr.', zh: '零售套餐', en: 'We redesigned the retail package for high-load industrial customers.', zhEx: '我们为高负荷工业客户重新设计了零售套餐。', tags: ['industry'] },
      { w: 'time-of-use pricing', ipa: '', pos: 'phr.', zh: '分时电价', en: 'Time-of-use pricing pushed the customer to shift production to valleys.', zhEx: '分时电价促使客户把生产挪到低谷时段。', tags: ['industry'] },
      { w: 'bilateral contract', ipa: '', pos: 'phr.', zh: '双边协商合同', en: 'Sixty percent of our volume is locked by bilateral contracts.', zhEx: '我们六成的电量由双边合同锁定。', tags: ['industry'] },
      { w: 'medium- and long-term contract', ipa: '', pos: 'phr.', zh: '中长期合约', en: 'Medium- and long-term contracts hedge most of the spot exposure.', zhEx: '中长期合约对冲了大部分现货敞口。', tags: ['industry'] },
      { w: 'grid dispatch', ipa: '', pos: 'phr.', zh: '电网调度', en: 'Grid dispatch instructions override our planned generation schedule.', zhEx: '电网调度指令优先于我们的发电计划。', tags: ['industry'] },
      { w: 'interconnection application', ipa: '', pos: 'phr.', zh: '并网申请', en: 'The interconnection application stalled at the grid study stage.', zhEx: '并网申请卡在了电网承载力评估环节。', tags: ['industry'] },
      { w: 'transmission congestion', ipa: '', pos: 'phr.', zh: '输电阻塞', en: 'Transmission congestion keeps our nodal price below the regional average.', zhEx: '输电阻塞使我们节点电价低于区域均价。', tags: ['industry'] },
      { w: 'nodal pricing', ipa: '', pos: 'phr.', zh: '节点电价', en: 'Nodal pricing rewards plants close to load centers.', zhEx: '节点电价机制让靠近负荷中心的电厂受益。', tags: ['industry'] },
      { w: 'settlement statement', ipa: '', pos: 'phr.', zh: '结算单', en: 'Please reconcile the settlement statement against meter data before signing.', zhEx: '签收前请把结算单和计量数据核对一遍。', tags: ['industry'] },
      { w: 'metering error', ipa: '', pos: 'phr.', zh: '计量误差', en: 'A metering error caused a five-percent settlement gap.', zhEx: '一次计量误差造成了百分之五的结算差额。', tags: ['industry'] },
      { w: 'bidding strategy', ipa: '', pos: 'phr.', zh: '竞价策略', en: 'Our bidding strategy shifts volume between peak and valley slots.', zhEx: '我们的竞价策略会在峰谷时段之间腾挪电量。', tags: ['industry'] },
      { w: 'arbitrage', ipa: '', pos: 'n.', zh: '套利', en: 'Storage arbitrage works only when the daily spread is wide enough.', zhEx: '只有日价差足够大时，储能套利才划算。', tags: ['industry'] },
      { w: 'edge computing', ipa: '', pos: 'phr.', zh: '边缘计算', en: 'Edge computing on the gateway cuts cloud traffic by eighty percent.', zhEx: '网关上的边缘计算把云端流量砍掉了八成。', tags: ['industry'] },
      { w: 'SCADA', ipa: '', pos: 'n.', zh: '数据采集与监控系统', en: 'The SCADA upgrade added alarm history and trend export.', zhEx: 'SCADA 升级加上了告警历史和趋势导出。', tags: ['industry'] },
      { w: 'PLC', ipa: '', pos: 'n.', zh: '可编程逻辑控制器', en: 'The PLC firmware update requires a maintenance window.', zhEx: 'PLC 固件升级需要申请检修窗口。', tags: ['industry'] },
      { w: 'telemetry', ipa: '', pos: 'n.', zh: '遥测', en: 'Telemetry from the substations streams in at one-second intervals.', zhEx: '变电站遥测数据以一秒间隔流式上传。', tags: ['industry'] },
      { w: 'predictive maintenance', ipa: '', pos: 'phr.', zh: '预测性维护', en: 'Predictive maintenance cut unplanned downtime by a third.', zhEx: '预测性维护把非计划停机减少了三分之一。', tags: ['industry'] },
      { w: 'condition monitoring', ipa: '', pos: 'phr.', zh: '状态监测', en: 'Condition monitoring flagged bearing wear two weeks early.', zhEx: '状态监测提前两周发现了轴承磨损。', tags: ['industry'] },
      { w: 'digital twin', ipa: '', pos: 'phr.', zh: '数字孪生', en: 'The digital twin simulates line upgrades before we touch hardware.', zhEx: '数字孪生让我们在动硬件之前先仿真产线改造。', tags: ['industry'] },
      { w: 'OPC UA', ipa: '', pos: 'phr.', zh: 'OPC UA 工业互联协议', en: 'All new devices must speak OPC UA before they join the platform.', zhEx: '所有新设备必须支持 OPC UA 才能接入平台。', tags: ['industry'] },
      { w: 'MQTT', ipa: '', pos: 'n.', zh: 'MQTT 物联网消息协议', en: 'MQTT with QoS one keeps meter uploads reliable on weak links.', zhEx: 'MQTT QoS 1 让弱网环境下的电表上传依然可靠。', tags: ['industry'] },
      { w: 'Modbus', ipa: '', pos: 'n.', zh: 'Modbus 工业通信协议', en: 'Legacy inverters still report over Modbus, so we kept the gateway.', zhEx: '老逆变器还走 Modbus 上报，所以网关得保留。', tags: ['industry'] },
      { w: 'field bus', ipa: '', pos: 'phr.', zh: '现场总线', en: 'The field bus topology made the retrofit harder than planned.', zhEx: '现场总线拓扑让这次改造比计划难得多。', tags: ['industry'] },
      { w: 'device provisioning', ipa: '', pos: 'phr.', zh: '设备接入与注册', en: 'Device provisioning now happens automatically on first boot.', zhEx: '设备首次上电即自动完成接入注册。', tags: ['industry'] },
      { w: 'OTA update', ipa: '', pos: 'phr.', zh: '固件在线升级（OTA）', en: 'The OTA update rolls out to ten percent of meters first.', zhEx: 'OTA 升级先对一成电表灰度发布。', tags: ['industry'] },
      { w: 'firmware', ipa: '', pos: 'n.', zh: '固件', en: 'A firmware bug caused the gateways to drop heartbeat packets.', zhEx: '一个固件缺陷导致网关丢失心跳包。', tags: ['industry'] },
      { w: 'sensor fusion', ipa: '', pos: 'phr.', zh: '多传感器融合', en: 'Sensor fusion improves the accuracy of our vibration alerts.', zhEx: '多传感器融合提升了振动告警的准确度。', tags: ['industry'] },
      { w: 'time-series database', ipa: '', pos: 'phr.', zh: '时序数据库', en: 'Meter readings land in a time-series database for later settlement checks.', zhEx: '电表读数落到时序数据库，供后续结算核对。', tags: ['industry'] },
      { w: 'alarm threshold', ipa: '', pos: 'phr.', zh: '告警阈值', en: 'We lowered the alarm threshold after the near-miss last quarter.', zhEx: '上季度险情之后，我们把告警阈值调低了。', tags: ['industry'] },
      { w: 'asset management', ipa: '', pos: 'phr.', zh: '资产管理', en: 'Asset management now tracks every meter from factory to retirement.', zhEx: '资产管理系统现在跟踪每块电表从出厂到退役。', tags: ['industry'] },
      { w: 'commissioning', ipa: '', pos: 'n.', zh: '调试（验收）', en: 'Commissioning revealed a wiring fault in two breaker panels.', zhEx: '调试发现两个配电柜存在接线错误。', tags: ['industry'] },
      { w: 'uptime', ipa: '', pos: 'n.', zh: '正常运行时间', en: 'Our platform uptime target is ninety-nine point nine percent.', zhEx: '我们平台的正常运行时间目标是 99.9%。', tags: ['industry'] },
      { w: 'downtime', ipa: '', pos: 'n.', zh: '停机时间', en: 'Every hour of downtime costs the plant roughly fifty thousand yuan.', zhEx: '每停机一小时，工厂损失约五万元。', tags: ['industry'] },
      { w: 'overall equipment effectiveness', ipa: '', pos: 'phr.', zh: '设备综合效率（OEE）', en: 'OEE improved from seventy-two to eighty-one percent this quarter.', zhEx: '本季度设备综合效率从 72% 提升到 81%。', tags: ['industry'] },
      { w: 'mean time between failures', ipa: '', pos: 'phr.', zh: '平均无故障时间（MTBF）', en: 'MTBF doubled after we replaced the aging power modules.', zhEx: '更换老化电源模块后，平均无故障时间翻倍。', tags: ['industry'] },
      { w: 'yield rate', ipa: '', pos: 'phr.', zh: '良品率', en: 'The new calibration process lifted the yield rate by four points.', zhEx: '新标定流程把良品率提升了四个百分点。', tags: ['industry'] },
      { w: 'production line', ipa: '', pos: 'phr.', zh: '产线', en: 'The production line stops automatically when the sensor drifts.', zhEx: '传感器漂移时产线会自动停机。', tags: ['industry'] },
    ];

    // Difficulty per entry: 1 (most common) .. 5 (specialised). Missing entries
    // default to 3. Kept beside WORDS so the bank stays one copy-friendly list.
    const LEVELS = {
      'walk me through': 2, 'just to clarify': 1, 'elaborate on': 2, 'acceptance criteria': 2, rephrase: 3,
      'nice to have': 1, 'from a technical standpoint': 2, 'rough estimate': 2, 'story point': 2, 'performance impact': 2,
      'alternative approach': 3, 'ballpark estimate': 3, 'on the same page': 2, 'low-hanging fruit': 3, 'boil the ocean': 4,
      'get a handle on': 3, unpack: 4, 'break it down': 1, 'level of effort': 3, 'happy path': 2,
      'unhappy path': 3, 'moving parts': 3, sprint: 2, 'definition of done': 3, 'set expectations': 2,
      'get ahead of ourselves': 3, MVP: 2, 'gut check': 3, 'tight deadline': 2, KPI: 2,
      'end game': 3, 'coordinated effort': 3, 'high-level architecture': 3, microservices: 3, 'data flow': 2,
      'API contract': 3, scalability: 4, downside: 3, 'pros and cons': 1, 'use case': 2,
      spike: 4, 'backup and recovery': 2, 'security implications': 3, 'single point of failure': 3, pipeline: 2,
      aligned: 2, 'move forward with': 1, 'design doc': 2, 'overly complicated': 3, 'reinvent the wheel': 3,
      'blast radius': 4, 'backward compatibility': 4, 'play devil\'s advocate': 4, 'technical debt': 3, 'due diligence': 4,
      'lean towards': 2, 'proof of concept': 3, 'buy-in': 4, resilient: 4, 'schema migration': 4,
      'API versioning': 3, downstream: 4, 'eventually consistent': 5, 'over-engineer': 3, 'single source of truth': 4,
      'fail fast': 3, 'one-off': 3, 'on the fence': 3, scale: 3, 'fault-tolerant': 4,
      'early draft': 2, 'be all for': 3, brainstorm: 2, 'circuit breaker': 4, 'degrade gracefully': 5,
      'self-healing': 4, 'take the first stab at': 4, 'message queue': 3, asynchronous: 4, 'middle ground': 3,
      stateful: 4, 'learning curve': 2, 'non-trivial': 4, consensus: 3, blocked: 2,
      tricky: 3, 'be stuck on': 2, drive: 4, 'take over': 2, 'make sense': 1,
      FYI: 1, OOO: 2, PR: 1, 'address the feedback': 3, accordingly: 3,
      'valid concern': 3, LGTM: 1, clean: 2, 'extract into': 3, 'magic number': 3,
      descriptive: 3, nit: 4, 'out of the scope of': 2, 'breaking change': 3, 'my plate is full': 3,
      'sync with': 2, ambiguous: 4, deduplicate: 4, chunk: 3, codebase: 2,
      'stretched thin': 4, 'follow-up ticket': 2, ping: 2, convoluted: 5, 'play catch-up': 3,
      decouple: 4, 'take the lead on': 2, 'single responsibility principle': 4, 'dev environment': 2, 'out of date': 2,
      'memory leak': 3, reusable: 3, 'introduce a dependency': 3, PTO: 2, 'user-friendly': 2,
      'wrap my head around': 4, 'security vulnerability': 3, 'non-blocking': 4, 'hit a wall': 3, flag: 3,
      'read-only access': 3, 'good first issue': 2, 'thread-safe': 4, 'feature flag': 3, 'premature optimization': 5,
      'ramp up on': 4, mockup: 3, 'defer to': 4, 'on-call': 3, 'keep me in the loop': 3,
      'code path': 3, 'test coverage': 3, 'work in progress': 2, swamped: 3, EOD: 2,
      prerequisite: 4, 'do a quick pass': 3, 'reason about': 4, 'put our heads together': 3, trivial: 3,
      housekeeping: 4, 'developer experience': 3, 'discovery work': 3, 'self-explanatory': 4, 'brute-force': 4,
      wheelhouse: 5, DRY: 4, AFK: 1, 'pure function': 4, memoization: 5,
      'net positive': 4, 'at capacity': 3, 'cyclomatic complexity': 5, flaky: 4, 'peer review': 3,
      'steps to reproduce': 3, ticket: 2, 'expected behavior': 2, timeout: 2, 'staging environment': 3,
      intermittent: 4, 'CI pipeline': 3, 'smoke test': 3, 'regression test': 3, 'rollback plan': 3,
      'code freeze': 4, 'version bump': 4, 'rollout strategy': 4, 'canary release': 4, 'A/B test': 3,
      'dry run': 3, 'error rate': 3, incident: 4, 'war room': 4, 'root cause': 3,
      misconfiguration: 3, workaround: 3, mitigate: 4, 'post-mortem': 4, 'incident commander': 4,
      ETA: 2, 'take ownership': 2, SLO: 5, 'degraded mode': 4, 'get to the bottom of': 3,
      'cascading failure': 5, observability: 5, flapping: 5, runbook: 4, 'mission-critical': 5,
      'five-whys analysis': 4, escalate: 3, 'jump to conclusions': 3, symptom: 3, alert: 3,
      'red herring': 5, 'human error': 2, retrospective: 3, 'what went well': 2, estimation: 3,
      rework: 3, 'action item': 2, 'action plan': 2, 'recurring problem': 3, 'permanent fix': 2,
      'lessons learned': 3, champion: 4, kudos: 4, 'shout-out': 3, 'give credit where credit is due': 4,
      'jump in': 2, perspective: 2, prioritize: 3, 'take this offline': 3, agenda: 3,
      takeaway: 2, 'hard stop': 3, park: 2, timebox: 3, echo: 2,
      'put a pin in': 4, 'bogged down': 4, table: 3, 'drop off': 2, reschedule: 2,
      'mindful of': 4, recap: 2, 'open to suggestions': 2, 'to the point': 3, 'on the same wavelength': 4,
      'not sold on': 4, 'back burner': 4, 'going in circles': 3, bikeshed: 4, quorum: 5,
      'agree to disagree': 3, 'rabbit hole': 4, 'bio break': 3, 'on mute': 2, debrief: 4,
      'follow-up meeting': 2, 'dive deeper': 3, 'tech talk': 3, illustrate: 3, 'career goals': 2,
      'take on': 3, mentor: 3, 'engineering practices': 3, 'best practices': 2, 'get your thoughts': 2,
      'grab a coffee': 2, advice: 1, break: 1, business: 1, compare: 1,
      correct: 1, date: 1, design: 1, email: 1, important: 1,
      interview: 1, leave: 1, machine: 1, match: 1, menu: 1,
      modern: 1, natural: 1, plan: 1, practise: 1, product: 1,
      return: 1, send: 1, short: 1, situation: 1, understand: 1,
      website: 1, open: 1, early: 1, ability: 2, advantage: 2,
      architect: 2, assistant: 2, average: 2, based: 2, colleague: 2,
      complain: 2, continue: 2, expert: 2, gap: 2, helpful: 2,
      individual: 2, item: 2, lead: 2, missing: 2, offer: 2,
      possibility: 2, quality: 2, recommend: 2, relationship: 2, research: 2,
      run: 2, save: 2, site: 2, successful: 2, target: 2,
      trouble: 2, variety: 2, aim: 3, analyse: 3, appointment: 3,
      attitude: 3, balance: 3, block: 3, campaign: 3, central: 3,
      clear: 3, competitive: 3, confused: 3, continuous: 3, cover: 3,
      definite: 3, difficulty: 3, emergency: 3, eventually: 3, experienced: 3,
      fairly: 3, feature: 3, graduate: 3, highly: 3, intention: 3,
      judge: 3, leading: 3, limit: 3, medium: 3, official: 3,
      package: 3, presentation: 3, proper: 3, regularly: 3, release: 3,
      repeat: 3, responsible: 3, sensible: 3, signal: 3, standard: 3,
      tend: 3, tight: 3, trick: 3, volunteer: 3, abandon: 4,
      acknowledge: 4, affordable: 4, appropriately: 4, associate: 4, boost: 4,
      commitment: 4, concerned: 4, consideration: 4, controversial: 4, criticize: 4,
      demonstrate: 4, detail: 4, dismiss: 4, eliminate: 4, external: 4,
      generate: 4, incentive: 4, instance: 4, level: 4, 'long-term': 4,
      minor: 4, otherwise: 4, pace: 4, patience: 4, potential: 4,
      prime: 4, project: 4, rank: 4, recovery: 4, relatively: 4,
      reserve: 4, reward: 4, senior: 4, status: 4, tag: 4,
      transition: 4, virtual: 4, weird: 4, workshop: 4, accumulate: 5,
      administrator: 5, analogy: 5, bind: 5, boundary: 5, burden: 5,
      collective: 5, coordination: 5, dispute: 5, empirical: 5, expire: 5,
      frustrating: 5, intensive: 5, invoke: 5, memo: 5, niche: 5,
      objection: 5, originate: 5, peculiar: 5, presume: 5, productive: 5,
      replacement: 5, resume: 5, soar: 5, specification: 5, stability: 5,
      strategic: 5, supplement: 5, thrive: 5, unify: 5, worthwhile: 5,
      deadline: 1, deliverable: 2, 'sync up': 2, 'follow up': 1, 'heads-up': 2,
      'trade-off': 3, 'edge case': 3, bottleneck: 3, milestone: 2, bandwidth: 3,
      'scope creep': 4, 'out of scope': 3, 'on track': 2, 'push back': 3, 'wrap up': 1,
      'in the loop': 3, 'circle back': 3, 'touch base': 3, 'get back to you': 2,
      'with a grain of salt': 4, ballpark: 4, nudge: 3, blocker: 2, revisit: 3,
      pragmatic: 4, refactor: 3, deprecate: 4, boilerplate: 4, idempotent: 5,
      immutable: 4, 'race condition': 4, dependency: 2, shim: 5, lint: 3, ship: 1,
      rollback: 3, hotfix: 3, canonical: 4, dangling: 4, stale: 3, throughput: 4,
      latency: 3, quota: 3, throttle: 4, backfill: 4, teardown: 4, snapshot: 3,
      'side effect': 3, poll: 3, deterministic: 4, overflow: 3, fallback: 2,
      responsive: 2, breakpoint: 3, viewport: 3, 'layout shift': 3, accessibility: 3,
      tooltip: 2, placeholder: 2, typography: 3, spacing: 2, contrast: 2, sticky: 2,
      skeleton: 3, dropdown: 2, breadcrumb: 3, rebase: 3, squash: 3, 'cherry-pick': 3,
      stash: 3, blame: 2, upstream: 3, fork: 2, revert: 2, 'merge conflict': 2,
      'force push': 2, checkout: 2, prompt: 2, inference: 3, embedding: 4,
      'fine-tune': 3, hallucinate: 4, 'context window': 3, orchestration: 4,
      guardrail: 3, telemetry: 4, evict: 5, serialize: 4, digest: 3, 'sanity check': 3,
      'deep dive': 2, 'under the hood': 3, 'quick win': 2, 'pain point': 2,
      'silver bullet': 3, 'no-brainer': 3, 'as well as': 1, 'in terms of': 2,
      'keep track of': 2, 'run into': 1, 'figure out': 1, 'end up': 2,
      'come up with': 2, 'point out': 1, 'deal with': 1, 'at first glance': 2,
      'by and large': 3, 'on second thought': 2, 'the other way around': 3,
      'to be fair': 2, 'long story short': 2, 'a couple of': 1, 'sort of': 2,
      schedule: 1, recurring: 2, backlog: 3, estimate: 2, overdue: 2, checklist: 1,
      consistency: 2, readable: 1, concise: 2, explicit: 2, verbose: 3, reproduce: 2,
      isolate: 2, deceptive: 3, intuitive: 3, polish: 2, subtle: 3, muted: 4,
      redundant: 3,
      'a complete line of': 3, 'a copy of': 2, 'a glass of': 2, 'a great deal': 3,
      'a great deal of': 3, 'a large attendance': 3, 'a letter of gratitude': 3, 'a loaf of': 4,
      'a number of': 2, 'a piece of equipment': 2, 'a range of': 3, 'a selection of': 3,
      'a series of': 3, 'a sheet of': 2, 'a string of': 4, 'a variety of (= various)': 3,
      'abandoned': 4, 'abbreviate': 4, 'abide': 4, 'able': 2,
      'aboard': 3, 'abolish': 4, 'about': 2, 'above': 2,
      'abroad': 2, 'abruptly': 4, 'absence': 3, 'absent': 2,
      'absolute': 3, 'absolutely': 2, 'absorb': 3, 'absorption': 4,
      'abstract': 4, 'abundant': 4, 'abundantly': 4, 'abuse': 4,
      'abused': 4, 'abusing': 4, 'academic': 3, 'accelerate': 3,
      'acceleration': 4, 'accent': 3, 'accept': 2, 'acceptable': 3,
      'acceptance': 3, 'accepted': 2, 'accepting': 3, 'access': 2,
      'accessible': 3, 'accessories': 3, 'accessory': 3, 'accident': 2,
      'accidentally': 3, 'acclaim': 4, 'accommodate': 3, 'accommodation': 3,
      'accompanied': 3, 'accompany': 3, 'accomplish': 3, 'accomplished': 4,
      'accomplishment': 3, 'accord': 4, 'accordance': 4, 'according': 2,
      'according to': 2, 'account': 2, 'account payable': 4, 'accountability': 4,
      'accountable': 4, 'accountant': 2, 'accounting': 2, 'accredit': 4,
      'accrue': 4, 'accumulated': 4, 'accumulation': 4, 'accuracy': 3,
      'accurate': 3, 'accurately': 3, 'accusation': 4, 'accuse': 4,
      'accused': 4, 'accustom': 4, 'accustomed': 4, 'achievable': 3,
      'achieve': 2, 'achieve one’s goal': 3, 'achievement': 3, 'achiever': 4,
      'achieving': 3, 'acknowledging': 3, 'acquaint': 4, 'acquaintance': 4,
      'acquire': 3, 'acquired': 3, 'acquisition': 4, 'across': 2,
      'across from': 2, 'across the street': 3, 'act': 2, 'acting': 3,
      'action': 2, 'activate': 3, 'activated': 3, 'activation': 3,
      'active': 2, 'actively': 2, 'activities': 2, 'activity': 2,
      'actor': 2, 'actual': 2, 'actually': 2, 'acute': 4,
      'ad': 2, 'adapt': 3, 'adaptability': 3, 'adaptable': 3,
      'adaptation': 4, 'adapted': 3, 'adapter': 3, 'adapting': 3,
      'adaptive': 4, 'add': 2, 'add up to': 3, 'added': 3,
      'added benefits': 3, 'addicted': 4, 'adding': 2, 'addition': 2,
      'additional': 2, 'additional charge': 3, 'additional fee': 3, 'additionally': 3,
      'address': 2, 'address the audience': 3, 'addressed': 3, 'addressing': 3,
      'adept': 4, 'adequate': 3, 'adequately': 3, 'adhere': 4,
      'adjacent': 4, 'adjourn': 4, 'adjust': 3, 'adjust the mirror': 3,
      'adjusted': 3, 'adjustment': 3, 'admin': 3, 'administer': 4,
      'administration': 3, 'administrative': 3, 'admire': 4, 'admired': 3,
      'admission': 3, 'admission to': 3, 'admit': 3, 'admitted': 3,
      'admittedly': 4, 'adopt': 3, 'adoption': 3, 'adult': 2,
      'advance': 2, 'advance reservation': 3, 'advanced': 3, 'advancement': 3,
      'adventure': 4, 'adverse': 4, 'adversely': 4, 'adversity': 4,
      'advertise': 2, 'advertised': 2, 'advertisement': 2, 'advertiser': 3,
      'advertising': 2, 'advertising campaign': 3, 'advisable': 4, 'advise': 2,
      'advised': 3, 'adviser': 3, 'advisor': 3, 'advisory': 4,
      'advocate': 4, 'affair': 4, 'affect': 2, 'affected': 3,
      'affecting': 3, 'affiliate': 4, 'affiliation': 4, 'affirm': 4,
      'affirmation': 4, 'afford': 2, 'afford to do': 3, 'affordability': 4,
      'afraid': 2, 'after': 2, 'after all': 3, 'afternoon': 2,
      'afterward': 3, 'again': 2, 'against': 2, 'against the law': 4,
      'age': 2, 'agencies': 3, 'agency': 2, 'agent': 2,
      'aggravate': 4, 'aggregate': 4, 'aggressive': 3, 'aggressively': 4,
      'agile': 4, 'aging': 4, 'ago': 2, 'agree': 2,
      'agreeable': 4, 'agreed': 2, 'agreeing': 2, 'agreement': 2,
      'agricultural': 4, 'agriculture': 4, 'ahead': 2, 'ahead of schedule': 2,
      'aid': 3, 'aimed': 3, 'air': 2, 'aircraft': 4,
      'airfare': 3, 'airline': 2, 'airplane': 2, 'airport': 2,
      'aisle': 3, 'aisle seat': 3, 'alarm': 3, 'alarming': 4,
      'album': 4, 'align': 3, 'alignment': 4, 'alike': 4,
      'alive': 3, 'all': 2, 'all the way': 3, 'all walks of life': 4,
      'all-out': 4, 'allegation': 4, 'allege': 4, 'allergic': 4,
      'allergies': 4, 'allergy': 4, 'alleviate': 4, 'alliance': 4,
      'allies': 4, 'allocate': 3, 'allocated': 3, 'allocation': 3,
      'allot': 4, 'allotment': 4, 'allow': 2, 'allowance': 3,
      'allowed': 2, 'allowing': 2, 'ally': 4, 'alone': 2,
      'along the shore': 3, 'alongside': 3, 'alright': 2, 'also': 2,
      'alteration': 4, 'altitude': 4, 'alumni': 4, 'alumni association': 4,
      'amateur': 4, 'amaze': 3, 'amazed': 3, 'amazement': 4,
      'ambiance (= ambience)': 4, 'ambition': 3, 'ambitious': 3, 'amendment': 4,
      'amenities': 3, 'amenity': 4, 'amid': 4, 'among': 2,
      'amongst': 4, 'amount': 2, 'amplify': 4, 'amusement': 4,
      'analyst': 3, 'analytic': 4, 'analytical': 3, 'anchor': 4,
      'anger': 3, 'angle': 3, 'angry': 2, 'anniversary celebration': 3,
      'announce': 2, 'announced': 2, 'announcement': 2, 'announcer': 4,
      'announcing': 2, 'annoy': 3, 'annoyed': 3, 'annoying': 3,
      'annual': 2, 'annual budget': 3, 'annual meeting': 3, 'annual report': 3,
      'annually': 3, 'annum': 4, 'anonymous': 4, 'another': 2,
      'answer': 2, 'answer the phone': 2, 'answering': 2, 'anti': 4,
      'antique': 4, 'anxiety': 4, 'anybody': 2, 'anyhow': 4,
      'anyone': 2, 'anyway': 2, 'apartment': 2, 'apologies': 2,
      'apologize': 2, 'apology': 2, 'app': 2, 'apparent': 3,
      'appeal': 3, 'appealing': 3, 'appearance': 2, 'appetite': 4,
      'appetizer': 4, 'appliances': 3, 'applicable': 3, 'applicant': 2,
      'application': 2, 'application form': 2, 'apply': 2, 'apply for': 2,
      'applying': 2, 'appoint': 3, 'appraisal': 4, 'apprentice': 4,
      'approximate': 3, 'approximation': 4, 'aptitude': 4, 'architectural': 4,
      'architecture': 3, 'arguably': 4, 'arm': 3, 'armchair': 3,
      'around the world': 2, 'arrange a conference': 2, 'arrange items on the shelf': 2, 'arrange the furniture': 2,
      'array': 4, 'arrest': 4, 'arrival': 2, 'arrive': 2,
      'arrived': 2, 'arriving': 2, 'arrow': 4, 'art': 2,
      'art museum': 3, 'artificial': 3, 'artist': 2, 'artistic': 4,
      'artwork': 3, 'as a courtesy (= as a favor)': 4, 'as requested': 3, 'aspiration': 4,
      'aspire to': 4, 'assemble': 3, 'assembled': 3, 'assess': 3,
      'assessed': 3, 'assessment': 3, 'asset': 3, 'assigning': 3,
      'assistance': 2, 'association': 3, 'assorted': 3, 'at a substantial discount': 3,
      'at all costs': 4, 'at full speed': 3, 'at no charge (= at no cost)': 3, 'at no extra charge': 3,
      'at the discretion of': 4, 'ate': 2, 'athlete': 3, 'athletic': 4,
      'atmosphere': 3, 'attack': 3, 'attain': 4, 'attend a conference': 2,
      'attend to a client': 3, 'attendant': 3, 'attended': 2, 'attendee': 3,
      'attention': 2, 'attorney': 3, 'attract': 2, 'attracted': 3,
      'attracting': 3, 'attraction': 3, 'attractive': 3, 'attributable': 4,
      'auction': 3, 'audio': 3, 'audiobook': 4, 'audiovisual': 4,
      'audit': 4, 'auditing': 4, 'audition': 4, 'auditor': 4,
      'auditorium': 4, 'augment': 4, 'authenticate': 4, 'authorities': 3,
      'authorized': 3, 'auto': 3, 'automate': 3, 'automated': 3,
      'automatic': 3, 'automatic payment': 3, 'automatically': 3, 'automation': 3,
      'automobile': 3, 'automotive': 4, 'automotive repair shop': 3, 'autonomous': 4,
      'autonomy': 4, 'autumn': 2, 'ave': 2, 'avenue': 4,
      'aversion': 4, 'aviation': 4, 'award': 2, 'award ceremony': 3,
      'awarded': 3, 'awful': 3, 'bachelor': 3, 'back injury': 4,
      'back order': 4, 'backed': 4, 'background': 2, 'backing': 4,
      'backpack': 2, 'backup': 3, 'backward': 4, 'baggage': 2,
      'bags': 2, 'bail': 4, 'bake': 3, 'baker': 2,
      'bakery': 2, 'baking': 4, 'balanced': 3, 'balcony': 4,
      'ball': 2, 'ballot': 4, 'ballroom': 4, 'ban': 3,
      'band': 3, 'bank': 2, 'bank account': 2, 'bank loan': 3,
      'bank teller': 3, 'banker': 4, 'banking': 2, 'bankrupt': 3,
      'bankruptcy': 4, 'banned': 3, 'banner': 3, 'banning': 3,
      'banquet': 3, 'bar': 3, 'barbecue': 4, 'barcode': 3,
      'bargain': 3, 'bargain over prices': 4, 'bargaining': 4, 'barrel': 4,
      'barring': 4, 'baseline': 4, 'basement': 3, 'basket': 2,
      'batch': 4, 'bathroom': 2, 'batteries': 3, 'battery': 3,
      'battle': 3, 'bay': 4, 'be admitted to': 4, 'be arranged on the patio': 3,
      'be booked up': 3, 'be carried out': 3, 'be caught in': 3, 'be closed for the day': 3,
      'be closed to the public': 3, 'be closed to traffic': 3, 'be composed of': 3, 'be designed to do': 3,
      'be geared to': 4, 'be held': 2, 'be held up': 3, 'be held up in traffic': 3,
      'be highly regarded': 3, 'be in line': 3, 'be in the black': 4, 'be in the red': 4,
      'be known for': 2, 'be left unattended': 3, 'be lined with': 3, 'be made up of': 3,
      'be mounted on': 3, 'be noted for': 3, 'be on a special diet': 4, 'be on a trip': 3,
      'be on medication': 4, 'be open for business': 3, 'be oriented to': 3, 'be paid for': 3,
      'be qualified for': 3, 'be seated': 2, 'be shaded': 4, 'be stacked on top of each other': 3,
      'be suited for': 3, 'be surrounded by': 3, 'be towed away': 4, 'beach': 2,
      'bear': 3, 'bear (= carry)': 4, 'beat': 3, 'beaten': 4,
      'beautiful': 2, 'beauty': 3, 'bed': 2, 'bedroom': 2,
      'before': 2, 'behavioral': 4, 'bells': 4, 'below': 2,
      'belt': 2, 'bench': 2, 'benchmark': 4, 'beneficiary': 4,
      'benefit': 2, 'best-selling': 3, 'best-selling author': 4, 'bet': 3,
      'bias': 4, 'bicycle': 2, 'bicycle rack': 3, 'bidder': 4,
      'big': 2, 'bike': 2, 'biking': 3, 'bill': 2,
      'billing': 2, 'billing address': 2, 'billing information': 2, 'biological': 4,
      'bit': 2, 'bitter': 4, 'blackout': 4, 'blast': 4,
      'blog': 3, 'blurry': 4, 'board a flight': 2, 'boarding': 2,
      'boarding gate': 3, 'boasts': 4, 'body': 2, 'bolster': 4,
      'bond': 4, 'bookkeeper': 4, 'bookkeeping': 4, 'boom': 3,
      'boot': 4, 'booth': 3, 'borrower': 3, 'both': 2,
      'bottle': 2, 'bottom': 2, 'bought': 2, 'boutique': 4,
      'bow': 4, 'box': 2, 'box office': 4, 'boxes': 2,
      'boy': 2, 'boycott': 4, 'bracket': 4, 'brand': 2,
      'brand new': 3, 'branding': 3, 'breach': 4, 'break-even point': 4,
      'breath': 3, 'bribe': 4, 'brick': 3, 'bridge': 3,
      'brilliant': 4, 'bring out': 3, 'broadband': 4, 'broaden': 3,
      'brochure': 3, 'broken': 2, 'broker': 4, 'brokerage': 4,
      'browse': 3, 'browser': 2, 'browsing': 3, 'bubble': 4,
      'bucket': 4, 'bug': 3, 'builder': 3, 'built-in': 3,
      'bulk': 3, 'bull': 4, 'bunch': 3, 'bundle': 3,
      'bush': 3, 'businessman': 2, 'businessperson': 2, 'bust': 4,
      'buy': 2, 'buyer': 2, 'buying': 2, 'buyout': 4,
      'buzzing': 4, 'by air': 3, 'by check': 3, 'by credit card': 2,
      'cabinet': 2, 'cable': 3, 'calculate': 2, 'calculation': 3,
      'call an urgent meeting': 3, 'calorie': 4, 'camera': 2, 'canvas': 4,
      'capita': 4, 'capital': 2, 'capitalist': 4, 'capitalize': 4,
      'capitalize on': 4, 'capture': 3, 'carbon': 4, 'card': 2,
      'careless': 3, 'cargo': 3, 'carousel': 4, 'carpenter': 4,
      'carrier': 3, 'carries': 2, 'carry': 2, 'carry a large parcel': 3,
      'carry out market studies': 3, 'carrying': 2, 'cart': 2, 'carton': 3,
      'cartridge': 4, 'case': 2, 'cash': 2, 'cash reserves': 4,
      'casualty': 4, 'catalog': 3, 'catalogue': 3, 'caution': 3,
      'celebrated': 4, 'celebrating': 3, 'celebration': 3, 'cell': 2,
      'cellphone': 2, 'cellular': 4, 'cent': 2, 'chain': 3,
      'chairman': 2, 'chairperson': 3, 'channel': 3, 'charts': 2,
      'cheap': 2, 'cheaper': 2, 'cheapest': 2, 'check the manual': 2,
      'chemical': 3, 'chemist': 4, 'chemistry': 4, 'chip': 4,
      'circuit': 4, 'claim': 2, 'claims department': 4, 'clause': 4,
      'clearance': 3, 'clearing': 4, 'click': 2, 'clicked': 2,
      'closet': 3, 'cloud': 3, 'coating': 4, 'code': 2,
      'come loose': 4, 'commerce': 3, 'commercial relations': 4, 'commodities': 4,
      'compatible': 3, 'compile': 4, 'complaining': 3, 'complaint': 2,
      'compliant': 4, 'complimentary': 3, 'comply': 3, 'condominium': 4,
      'conducting': 3, 'confer': 4, 'conference': 2, 'confidence': 3,
      'confiscate': 4, 'congress': 4, 'contractual': 3, 'convene': 4,
      'convention': 3, 'copyright': 4, 'corrupt': 4, 'corruption': 4,
      'counterfeit': 4, 'court': 3, 'courtyard': 4, 'crime': 4,
      'criminal': 4, 'critique': 4, 'curtains': 3, 'customer': 2,
      'customer survey': 2, 'dangerous': 2, 'dangers': 3, 'deed': 4,
      'defend': 4, 'defense': 4, 'deliberation': 4, 'diagram': 3,
      'disappointing': 3, 'dissatisfaction': 3, 'dissatisfied': 3, 'dissatisfy': 3,
      'dissatisfying': 4, 'distress': 4, 'district': 3, 'dresser': 4,
      'driveway': 4, 'elderly': 4, 'estate': 3, 'evicted': 4,
      'follow-up': 2, 'free of charge': 2, 'guarantee': 2, 'day-ahead market': 3,
      'intraday market': 3, 'clearing price': 3, 'market clearing': 3, 'locational marginal price': 4,
      'spot market': 3, 'imbalance settlement': 4, 'deviation assessment': 4, 'load forecasting': 3,
      'generation schedule': 3, 'ancillary services': 4, 'frequency regulation': 4, 'peak shaving': 3,
      'demand response': 4, 'virtual power plant': 4, 'energy storage': 3, 'state of charge': 4,
      'curtailment': 4, 'renewable output': 3, 'capacity market': 4, 'green certificate': 3,
      'carbon trading': 3, 'power purchase agreement': 4, 'retail package': 3, 'time-of-use pricing': 3,
      'bilateral contract': 4, 'medium- and long-term contract': 3, 'grid dispatch': 3, 'interconnection application': 4,
      'transmission congestion': 4, 'nodal pricing': 4, 'settlement statement': 3, 'metering error': 3,
      'bidding strategy': 3, 'arbitrage': 4, 'edge computing': 3, 'SCADA': 4,
      'PLC': 4, 'telemetry': 4, 'predictive maintenance': 4, 'condition monitoring': 4,
      'digital twin': 4, 'OPC UA': 4, 'MQTT': 4, 'Modbus': 4,
      'field bus': 4, 'device provisioning': 4, 'OTA update': 3, 'firmware': 3,
      'sensor fusion': 4, 'time-series database': 4, 'alarm threshold': 3, 'asset management': 3,
      'commissioning': 4, 'uptime': 3, 'downtime': 3, 'overall equipment effectiveness': 4,
      'mean time between failures': 4, 'yield rate': 3, 'production line': 3,
      'power trading': 4, 'electricity market': 4, 'spot price': 3, 'peak load': 3,
      'load curve': 4, bid: 2, settlement: 3, 'forecast error': 4,
      'renewable energy': 3, photovoltaic: 4,
      'contract': 3, 'compliance': 3, 'regulation': 3, 'negotiate': 3,
      'quote': 3, 'invoice': 3, 'budget': 3, 'client': 3,
      'supplier': 3, 'cash flow': 3, 'stakeholder': 3, 'deliver on time': 3,
      'sensor': 3, 'actuator': 3, 'gateway': 3, 'grid connection': 4,
      'time-of-use tariff': 4, 'carbon emission': 4, 'field device': 4, 'real-time monitoring': 4,
      'yield': 4, 'programmable logic controller': 4, 'modbus': 4, 'protocol adaptation': 4,
      'site survey': 4, 'operating condition': 4, 'terms and conditions': 4, 'liability': 4,
      'profit margin': 4,
    };

    const wordByWord = {};
    for (const entry of WORDS) wordByWord[entry.w] = entry;

    // --------------------------------------------------------- topics
    const TOPIC_RULES = [
      {
        id: 'code',
        chip: '#code',
        brief: 'This conversation is about code and engineering — building, debugging, and shipping software.',
        keys: ['代码', '编程', '程序', '函数', '调试', '算法', '接口', '后端', '服务端', '数据库', 'sql', 'api', '脚本', '编译', '打包', '部署', 'deploy', 'compile', 'backend', 'server', '报错', '错误', '异常', '日志', 'log', '缓存', 'cache', '测试', 'test', '工具', 'tool', '依赖', '性能', 'memory', '进程', '架构', '容器', 'docker', 'k8s', '微服务'],
      },
      {
        id: 'frontend',
        chip: '#frontend',
        brief: 'This conversation touches on frontend work — components, styling, and user interfaces.',
        keys: ['前端', '页面', '样式', 'css', 'vue', 'react', '组件', 'ui', '布局', '渲染', '动画', '按钮', 'tailwind', 'html', '浏览器', '交互', '暗色', '主题切换', '小程序', '适配'],
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
        keys: ['模型', 'ai', 'prompt', '提示词', 'token', '推理', 'agent', '智能', 'llm', '训练', '插件', 'plugin', 'harness', 'dsh', '会话', 'session', '知识库', '向量', '翻译', '大模型', '智能体', 'rag', '微调'],
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
        keys: ['任务', '计划', '日程', 'schedule', '待办', 'todo', '会议', '安排', 'deadline', '项目', '需求', '文档', '报告', '总结', '提醒', '清单', 'review', '评审', '复盘', '汇报', '周报', '排期', '里程碑', '跨部门', '进度'],
      },
      {
        id: 'business',
        chip: '#business',
        brief: 'This conversation is business-facing — clients, negotiations, vendors, and deals.',
        keys: ['商务', '客户', '谈判', '甲方', '乙方', '投标', '招标', '提案', '售前', '签约', '合作方', '供应商', '销售', 'business', 'client', 'customer', 'negotiation', 'proposal', 'vendor', 'partner', 'pitch', 'deal', 'sales', '采购', '物流', '供应链', '招投标', '客户服务', '市场营销', '运营管理', '需求计划'],
      },
      {
        id: 'finance',
        chip: '#finance',
        brief: 'This conversation involves money matters — pricing, settlement, budgets, and markets.',
        keys: ['电力交易', '售电', '现货', '电价', '结算', '财务', '预算', '报价', '发票', '付款', '成本', '收益', '市场化', '结算单', 'finance', 'settlement', 'invoice', 'budget', 'pricing', 'billing', 'payment', 'cost', 'revenue', 'market', 'trading', 'tariff', '绿证', '碳交易', '购电协议', '分时电价', '容量市场', '偏差考核', '结算单', '节点电价'],
      },
      {
        id: 'industry',
        chip: '#industry',
        brief: 'This conversation is about industrial IoT and field operations — devices, metering, and plants.',
        keys: ['物联', '工业', '工厂', '车间', '产线', '设备', '采集', '传感器', '网关', '电表', '变电站', '调度', '运维', '检修', '能耗', '立项', '平台升级', '数据采集', '遥测', 'iot', 'scada', 'plc', 'sensor', 'gateway', 'telemetry', 'meter', 'maintenance', 'equipment', 'factory', '光伏', '风电', '储能', '新能源', '日前', '日内', '出清', '偏差', '负荷预测', '虚拟电厂', '需求响应', '中长期', '零售套餐', '并网', '辅助服务', '调频', '削峰'],
      },
      {
        id: 'legal',
        chip: '#legal',
        brief: 'This conversation touches contracts and compliance — terms, clauses, and obligations.',
        keys: ['合同', '法务', '条款', '协议', '法律', '合规', '违约', '知识产权', '验收标准', 'contract', 'clause', 'agreement', 'legal', 'compliance', 'liability', 'breach', 'regulation', 'terms'],
      },
      {
        id: 'health',
        chip: '#health',
        brief: 'This conversation is about health and wellbeing — symptoms, habits, and fitness.',
        keys: ['健康', '医生', '医院', '体检', '症状', '药品', '治疗', '睡眠', '运动', '健身', '饮食', 'health', 'doctor', 'hospital', 'symptom', 'medicine', 'treatment', 'sleep', 'exercise', 'fitness', 'diet'],
      },
      {
        id: 'travel',
        chip: '#travel',
        brief: 'This conversation involves travel — trips, flights, hotels, and itineraries.',
        keys: ['旅行', '出行', '出差', '航班', '酒店', '签证', '行程', '护照', '攻略', 'travel', 'flight', 'hotel', 'visa', 'trip', 'itinerary', 'passport', 'airport', 'tour'],
      },
      {
        id: 'education',
        chip: '#learning',
        brief: 'This conversation is about learning — courses, exams, and vocabulary.',
        keys: ['学习', '英语', '单词', '课程', '考试', '培训', '论文', '雅思', '托福', '教育', '背单词', 'study', 'learn', 'exam', 'course', 'lesson', 'paper', 'thesis', 'ielts', 'toefl', 'vocabulary', 'school'],
      },
      {
        id: 'daily',
        chip: '#daily',
        brief: 'This conversation is everyday life — food, hobbies, family, and shopping.',
        keys: ['生活', '日常', '购物', '做饭', '电影', '音乐', '朋友', '家人', '宠物', '装修', '周末', '爱好', 'life', 'movie', 'music', 'food', 'friend', 'family', 'pet', 'hobby', 'weekend', 'shopping', 'game'],
      },
    ];
    const GENERAL_BRIEF = 'This session is still unfolding — a good moment to absorb general-purpose words and phrases.';

    // ------------------------------------------------------- settings
    // English level presets cap the pushed difficulty (max) and name the band
    // (core) the picker prefers; topic relevance stays automatic via session-title matching.
    const LEVEL_PRESETS = [
      { id: 'starter', max: 2, core: [1, 2] },
      { id: 'basic', max: 3, core: [2, 3] },
      { id: 'solid', max: 4, core: [3, 4] },
      { id: 'pro', max: 5, core: [4, 5] },
    ];
    const BATCH_SIZES = [5, 10, 15, 20];
    const PACES = ['fast', 'normal', 'slow'];
    const PACE_INTERVALS = { fast: [6000, 14000], normal: [9000, 22000], slow: [15000, 36000] };
    const DEFAULT_SETTINGS = {
      level: 'basic',
      batchSize: 10,
      pace: 'normal',
    };
    function normalizeSettings(raw) {
      const v = raw && typeof raw === 'object' ? raw : {};
      return {
        level: LEVEL_PRESETS.some((p) => p.id === v.level) ? v.level : DEFAULT_SETTINGS.level,
        batchSize: BATCH_SIZES.includes(v.batchSize) ? v.batchSize : DEFAULT_SETTINGS.batchSize,
        pace: PACES.includes(v.pace) ? v.pace : DEFAULT_SETTINGS.pace,
      };
    }
    function levelPreset(id) {
      return LEVEL_PRESETS.find((p) => p.id === id) || LEVEL_PRESETS[1];
    }
    function wordLevel(entry) { return LEVELS[entry.w] || 3; }
    function passesLevel(entry, preset) { return wordLevel(entry) <= preset.max; }
    function bandPool(entries, preset) {
      const core = entries.filter((e) => wordLevel(e) >= preset.core[0] && wordLevel(e) <= preset.core[1]);
      const stretch = entries.filter((e) => wordLevel(e) > preset.core[1]);
      const easy = entries.filter((e) => wordLevel(e) < preset.core[0]);
      const easyKeep = easy.slice(0, Math.ceil(easy.length * 0.15) + 8);
      const pool = core.concat(stretch, easyKeep);
      shuffle(pool, mulberry32(20260101));
      return pool;
    }
    function dockPool(settings) {
      const preset = levelPreset(settings && settings.level);
      return bandPool(WORDS.filter((entry) => passesLevel(entry, preset)), preset);
    }
    function paceIntervals(pace) {
      return PACE_INTERVALS[pace] || PACE_INTERVALS.normal;
    }
    function pickWeighted(pool, preset, n, rng) {
      const coreMin = preset.core[0];
      const coreMax = preset.core[1];
      const core = pool.filter((e) => wordLevel(e) >= coreMin && wordLevel(e) <= coreMax);
      const stretch = pool.filter((e) => wordLevel(e) > coreMax);
      const easy = pool.filter((e) => wordLevel(e) < coreMin);
      shuffle(core, rng); shuffle(stretch, rng); shuffle(easy, rng);
      const out = core.slice(0, n);
      let stretchLeft = Math.ceil(n / 5);
      for (const entry of stretch) {
        if (out.length >= n || stretchLeft <= 0) break;
        out.push(entry);
        stretchLeft -= 1;
      }
      for (const entry of easy) {
        if (out.length >= n) break;
        out.push(entry);
      }
      return out;
    }

    // ------------------------------------------------------- dictionary
    const zh = {
      'dock.brand': '英语角',
      'dock.running': '回复生成中，正好记一个词',
      'dock.next': '换一个',
      'dock.known': '认识了',
      'dock.fav': '收进生词本',
      'dock.favOn': '已在生词本',
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
      'tab.viewSettings': '设置',
      'set.level': '英语水平',
      'set.level.starter': '入门 A2',
      'set.level.basic': '进阶 B1',
      'set.level.solid': '熟练 B2',
      'set.level.pro': '老手 C1',
      'set.levelDesc.starter': '以最常见的高频词为主，难度不超过入门档。',
      'set.levelDesc.basic': '日常与职场常用词为主，偶尔出现进阶词。',
      'set.levelDesc.solid': '职场中高级表达和专业词汇，含少量高难词。',
      'set.levelDesc.pro': '不设难度上限，专业术语也会出现。',
      'set.batch': '每批词汇数量',
      'set.pace': '换词节奏（输入框下方卡片条）',
      'set.pace.fast': '快 · 6–14秒',
      'set.pace.normal': '适中 · 9–22秒',
      'set.pace.slow': '慢 · 15–36秒',
      'set.paceDesc': '范围为换词间隔：会话运行中用短间隔，空闲时用长间隔。',
      'set.reset': '恢复默认设置',
      'set.clearRecords': '清空学习记录',
      'set.clearConfirm': '再点一次确认清空',
      'set.effectNote': '设置即时生效；主题词汇点「换一批」立即按新设置刷新。',
      'set.collapse': '收起单词条',
      'set.collapseNote': '收起后，点输入框上方的「英语角」胶囊即可重新展开。',
      'set.packHeading': '本对话的词包',
      'set.packTotal': '词包词数',
      'set.packKnown': '已认识',
      'set.packEmpty': '本对话还没有词包。点上方「生成当前主题词包」立即生成一批，或在对话里让 AI 输出 ```elpack 词包（自动保存到本对话）。',
      'set.packWords': '词',
      'set.packDelete': '删除',
      'set.packHint': '词包跟随对话：每个会话的词包独立保存、互不覆盖；可以多次生成持续累积，重复词自动跳过。',
      'set.packGenerate': '生成当前主题词包',
      'set.packGenNote': '按会话主题与你的英语水平，从词库自动抽取 20 个词，立即生效；优先选你还没标记掌握的词。',
    };
    const en = {
      'dock.brand': 'English Lounge',
      'dock.running': 'Response generating — pick up a word',
      'dock.next': 'Next',
      'dock.known': 'Got it',
      'dock.fav': 'Save to word book',
      'dock.favOn': 'In word book',
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
      'tab.viewSettings': 'Settings',
      'set.level': 'English level',
      'set.level.starter': 'Starter A2',
      'set.level.basic': 'Basic B1',
      'set.level.solid': 'Solid B2',
      'set.level.pro': 'Pro C1',
      'set.levelDesc.starter': 'Mostly the most common high-frequency words.',
      'set.levelDesc.basic': 'Everyday and workplace words, with occasional stretch words.',
      'set.levelDesc.solid': 'Upper-intermediate workplace expressions and jargon.',
      'set.levelDesc.pro': 'No difficulty ceiling; specialised terms appear too.',
      'set.batch': 'Words per batch',
      'set.pace': 'Card rotation (dock strip)',
      'set.pace.fast': 'Fast · 6–14s',
      'set.pace.normal': 'Normal · 9–22s',
      'set.pace.slow': 'Slow · 15–36s',
      'set.paceDesc': 'Rotation interval: short while a response is generating, long while idle.',
      'set.reset': 'Reset settings',
      'set.clearRecords': 'Clear learning records',
      'set.clearConfirm': 'Tap again to confirm',
      'set.effectNote': 'Changes apply immediately; tap Shuffle to refresh the topic list.',
      'set.collapse': 'Hide word strip',
      'set.collapseNote': 'Once hidden, click the English Lounge capsule above the composer to bring it back.',
      'set.packHeading': 'Packs for this conversation',
      'set.packTotal': 'Pack words',
      'set.packKnown': 'Known',
      'set.packEmpty': 'No packs in this conversation yet. Tap the button above to generate a batch now, or ask the AI to post an ```elpack block (saved to this conversation automatically).',
      'set.packWords': 'words',
      'set.packDelete': 'Delete',
      'set.packHint': 'Packs follow the conversation: each chat keeps its own packs, independent and never overwritten; generate as many batches as you like — duplicate words are skipped.',
      'set.packGenerate': 'Generate pack for this session',
      'set.packGenNote': 'Picks 20 words from the local word bank by session topic and your level, preferring words not yet marked known.',
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
            view: v && (v.view === 'book' || v.view === 'settings') ? v.view : 'words',
            settings: normalizeSettings(v && v.settings),
          };
        }
      } catch (error) { /* storage unavailable; start fresh */ }
      return { known: {}, fav: {}, collapsed: false, view: 'words', settings: normalizeSettings(null) };
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
    function setView(value) { setStore({ view: value }); }
    function updateSettings(patch) {
      setStore({ settings: normalizeSettings({ ...storeState.settings, ...patch }) });
    }
    function resetSettings() { setStore({ settings: normalizeSettings(null) }); }
    function clearRecords() { setStore({ known: {}, fav: {} }); }

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

    // ------------------------------------------------- theme packs (elpack)
    const PACK_KEY = 'englishLounge.packs.v2';
    function loadAllPacks() {
      try {
        const raw = localStorage.getItem(PACK_KEY);
        const data = raw ? JSON.parse(raw) : {};
        if (data && typeof data === 'object' && !Array.isArray(data)) return data;
      } catch (err) { /* storage blocked */ }
      return {};
    }
    function sessionKey(sessionId) { return sessionId ? String(sessionId) : '__global__'; }
    function loadPacks(sessionId) {
      const arr = loadAllPacks()[sessionKey(sessionId)];
      return Array.isArray(arr) ? arr : [];
    }
    function savePacks(sessionId, packs) {
      try {
        const all = loadAllPacks();
        const sid = sessionKey(sessionId);
        if (packs.length === 0) delete all[sid]; else all[sid] = packs;
        localStorage.setItem(PACK_KEY, JSON.stringify(all));
      } catch (err) { /* storage blocked */ }
    }
    function appendPack(sessionId, pack) {
      const packs = loadPacks(sessionId);
      const first = (pack.words && pack.words[0] ? pack.words[0].w : '');
      const dup = packs.find((p) => p.topic === pack.topic && (p.words || []).length === (pack.words || []).length && ((p.words && p.words[0] ? p.words[0].w : '') === first));
      if (dup) return;
      packs.push(pack);
      savePacks(sessionId, packs.slice(-12));
    }
    function removeSessionPack(sessionId, ts) {
      savePacks(sessionId, loadPacks(sessionId).filter((p) => p.ts !== ts));
    }
    function sessionPackWords(sessionId) {
      const out = [];
      const seen = new Set();
      for (const pack of loadPacks(sessionId)) {
        for (const entry of pack.words || []) {
          if (seen.has(entry.w)) continue;
          seen.add(entry.w);
          out.push(entry);
        }
      }
      return out;
    }
    function normalizePackWord(raw, topic) {
      if (!raw || typeof raw !== 'object') return null;
      const w = String(raw.w || raw.word || '').trim();
      if (!w || w.length > 60) return null;
      return {
        w,
        ipa: '',
        pos: String(raw.pos || '').slice(0, 24),
        zh: String(raw.zh || raw.meaning || '').slice(0, 60),
        en: String(raw.en || raw.example || '').slice(0, 200),
        zhEx: String(raw.zhEx || raw.zhExample || '').slice(0, 120),
        tags: [topic],
      };
    }
    function parseElpack(text) {
      const re = /```elpack\s*([\s\S]*?)```/g;
      let m;
      while ((m = re.exec(String(text || ''))) !== null) {
        const body = m[1];
        if (!body || body.length > 50 * 1024) continue;
        let data;
        try { data = JSON.parse(body); } catch (err) { continue; }
        if (!data || typeof data !== 'object') continue;
        const topic = String(data.topic || '').trim().toLowerCase();
        if (!/^[a-z][a-z0-9-]{0,30}$/.test(topic)) continue;
        const list = Array.isArray(data.words) ? data.words : [];
        if (list.length === 0 || list.length > 40) continue;
        const words = list.map((item) => normalizePackWord(item, topic)).filter(Boolean);
        if (words.length === 0) continue;
        return { topic, title: String(data.title || topic).slice(0, 40), words, ts: Date.now() };
      }
      return null;
    }
    function collectConvText(value, depth, out) {
      if (out.text.length >= 5000 || value == null || depth > 6) return;
      if (typeof value === 'string') { out.text += (out.text ? ' ' : '') + value.slice(0, 600); return; }
      if (typeof value !== 'object') return;
      if (Array.isArray(value)) {
        for (const item of value.slice(0, 120)) collectConvText(item, depth + 1, out);
        return;
      }
      for (const key of Object.keys(value)) {
        if (key === 'settings' || key === 'fav' || key === 'known') continue;
        collectConvText(value[key], depth + 1, out);
      }
    }
    function sessionConvText(snap) {
      if (!snap || typeof snap !== 'object') return '';
      const out = { text: '' };
      collectConvText(snap, 0, out);
      return out.text.slice(0, 4500);
    }

    function detectTopics(title, extraText) {
      const text = String(title || '') + '\n' + String(extraText || '').slice(0, 3000);
      if (text.trim() === '') return [];
      const lower = text.toLowerCase();
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

    function topicPoolFor(title, extraText, settings, sessionPacks) {
      const preset = levelPreset(settings && settings.level);
      const n = Math.max(1, Math.min(30, (settings && settings.batchSize) || 10));
      const topicIds = detectTopics(title, extraText).map((rule) => rule.id);
      const want = new Set(topicIds);
      const packWords = [];
      const seenPack = new Set();
      const packs = Array.isArray(sessionPacks) ? sessionPacks : [];
      for (const pack of packs) {
        for (const entry of pack.words || []) {
          if (seenPack.has(entry.w)) continue;
          seenPack.add(entry.w);
          packWords.push(Object.assign({}, entry, { __pack: true }));
        }
      }
      if (topicIds.length === 0 && packWords.length === 0) return [];
      let pool = topicIds.length > 0
        ? WORDS.filter((entry) => entry.tags.some((tag) => want.has(tag) || tag === 'core'))
        : WORDS.filter((entry) => entry.tags.includes('core'));
      if (packWords.length > 0) {
        const seen = new Set(pool.map((entry) => entry.w));
        for (const entry of packWords) {
          if (!seen.has(entry.w)) { seen.add(entry.w); pool.push(entry); }
        }
      }
      if (pool.length < Math.max(8, n)) {
        for (const entry of WORDS) {
          if (pool.length >= Math.max(12, n)) break;
          if (!pool.includes(entry)) pool.push(entry);
        }
      }
      return bandPool(pool.filter((entry) => passesLevel(entry, preset)), preset);
    }

    function pickTopicWords(title, offset, settings, extraText, sessionPacks) {
      const preset = levelPreset(settings && settings.level);
      const n = Math.max(1, Math.min(30, (settings && settings.batchSize) || 10));
      let pool = topicPoolFor(title, extraText, settings, sessionPacks);
      if (pool.length === 0) pool = WORDS.filter((entry) => passesLevel(entry, preset));
      const rng = mulberry32(hash(String(title || '') + '|' + String(offset)));
      return pickWeighted(pool, preset, Math.min(n, pool.length), rng);
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
      '.elz-dock { box-sizing: border-box; display: flex; justify-content: center; }',
      '.elz-bar { display: flex; align-items: center; gap: 8px; box-sizing: border-box; width: 100%; min-width: 560px; max-width: 760px; padding: 3px 10px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-md); background: var(--dsw-alias-bg-layer-1); }',
      '.elz-chipbar { display: flex; align-items: center; gap: 8px; box-sizing: border-box; padding: 4px 10px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; background: var(--dsw-alias-bg-layer-1); width: max-content; }',
      '.elz-word { color: var(--dsw-alias-label-primary); font-weight: 600; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; max-width: 26ch; flex: 0 2 auto; }',
      '.elz-ipa { color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; }',
      '.elz-pos { color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; }',
      '.elz-zh { color: var(--dsw-alias-label-secondary); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }',
      '.elz-ex { flex: 1; min-width: 0; color: var(--dsw-alias-label-tertiary); font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
      '.elz-running { display: inline-flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-tertiary); font-size: 11px; white-space: nowrap; }',
      '.elz-dot { width: 6px; height: 6px; border-radius: 999px; background: #2f6f4f; animation: elz-pulse 1.6s ease-in-out infinite; }',
      '@keyframes elz-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 1; } }',
      '.elz-btn { flex: none; font: inherit; font-size: 12px; line-height: 16px; color: var(--dsw-alias-label-secondary); background: transparent; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 1px 8px; cursor: pointer; }',
      '.elz-btn:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
      '.elz-btn-on { color: #b98a1c; border-color: var(--dsw-alias-border-l3); }',
      'body[data-ds-dark-theme] .elz-btn-on { color: #e3b74a; }',
      '.elz-btn-ghost { border-color: transparent; }',
      '.elz-btn-primary { background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-layer-1); border-color: transparent; font-weight: 600; padding: 3px 12px; }',
      '.elz-btn-primary:hover { background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-layer-1); opacity: 0.85; }',
      '.elz-pack-ok { color: #2e7d32; font-size: 12px; font-weight: 600; align-self: center; }',
      'body[data-ds-dark-theme] .elz-pack-ok { color: #7bc47f; }',
      '.elz-page { box-sizing: border-box; height: 100%; overflow-y: auto; padding: 4px 16px 28px; display: flex; flex-direction: column; gap: 18px; }',
      '.elz-h { color: var(--dsw-alias-label-tertiary); font-size: 12px; font-weight: 600; }',
      '.elz-topic { display: flex; flex-direction: column; gap: 8px; }',
      '.elz-topic-title { color: var(--dsw-alias-label-primary); font-size: 15px; font-weight: 600; line-height: 1.45; overflow-wrap: anywhere; }',
      '.elz-brief { color: var(--dsw-alias-label-secondary); font-size: 13px; line-height: 1.65; }',
      '.elz-note { color: var(--dsw-alias-label-tertiary); font-size: 12px; opacity: 0.72; }',
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
      '.elz-set { display: flex; flex-direction: column; gap: 16px; }',
      '.elz-set-group { display: flex; flex-direction: column; gap: 6px; }',
      '.elz-chip-btn { font: inherit; font-size: 12px; line-height: 20px; color: var(--dsw-alias-label-secondary); background: transparent; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 1px 12px; cursor: pointer; }',
      '.elz-chip-btn:hover { color: var(--dsw-alias-label-primary); }',
      '.elz-chip-on { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); font-weight: 600; border-color: var(--dsw-alias-border-l3); }',
      '.elz-actions { display: flex; flex-wrap: wrap; gap: 8px; }',
      '.elz-btn-danger { color: #b3392c; border-color: #b3392c; }',
      'body[data-ds-dark-theme] .elz-btn-danger { color: #e06a5d; border-color: #e06a5d; }',
      '.elz-seg-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }',
      '.elz-gear { font-size: 13px; line-height: 20px; padding: 1px 9px; }',
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
    function LoungeDock({ sessionId, useCatalog, useSessionState, openBrief, t }) {
      const s = React.useSyncExternalStore(store.subscribe, store.getSnapshot);
      const snap = typeof useSessionState === 'function' ? useSessionState((value) => value) : undefined;
      const running = !!(snap && snap.running);
      const settings = s.settings;
      const catalog = typeof useCatalog === 'function' ? useCatalog((value) => value) : undefined;
      const row = catalog && catalog.byId ? catalog.byId[sessionId] : undefined;
      const title = (row && (row.title || row.displayTitle)) || '';
      const convText = React.useMemo(() => sessionConvText(snap), [snap]);
      const packHit = React.useMemo(() => parseElpack(convText), [convText]);
      React.useEffect(() => {
        if (packHit) { appendPack(sessionId, packHit); setStore({ packsTick: Date.now() }); }
      }, [packHit]);
      const pool = React.useMemo(() => {
        const sessionPacks = loadPacks(sessionId);
        const themed = topicPoolFor(title, convText, settings, sessionPacks);
        const base = themed.length > 0 ? themed : dockPool(settings);
        const want = new Set(detectTopics(title, convText).map((rule) => rule.id));
        const rank = (entry) => (entry.__pack || (entry.tags || []).some((tag) => want.has(tag))) ? 0 : 1;
        return [...base].sort((a, b) => rank(a) - rank(b));
      }, [sessionId, settings, title, convText, packHit, s.packsTick]);
      const [cursor, setCursor] = React.useState(() => Math.floor(Math.random() * 100000));
      const [paused, setPaused] = React.useState(false);

      const entry = pool.length > 0 ? pool[cursor % pool.length] : WORDS[0];
      const favOn = !!(s.fav && s.fav[entry.w]);

      const advance = React.useCallback(() => {
        setCursor((current) => {
          const nextPool = dockPool(store.getSnapshot().settings);
          if (nextPool.length === 0) return current + 1;
          const known = store.getSnapshot().known;
          for (let step = 1; step <= nextPool.length; step++) {
            if (!known[nextPool[(current + step) % nextPool.length].w]) return current + step;
          }
          return current + 1;
        });
      }, []);

      const [runningMs, idleMs] = paceIntervals(settings && settings.pace);
      React.useEffect(() => {
        if (s.collapsed || paused) return undefined;
        const id = setInterval(advance, running ? runningMs : idleMs);
        return () => { clearInterval(id); };
      }, [s.collapsed, paused, running, runningMs, idleMs, advance]);

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
          h('span', { style: { display: 'flex', gap: 6, flex: 'none', alignItems: 'center', marginLeft: 'auto' } },
            h('button', { type: 'button', className: 'elz-btn', onClick: advance }, t('dock.next')),
            h('button', {
              type: 'button', className: 'elz-btn', onClick: () => { markKnown(entry.w); advance(); }, title: t('dock.known'),
            }, '✓'),
            h(FavButton, { entry, favOn, t, iconOnly: true }),
            typeof openBrief === 'function' ? h('button', {
              type: 'button', className: 'elz-btn', onClick: openBrief, title: t('dock.openBrief'), 'aria-label': t('dock.openBrief'),
            }, '»') : null,
          ),
        ));
    }

    function buildSessionPack(title, convText, settings, known, sessionPacks) {
      const have = new Set();
      for (const pack of sessionPacks || []) {
        for (const entry of pack.words || []) have.add(entry.w);
      }
      const themed = topicPoolFor(title || '', convText || '', settings, sessionPacks);
      const pool = themed.length > 0 ? themed : dockPool(settings);
      const fresh = pool.filter((e) => !(known || {})[e.w] && !have.has(e.w));
      const batch = Math.max(8, (((settings || {}).batchSize) || 10) * 2);
      const pick = (fresh.length > 0 ? fresh : pool).slice(0, batch);
      if (pick.length === 0) return null;
      const head = detectTopics(title || '', convText || '')[0];
      const label = (title || '').slice(0, 22) || 'general';
      return {
        topic: head ? head.id : 'general',
        title: head ? head.chip.slice(1) + ' · ' + label : label,
        ts: Date.now(),
        words: pick.map((e) => ({ w: e.w, pos: e.pos, zh: e.zh, en: e.en, zhEx: e.zhEx })),
      };
    }

    // ------------------------------------------------------ settings panel
    function SettingsPanel({ s, t, title, convText, sessionId }) {
      const settings = s.settings || DEFAULT_SETTINGS;
      const preset = levelPreset(settings.level);
      const [confirmClear, setConfirmClear] = React.useState(false);
      const [packs, setPacks] = React.useState(() => loadPacks(sessionId));
      React.useEffect(() => { setPacks(loadPacks(sessionId)); }, [sessionId, s.packsTick]);
      const [packMsg, setPackMsg] = React.useState('');
      React.useEffect(() => {
        if (!packMsg) return undefined;
        const id = setTimeout(() => { setPackMsg(''); }, 3500);
        return () => { clearTimeout(id); };
      }, [packMsg]);
      const generatePack = () => {
        const pack = buildSessionPack(title, convText, settings, s.known, loadPacks(sessionId));
        if (!pack) return;
        appendPack(sessionId, pack);
        setPacks(loadPacks(sessionId));
        setStore({ packsTick: Date.now() });
        setPackMsg('✓ ' + pack.words.length + ' ' + t('set.packWords'));
      };
      React.useEffect(() => {
        if (!confirmClear) return undefined;
        const id = setTimeout(() => { setConfirmClear(false); }, 4000);
        return () => { clearTimeout(id); };
      }, [confirmClear]);
      return h('section', { className: 'elz-set' },
        h('div', { className: 'elz-set-group' },
          h('span', { className: 'elz-h' }, t('set.level')),
          h('div', { className: 'elz-seg', role: 'group', style: { flexWrap: 'wrap' } },
            LEVEL_PRESETS.map((p) => h('button', {
              key: p.id, type: 'button', 'aria-pressed': settings.level === p.id ? 'true' : 'false',
              className: 'elz-seg-btn' + (settings.level === p.id ? ' elz-seg-on' : ''),
              onClick: () => { updateSettings({ level: p.id }); },
            }, t('set.level.' + p.id))),
          ),
          h('span', { className: 'elz-note' }, t('set.levelDesc.' + preset.id)),
        ),
        h('div', { className: 'elz-set-group' },
          h('span', { className: 'elz-h' }, t('set.batch')),
          h('div', { className: 'elz-seg', role: 'group' },
            BATCH_SIZES.map((n) => h('button', {
              key: n, type: 'button', 'aria-pressed': settings.batchSize === n ? 'true' : 'false',
              className: 'elz-seg-btn' + (settings.batchSize === n ? ' elz-seg-on' : ''),
              onClick: () => { updateSettings({ batchSize: n }); },
            }, String(n))),
          ),
        ),
        h('div', { className: 'elz-set-group' },
          h('span', { className: 'elz-h' }, t('set.pace')),
          h('div', { className: 'elz-seg', role: 'group' },
            PACES.map((p) => h('button', {
              key: p, type: 'button', 'aria-pressed': settings.pace === p ? 'true' : 'false',
              className: 'elz-seg-btn' + (settings.pace === p ? ' elz-seg-on' : ''),
              onClick: () => { updateSettings({ pace: p }); },
            }, t('set.pace.' + p))),
          ),
          h('span', { className: 'elz-note' }, t('set.paceDesc')),
        ),
        h('div', { className: 'elz-set-group' },
        h('span', { className: 'elz-h' }, t('set.packHeading')),
        (() => {
          const allWords = sessionPackWords(sessionId);
          const knownCount = allWords.filter((entry) => s.known && s.known[entry.w]).length;
          return allWords.length > 0 ? h('p', { className: 'elz-note' }, t('set.packTotal') + ' ' + allWords.length + ' · ' + t('set.packKnown') + ' ' + knownCount) : null;
        })(),
        h('div', { className: 'elz-card-actions' },
          h('button', { type: 'button', className: 'elz-btn elz-btn-primary', onClick: generatePack, title: t('set.packGenNote') }, '＋ ' + t('set.packGenerate')),
          packMsg ? h('span', { className: 'elz-pack-ok' }, packMsg) : null,
        ),
        packs.length === 0
          ? h('p', { className: 'elz-note' }, t('set.packEmpty'))
          : h('div', { className: 'elz-cards' }, [...packs].reverse().map((p) => h('div', { className: 'elz-card', key: p.ts },
            h('div', { className: 'elz-card-top' },
              h('span', { className: 'elz-word' }, p.title || p.topic),
              h('span', { className: 'elz-count' }, String((p.words || []).length) + ' ' + t('set.packWords')),
            ),
            h('div', { className: 'elz-card-actions' },
              h('button', {
                type: 'button', className: 'elz-btn',
                onClick: () => { removeSessionPack(sessionId, p.ts); setPacks(loadPacks(sessionId)); setStore({ packsTick: Date.now() }); },
              }, '✕ ' + t('set.packDelete')),
            ),
          ))),
        h('p', { className: 'elz-note' }, t('set.packHint')),
        h('p', { className: 'elz-note' }, t('set.packGenNote')),
      ),
      h('div', { className: 'elz-actions' },
          h('button', {
            type: 'button', className: 'elz-btn',
            onClick: () => { resetSettings(); setConfirmClear(false); },
          }, '↺ ' + t('set.reset')),
          h('button', {
            type: 'button', className: 'elz-btn elz-btn-ghost',
            onClick: () => { setCollapsed(true); },
            title: t('set.collapseNote'),
          }, '▾ ' + t('set.collapse')),
          h('button', {
            type: 'button', className: 'elz-btn' + (confirmClear ? ' elz-btn-danger' : ''),
            onClick: () => {
              if (!confirmClear) { setConfirmClear(true); return; }
              clearRecords();
              setConfirmClear(false);
            },
          }, confirmClear ? t('set.clearConfirm') : '✕ ' + t('set.clearRecords')),
        ),
        h('p', { className: 'elz-note' }, t('set.effectNote')),
        h('p', { className: 'elz-note' }, t('set.collapseNote')),
      );
    }

    // -------------------------------------------------- sidebar tab body
    function BriefTab({ sessionId, useCatalog, useSessionState, t }) {
      const s = React.useSyncExternalStore(store.subscribe, store.getSnapshot);
      const catalog = typeof useCatalog === 'function' ? useCatalog((value) => value) : undefined;
      const snap = typeof useSessionState === 'function' ? useSessionState((value) => value) : undefined;
      const running = !!(snap && snap.running);
      const [offset, setOffset] = React.useState(0);
      const view = s.view || 'words';
      const setView = (value) => { setStore({ view: value }); };

      const row = catalog && catalog.byId ? catalog.byId[sessionId] : undefined;
      const title = (row && (row.title || row.displayTitle)) || '';
      const convText = React.useMemo(() => sessionConvText(snap), [snap]);
      const packHit = React.useMemo(() => parseElpack(convText), [convText]);
      React.useEffect(() => {
        if (!packHit) return undefined;
        appendPack(sessionId, packHit);
        setStore({ packsTick: Date.now() });
        return undefined;
      }, [packHit]);
      const topics = React.useMemo(() => detectTopics(title, convText), [title, convText]);
      const briefLines = topics.length > 0 ? topics.map((topic) => topic.brief) : [GENERAL_BRIEF];

      const words = React.useMemo(() => pickTopicWords(title, offset, s.settings, convText, loadPacks(sessionId)), [sessionId, title, offset, s.settings, convText, s.packsTick]);
      const favWords = React.useMemo(
        () => Object.keys(s.fav || {}).map((w) => wordByWord[w]).filter(Boolean),
        [s.fav],
      );
      const sessionWords = React.useMemo(() => sessionPackWords(sessionId), [sessionId, s.packsTick]);
      const packKnownCount = sessionWords.filter((entry) => s.known && s.known[entry.w]).length;
      const [packMsg, setPackMsg] = React.useState('');
      React.useEffect(() => {
        if (!packMsg) return undefined;
        const id = setTimeout(() => { setPackMsg(''); }, 3500);
        return () => { clearTimeout(id); };
      }, [packMsg]);
      const genPack = () => {
        const pack = buildSessionPack(title, convText, s.settings, s.known, loadPacks(sessionId));
        if (!pack) return;
        appendPack(sessionId, pack);
        setStore({ packsTick: Date.now() });
        setPackMsg('✓ ' + pack.words.length + ' ' + t('set.packWords'));
      };

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
        // --- view switch: topic words / word book, gear opens settings
        h('div', { className: 'elz-seg-row' },
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
          h('button', {
            type: 'button', 'aria-selected': view === 'settings' ? 'true' : 'false',
            className: 'elz-seg-btn elz-gear' + (view === 'settings' ? ' elz-seg-on' : ''),
            onClick: () => { setView(view === 'settings' ? 'words' : 'settings'); },
            title: t('tab.viewSettings'), 'aria-label': t('tab.viewSettings'),
          }, '⚙'),
        ),
        view === 'settings' ?
        h(SettingsPanel, { s, t, title, convText, sessionId }) :
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
          h('div', { className: 'elz-card-actions' },
            h('button', { type: 'button', className: 'elz-btn elz-btn-primary', onClick: genPack, title: t('set.packGenNote') }, '＋ ' + t('set.packGenerate')),
            packMsg ? h('span', { className: 'elz-pack-ok' }, packMsg) : null,
            sessionWords.length > 0 ? h('span', { className: 'elz-count' }, t('set.packTotal') + ' ' + sessionWords.length + ' · ' + t('set.packKnown') + ' ' + packKnownCount) : null,
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
        sessionId,
        hooks: {
          sessionState: sessionStateSource(ctx, sessionId),
          catalog: catalogSource(ctx),
        },
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
