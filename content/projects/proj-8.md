---
layout: post
title: 'UrbanRhythm'
title_zh: 'UrbanRhythm · 城市文化活动智能索引'
thumbnail: /images/projects/proj-8/thumbnail.png
tagline: 'A multi-agent AI pipeline that autonomously discovers, scrapes, judges, and semantically indexes cultural events across any US city.'
tagline_zh: '多智能体AI管线，自主发现、抓取、评判并语义索引美国城市文化活动，费城案例覆盖40+场馆、253项活动。'
group: AI
skills: [LangGraph, Claude API, GPT-4o-mini, FastAPI, SQLite, React, OpenStreetMap]
---

UrbanRhythm is a multi-agent AI pipeline that autonomously discovers, scrapes, judges, and semantically indexes cultural events across any US city. A Philadelphia case study indexed **253 events from 40+ venues** — libraries, museums, and galleries — at a cost of ~$0.75 per city run, with no hardcoded scraping logic.

**Architecture**

The system runs on a LangGraph StateGraph DAG with a Send API for parallel fan-out, processing up to 8 venues simultaneously.

**Agent 1 — City Resolver:** Converts free-text city input ("Austin TX") into structured coordinates via Nominatim, selecting the most populous match for ambiguous names.

**Agent 2 — Venue Discovery:** Queries OpenStreetMap Overpass API within a 30km radius to return libraries, museums, galleries, and arts centres — with name, address, website URL, OSM ID, and venue type. An Austin TX run returned 87 venues.

**Agent 3 — Scraper (2-Path ReAct):** Each venue runs through a cost-prioritized cascade:
- *Path A (Fast / GPT-4o-mini):* 8-tool ReAct loop — tries iCal feed detection, JSON-LD extraction, `/events` path navigation, Jina Reader HTML-to-markdown conversion, and Tavily web search as last resort. 30s timeout, 3–5s processing. 60–70% success rate.
- *Path B (Thorough):* Triggered when Path A finds fewer than 3 events. Three sequential sub-agents — Navigator reads the homepage and produces a `SiteProfile` (CMS type, depth, 5 candidate event links); Strategy Agent ranks targets; Extractor runs 3 parallel mini-ReAct workers with 4-call limits each. 90s timeout, 8–15s, 80–90% success rate.

**Agent 4 — Playbook Store:** A cross-run SQLite memory system keyed by domain. Records successful extraction strategy, CMS type, success/failure counts, and timestamps. On repeat runs, venue scraping skips trial-and-error by looking up known strategies — exact domain match → CMS pattern match → default fallback.

**Agent 5 — Judge:** Rule-based scoring applied to every event: valid future date (+0.35), meaningful title (+0.25), location info (+0.20), description or URL (+0.20). Score ≥ 0.65 → accept; 0.40–0.64 → escalated to Claude 3.5 Sonnet for final verdict; < 0.40 → reject. Roughly 50 borderline events per city run reach Sonnet, reducing inference cost ~4×.

**Agent 6 — Knowledge Graph:** Post-processing semantic layer. Generates weighted venue tags (jazz, children, film, history), extracts entity names (artists, exhibition titles, recurring series), and computes venue-to-venue cosine similarity scores stored in SQLite for recommendation queries.

**Interface**

A 4-layer React dashboard served via FastAPI with real-time SSE streaming: **Venues** (query 200+ venues by city and type), **Scheduler** (launch scraping jobs with live per-venue progress traces and cancel support), **Events** (browse accepted events filterable by verdict, date, and text search), and **Knowledge Graph** (browse by tag, search entities, discover similar venues by programming profile).

[View Live Project →](https://lluluciano0505.github.io/UrbanRhythm/)
[View on GitHub →](https://github.com/lluluciano0505/UrbanRhythm)

**Tools:** LangGraph · Claude 3.5 Sonnet · GPT-4o-mini · OpenStreetMap · Jina Reader · Tavily · FastAPI · SQLite · React · Vite

<!-- zh -->

UrbanRhythm 是一套多智能体 AI 管线，可自主发现、抓取、评判并语义索引任意美国城市的文化活动。以费城为案例，系统覆盖图书馆、博物馆、艺廊等 **40余家场馆，共索引253项活动**，每次城市运行成本约 $0.75，全程无需任何硬编码抓取逻辑。

**系统架构**

系统基于 LangGraph StateGraph DAG，通过 Send API 实现并行扇出，最多同时处理8个场馆。

**智能体 1 — 城市解析器：** 将自由文本输入（如 "Austin TX"）通过 Nominatim 转化为结构化坐标，模糊地名取人口最多的匹配项。

**智能体 2 — 场馆发现：** 在30km半径内查询 OpenStreetMap Overpass API，返回图书馆、博物馆、艺廊和艺术中心的名称、地址、网站URL、OSM ID 和场馆类型。Austin TX 案例共发现87家场馆。

**智能体 3 — 抓取器（双路 ReAct）：** 每个场馆按成本优先顺序依次尝试两条路径：
- *路径 A（快速 / GPT-4o-mini）：* 8工具 ReAct 循环——依次尝试 iCal 订阅源检测、JSON-LD 抽取、`/events` 路径导航、Jina Reader HTML 转 Markdown，最终以 Tavily 网页搜索兜底。超时30秒，耗时3–5秒，成功率60–70%。
- *路径 B（精细抓取）：* 当路径A找到不足3个活动时触发。三个串联子智能体——Navigator 读取主页并生成 `SiteProfile`（CMS类型、页面深度、5个候选活动链接）；Strategy Agent 对目标链接排序；Extractor 用3个并行mini-ReAct worker（每个最多4次调用）执行抽取。超时90秒，耗时8–15秒，成功率80–90%。

**智能体 4 — Playbook 记忆库：** 以域名为键的跨次运行 SQLite 记忆系统。记录每个场馆成功的抓取策略、CMS类型、成/失败次数及时间戳。重复运行时直接查表跳过试错——精确域名匹配 → CMS模式匹配 → 默认回退，大幅降低重复成本。

**智能体 5 — 裁判：** 对每条活动进行规则评分：有效未来日期（+0.35）、有意义的标题（+0.25）、包含地点信息（+0.20）、有描述或链接（+0.20）。得分 ≥ 0.65 → 接受；0.40–0.64 → 升级至 Claude 3.5 Sonnet 裁定；< 0.40 → 拒绝。每次城市运行约50条边界活动会进入 Sonnet，推理成本降低约4倍。

**智能体 6 — 知识图谱：** 后处理语义层。生成加权场馆标签（爵士、儿童、电影、历史），提取实体名称（艺术家、展览标题、常设系列），并将基于余弦相似度的场馆相似度评分存入 SQLite，用于推荐查询。

**界面**

基于 FastAPI + 实时 SSE 流式传输的四层 React 仪表板：**Venues**（按城市和类型查询200+场馆）、**Scheduler**（启动抓取任务，实时显示每个场馆的进度轨迹，支持中途取消）、**Events**（按裁定结果、日期和关键词筛选浏览活动）、**Knowledge Graph**（按标签浏览、搜索实体、通过活动类型画像发现相似场馆）。

[查看线上项目 →](https://lluluciano0505.github.io/UrbanRhythm/)
[在 GitHub 上查看 →](https://github.com/lluluciano0505/UrbanRhythm)

**工具：** LangGraph · Claude 3.5 Sonnet · GPT-4o-mini · OpenStreetMap · Jina Reader · Tavily · FastAPI · SQLite · React · Vite
