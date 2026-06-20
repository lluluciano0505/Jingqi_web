---
layout: post
title: 'DataTaxonomy: AI Classification Pipeline for Architectural Project Archives'
title_zh: 'DataTaxonomy：建筑档案AI分类流水线'
thumbnail: /assets/img/projects/proj-5/DataTaxonomy.png
tagline: 'Design offices drown in files nobody can find. DataTaxonomy turns a raw archive into a structured, searchable metadata catalogue — automatically.'
tagline_zh: '设计事务所深陷无人能找到的文件泥沼。DataTaxonomy将原始档案自动转化为结构化、可检索的元数据目录。'
group: AI
categories: [AI, LLM, Architecture, Data Infrastructure]
skills: [Python, OpenRouter API, Vision Models, Streamlit, Plotly, pandas, concurrent.futures]
---

DataTaxonomy is an AI-powered classification pipeline built for architectural and urban design practices. It takes a raw project file archive — thousands of PDFs, drawings, spreadsheets, models, and images accumulated across years of work — and transforms it into a structured, searchable metadata catalogue.

The core problem it solves is one every design office faces: project knowledge is buried. Files sit in folders organised by date or discipline, with names that made sense to whoever created them and to nobody else. When a new project starts, or a team inherits an archive mid-delivery, the cost of locating the right information is enormous. DataTaxonomy makes that knowledge legible.

**The pipeline runs in two phases across four layers.**

**Phase 1 — Parallel (Layer 1 + 2)**

**Layer 1 — Technical Extraction**
Deterministic (no LLM except one routing call). Scout probes file metadata, Route decides how to read it (vision/PDF/tabular/text), Extract pulls raw content — PDFs, CAD drawings (DWG/DXF), BIM (IFC/RVT), GIS files (SHP/GeoJSON), spreadsheets, images with OCR, and archives. Output: 17 structural fields — format, year, page count, content sample, extraction quality, etc.

**Layer 2 — LLM Classification**
Two LLM calls: a cheap pre-screen (data likelihood, info value, language), then a main call that maps the file into the taxonomy (domain, lifecycle, asset type, confidentiality, certainty, summary). Augmented by folder-sibling RAG and an optional VLM detour for drawing-heavy files with weak text.

**Phase 2 — Serial (Layer 3 + 4, with growing vector store)**

After Phase 1 completes, a semantic vector store is built from all Layer 2 outputs using sentence-transformers (`all-MiniLM-L6-v2`). Layer 3 queries this store for similar already-classified files, enabling uniqueness calibration and context-aware scoring.

**Layer 3 — Decision Priority Scoring**
LLM scores 5 dimensions on 1–10: **authority** (can this force a redesign?), **scope** (how much of the project does it affect?), **urgency** (does it match open decisions right now?), **coverage** (how complete is the file's own content?), and **accessibility** (how decision-ready is the content?). Combined via weighted geometric mean (authority 30%, urgency 30%, scope 20%, coverage 20%) → 0–100 score. Only runs on data-like asset types. Urgency is grounded by Project Intelligence — real open decisions extracted from meeting minutes. High-scoring files (≥70) are re-evaluated in agent mode with access to vector store search and folder sibling context.

**Layer 4 — Trust & Risk Routing**
No LLM. Pure rule engine. Applies deterministic guards (confidentiality overrides, data-asset label fixes), checks temporal anomalies, and assigns a review priority tier (Critical / High / Medium / Low) with explicit reasons and recommended actions.

Results are written to a ~62-column CSV and visualised in an HTML dashboard with scatter plots, radar charts, and an inline-editable review queue. Supports incremental runs (skip already-processed files) and selective re-runs (filter by certainty, domain, or failure status). Configuration is handled through a six-step web wizard. No code editing required.

*This is a private practice collaboration — the repository is not publicly available.*

**Tools:** Python · OpenRouter API · Vision Models · sentence-transformers · Flask · Plotly · pandas · concurrent.futures

<!-- zh -->

DataTaxonomy是一个专为建筑和城市设计实践打造的AI分类流水线。它接收原始项目文件档案——多年积累的数千份PDF、图纸、表格、模型和图片——并将其转化为结构化、可检索的元数据目录。

它所解决的核心问题是每个设计事务所都面临的：项目知识被深埋。文件按日期或专业分门别类，命名只对创建者有意义，对其他任何人都是谜。当新项目启动，或团队在交付中途接手一个档案时，定位正确信息的成本极为高昂。DataTaxonomy让这些知识变得清晰可读。

**流水线分两阶段、四层运行。**

**第一阶段 — 并行处理（第一层 + 第二层）**

**第一层 — 技术提取**
确定性流程（除一次路由调用外无LLM）。Scout探测文件元数据，Route决定读取方式（视觉/PDF/表格/文本），Extract提取原始内容——支持PDF、CAD图纸（DWG/DXF）、BIM（IFC/RVT）、GIS文件（SHP/GeoJSON）、表格、带OCR的图片及压缩包。输出17个结构化字段——格式、年份、页数、内容样本、提取质量等。

**第二层 — LLM分类**
两次LLM调用：首先是低成本预筛选（数据可能性、信息价值、语言），然后是主调用，将文件映射到分类体系（领域、生命周期、资产类型、保密级别、确定性、摘要）。通过文件夹邻近RAG增强，并对图纸密集、文本薄弱的文件提供可选的VLM分流处理。

**第二阶段 — 串行处理（第三层 + 第四层，配合增量向量库）**

第一阶段完成后，基于所有第二层输出，使用 sentence-transformers（`all-MiniLM-L6-v2`）构建语义向量库。第三层查询该库，检索已分类的相似文件，实现唯一性校准与上下文感知评分。

**第三层 — 决策优先级评分**
LLM对5个维度进行1–10评分：**权威性**（此文件能否强制推翻设计？）、**范围**（影响项目的多大比例？）、**紧迫性**（是否契合当前待决决策？）、**覆盖度**（文件内容自身有多完整？）、**可及性**（内容对决策者有多直接可用？）。通过加权几何平均值合并（权威性30%、紧迫性30%、范围20%、覆盖度20%）→ 0–100分。仅对数据类资产类型运行。紧迫性由项目智能模块支撑——从会议纪要中提取的真实待决决策。高分文件（≥70分）在智能体模式下重新评估，可调用向量库检索和文件夹邻近上下文。

**第四层 — 信任与风险路由**
无LLM。纯规则引擎。执行确定性守护措施（保密覆盖、数据资产标签修正），检查时间异常，并分配审查优先级层级（关键 / 高 / 中 / 低），附带明确原因和建议操作。

结果写入约62列的CSV，并在HTML仪表板中可视化，包含散点图、雷达图和可内联编辑的审查队列。支持增量运行（跳过已处理文件）和选择性重跑（按确定性、领域或失败状态过滤）。配置通过六步网页向导完成，无需编写代码。

*此为私人实践合作项目——代码库不公开。*

**工具：** Python · OpenRouter API · Vision Models · sentence-transformers · Flask · Plotly · pandas · concurrent.futures
