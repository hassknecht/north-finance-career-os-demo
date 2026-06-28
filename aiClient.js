(function () {
  const API_ENDPOINT = window.NORTH_AI_ENDPOINT || localStorage.getItem("north_ai_endpoint") || "/api/ai";

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function has(text, keyword) {
    return String(text || "").toLowerCase().includes(keyword.toLowerCase());
  }

  async function request(action, payload) {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, payload })
      });
      if (!response.ok) throw new Error("AI proxy unavailable");
      return { source: "openai", data: await response.json() };
    } catch (error) {
      return { source: "mock", data: await mock(action, payload) };
    }
  }

  async function mock(action, payload = {}) {
    await wait(520);
    if (action === "parse_resume") return mockResume(payload);
    if (action === "generate_origin") return mockOrigin(payload);
    if (action === "generate_daily_task") return mockDailyTask(payload);
    if (action === "generate_resume_bullet") return mockResumeBullet(payload);
    if (action === "explain_career") return mockCareerExplanation(payload);
    if (action === "recommend_courses") return mockCourses(payload);
    if (action === "recommend_people_events") return mockPeopleEvents(payload);
    if (action === "coach_chat") return mockCoachChat(payload);
    if (action === "generate_blog_from_email") return mockBlog(payload);
    if (action === "generate_next_event") return mockNextEvent(payload);
    return { message: "模拟模型已收到请求。" };
  }

  function mockResume(payload) {
    const name = payload.fileName || "上传简历";
    const text = payload.text || "";
    return {
      summary: `演示回退：未连接后端文件解析，当前只根据文件名和可读取文本生成临时结果：${name}`,
      profilePatch: {
        internship: has(text, "审计") ? "四大审计实习 1 段、银行实习 1 段" : "券商投行实习 2 段、银行实习 1 段",
        skills: has(text, "python") ? "Excel、财务建模、Python 基础" : "Excel、财务建模、行业研究"
      }
    };
  }

  function mockOrigin(profile) {
    const text = `${profile.degree || ""} ${profile.schoolTier || ""} ${profile.school || ""} ${profile.internship || ""} ${profile.skills || ""} ${profile.freeBackground || ""}`;
    const stable = has(profile.preference, "稳定");
    const income = has(profile.preference, "收入");
    const growth = has(profile.preference, "成长");
    const python = has(text, "python") || has(text, "代码") || has(text, "计算机") || has(text, "数据");
    const media = has(text, "传媒") || has(text, "内容") || has(text, "新闻") || has(text, "写作");
    const psychology = has(text, "心理") || has(text, "教育") || has(text, "社科");
    const design = has(text, "设计") || has(text, "交互") || has(text, "产品");
    const law = has(text, "法律") || has(text, "法学") || has(text, "合规");
    const finance = has(text, "金融") || has(text, "会计") || has(text, "投行") || has(text, "银行") || has(text, "券商");
    const generic = !finance && !python && !media && !psychology && !design && !law;
    let fitAdjustments;
    let pathOverrides;
    let reason;

    if (python) {
      fitAdjustments = { quant: 90, internet: 88, consulting: 78, fin_infra: 84, research: 72, bank_hq: 68, buy_side: 70, ib: 62 };
      pathOverrides = [
        career("quant","数据科学 / 算法分析","30–60w",90,["Python","统计建模","机器学习","业务理解"],["技术壁垒强","可跨行业迁移"],["需要作品集","竞争强"]),
        career("internet","数据产品 / 增长分析","25–55w",88,["SQL","指标体系","A/B 测试","产品判断"],["成长快","离业务近"],["节奏快","目标压力"]),
        career("fin_infra","金融科技 / 系统产品","25–45w",84,["系统思维","数据接口","合规理解","项目协同"],["稳定与技术结合","长期积累"],["岗位门槛偏复合"])
      ];
      reason = "你的输入显示出数据/技术信号，系统优先推荐数据科学、数据产品和金融科技这类可迁移路径。";
    } else if (media) {
      fitAdjustments = { consulting: 88, internet: 86, research: 80, bank_hq: 68, wealth: 72, buy_side: 66, fin_infra: 62 };
      pathOverrides = [
        career("consulting","品牌策略 / 商业咨询","18–40w",88,["结构化表达","用户洞察","PPT","访谈研究"],["表达优势可放大","行业选择广"],["项目制压力","需要商业基本功"]),
        career("internet","内容策略 / 用户增长","18–45w",86,["内容判断","数据复盘","平台机制","选题策划"],["作品容易展示","增长反馈快"],["平台变化快"]),
        career("research","行业研究 / 内容研究","16–35w",80,["资料检索","观点输出","深度写作","专家访谈"],["适合沉淀公开作品","可转咨询/内容"],["早期收入一般"])
      ];
      reason = "你的输入更像内容/传媒/表达型背景，系统优先推荐内容策略、品牌咨询和研究型岗位。";
    } else if (psychology) {
      fitAdjustments = { internet: 88, consulting: 84, research: 82, bank_hq: 70, soe_hq: 74, fin_infra: 66 };
      pathOverrides = [
        career("internet","用户研究 / 产品体验","18–40w",88,["访谈","问卷","用户画像","产品洞察"],["专业背景贴合","作品集可积累"],["需要产品语境"]),
        career("consulting","组织咨询 / 人才发展","18–38w",84,["组织诊断","访谈分析","方案设计","表达"],["心理学优势明显","B 端需求稳定"],["项目经验要求"]),
        career("research","社会研究 / 用户洞察","15–32w",82,["定性研究","数据整理","报告写作","议题分析"],["研究能力可迁移","适合长期积累"],["商业化需补足"])
      ];
      reason = "你的输入体现心理/社科信号，系统优先推荐用户研究、组织咨询和社会研究。";
    } else if (design) {
      fitAdjustments = { internet: 90, consulting: 80, research: 76, fin_infra: 70 };
      pathOverrides = [
        career("internet","产品经理 / 交互体验","20–50w",90,["产品判断","原型设计","用户研究","数据复盘"],["可用作品集证明","成长快"],["需要业务敏感度"]),
        career("consulting","服务设计 / 数字化咨询","18–42w",80,["流程设计","访谈","蓝图","提案"],["设计与商业结合","项目多样"],["交付压力"]),
        career("research","体验研究 / 设计策略","16–35w",76,["用户洞察","可用性测试","研究报告","策略表达"],["专业能力清晰","转化路径多"],["岗位数量有限"])
      ];
      reason = "你的输入偏产品/设计，系统优先推荐产品、体验和服务设计相关方向。";
    } else if (law) {
      fitAdjustments = { fin_infra: 86, bank_hq: 82, consulting: 78, soe_hq: 80, amc: 84 };
      pathOverrides = [
        career("fin_infra","合规科技 / 监管科技","22–45w",86,["法律理解","监管规则","系统产品","项目协同"],["专业壁垒强","稳定性较高"],["需要补技术语境"]),
        career("amc","争议解决 / 特殊资产","20–40w",84,["法律检索","谈判","财务基础","项目管理"],["法金复合度高","差异化明显"],["项目周期长"]),
        career("bank_hq","银行合规 / 风控","18–35w",82,["合规政策","风险识别","流程控制","沟通"],["稳定性强","专业匹配"],["晋升节奏较慢"])
      ];
      reason = "你的输入体现法律/合规信号，系统优先推荐监管科技、特殊资产和合规风控路径。";
    } else if (generic) {
      fitAdjustments = { consulting: 82, internet: 80, bank_hq: stable ? 82 : 72, soe_hq: stable ? 84 : 74, research: 76 };
      pathOverrides = [
        career("consulting","商业分析 / 运营咨询","16–35w",82,["结构化分析","沟通","Excel","行业学习"],["起点包容","训练通用能力"],["需要项目证明"]),
        career("internet","业务运营 / 产品运营","15–35w",80,["执行力","数据复盘","用户理解","跨团队协作"],["门槛相对开放","成长反馈快"],["组织变化快"]),
        career("soe_hq","央国企职能 / 项目管理","15–30w",84,["组织协调","材料写作","政策理解","项目推进"],["稳定性好","适合长期路径"],["上升速度较慢"])
      ];
      reason = "你没有被单一专业锁定，系统优先推荐通用能力可迁移、可通过项目证明的路径。";
    } else {
      fitAdjustments = { bank_hq: stable ? 92 : growth ? 84 : 86, fin_infra: stable ? 91 : 82, bank_branch: stable ? 89 : 75, wealth: stable ? 87 : income ? 88 : 84, ib: income ? 83 : 73, buy_side: income ? 86 : 78, research: 76, quant: 70, consulting: growth ? 80 : 70 };
      pathOverrides = [];
      reason = stable
        ? "你的画像更适合优先比较银行总行、金融基础设施、理财子和央企总部。"
        : "你的画像可以优先比较投行、买方、行研和互联网金融相关路径。";
    }
    const recommendations = Object.entries(fitAdjustments)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([careerId, fit], index) => ({ careerId, fit, rank: index + 1 }));
    return {
      summary: `${profile.degree || "开放背景"} · ${profile.schoolTier || profile.school || "学校层次待判断"} · ${profile.preference}`,
      reason,
      answer: `模型回答摘要：基于开放输入「${profile.prompt || profile.freeBackground || "未填写补充问题"}」，当前优先用稳定性、收入弹性、专业壁垒和组织平台四个基座做判断。`,
      selectedTarget: recommendations[0]?.careerId || "bank_hq",
      recommendations,
      fitAdjustments,
      pathOverrides,
      ragEvidence: [
        `画像信号：${profile.degree}、${profile.school}、偏好为「${profile.preference}」。`,
        `经历信号：${profile.internship || "暂未填写经历"}。`,
        `技能信号：${profile.skills || "暂未填写技能"}。`,
        `开放问题：${profile.freeBackground || "暂未补充"}。`,
        stable ? "RAG 规则命中：稳定优先会提高银行、金融基础设施、央企类路径权重。" : "RAG 规则命中：非稳定优先会提高高成长/高弹性路径权重。"
      ]
    };
  }

  function career(id,title,salary,fit,skills,pros,cons){
    return {id,title,salary,fit,skills,pros,cons,development:"根据作品集、实习与路径验证动态更新",intensity:"中等，取决于组织和赛道",stability:"中等",market:"需要结合城市与行业动态判断"};
  }

  function mockDailyTask(payload) {
    const target = payload.target || "银行总行";
    if (target.includes("数据科学") || target.includes("算法") || target.includes("量化")) {
      return {
        title: "完成一个数据分析 mini case。",
        duration: "35 分钟",
        description: "选择一个公开数据集或业务问题，写清目标、字段、分析方法和一个可视化结论。",
        impact: "把“会 Python / 数据”转化为“能用数据回答业务问题”。",
        steps: ["确定一个业务问题", "列出需要字段与分析方法", "输出一张图和 3 条结论"],
        skillTags: ["Python", "数据分析", "业务理解"]
      };
    }
    if (target.includes("数据产品") || target.includes("增长")) {
      return {
        title: "设计一个增长指标看板。",
        duration: "30 分钟",
        description: "选一个 App 场景，定义北极星指标、3 个过程指标和一次 A/B 测试假设。",
        impact: "把产品兴趣转化为可展示的指标体系和实验思维。",
        steps: ["选择产品场景", "定义指标层级", "写出实验假设"],
        skillTags: ["指标体系", "产品判断", "A/B 测试"]
      };
    }
    if (target.includes("用户研究") || target.includes("产品体验")) {
      return {
        title: "完成 3 人用户访谈提纲。",
        duration: "28 分钟",
        description: "围绕一个产品体验问题，写出访谈目标、问题清单、观察维度和预期洞察。",
        impact: "把心理/社科背景转化为用户洞察作品。",
        steps: ["定义研究问题", "写 8 个访谈问题", "设定洞察记录模板"],
        skillTags: ["访谈", "用户画像", "研究设计"]
      };
    }
    if (target.includes("内容") || target.includes("品牌")) {
      return {
        title: "拆解一个爆款内容策略。",
        duration: "25 分钟",
        description: "选一篇文章或视频，分析受众、选题钩子、结构、传播渠道和可复用方法。",
        impact: "把表达能力转化为可复用的内容判断框架。",
        steps: ["选择案例", "拆解内容结构", "写出可复用策略"],
        skillTags: ["内容判断", "用户洞察", "结构化表达"]
      };
    }
    if (target.includes("产品经理") || target.includes("交互")) {
      return {
        title: "画一个功能改版小原型。",
        duration: "40 分钟",
        description: "选择一个常用产品的痛点，写清用户场景、改版方案、关键页面和验证指标。",
        impact: "把设计/产品兴趣转化为作品集素材。",
        steps: ["定义痛点", "画 2 个关键页面", "写验证指标"],
        skillTags: ["产品判断", "原型设计", "用户研究"]
      };
    }
    if (target.includes("合规") || target.includes("监管") || target.includes("特殊资产")) {
      return {
        title: "写一份合规风险判断卡片。",
        duration: "30 分钟",
        description: "选择一个业务场景，写清规则依据、风险点、影响对象和缓释建议。",
        impact: "把法律/合规背景转化为业务可读的风险判断。",
        steps: ["选择场景", "列规则与风险", "给出缓释建议"],
        skillTags: ["法律理解", "风险识别", "业务表达"]
      };
    }
    if (target.includes("商业分析") || target.includes("运营")) {
      return {
        title: "完成一个业务拆解 memo。",
        duration: "30 分钟",
        description: "选择一家产品或公司，用用户、收入、成本、增长、风险五个角度写 200 字分析。",
        impact: "把泛背景转化为可迁移的商业分析证据。",
        steps: ["选定对象", "五维拆解", "写一句判断结论"],
        skillTags: ["结构化分析", "行业学习", "表达"]
      };
    }
    if (target.includes("投行")) {
      return {
        title: "拆解一个 IPO 项目的核心风险。",
        duration: "30 分钟",
        description: "选择一家近期上市公司，用业务、财务、合规、估值四个角度写 200 字判断。",
        impact: "把实习经历沉淀成可讲述的项目判断力。",
        steps: ["选公司", "读招股书摘要", "写四象限风险判断"],
        skillTags: ["尽调", "财务与估值", "结构化表达"]
      };
    }
    return {
      title: "完成一份银行产品判断 mini memo。",
      duration: "25 分钟",
      description: "选择一个银行产品，用“用户—业务—风险—建议”的结构写 200 字判断。",
      impact: "把“我对银行感兴趣”升级为“我能分析银行业务”。",
      steps: ["选一个银行产品", "写清用户、商业价值、风险与建议", "找一位从业者验证"],
      skillTags: ["业务分析", "风险判断", "结构化表达"]
    };
  }

  function mockResumeBullet(payload) {
    const task = payload.task || "银行产品判断 mini memo";
    return {
      bullet: `独立完成「${task}」，围绕业务价值、用户需求、风险约束与落地建议形成结构化分析，并将反馈迭代为可复用的职业作品集材料。`
    };
  }

  function mockCareerExplanation(payload) {
    const career = payload.career || {};
    const profile = payload.profile || {};
    return {
      note: `模拟 AI 判断：${career.title} 与你的「${profile.preference || "稳定优先"}」偏好匹配度较高，优势在于${(career.pros || []).slice(0, 2).join("、")}；短板是${(career.cons || []).slice(0, 2).join("、")}。下一步建议用 1 个任务证明「${(career.skills || ["业务分析"])[0]}」。`
    };
  }

  function mockCourses(payload) {
    const profile = payload.profile || {};
    const python = has(profile.skills, "python");
    return {
      courses: python
        ? ["Python 金融数据分析", "概率统计与因子研究", "财务报表分析"]
        : ["银行业务与风险管理", "财务报表分析", "结构化商业写作"],
      reason: "课程建议会根据目标路径、技能短板和已有经历动态调整。"
    };
  }

  function mockPeopleEvents(payload) {
    return {
      people: [],
      events: [],
      articles: []
    };
  }

  function mockCoachChat(payload) {
    const question = payload.question || "";
    const pageName = payload.pageName || "当前页面";
    const profile = payload.profile || {};
    const career = payload.selectedCareer || {};
    const lower = question.toLowerCase();

    if (has(lower, "为什么") || has(lower, "匹配")) {
      return {
        answer: `当前在「${pageName}」。${career.title || "这条路径"} 的匹配度主要来自三类信号：画像偏好「${profile.preference || "未填写"}」、经历「${profile.internship || "未填写"}」、技能「${profile.skills || "未填写"}」。demo 现在用本地 RAG 规则模拟，接入后端后同一入口会返回真实模型解释。`
      };
    }
    if (has(lower, "下一步") || has(lower, "任务")) {
      return {
        answer: `建议下一步做一个 25-35 分钟的小证据任务：围绕「${career.title || "目标岗位"}」写 200 字业务判断，并沉淀成简历 bullet。这样能让推荐从“兴趣”变成“可验证能力”。`
      };
    }
    return {
      answer: `我会结合当前页面「${pageName}」回答。你可以问：为什么推荐这条路、这条路缺什么能力、今天该做什么、怎么写进简历。`
    };
  }

  function mockBlog(payload) {
    const person = payload.person || {};
    const email = payload.email || "";
    return {
      title: `我向${person.role || "从业者"}请教职业路径前，先整理了这 3 个问题`,
      body: `这封邮件的核心不是“求内推”，而是围绕真实职业判断收集证据。基于邮件内容「${email.slice(0, 90)}...」，可以整理成一篇公开复盘：我为什么关注这条路径、我准备验证哪些假设、以及我希望从从业者那里获得哪些反馈。下一步可以把回复继续沉淀为路径 FAQ。`
    };
  }

  function mockNextEvent(payload) {
    const career = payload.career || {};
    const skill = (career.skills || ["业务分析"])[0];
    return {
      title: `后天 20:30 · 完成 1 个「${skill}」证据任务`,
      reason: `围绕 ${career.title || "目标路径"} 补足可展示证据，完成后更新匹配度和简历 bullet。`
    };
  }

  window.NorthAI = { request };
})();
