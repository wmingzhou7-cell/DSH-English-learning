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
        keys: ['商务', '客户', '谈判', '甲方', '乙方', '投标', '招标', '提案', '售前', '签约', '合作方', '供应商', '销售', 'business', 'client', 'customer', 'negotiation', 'proposal', 'vendor', 'partner', 'pitch', 'deal', 'sales'],
      },
      {
        id: 'finance',
        chip: '#finance',
        brief: 'This conversation involves money matters — pricing, settlement, budgets, and markets.',
        keys: ['电力交易', '售电', '现货', '电价', '结算', '财务', '预算', '报价', '发票', '付款', '成本', '收益', '市场化', '结算单', 'finance', 'settlement', 'invoice', 'budget', 'pricing', 'billing', 'payment', 'cost', 'revenue', 'market', 'trading', 'tariff'],
      },
      {
        id: 'industry',
        chip: '#industry',
        brief: 'This conversation is about industrial IoT and field operations — devices, metering, and plants.',
        keys: ['物联', '工业', '工厂', '车间', '产线', '设备', '采集', '传感器', '网关', '电表', '变电站', '调度', '运维', '检修', '能耗', '立项', '平台升级', '数据采集', '遥测', 'iot', 'scada', 'plc', 'sensor', 'gateway', 'telemetry', 'meter', 'maintenance', 'equipment', 'factory'],
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
    function dockPool(settings) {
      const preset = levelPreset(settings && settings.level);
      return WORDS.filter((entry) => passesLevel(entry, preset));
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
      'set.packHeading': '主题词包',
      'set.packEmpty': '还没有词包。在对话里让 AI「生成一个 XX 主题的 elpack 词包」，插件会自动识别并保存到这里。',
      'set.packWords': '词',
      'set.packDelete': '删除',
      'set.packHint': '词包来自对话里 AI 输出的 ```elpack 代码块，按主题自动合并；删除会话不影响已保存的词包。',
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
      'set.packHeading': 'Theme packs',
      'set.packEmpty': 'No packs yet. Ask the AI in any chat to \"generate an elpack word pack for <topic>\" — it is detected and saved here automatically.',
      'set.packWords': 'words',
      'set.packDelete': 'Delete',
      'set.packHint': 'Packs come from ```elpack code blocks the AI posts in a conversation, merged by topic; deleting the chat keeps the saved packs.',
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
    const PACK_KEY = 'englishLounge.packs.v1';
    function loadPacks() {
      try {
        const raw = localStorage.getItem(PACK_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        return Array.isArray(arr) ? arr : [];
      } catch (err) { return []; }
    }
    function savePacks(packs) {
      try { localStorage.setItem(PACK_KEY, JSON.stringify(packs.slice(0, 12))); } catch (err) { /* storage blocked */ }
    }
    function upsertPack(pack) {
      const packs = loadPacks().filter((p) => p.topic !== pack.topic);
      packs.unshift(pack);
      savePacks(packs);
    }
    function removePack(topic) {
      savePacks(loadPacks().filter((p) => p.topic !== topic));
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

    function topicPoolFor(title, extraText, settings) {
      const preset = levelPreset(settings && settings.level);
      const n = Math.max(1, Math.min(30, (settings && settings.batchSize) || 10));
      const topicIds = detectTopics(title, extraText).map((rule) => rule.id);
      const want = new Set(topicIds);
      const packWords = [];
      const seenPack = new Set();
      for (const pack of loadPacks()) {
        if (!want.has(pack.topic)) continue;
        for (const entry of pack.words || []) {
          if (seenPack.has(entry.w)) continue;
          seenPack.add(entry.w);
          packWords.push(entry);
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
      return pool.filter((entry) => passesLevel(entry, preset));
    }

    function pickTopicWords(title, offset, settings, extraText) {
      const preset = levelPreset(settings && settings.level);
      const n = Math.max(1, Math.min(30, (settings && settings.batchSize) || 10));
      let pool = topicPoolFor(title, extraText, settings);
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
      '.elz-bar { display: flex; align-items: center; gap: 8px; box-sizing: border-box; width: 100%; max-width: 640px; padding: 3px 10px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-md); background: var(--dsw-alias-bg-layer-1); }',
      '.elz-chipbar { display: flex; align-items: center; gap: 8px; box-sizing: border-box; padding: 4px 10px; border: 0.5px solid var(--dsw-alias-border-l1); border-radius: 999px; background: var(--dsw-alias-bg-layer-1); width: max-content; }',
      '.elz-word { color: var(--dsw-alias-label-primary); font-weight: 600; font-size: 13px; white-space: nowrap; }',
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
        if (packHit) upsertPack(packHit);
      }, [packHit]);
      const pool = React.useMemo(() => {
        if (detectTopics(title, convText).length === 0 && !packHit) return dockPool(settings);
        const themed = topicPoolFor(title, convText, settings);
        return themed.length > 0 ? themed : dockPool(settings);
      }, [settings, title, convText, packHit]);
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
          h('span', { style: { display: 'flex', gap: 6, flex: 'none', alignItems: 'center' } },
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

    // ------------------------------------------------------ settings panel
    function SettingsPanel({ s, t }) {
      const settings = s.settings || DEFAULT_SETTINGS;
      const preset = levelPreset(settings.level);
      const [confirmClear, setConfirmClear] = React.useState(false);
      const [packs, setPacks] = React.useState(() => loadPacks());
      React.useEffect(() => { setPacks(loadPacks()); }, [s.packsTick]);
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
        packs.length === 0
          ? h('p', { className: 'elz-note' }, t('set.packEmpty'))
          : h('div', { className: 'elz-cards' }, packs.map((p) => h('div', { className: 'elz-card', key: p.topic },
            h('div', { className: 'elz-card-top' },
              h('span', { className: 'elz-word' }, p.title || p.topic),
              h('span', { className: 'elz-count' }, String((p.words || []).length) + ' ' + t('set.packWords')),
            ),
            h('div', { className: 'elz-card-actions' },
              h('button', {
                type: 'button', className: 'elz-btn',
                onClick: () => { removePack(p.topic); setPacks(loadPacks()); setStore({ packsTick: Date.now() }); },
              }, '✕ ' + t('set.packDelete')),
            ),
          ))),
        h('p', { className: 'elz-note' }, t('set.packHint')),
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
        upsertPack(packHit);
        setStore({ packsTick: Date.now() });
        return undefined;
      }, [packHit]);
      const topics = React.useMemo(() => detectTopics(title, convText), [title, convText]);
      const briefLines = topics.length > 0 ? topics.map((topic) => topic.brief) : [GENERAL_BRIEF];

      const words = React.useMemo(() => pickTopicWords(title, offset, s.settings, convText), [title, offset, s.settings, convText]);
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
        h(SettingsPanel, { s, t }) :
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
