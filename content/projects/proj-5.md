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

**The pipeline runs in four layers.**

**Layer 1 — Technical Extraction**
Deterministic (no LLM except one routing call). Scout probes file metadata, Route decides how to read it (vision/PDF/tabular/text), Extract pulls raw content. Output: 17 structural fields — format, year, page count, content sample, extraction quality, etc.

**Layer 2 — LLM Classification**
Two LLM calls: a cheap pre-screen (data likelihood, info value, language), then a main call that maps the file into the taxonomy (domain, lifecycle, asset type, confidentiality, certainty, summary). Augmented by folder-sibling RAG and an optional VLM detour for drawing-heavy files with weak text.

**Layer 3 — Decision Priority Scoring**
LLM scores 4 dimensions (authority, scope, urgency, coverage) on 1–10, combined via weighted geometric mean → 0–100 score. Only runs on decision-relevant asset types (drawings, data, statutory docs). Urgency is grounded by Project Intelligence — real open decisions extracted from meeting minutes.

**Layer 4 — Trust & Risk Routing**
No LLM. Pure rule engine. Applies deterministic guards (confidentiality overrides, data-asset label fixes), checks temporal anomalies, and assigns a review priority tier (Critical / High / Medium / Low) with explicit reasons and recommended actions.

Results are written to a CSV and visualised in an HTML dashboard with scatter plots, radar charts, and a review queue. Configuration is handled through a six-step web wizard. No code editing required.

*This is a private practice collaboration — the repository is not publicly available.*

**Tools:** Python · OpenRouter API · Vision Models · Streamlit · Plotly · pandas · concurrent.futures

<!-- zh -->

DataTaxonomy是一个专为建筑和城市设计实践打造的AI分类流水线。它接收原始项目文件档案——多年积累的数千份PDF、图纸、表格、模型和图片——并将其转化为结构化、可检索的元数据目录。

它所解决的核心问题是每个设计事务所都面临的：项目知识被深埋。文件按日期或专业分门别类，命名只对创建者有意义，对其他任何人都是谜。当新项目启动，或团队在交付中途接手一个档案时，定位正确信息的成本极为高昂。DataTaxonomy让这些知识变得清晰可读。

**流水线分四层运行。**

**第一层 — 技术提取**
确定性流程（除一次路由调用外无LLM）。Scout探测文件元数据，Route决定读取方式（视觉/PDF/表格/文本），Extract提取原始内容。输出17个结构化字段——格式、年份、页数、内容样本、提取质量等。

**第二层 — LLM分类**
两次LLM调用：首先是低成本预筛选（数据可能性、信息价值、语言），然后是主调用，将文件映射到分类体系（领域、生命周期、资产类型、保密级别、确定性、摘要）。通过文件夹邻近RAG增强，并对图纸密集、文本薄弱的文件提供可选的VLM分流处理。

**第三层 — 决策优先级评分**
LLM对4个维度（权威性、范围、紧迫性、覆盖度）进行1–10评分，通过加权几何平均值合并为0–100分。仅对决策相关资产类型运行（图纸、数据、法定文件）。紧迫性由项目智能模块支撑——从会议纪要中提取的真实待决决策。

**第四层 — 信任与风险路由**
无LLM。纯规则引擎。执行确定性守护措施（保密覆盖、数据资产标签修正），检查时间异常，并分配审查优先级层级（关键 / 高 / 中 / 低），附带明确原因和建议操作。

结果写入CSV并在HTML仪表板中可视化，包含散点图、雷达图和审查队列。配置通过六步网页向导完成，无需编写代码。

*此为私人实践合作项目——代码库不公开。*

**工具：** Python · OpenRouter API · Vision Models · Streamlit · Plotly · pandas · concurrent.futures
