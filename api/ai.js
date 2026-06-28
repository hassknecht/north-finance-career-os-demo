const MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

function buildPrompt(action, payload) {
  const today = new Date().toISOString().slice(0, 10);
  const extra = action === "recommend_people_events"
    ? `
检索要求：
- 使用公开网页信息推荐 2-3 个与当前职业路径相关的人，优先校友、公开活动嘉宾、作者、项目负责人、公开主页可验证的人。
- 推荐 2-4 个近期或常设的公开活动/社区/讲座/报名页，优先匹配 payload.city 和 payload.career.title。
- 推荐 2-3 篇公开文章或官方资料。
- 不要编造姓名、头衔、活动或来源。找不到可靠结果时，对应数组返回 []。
- sources 字段写公开来源名称或 URL 摘要；summary 必须说明为什么与当前用户路径相关。
- 今天日期是 ${today}，不要推荐明显过期且不可复用的活动。
`
    : "";
  return `你是 North Finance Career OS 的职业规划 AI。请根据 action 和 payload 返回严格 JSON，不要 Markdown。

action: ${action}
payload: ${JSON.stringify(payload)}
${extra}

返回字段约定：
- parse_resume: { "summary": string, "profilePatch": { "internship": string, "skills": string } }
- generate_origin: { "summary": string, "reason": string, "answer": string, "selectedTarget": string, "recommendations": [{ "careerId": string, "fit": number, "rank": number }], "fitAdjustments": object, "ragEvidence": string[] }
- generate_daily_task: { "title": string, "duration": string, "description": string, "impact": string, "steps": string[], "skillTags": string[] }
- generate_resume_bullet: { "bullet": string }
- explain_career: { "note": string }
- recommend_courses: { "courses": string[], "reason": string }
- recommend_people_events: { "people": [{ "id": string, "name": string, "role": string, "fit": string, "sources": string[], "summary": string, "email": string }], "events": [{ "date": string, "title": string, "location": string, "source": string }], "articles": [{ "id": string, "title": string, "tag": string, "summary": string }] }
- coach_chat: { "answer": string }
- generate_blog_from_email: { "title": string, "body": string }
- generate_next_event: { "title": string, "reason": string }`;
}

function extractText(result) {
  if (result.output_text) return result.output_text;
  const chunks = [];
  for (const item of result.output || []) {
    for (const content of item.content || []) {
      if (content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw error;
    return JSON.parse(match[0]);
  }
}

function buildInput(action, payload) {
  const prompt = buildPrompt(action, payload);
  if (action === "parse_resume" && payload?.fileData) {
    return [{
      role: "user",
      content: [
        { type: "input_text", text: prompt },
        { type: "input_file", filename: payload.fileName || "resume", file_data: payload.fileData }
      ]
    }];
  }
  return prompt;
}

function buildTools(action) {
  if (action === "recommend_people_events") {
    return [{ type: "web_search_preview" }];
  }
  return undefined;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).json({});
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: "OPENAI_API_KEY is not configured" });

  try {
    const { action, payload } = req.body || {};
    const requestBody = {
      model: MODEL,
      input: buildInput(action, payload || {})
    };
    const tools = buildTools(action);
    if (tools) requestBody.tools = tools;
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) return res.status(response.status).json({ error: await response.text() });

    const result = await response.json();
    const text = extractText(result);
    return res.status(200).json(parseJson(text));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
