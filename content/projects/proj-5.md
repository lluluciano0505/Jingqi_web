---
layout: post
title: 'DataTaxonomy: AI Classification Pipeline for Architectural Project Archives'
title_zh: 'DataTaxonomy：建筑档案AI分类流水线'
thumbnail: /assets/img/projects/proj-5/DataTaxonomy.png
tagline: 'Design offices drown in files nobody can find. DataTaxonomy turns a raw archive into a decision-ranked map — validated on three live practice archives across three continents.'
tagline_zh: '设计事务所深陷无人能找到的文件泥沼。DataTaxonomy将原始档案自动转化为按决策相关性排序的结构化地图——已在三大洲三个真实事务所项目档案中验证。'
group: AI
categories: [AI, LLM, Architecture, Data Infrastructure, Applied Research]
skills: [Python, Multi-LLM Routing, Vision Models (VLM), Flask, pandas, concurrent.futures, Plotly]
stats:
  - value: '3'
    label: 'live archives validated'
    label_zh: '个真实档案完成验证'
  - value: '800+'
    label: 'files classified'
    label_zh: '份文件完成分类'
  - value: '94–98%'
    label: 'repeat-grading stability'
    label_zh: '重复评分一致率'
  - value: '30+'
    label: 'file formats supported'
    label_zh: '种文件格式支持'
---

DataTaxonomy is an AI-powered classification pipeline for architectural and urban design practices. It takes a raw project archive — thousands of PDFs, drawings, spreadsheets, models, and images accumulated over years — and turns it into a structured, decision-ranked map: one row per file, ranked not just by category but by how likely it is to bear on a live design decision.

The core problem is that project knowledge gets buried. In a large, long-running masterplan, no single person has read the whole archive, and a keyword search only helps someone who already knows what to search for. The file that should stop a decision in its tracks — a zoning constraint, a regulatory limit — is exactly as likely to be sitting in a folder called "Links" as anywhere with a name that hints at its importance. DataTaxonomy is built around a different idea: build the map before the search.

### How It's Built

A four-layer pipeline, run in two passes.

**Phase 1 — parallel.** Every file is read (Layer 1) and classified (Layer 2) independently; results build a similarity index of the whole archive as they go.

**Phase 2 — serial.** Once every file has a place on the map, Layer 3 ranks each one's decision-relevance against everything else in the archive, and Layer 4 runs deterministic trust checks.

### Layer 1 — Extraction

Scout reads only cheap structural properties (extension, size, page count) so later decisions never rely on a possibly-misleading filename. Route makes a single lightweight model call to decide how to read the file — OCR, direct text, or vision. Extract carries out that plan. More than thirty format readers are wired in, covering native and scanned PDFs, CAD (DWG/DXF), BIM (IFC/RVT), GIS (SHP/GeoJSON), spreadsheets, emails, and images. Binary CAD/BIM files that carry no readable text are marked metadata-only rather than treated as failures — later layers are told explicitly to lean on folder path and filename instead.

### Layer 2 — Classification

Each file is read twice: a cheap pre-screen judges whether it's worth classifying in depth, then a main pass positions it on seven dimensions — domain, asset type, lifecycle stage, scale, information type, governance source, and confidentiality — aligned to the IFC data schema for BIM interoperability. Classification is informed by folder-sibling context (how already-classified neighbours were labelled), so an unreadable CAD drawing still lands close to where it belongs. As files are classified, their labels and summaries feed a similarity index used by Layer 3. An earlier version built this index with sentence-transformer embeddings; a controlled ablation found no measurable benefit over simple token-overlap matching (mean score shift of 2.8 points against a 2.4-point measurement-noise floor), so the embedding dependency was dropped for the simpler, faster method.

### Layer 3 — Decision-Relevance Ranking

Only data-bearing files are ranked — reports, calculations, statutory records; drawings and media stay on the map but aren't scored. Each ranked file is graded on three dimensions against named levels rather than a numeric score: **authority** (Statutory → Hard Constraint → Client Brief → Advisory → Background), **scope**, and **coverage**. Files are then ordered lexicographically — authority first, ties broken by scope, then coverage — so a single statutory constraint always outranks even the broadest advisory memo. Two further dimensions, urgency and accessibility, are graded but deliberately excluded from the ranking: urgency would need to know which decision a project is currently facing, which the archive itself rarely records, and folding it in would let a plausible-sounding guess distort an otherwise checkable ranking. Any file graded Statutory or Hard Constraint is automatically re-examined by a second, deeper pass that re-reads it with the whole archive map in view.

This replaced an earlier 0–100 weighted-composite score: re-grading identical files repeatedly showed the numeric score swinging by up to 28 points on the same input — noise larger than most of the differences it claimed to express. The rubric-level redesign was tested the same way: three repeat gradings of the same 65 files agreed on 94–98% of labels per dimension, with every disagreement landing on an adjacent level.

