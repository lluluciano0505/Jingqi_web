---
layout: post
title: 'Philly Cultural Radar'
title_zh: '费城文化雷达'
thumbnail: /images/projects/proj-8/thumbnail.png
tagline: 'A 3-layer AI pipeline that autonomously discovers, scrapes, and archives events from Philadelphia libraries and museums.'
tagline_zh: '三层AI流水线，自动发现、抓取并归档费城图书馆与博物馆的文化活动。'
group: AI
skills: [React, Anthropic Claude API, Web Search, Vite, JavaScript]
---

Philly Cultural Radar is an agentic web application that automates the discovery and archiving of cultural events across Philadelphia's libraries and museums. The system runs a three-layer pipeline: geographic venue mapping, AI-powered event scraping, and structured data archiving — all triggered from a single interface.

**Layer 1 — Venue Map:** An interactive map renders all participating Philadelphia venues with type, address, and status metadata.

**Layer 2 — AI Scraping:** Each venue is passed to Claude (claude-sonnet-4-5) with a web search tool. The model autonomously navigates the venue's event pages, extracts upcoming events, and returns structured JSON — no hardcoded scraping logic.

**Layer 3 — Archive Table:** Scraped events are collected into a filterable, searchable table with title, date, venue, and category fields.

The pipeline replaces brittle rule-based scrapers with an LLM that can handle any venue website layout. Adding a new venue requires only a single entry in the data file.

[View on GitHub →](https://github.com/lluluciano0505/UrbanRhythm)

<!-- zh -->

Philly Cultural Radar 是一个智能体网页应用，自动化发现和归档费城图书馆与博物馆的文化活动。系统运行三层流水线：地理场馆映射、AI驱动的活动抓取，以及结构化数据归档——全部通过单一界面触发。

**第一层 — 场馆地图：** 交互式地图渲染所有参与的费城场馆，附带类型、地址和状态元数据。

**第二层 — AI抓取：** 每个场馆被传递给 Claude（claude-sonnet-4-5）并配备网络搜索工具。模型自主导航场馆活动页面，提取即将举办的活动，并返回结构化 JSON——无需硬编码任何抓取逻辑。

**第三层 — 归档表格：** 抓取的活动汇集到一个可筛选、可搜索的表格中，包含标题、日期、场馆和类别字段。

该流水线以能适应任意场馆网站布局的 LLM 取代了脆弱的基于规则的爬虫。新增场馆只需在数据文件中添加一条记录。

[在 GitHub 上查看 →](https://github.com/lluluciano0505/UrbanRhythm)
