
const CAREERS=[{"id": "buy_side", "title": "二级资管买方", "salary": "25–30w", "development": "3年50w，5–7年100w，确定性约80%", "intensity": "不大，但心累", "stability": "不太稳定", "market": "近两年扩招，业务行情较好", "fit": 82, "kind": "recommended", "x": -160, "y": -120, "z": 120, "skills": ["财务分析", "行业研究", "组合思维", "风险判断"], "pros": ["中长期收入上限较高", "研究与投资能力可复用", "近两年需求改善"], "cons": ["业绩压力与心理负担较大", "对市场周期较敏感", "岗位数量有限"]}, {"id": "quant", "title": "量化", "salary": "50–80w", "development": "3年100w，后续小几百万；确定性约80%", "intensity": "比较累", "stability": "不太稳定", "market": "长期看好", "fit": 66, "kind": "stretch", "x": -280, "y": -220, "z": 160, "skills": ["Python / C++", "概率统计", "机器学习", "因子研究"], "pros": ["起薪高", "能力壁垒强", "长期行业空间较好"], "cons": ["技术门槛高", "职业生涯相对短", "绩效淘汰明显"]}, {"id": "consulting", "title": "咨询", "salary": "20–50w", "development": "3–5年50w，7–10年100w；确定性约60%", "intensity": "很大，很累", "stability": "不太稳定", "market": "裁员较多，目前需求不大", "fit": 72, "kind": "adjacent", "x": -260, "y": 20, "z": 20, "skills": ["结构化分析", "商业沟通", "PPT表达", "项目管理"], "pros": ["训练通用商业能力", "行业覆盖广", "转型出口多"], "cons": ["工时长", "市场需求波动", "容易长期处于建议角色"]}, {"id": "ib", "title": "投行", "salary": "20–50w", "development": "大年时3年过100w，确定性低于50%", "intensity": "很大，很累", "stability": "不太稳定", "market": "业务逐步恢复，招聘中", "fit": 76, "kind": "recommended", "x": -60, "y": -230, "z": -40, "skills": ["财务与估值", "项目执行", "尽调", "客户沟通"], "pros": ["项目经验密度高", "金融职业信号强", "可转 PE / 产业资本"], "cons": ["周期性强", "工时极长", "职业确定性偏低"]}, {"id": "research", "title": "行研", "salary": "约20w", "development": "3–5年50w，确定性约30%", "intensity": "很大，很累", "stability": "不太稳定", "market": "行业仍较差，前景不确定", "fit": 68, "kind": "adjacent", "x": 80, "y": -210, "z": 30, "skills": ["行业研究", "建模", "信息搜集", "观点输出"], "pros": ["形成行业认知", "可转买方研究", "适合深度思考者"], "cons": ["薪资起点一般", "行业波动大", "确定性偏低"]}, {"id": "bank_hq", "title": "银行总行", "salary": "20–30w", "development": "5–10年50w，确定性约80%", "intensity": "不大，比较舒适", "stability": "非常稳定", "market": "稳定招聘", "fit": 88, "kind": "recommended", "x": 165, "y": -90, "z": 90, "skills": ["政策与合规", "业务分析", "组织沟通", "银行产品"], "pros": ["稳定性高", "节奏较舒适", "职业路径清晰"], "cons": ["晋升较慢", "收入上限相对温和", "组织层级较重"]}, {"id": "internet", "title": "互联网", "salary": "20–50w", "development": "7–10年100w，确定性约50%", "intensity": "很大，很累", "stability": "很不稳定", "market": "稳定招聘", "fit": 74, "kind": "adjacent", "x": 245, "y": 40, "z": 120, "skills": ["数据分析", "产品思维", "业务运营", "快速执行"], "pros": ["成长快", "薪资弹性大", "业务机会多"], "cons": ["35岁风险", "组织变化快", "高强度"]}, {"id": "bank_branch", "title": "银行省分", "salary": "15–25w", "development": "10年30–40w，确定性约80%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "稳定招聘", "fit": 84, "kind": "recommended", "x": 260, "y": 180, "z": -20, "skills": ["客户经营", "本地市场", "银行业务", "关系维护"], "pros": ["稳定", "本地资源积累", "节奏可控"], "cons": ["收入成长较慢", "地域绑定强", "创新性有限"]}, {"id": "fin_infra", "title": "金融基础设施", "salary": "25–30w", "development": "5–10年100w，确定性约50%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "近两年扩招", "fit": 86, "kind": "recommended", "x": 80, "y": 235, "z": -70, "skills": ["金融市场规则", "系统运营", "监管理解", "项目协同"], "pros": ["稳定性很高", "工作节奏好", "专业壁垒清晰"], "cons": ["岗位数量少", "晋升节奏较慢", "行业曝光有限"]}, {"id": "soe_hq", "title": "实业央企总部", "salary": "25–35w", "development": "10年70–100w，确定性约60%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "稳定招聘", "fit": 80, "kind": "recommended", "x": -70, "y": 250, "z": 50, "skills": ["产业分析", "资本运作", "组织协调", "政策理解"], "pros": ["平台稳定", "发展空间较广", "产业与金融结合"], "cons": ["决策链条长", "晋升依赖组织", "岗位竞争强"]}, {"id": "wealth", "title": "银行理财子", "salary": "25–35w", "development": "5–7年100w，确定性约80%", "intensity": "不大，压力不大", "stability": "相对稳定", "market": "近两年扩招", "fit": 85, "kind": "recommended", "x": -205, "y": 155, "z": -60, "skills": ["资产配置", "产品设计", "客户需求", "合规风控"], "pros": ["收入与稳定性平衡", "产品化程度较高", "近年机会增加"], "cons": ["受监管影响大", "岗位专业化", "绩效仍有压力"]}, {"id": "amc", "title": "AMC", "salary": "20–25w", "development": "7–12年100w，确定性约50%", "intensity": "不大，会出差", "stability": "相对稳定", "market": "近两年扩招", "fit": 70, "kind": "adjacent", "x": -305, "y": 120, "z": -30, "skills": ["不良资产处置", "法律与财务", "谈判", "项目管理"], "pros": ["适合法律+金融复合背景", "项目差异化强", "长期可积累资源"], "cons": ["出差较多", "项目周期长", "收入确定性一般"]}, {"id": "big4", "title": "四大", "salary": "13–15w", "development": "5年30–40w，10年70–80w", "intensity": "很大，很累", "stability": "相对稳定", "market": "近两年招人减少", "fit": 64, "kind": "stretch", "x": -330, "y": -40, "z": -100, "skills": ["审计", "会计", "流程控制", "客户沟通"], "pros": ["训练体系成熟", "品牌信号强", "出口较多"], "cons": ["起薪较低", "高强度", "招聘收缩"]}, {"id": "leasing", "title": "金租", "salary": "约20w", "development": "10–15年100w，确定性约30%", "intensity": "不大，会出差", "stability": "相对稳定", "market": "近两年扩招", "fit": 69, "kind": "adjacent", "x": 315, "y": -20, "z": -80, "skills": ["融资租赁", "产业分析", "项目尽调", "客户开发"], "pros": ["金融+产业结合", "节奏相对可控", "部分赛道有增长"], "cons": ["出差", "职业确定性一般", "业务能力差异大"]}, {"id": "origin", "title": "你的职业原点", "salary": "—", "development": "由学历、实习、技能与偏好生成", "intensity": "—", "stability": "—", "market": "动态更新", "fit": 100, "kind": "origin", "x": 0, "y": 70, "z": 0, "skills": ["学历背景", "实习经历", "技能标签", "地域偏好"], "pros": ["所有路径都从这里出发"], "cons": ["信息不足时推荐置信度会下降"]}];
const EDGES=[["origin", "buy_side", true], ["origin", "ib", true], ["origin", "bank_hq", true], ["origin", "wealth", true], ["origin", "fin_infra", true], ["origin", "soe_hq", false], ["origin", "consulting", false], ["origin", "research", false], ["origin", "internet", false], ["origin", "bank_branch", false], ["origin", "amc", false], ["origin", "leasing", false], ["origin", "big4", false], ["origin", "quant", false]];
const PUBLIC_PROFILES=[
  {id:'liran',name:'李然',role:'银行总行管培',fit:'总行路径验证',sources:['公开领英摘要','校友活动页','公开圆桌嘉宾介绍'],summary:'曾参与银行零售产品、总行轮岗和管培生项目分享，适合验证银行总行的真实工作内容。',email:'你好李然，我正在比较银行总行和金融基础设施路径，想请教你总行管培前两年的轮岗、能力要求和长期发展。'},
  {id:'zhouchen',name:'周晨',role:'量化研究员',fit:'量化转型验证',sources:['公开技术分享','会议议程','GitHub 项目摘要'],summary:'公开材料显示其关注因子研究、Python 回测和机器学习在投资中的应用，适合验证量化能力门槛。',email:'你好周晨，我正在判断自己是否适合从金融背景转量化，希望请教 Python、统计和项目作品集应如何准备。'},
  {id:'wangnan',name:'王楠',role:'金融基础设施产品经理',fit:'稳定+技术路径验证',sources:['公开论坛嘉宾页','行业白皮书署名','活动报名页'],summary:'公开资料集中在清算系统、交易基础设施和监管科技，适合验证金融基础设施路径。',email:'你好王楠，我正在了解金融基础设施岗位，想请教清算、交易系统和监管科技相关岗位的日常工作与入门能力。'}
];
const RECOMMENDED_ARTICLES=[
  {id:'bank',title:'银行总行岗位到底在做什么',tag:'路径理解',summary:'适合在联系总行从业者前阅读，整理总行轮岗、产品、风控和部门差异。'},
  {id:'quant',title:'金融背景转量化前需要验证的 5 件事',tag:'能力验证',summary:'把 Python、统计、回测和作品集拆成可执行检查项。'},
  {id:'infra',title:'金融基础设施为什么适合稳定型候选人',tag:'行业地图',summary:'解释清算、交易系统、监管科技与金融市场规则之间的关系。'},
  {id:'email',title:'如何把职业请教邮件变成公开成长记录',tag:'输出方法',summary:'把邮件、回复和行动复盘整理成 Blog，用于持续积累职业证据。'}
];
let dynamicProfiles=[];
let dynamicArticles=[];
let dynamicEvents=[];

const screens=[
  {
    name:"Onboarding",
    html:`<p class="kicker">建立职业坐标原点</p>
      <h2 class="title">把你的背景自由输入。</h2>
      <p class="sub">学历、专业、经历都可以开放填写。North 会根据你的输入生成第二页的路径判断。</p>
      <div class="form-grid">
        <div class="field"><label>学历 / 专业 / 学校</label><textarea id="degree" rows="2" placeholder="例如：本科心理学 + 数据分析项目；双非计算机；海外传媒硕士；大专转本科；任何非标准背景都可以"></textarea></div>
        <div class="field"><label>学校层次</label><select id="schoolTier"><option>不确定 / 需要模型判断</option><option>C9 / 顶尖 985</option><option>985 / 强势 211</option><option>普通 211</option><option>双一流非 211</option><option>普通一本 / 公办本科</option><option>民办本科 / 独立学院</option><option>专科 / 高职</option><option>海外 Top 30</option><option>海外 Top 100</option><option>海外普通院校</option><option>MBA / 在职硕士</option><option>跨专业 / 非金融背景</option></select></div>
        <div class="field"><label>学校与城市补充</label><input id="school" placeholder="例如：上海 / 想去香港或深圳 / 本地资源较强 / 海外回国"/></div>
        <div class="field"><label>工作 / 实习经历</label><input id="internship" placeholder="例如：券商投行实习 2 段、四大审计 1 段"/></div>
        <div class="field"><label>技能</label><input id="skills" placeholder="例如：Excel、Python、建模、CPA 科目"/></div>
        <div class="field"><label>偏好</label><select id="preference"><option>稳定优先</option><option>收入优先</option><option>成长优先</option><option>工作生活平衡</option></select></div>
        <div class="field"><label>补充问题</label><textarea id="freeBackground" rows="3" placeholder="例如：我不确定要不要读研；想知道投行、买方和银行总行怎么选。"></textarea></div>
      </div>
      <div class="upload-box">
        <input id="resumeInput" type="file" accept=".pdf,.doc,.docx,.txt"/>
        <label for="resumeInput">上传简历，由 AI 自动识别</label>
        <p>识别学历、实习、项目、技能与关键词</p>
        <div id="parseResult" class="parse-result"></div>
      </div>
      <button id="originBtn" class="cta" onclick="buildOrigin()">生成我的职业坐标</button>
      <div id="originAiNote" class="inline-ai-note"></div>`
  },
  {
    name:"All Paths",
    html:`<p class="kicker">职业可能性坐标</p><h2 class="title">从你的原点，看到所有可能。</h2>
      <p id="pathModelReason" class="sub">系统会根据第一页输入动态生成方向，不局限金融岗位。</p>
      <div class="tabs"><button class="active" onclick="switchTab('paths',this)">All Paths</button><button onclick="switchTab('skills',this)">Skill Growth</button></div>
      <div id="careerTab"></div>`
  },
  {
    name:"Today",
    html:`<p class="kicker">当前推荐 · 等待路径生成</p><h2 class="title">今天做什么，为什么值得。</h2>
      <p class="sub">不是为了打卡，而是为了积累一条能影响职业推荐、面试表达和简历内容的真实证据。</p>

      <div id="todayTask" class="card dark">
        <p class="kicker" style="color:#d7aa72">今日核心任务</p>
        <h3>等待模型根据当前方向生成。</h3>
        <p class="sub" style="color:#cdbfb1">完成第一页并选择路径后，系统会自动生成任务。</p>
      </div>
      <button class="secondary-action" onclick="generateDailyTask()">重新生成今日任务</button>

      <div id="todayImpact" class="today-impact">
        <span>完成后对你有什么帮助</span>
        <b>等待模型生成行动价值。</b>
        <p>任务会根据当前路径的能力短板动态生成。</p>
      </div>

      <div class="row"><div class="icon">1</div><div class="copy"><b>准备</b><small>等待模型生成</small></div></div>
      <div class="row"><div class="icon">2</div><div class="copy"><b>输出</b><small>等待模型生成</small></div></div>
      <div class="row"><div class="icon">3</div><div class="copy"><b>验证</b><small>等待模型生成</small></div></div>

      <div class="resume-proof">
        <span>如何写进简历</span>
        <code id="resumeBullet">完成任务后，系统会生成可写入简历的成果表述。</code>
        <button onclick="copyResumeBullet()">复制简历表述</button>
        <button onclick="generateResumeBullet()">AI 优化表述</button>
      </div>

      <p class="kicker" style="margin-top:16px">学历 / 课程建议</p>
      <div class="course-card">
        <header><b>银行业务与风险管理</b><small>优先级：高</small></header>
        <p>适合补足银行总行、金融基础设施和理财子路径的业务理解。</p>
        <a href="#" onclick="recommendCourses(event)">查看课程</a>
      </div>
      <div class="course-card">
        <header><b>财务报表分析</b><small>优先级：中</small></header>
        <p>可提升买方、投行、行研和银行相关岗位的共同底层能力。</p>
        <a href="#" onclick="recommendCourses(event)">加入学习计划</a>
      </div>
      <div id="courseAiNote" class="inline-ai-note"></div>
      <div class="course-card">
        <header><b>是否需要继续读研？</b><small>根据画像判断</small></header>
        <p>若目标是量化或金融工程，硕士价值较高；若目标是银行总行或金融基础设施，优质实习与业务证据通常更直接。</p>
      </div>`
  },
  {
    name:"People & Events",
    html:`<p class="kicker">公开 Profile RAG</p><h2 class="title">一次推荐 2-3 个可验证路径的人。</h2>
      <p class="sub">系统会根据当前路径检索公开资料，推荐可验证路径的人、附近活动和推荐文章。</p>
      <div id="peopleSourceNote" class="inline-ai-note">正在准备检索路由...</div>
      <div id="peopleList"></div>
      <div id="profileDetail" class="profile-detail"></div>
      <div id="blogDraft" class="blog-draft"></div>
      <div class="field article-field"><label>推荐文章</label><select id="articleSelect" onchange="renderArticleDetail()"></select></div>
      <div id="articleDetail" class="article-detail"></div>
      <p class="kicker" style="margin-top:16px">附近活动</p>
      <div id="eventsList"></div>`
  },
  {
    name:"Growth",
    html:`<p class="kicker">成长复盘</p><h2 class="title">把每次行动连成方向。</h2>
      <div class="card dark growth-hero"><h3 id="growthDirection">方向生成后展示</h3><p class="sub" style="color:#cdbfb1">时间轴会记录输入、路径判断、今日任务、联系人验证、公开输出和下一次提醒。</p></div>
      <section class="timeline-panel">
        <header><span>成长时间轴</span><b id="timelineCount">0 个事件</b></header>
        <div id="growthTimeline" class="timeline"></div>
      </section>
      <div class="next-event">
        <span>下一个事件提醒</span>
        <b id="nextEventTitle">等待路径生成</b>
        <p id="nextEventReason">完成第一页后，会自动根据前面的路径、任务和输出生成下一次提醒。</p>
      </div>
      <section class="event-ledger"><header><span>事件记录</span><b id="eventLedgerTitle">自动生成</b></header><div id="eventLedger"></div></section>`
  }
];

const nav=document.getElementById('nav');
const screen=document.getElementById('screen');
const bottom=[...document.querySelectorAll('.bottom-nav button')];
let yaw=-8,pitch=7,zoom=1,dragging=false,lastX=0,lastY=0;
let profile={degree:'本科 · 金融',schoolTier:'985 / 强势 211',school:'上海',internship:'券商投行实习 2 段',skills:'Excel、财务建模',preference:'稳定优先'};
let selectedCareerId='bank_hq';
let currentTaskTitle='';
let activeScreenIndex=0;
let selectedProfileId='liran';
let growthEvents=[];
let generatedTaskForCareerId='';
let modelState={
  source:'mock',
  reason:'尚未生成模型推荐。完成第一页后，第二页会按你的背景生成方向。',
  recommendations:[],
  ragEvidence:[]
};

function aiLabel(source){return source==='openai'?'OpenAI API':'本地模拟模型'}
function setBusy(el,text){if(!el)return null;const old=el.textContent;el.disabled=true;el.textContent=text;return old}
function clearBusy(el,old){if(!el)return;el.disabled=false;if(old)el.textContent=old}

function renderList(id,items){document.getElementById(id).innerHTML=items.map(x=>`<div>${x}</div>`).join('')}
function getCareer(id){return CAREERS.find(x=>x.id===id)}
function readFilePayload(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve({
      fileName:file.name,
      mimeType:file.type||'application/octet-stream',
      fileData:reader.result,
      size:file.size
    });
    reader.onerror=()=>reject(reader.error);
    reader.readAsDataURL(file);
  });
}
function visibleCareerIds(){
  const ids=(modelState.recommendations||[]).map(x=>x.careerId);
  return ['origin',...ids].filter((id,index,arr)=>arr.indexOf(id)===index);
}
function visibleCareers(){
  return visibleCareerIds().map(getCareer).filter(Boolean);
}
function buildUserPrompt(){
  const degree=document.getElementById('degree')?.value||profile.degree||'';
  const schoolTier=document.getElementById('schoolTier')?.value||profile.schoolTier||'';
  const school=document.getElementById('school')?.value||profile.school||'';
  const internship=document.getElementById('internship')?.value||profile.internship||'';
  const skills=document.getElementById('skills')?.value||profile.skills||'';
  const preference=document.getElementById('preference')?.value||profile.preference||'';
  const freeBackground=document.getElementById('freeBackground')?.value||profile.freeBackground||'';
return `请作为金融职业路径规划模型，基于以下用户输入生成职业路径推荐、匹配度、RAG 证据和下一步行动：
学历/专业/学校：${degree||'未填写'}
学校层次：${schoolTier||'未填写'}
学校与城市补充：${school||'未填写'}
经历：${internship||'未填写'}
技能：${skills||'未填写'}
偏好：${preference||'未填写'}
补充问题：${freeBackground||'未填写'}
输出需要包含：推荐职业排序、每条路径匹配度、判断依据、风险、可执行任务。`;
}
function updatePromptPreview(){
  const box=document.getElementById('promptPreview');
  if(box) box.textContent=buildUserPrompt();
}
function applyPathOverrides(overrides){
  (overrides||[]).forEach(item=>{
    const career=getCareer(item.id);
    if(!career) return;
    Object.assign(career,item);
  });
}
function inspectCareer(id){
  const c=CAREERS.find(x=>x.id===id);
  selectedCareerId=id;
  document.getElementById('nodeTitle').textContent=c.title;
  document.getElementById('nodeReason').textContent=id==='origin'?'这是由第一页输入生成的职业坐标原点。':`根据你的 ${profile.degree}、${profile.internship||'经历'} 与“${profile.preference}”偏好评估。`;
  document.getElementById('fitScore').textContent=c.fit+'%';
  document.getElementById('salary').textContent=c.salary;
  document.getElementById('development').textContent=c.development;
  document.getElementById('intensity').textContent=c.intensity;
  document.getElementById('stability').textContent=c.stability;
  document.getElementById('market').textContent=c.market;
  renderList('skillsList',c.skills);renderList('prosList',c.pros);renderList('consList',c.cons);
  renderSelectedPathDetail(c);
  const note=document.getElementById('aiCareerNote');
  if(note) note.textContent='点击上方按钮，由 AI 根据你的画像解释这条路径。';
}
function renderSelectedPathDetail(c){
  const box=document.getElementById('pathSelectionDetail');
  if(!box || !c) return;
  const rank=(modelState.recommendations||[]).find(x=>x.careerId===c.id)?.rank;
  const reason=c.id==='origin'
    ? '这是根据第一页输入生成的职业原点。'
    : `基于「${profile.preference}」、经历「${profile.internship||'未填写'}」、技能「${profile.skills||'未填写'}」计算。`;
  box.innerHTML=`
    <div class="detail-head"><span>当前选择</span><b>${c.title}</b></div>
    <div class="fit-meter"><i style="width:${Math.min(100,c.fit)}%"></i></div>
    <div class="selection-grid">
      <div><span>匹配度</span><b>${c.fit}%</b></div>
      <div><span>推荐排序</span><b>${rank?`#${rank}`:(c.id==='origin'?'原点':'未推荐')}</b></div>
      <div><span>薪资</span><b>${c.salary}</b></div>
    </div>
    <p>${reason}</p>
    <small>能力关键词：${c.skills.join(' / ')}</small>`;
}
function renderModelOutput(){
  const reason=document.getElementById('pathModelReason');
  if(reason) reason.textContent=`${modelState.reason}（${aiLabel(modelState.source)}）`;
}
function selectScreen(i){
  activeScreenIndex=i;
  screen.classList.add('swap');
  setTimeout(()=>{
    screen.innerHTML=screens[i].html;
    [...nav.querySelectorAll('button')].forEach((b,n)=>b.classList.toggle('active',n===i));
    bottom.forEach((b,n)=>b.classList.toggle('active',n===i));
    screen.classList.remove('swap');
    if(i===0)initUpload();
    if(i===1){renderModelOutput();renderPaths();}
    if(i===2){hydrateTodayContext();maybeGenerateDailyTask();}
    if(i===3)renderPeople();
    if(i===4)renderGrowth();
  },130);
}
screens.forEach((s,i)=>{const b=document.createElement('button');b.textContent=`${i+1}. ${s.name}`;b.onclick=()=>selectScreen(i);nav.appendChild(b)});
bottom.forEach((b,i)=>b.onclick=()=>selectScreen(i));

function initUpload(){
  const input=document.getElementById('resumeInput');
  ['degree','schoolTier','school','internship','skills','preference','freeBackground'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.oninput=updatePromptPreview;
  });
  updatePromptPreview();
  input.onchange=async()=>{
    const box=document.getElementById('parseResult');
    box.style.display='block';
    box.textContent='正在上传给后端解析简历...';
    const file=input.files?.[0];
    if(!file){box.textContent='没有选择文件。';return}
    const payload=file.type==='text/plain'
      ? {fileName:file.name,mimeType:file.type,text:await file.text(),size:file.size}
      : await readFilePayload(file);
    const result=await NorthAI.request('parse_resume',payload);
    box.textContent=`${result.data.summary}（${aiLabel(result.source)}${result.source==='mock'?' · 演示回退，未真实解析文件':''}）`;
    if(result.data.profilePatch?.internship) document.getElementById('internship').value=result.data.profilePatch.internship;
    if(result.data.profilePatch?.skills) document.getElementById('skills').value=result.data.profilePatch.skills;
    updatePromptPreview();
  };
}
async function buildOrigin(){
  const btn=document.getElementById('originBtn');
  const old=setBusy(btn,'AI 生成中...');
  profile={
    degree:document.getElementById('degree').value,
    schoolTier:document.getElementById('schoolTier').value,
    school:document.getElementById('school').value,
    internship:document.getElementById('internship').value,
    skills:document.getElementById('skills').value,
    preference:document.getElementById('preference').value,
    freeBackground:document.getElementById('freeBackground').value,
    prompt:buildUserPrompt()
  };
  const result=await NorthAI.request('generate_origin',profile);
  applyPathOverrides(result.data.pathOverrides);
  Object.entries(result.data.fitAdjustments||{}).forEach(([id,fit])=>{
    const career=CAREERS.find(x=>x.id===id);
    if(career) career.fit=fit;
  });
  modelState={
    source:result.source,
    reason:result.data.reason,
    recommendations:result.data.recommendations||[],
    ragEvidence:result.data.ragEvidence||[],
    prompt:profile.prompt,
    answer:result.data.answer||''
  };
  growthEvents=[
    {date:'Step 1',title:'生成职业原点',direction:'画像输入',detail:`${profile.degree||'开放背景'} · ${profile.schoolTier||'学校层次待判断'} · ${profile.preference}`},
    {date:'Step 2',title:'模型生成路径坐标',direction:'方向判断',detail:result.data.reason||'模型已生成第一组路径。'}
  ];
  selectedCareerId=result.data.selectedTarget||modelState.recommendations[0]?.careerId||'bank_hq';
  document.getElementById('profileSummary').textContent=result.data.summary||`${profile.degree} · ${profile.school} · ${profile.preference}`;
  const note=document.getElementById('originAiNote');
  if(note) note.textContent=`${result.data.reason}（${aiLabel(result.source)}）`;
  clearBusy(btn,old);
  selectScreen(1);
}

function switchTab(tab,btn){
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  if(tab==='paths')renderPaths();else renderSkills();
}
function renderSkills(){
  const careers=visibleCareers().filter(x=>x.id!=='origin');
  const skills=[...new Set(careers.flatMap(c=>c.skills||[]))].slice(0,6);
  document.getElementById('careerTab').innerHTML=`
    <p class="sub">Skill Growth 根据模型生成的路径实时聚合。</p>
    ${skills.length?skills.map((skill,i)=>{
      const value=Math.max(24,Math.min(86,72-i*7));
      return `<div class="skill-card"><header><b>${skill}</b><small>${value}%</small></header><div class="progress"><i style="width:${value}%"></i></div></div>`;
    }).join(''):'<div class="inline-ai-note">先完成第一页，模型会生成需要补足的能力。</div>'}`;
}
function renderPaths(){
  document.getElementById('careerTab').innerHTML=`
    <div class="path-tree"><div id="pathViewport" class="path-viewport">
      <button class="expand-map" onclick="togglePathMax()">最大化</button>
      <div class="sphere s1"></div><div class="sphere s2"></div><div class="sphere s3"></div>
      <div class="sphere-label lx">X 收入/机会</div><div class="sphere-label ly">Y 稳定/平台</div><div class="sphere-label lz">Z 专业壁垒</div>
      <svg id="treeLines" class="tree-lines"></svg><div id="treeScene" class="tree-scene"></div>
    </div><div class="path-hint">拖动旋转 · 滚轮缩放 · 点击任一职业节点</div></div>
    <div id="pathSelectionDetail" class="path-selection-detail"></div>`;
  initTree();inspectCareer(selectedCareerId||'bank_hq');
}

function togglePathMax(){
  document.querySelector('.path-tree')?.classList.toggle('maximized');
}

async function generateDailyTask(){
  const career=CAREERS.find(x=>x.id===selectedCareerId)||CAREERS.find(x=>x.id==='bank_hq');
  const result=await NorthAI.request('generate_daily_task',{profile,target:career.title});
  const task=result.data;
  currentTaskTitle=task.title;
  generatedTaskForCareerId=career.id;
  document.getElementById('todayTask').innerHTML=`
    <p class="kicker" style="color:#d7aa72">今日核心任务 · ${task.duration}</p>
    <h3>${task.title}</h3>
    <p class="sub" style="color:#cdbfb1">${task.description}</p>
    <small class="ai-source">${aiLabel(result.source)}</small>`;
  document.getElementById('todayImpact').innerHTML=`
    <span>完成后对你有什么帮助</span>
    <b>${task.impact}</b>
    <p>系统会为「${task.skillTags.join('、')}」增加证据点，并更新 ${career.title} 的推荐解释。</p>`;
  document.querySelectorAll('.row').forEach((row,i)=>{
    const step=task.steps[i];
    if(step) row.querySelector('small').textContent=step;
  });
  if(!growthEvents.some(e=>e.title===task.title)){
    growthEvents.push({date:`Step ${growthEvents.length+1}`,title:task.title,direction:'今日任务',detail:task.impact});
  }
}

function maybeGenerateDailyTask(){
  if(!modelState.recommendations.length) return;
  if(generatedTaskForCareerId===selectedCareerId) return;
  generateDailyTask();
}

function hydrateTodayContext(){
  const c=getCareer(selectedCareerId)||getCareer('bank_hq');
  const kicker=document.querySelector('#screen > .kicker');
  if(kicker) kicker.textContent=`当前推荐 · ${c.title}`;
}

async function generateResumeBullet(){
  const result=await NorthAI.request('generate_resume_bullet',{profile,task:currentTaskTitle});
  document.getElementById('resumeBullet').textContent=result.data.bullet;
}

async function recommendCourses(event){
  event.preventDefault();
  const note=document.getElementById('courseAiNote');
  if(note) note.textContent='AI 正在生成课程建议...';
  const result=await NorthAI.request('recommend_courses',{profile});
  if(note) note.textContent=`推荐课程：${result.data.courses.join('、')}。${result.data.reason}（${aiLabel(result.source)}）`;
}

async function renderPeople(){
  const list=document.getElementById('peopleList');
  if(!list) return;
  const note=document.getElementById('peopleSourceNote');
  const c=getCareer(selectedCareerId)||getCareer('bank_hq');
  if(note) note.textContent=`正在检索与「${c.title}」相关的公开人物、附近活动和推荐文章...`;
  list.innerHTML='<div class="inline-ai-note">检索中...</div>';
  try{
    const result=await NorthAI.request('recommend_people_events',{profile,career:c,city:profile.school||'上海'});
    dynamicProfiles=(result.data.people||[]).slice(0,3).map((p,i)=>({
      id:p.id||`person_${i}`,
      name:p.name||'公开资料人物',
      role:p.role||c.title,
      fit:p.fit||'路径验证',
      sources:p.sources||[],
      summary:p.summary||'根据公开资料和当前路径生成的推荐对象。',
      email:p.email||`你好，我正在验证「${c.title}」路径，希望请教你的公开经历和入门建议。`
    }));
    dynamicArticles=(result.data.articles||[]).map((a,i)=>({
      id:a.id||`article_${i}`,
      title:a.title,
      tag:a.tag||'推荐阅读',
      summary:a.summary||''
    }));
    dynamicEvents=(result.data.events||[]).slice(0,4);
    selectedProfileId=dynamicProfiles[0]?.id||selectedProfileId;
    if(note) note.textContent=result.source==='mock'
      ? '本地静态 demo 无法调用真实检索 API。部署到 Vercel 并配置 OPENAI_API_KEY 后，这里会显示模型联网检索结果。'
      : `推荐来源：${aiLabel(result.source)} · 已根据当前路径进行联网检索`;
  }catch(error){
    dynamicProfiles=[];
    dynamicArticles=[];
    dynamicEvents=[];
    if(note) note.textContent='真实检索 API 暂不可用。部署到 Vercel 并配置 OPENAI_API_KEY 后再试。';
  }
  const articleSelect=document.getElementById('articleSelect');
  if(articleSelect){
    articleSelect.innerHTML=dynamicArticles.map(a=>`<option value="${a.id}">${a.tag} · ${a.title}</option>`).join('');
  }
  const recommended=dynamicProfiles.slice(0,3);
  list.innerHTML=recommended.length ? recommended.map(p=>`
    <button class="person-card ${p.id===selectedProfileId?'active':''}" onclick="openProfile('${p.id}')">
      <span>${p.fit}</span><b>${p.name} · ${p.role}</b>
      <small>${p.summary}</small>
    </button>`).join('') : '<div class="inline-ai-note">等待真实 API 返回人物推荐。这里不会再展示预装填人物。</div>';
  if(recommended.length) openProfile(selectedProfileId||recommended[0].id);
  else {
    const detail=document.getElementById('profileDetail');
    if(detail) detail.innerHTML='';
  }
  renderArticleDetail();
  renderEvents();
}

function renderArticleDetail(){
  const id=document.getElementById('articleSelect')?.value||dynamicArticles[0]?.id;
  const article=dynamicArticles.find(x=>x.id===id)||dynamicArticles[0];
  const box=document.getElementById('articleDetail');
  if(!box) return;
  if(!article){
    box.innerHTML='<div class="inline-ai-note">等待真实 API 返回推荐文章。这里不会再展示预装填文章。</div>';
    return;
  }
  box.innerHTML=`<span>${article.tag}</span><b>${article.title}</b><p>${article.summary}</p><button onclick="askCoachAboutArticle('${article.id}')">让 AI 结合当前路径解释</button>`;
}

function askCoachAboutArticle(id){
  const article=dynamicArticles.find(x=>x.id===id);
  if(!article) return;
  document.getElementById('coachBubble')?.classList.add('open');
  appendCoach('user',`请结合我的当前路径解释这篇文章：${article.title}`);
  appendCoach('assistant',`这篇「${article.title}」适合用于补足当前路径判断。你可以先读它来形成 3 个问题，再去 Profile 页联系人那里验证。它对应的能力证据是：路径理解、问题质量和公开输出。`);
}

function openProfile(id){
  selectedProfileId=id;
  document.querySelectorAll('.person-card').forEach(card=>card.classList.remove('active'));
  const p=dynamicProfiles.find(x=>x.id===id)||dynamicProfiles[0];
  const detail=document.getElementById('profileDetail');
  if(!detail) return;
  if(!p){detail.innerHTML='';return}
  detail.innerHTML=`
    <div class="profile-head"><span>公开信息集合</span><b>${p.name}</b><small>${p.role}</small></div>
    <p>${p.summary}</p>
    <div class="source-tags">${p.sources.map(x=>`<i>${x}</i>`).join('')}</div>
    <div class="email-share">
      <span>你准备分享的职业请教内容</span>
      <textarea id="sharedEmail" rows="4">${p.email}</textarea>
      <button onclick="generateBlogFromEmail()">一键生成 Blog</button>
    </div>`;
}

async function generateBlogFromEmail(){
  const email=document.getElementById('sharedEmail')?.value||'';
  const p=dynamicProfiles.find(x=>x.id===selectedProfileId)||dynamicProfiles[0];
  if(!p) return;
  const draft=document.getElementById('blogDraft');
  if(draft) draft.innerHTML='<p>AI 正在把邮件内容整理成 Blog...</p>';
  const result=await NorthAI.request('generate_blog_from_email',{profile,person:p,email});
  if(draft) draft.innerHTML=`<span>Blog 草稿（${aiLabel(result.source)}）</span><h3>${result.data.title}</h3><p>${result.data.body}</p>`;
  growthEvents.push({date:'Day 3',title:'将职业请教内容整理成 Blog',direction:'公开输出',detail:result.data.title});
}

function renderEvents(){
  const box=document.getElementById('eventsList');
  if(!box) return;
  if(!dynamicEvents.length){
    box.innerHTML='<div class="inline-ai-note">等待真实 API 返回附近活动。这里不会再展示预装填活动。</div>';
    return;
  }
  box.innerHTML=dynamicEvents.map(e=>`
    <div class="event-card">
      <div class="event-date">${e.date||'近期'}</div>
      <div><b>${e.title}</b><small>${e.location||''}${e.source?` · ${e.source}`:''}</small></div>
    </div>`).join('');
}

function renderGrowth(){
  const c=getCareer(selectedCareerId)||getCareer('bank_hq');
  const title=document.getElementById('growthDirection');
  if(title) title.textContent=modelState.recommendations.length
    ? `方向：${c.title} · 下一步补足「${c.skills[0]}」`
    : '方向：等待第一页输入生成';
  const last=growthEvents[growthEvents.length-1];
  const nextTitle=document.getElementById('nextEventTitle');
  const nextReason=document.getElementById('nextEventReason');
  if(nextTitle) nextTitle.textContent=modelState.recommendations.length
    ? `明天 20:30 · 围绕「${c.skills[0]}」完成一次路径验证`
    : '完成第一页后自动安排';
  if(nextReason) nextReason.textContent=modelState.recommendations.length
    ? (last ? `承接上一事件「${last.title}」，把内容转化为一次可记录的行动。` : `根据当前方向自动生成，无需手动点击。`)
    : '当前还没有职业路径输入，时间轴会在生成路径后开始记录。';
  const count=document.getElementById('timelineCount');
  if(count) count.textContent=`${growthEvents.length} 个事件`;
  const box=document.getElementById('growthTimeline');
  if(box) box.innerHTML=growthEvents.length
    ? growthEvents.map((e,index)=>`<article>
        <time>${e.date}</time>
        <i>${index+1}</i>
        <div><b>${e.title}</b><span>${e.direction}</span><p>${e.detail}</p></div>
      </article>`).join('')
    : '<div class="timeline-empty">完成第一页生成路径后，这里会出现第一个时间轴节点。</div>';
  const ledger=document.getElementById('eventLedger');
  if(ledger) ledger.innerHTML=growthEvents.length
    ? growthEvents.map(e=>`<div class="ledger-row"><span>${e.date}</span><b>${e.title}</b><small>${e.direction}</small></div>`).join('')
    : '<div class="ledger-row muted-row"><span>等待</span><b>暂无事件</b><small>先生成职业路径</small></div>';
}

async function explainSelectedCareer(){
  const c=CAREERS.find(x=>x.id===selectedCareerId);
  const note=document.getElementById('aiCareerNote');
  if(note) note.textContent='AI 正在生成路径解释...';
  const result=await NorthAI.request('explain_career',{profile,career:c});
  if(note) note.textContent=`${result.data.note}（${aiLabel(result.source)}）`;
}

function toggleCoach(){
  document.getElementById('coachBubble')?.classList.toggle('open');
}

function appendCoach(role,text){
  const box=document.getElementById('coachMessages');
  if(!box) return;
  const p=document.createElement('p');
  p.className=role;
  p.textContent=text;
  box.appendChild(p);
  box.scrollTop=box.scrollHeight;
}

async function sendCoachMessage(event){
  event.preventDefault();
  const input=document.getElementById('coachInput');
  const question=input.value.trim();
  if(!question) return;
  input.value='';
  appendCoach('user',question);
  appendCoach('assistant','正在结合当前页面生成回答...');
  const answers=document.querySelectorAll('#coachMessages .assistant');
  const pending=answers[answers.length-1];
  const result=await NorthAI.request('coach_chat',{
    question,
    profile,
    pageName:screens[activeScreenIndex]?.name,
    selectedCareer:getCareer(selectedCareerId),
    modelState
  });
  pending.textContent=`${result.data.answer}（${aiLabel(result.source)}）`;
}
function initTree(){
  const vp=document.getElementById('pathViewport'),scene=document.getElementById('treeScene'),lines=document.getElementById('treeLines');
  const els=new Map();
  const nodes=visibleCareers();
  nodes.forEach(n=>{
    const el=document.createElement('button');el.className='career-node';
    if((modelState.recommendations||[]).some(x=>x.careerId===n.id)) el.classList.add('recommended-node');
    if(n.id===selectedCareerId) el.classList.add('selected-node');
    const star=n.kind==='origin'?'origin':(n.kind==='recommended'?'big':'');
    el.innerHTML=`<i class="star ${star}"></i><b>${n.title}</b><small>${n.fit}% · ${n.salary}</small>`;
    el.onclick=e=>{e.stopPropagation();inspectCareer(n.id);document.querySelectorAll('.career-node').forEach(x=>x.classList.remove('selected-node'));el.classList.add('selected-node')};scene.appendChild(el);els.set(n.id,el);
  });
  function project(n){
    const ry=yaw*Math.PI/180,rx=pitch*Math.PI/180;
    let x=n.x,y=n.y,z=n.z;
    const x1=x*Math.cos(ry)+z*Math.sin(ry),z1=-x*Math.sin(ry)+z*Math.cos(ry);
    const y1=y*Math.cos(rx)-z1*Math.sin(rx),z2=y*Math.sin(rx)+z1*Math.cos(rx);
    const k=760/(760-z2);
    return {x:vp.clientWidth/2+x1*k*zoom,y:vp.clientHeight/2+y1*k*zoom,s:Math.max(.68,Math.min(1.3,k*zoom)),z:z2};
  }
  function render(){
    const pts=new Map();
    nodes.forEach(n=>{const p=project(n);pts.set(n.id,p);const el=els.get(n.id);el.style.left=p.x+'px';el.style.top=p.y+'px';el.style.transform=`translate(-50%,-50%) scale(${p.s})`;el.style.zIndex=Math.round(1000+p.z)});
    lines.setAttribute('viewBox',`0 0 ${vp.clientWidth} ${vp.clientHeight}`);lines.innerHTML='';
    nodes.filter(n=>n.id!=='origin').forEach(n=>{const p1=pts.get('origin'),p2=pts.get(n.id);if(!p1||!p2)return;const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',p1.x);l.setAttribute('y1',p1.y);l.setAttribute('x2',p2.x);l.setAttribute('y2',p2.y);l.classList.add('recommended');lines.appendChild(l)});
  }
  vp.onpointerdown=e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;vp.classList.add('dragging');vp.setPointerCapture(e.pointerId)};
  vp.onpointermove=e=>{if(!dragging)return;yaw+=(e.clientX-lastX)*.23;pitch-=(e.clientY-lastY)*.18;pitch=Math.max(-48,Math.min(48,pitch));lastX=e.clientX;lastY=e.clientY;render()};
  vp.onpointerup=()=>{dragging=false;vp.classList.remove('dragging')};
  vp.onwheel=e=>{e.preventDefault();zoom+=e.deltaY>0?-.055:.055;zoom=Math.max(.75,Math.min(1.35,zoom));render()};
  render();
}
selectScreen(0);inspectCareer('bank_hq');


function copyResumeBullet(){
  const text=document.getElementById('resumeBullet')?.textContent||'';
  if(navigator.clipboard){
    navigator.clipboard.writeText(text);
  }
  const btn=event?.target;
  if(btn){
    const old=btn.textContent;
    btn.textContent='已复制';
    setTimeout(()=>btn.textContent=old,1200);
  }
}

const splash=document.getElementById('splash');
const enter=document.getElementById('enterApp');
if(enter){
  enter.onclick=()=>splash.classList.add('hidden');
}
setTimeout(()=>{ if(splash) splash.classList.add('hidden'); },5000);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