### Layer 4 — Trust & Risk Routing

No model calls — pure deterministic rules. A confidentiality guard cross-checks the model's label against filename/content scanning for sensitive terms (project email is treated as confidential by default); a data-consistency guard catches files whose declared asset type doesn't match their actual format. Conflicts are surfaced as a review-priority flag (Critical / High / Medium / Low), never silently auto-corrected — the reviewer stays the final authority. One fix worth noting: an early version of the confidentiality scanner matched the substring "nda" inside ordinary words like *agenda* and *boundary* — corrected to respect word boundaries after an audit traced a chunk of false positives back to it.

### Interface

A four-step Config Wizard (project background → input/output paths → model and API key → taxonomy) replaces manual config editing. The pipeline streams progress live to a Flask-served dashboard with three tabs — **All Files** (filterable by domain, lifecycle, asset type, confidentiality), **Priority** (sorted by decision impact — a reading list for project managers), and **Review Queue** (Critical/High files only, editable inline). Output is a single 46-column CSV. The pipeline supports incremental runs (skip already-processed files) and selective re-runs (filter by certainty, domain, or failure status). Multiple LLM backends sit behind one config switch — OpenRouter, DeepSeek, and Zhipu's GLM-4V (with a free tier, for mainland China access).

### Validated on Three Live Archives

The same configurable pipeline — no code changes, only a taxonomy YAML edit per project — was run against three real practice archives on three continents, each under a different planning regime:

| Archive (region) | Files sampled | Domains realised | Data ranked | Governing files surfaced |
|---|---|---|---|---|
| Middle East — government regeneration megaproject | 400 | 15 | 16% | 1 |
| Northern Europe — all-timber neighbourhood | 200 | 15 | 28% | 12 |
| North America — airport redevelopment | 200 | 10 | 28% | 2 |

In every archive, the single file that mattered most sat somewhere a keyword search would never think to look — a cooling-infrastructure regulation filed under a folder named simply "Links," a fire-safety memo buried in a consultant's dated delivery folder — and in every case the ranking pulled it to the top regardless. Adapting to a new archive meant editing a taxonomy YAML file, not the code: one practice needed a dedicated timber-engineering domain added; another needed a religious-buildings domain added after an early run silently absorbed mosque drawings into a generic architecture bucket.

This work is currently being written up as an academic paper covering the three-archive validation and the ablation and stability experiments behind Layers 2 and 3.

*This is a private practice collaboration — the project archives are confidential client material under NDA, and the code repository is not public.*

**Tools:** Python · OpenRouter / DeepSeek / Zhipu GLM-4V · Flask · pandas · concurrent.futures · Plotly

<!-- zh -->

DataTaxonomy是一个面向建筑与城市设计事务所的AI分类流水线。它接收原始项目档案——多年积累的数千份PDF、图纸、表格、模型和图片——并将其转化为结构化的、按决策相关性排序的地图：不仅按类别归类，更按每份文件对当前设计决策的影响可能性排序。

核心问题在于：项目知识被深埋。在一个体量巨大、周期漫长的总体规划项目中，没有任何一个人读过完整档案，而关键词搜索只能帮到已经知道该搜什么的人。真正应该让决策止步的那份文件——一条分区红线、一项法规限制——躺在名为"Links"的文件夹里的概率，和躺在任何看起来"重要"的地方一样高。DataTaxonomy的设计理念因此不同：先建地图，再谈搜索。

### 系统架构

四层流水线，分两阶段运行。

**第一阶段 — 并行。** 每个文件被独立读取（第一层）和分类（第二层）；分类结果同步构建全档案的相似度索引。

**第二阶段 — 串行。** 待所有文件都在地图上就位后，第三层将每个文件的决策相关性与档案中其余文件比较排序，第四层执行确定性信任检查。

### 第一层 — 技术提取

Scout只读取低成本的结构属性（扩展名、大小、页数），确保后续判断不依赖可能有误导性的文件名。Route用一次轻量模型调用决定读取方式——OCR、直接读文本，还是视觉识别。Extract执行该计划。系统内置30余种格式的读取器，覆盖原生与扫描版PDF、CAD（DWG/DXF）、BIM（IFC/RVT）、GIS（SHP/GeoJSON）、表格、邮件和图片。无法提取文本的二进制CAD/BIM文件被标记为"仅元数据"而非处理失败——后续层级会被明确告知转而依赖文件夹路径和文件名。

### 第二层 — LLM分类

