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

UrbanRhythm is a multi-agent AI pipeline that autonomously discovers, scrapes, judges, and semantically indexes cultural events across any US city. A Philadelphia case study indexed **253 events from 40+ venues** — libraries, museums, and galleries — without any hardcoded scraping logic.

**Agent Pipeline**

The system runs on a LangGraph orchestration layer with a ReAct agent pattern:

**Stage 1 — Venue Discovery:** OpenStreetMap Overpass API identifies cultural venues by type and geography, returning structured venue metadata.

**Stage 2 — Parallel Event Extraction:** Each venue is processed in parallel fan-out. An iCal → JSON-LD → LLM extraction pipeline converts any event format into structured data. Claude 3.5 Sonnet and GPT-4o-mini handle extraction and evaluation tasks.

**Stage 3 — AI Judge:** A scoring agent evaluates each scraped event for quality and relevance, accepting or flagging entries before they enter the archive.

**Stage 4 — Semantic Index:** Accepted events are stored in SQLite via FastAPI and surfaced in a React/Vite dashboard — filterable by date, grouped by venue, and fully searchable.

[View Live Project →](https://lluluciano0505.github.io/UrbanRhythm/)
[View on GitHub →](https://github.com/lluluciano0505/UrbanRhythm)

**Tools:** LangGraph · Claude 3.5 Sonnet · GPT-4o-mini · OpenStreetMap · FastAPI · SQLite · React · Vite

<!-- zh -->

UrbanRhythm 是一套多智能体 AI 管线，可自主发现、抓取、评判并语义索引任意美国城市的文化活动。以费城为案例，系统覆盖图书馆、博物馆、艺廊等 **40余家场馆，共索引253项活动**，全程无需任何硬编码抓取逻辑。

**智能体管线**

系统基于 LangGraph 编排层，采用 ReAct 智能体模式：

**第一阶段 — 场馆发现：** 通过 OpenStreetMap Overpass API 按类型与地理位置识别文化场馆，返回结构化场馆元数据。

**第二阶段 — 并行活动抽取：** 对所有场馆并行扇出处理。iCal → JSON-LD → LLM 抽取管线将任意活动格式转化为结构化数据；Claude 3.5 Sonnet 与 GPT-4o-mini 分别负责抽取与评估任务。

**第三阶段 — AI 裁判：** 评分智能体对每条抓取结果进行质量与相关性评判，合格后方可进入归档库。

**第四阶段 — 语义索引：** 通过 FastAPI 写入 SQLite，并在 React/Vite 仪表板中呈现——支持按日期筛选、按场馆分组与全文检索。

[查看线上项目 →](https://lluluciano0505.github.io/UrbanRhythm/)
[在 GitHub 上查看 →](https://github.com/lluluciano0505/UrbanRhythm)

**工具：** LangGraph · Claude 3.5 Sonnet · GPT-4o-mini · OpenStreetMap · FastAPI · SQLite · React · Vite