每个文件被读两遍：一次低成本预筛选判断是否值得深入分类，随后主分类将文件定位到七个维度——领域、资产类型、生命周期阶段、尺度、信息类型、治理来源、保密级别——并与IFC数据标准对齐以兼容BIM工具链。分类过程会参考同文件夹内已分类邻居的标签作为上下文，因此即使一份读不出内容的CAD图纸，也能被归到大致正确的位置。文件分类结果会同步写入一个相似度索引，供第三层查询。早期版本用sentence-transformers向量嵌入构建该索引；一次受控消融实验发现，相比简单的词重叠匹配，嵌入方式并未带来可测量的提升（平均分差2.8分，而重复测量本身的噪声就有2.4分），于是系统去掉了嵌入依赖，改用更简单、更快的方法。

### 第三层 — 决策相关性排序

只有承载信息的文件才会被排序——报告、计算书、法规文件——图纸和媒体文件仍留在地图上，但不参与打分。每份被排序的文件在三个维度上被评为具名等级，而非数字分数：**权威性**（法定 → 硬性约束 → 甲方任务书 → 建议性 → 背景资料）、**范围**、**覆盖度**。文件随后按字典序排列——先比权威性，权威性相同再比范围，最后比覆盖度——因此哪怕是覆盖面最广的建议性文件，也永远排在法定文件之后。另外两个维度——紧迫性与可及性——同样会被评级，但被有意排除在排序之外：紧迫性需要知道项目当前正面临哪个决策节点，而这类信息档案本身很少记录，强行纳入只会让一个似是而非的猜测扭曲本应可核查的排序。任何被评为"法定"或"硬性约束"的文件都会自动进入第二轮更深入的复核，复核时可参照已完成的整份档案地图。

这套机制取代了早期的0–100加权综合评分：对同一批文件反复评分，数字分数在完全相同的输入下可以摆动多达28分——这个噪声比它试图表达的差异本身还大。新的等级制评分体系用同样的方法验证：对同一批65份文件重复评分三次，各维度94%–98%的评级保持一致，且所有分歧都只落在相邻等级之间。

### 第四层 — 信任与风险路由

不调用模型，纯确定性规则。保密性守卫将模型给出的保密标签与文件名/内容中的敏感词扫描结果交叉核对（项目邮件默认按保密处理）；数据一致性守卫捕捉"资产类型标签与实际文件格式不符"的情况。冲突会被标记为审查优先级（关键 / 高 / 中 / 低），而不会被静默自动修正——最终决定权始终留给审查者。有一处修复值得一提：保密扫描的早期版本会把"nda"作为子串匹配进agenda、boundary这类普通英文单词里，审计发现这是部分误报的根源后，已修正为按完整单词边界匹配。

### 交互界面

四步配置向导（项目背景 → 输入/输出路径 → 模型与API密钥 → 分类体系）取代了手动修改配置文件。流水线处理进度实时推送到基于Flask的仪表板，包含三个标签页——**全部文件**（按领域、生命周期、资产类型、保密级别筛选）、**优先级**（按决策影响力排序——项目经理的必读清单）、**审查队列**（仅显示"关键/高"优先级文件，可直接内联编辑）。输出为单个46列CSV。流水线支持增量运行（跳过已处理文件）与选择性重跑（按确定性、领域或失败状态过滤）。系统支持在一个配置开关后切换多个LLM后端——OpenRouter、DeepSeek，以及智谱GLM-4V（提供免费额度，方便中国大陆访问）。

### 已在三个真实项目档案中验证

同一套可配置流水线——无需改代码，仅需编辑每个项目的分类体系YAML文件——被应用于三大洲三个真实事务所项目档案，分属三种不同的规划体系：

| 档案（地区） | 抽样文件数 | 识别出的领域数 | 参与排序的数据文件占比 | 识别出的关键法定文件数 |
|---|---|---|---|---|
| 中东 — 政府主导的大型旧城更新项目 | 400 | 15 | 16% | 1 |
| 北欧 — 全木结构社区 | 200 | 15 | 28% | 12 |
| 北美 — 机场改造项目 | 200 | 10 | 28% | 2 |

在每一份档案中，真正起决定作用的那份文件，都躺在关键词搜索绝不会想到去找的地方——一份被归档在名为"Links"文件夹下的制冷基础设施法规、一份被埋在顾问公司按日期命名的交付文件夹里的消防安全备忘录——而排序机制在每一个案例中都把它们准确地推到了最前面。适配一个新档案，靠的是编辑一份分类体系YAML文件，而非改代码：一个项目需要新增专门的"木结构工程"领域；另一个项目在早期运行中把清真寺图纸全部归进了通用的"建筑"类别，因此需要新增独立的"宗教建筑"领域。

这项工作目前正被整理成一篇学术论文，记录三份档案的验证结果，以及支撑第二层与第三层设计的消融与稳定性实验。

*此为私人事务所合作项目——项目档案属于受NDA保护的客户机密材料，代码库不对外公开。*

**工具：** Python · OpenRouter / DeepSeek / 智谱GLM-4V · Flask · pandas · concurrent.futures · Plotly
