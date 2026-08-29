---
layout: post
title: 'DataTaxonomy: Intelligent Classification for Architectural Project Documents'
title_zh: 'DataTaxonomy：建筑实践文档智能分类系统'
thumbnail: /assets/img/projects/proj-5/DataTaxonomy.png
tagline: 'An AI pipeline for turning thousands of architectural practice documents into a structured, reviewable decision map.'
tagline_zh: '一套将数千份建筑实践文档转化为可审查、可排序决策地图的 AI 流水线。'
group: AI
categories: [AI, LLM, Architecture, Data Infrastructure, Applied Research]
skills: [Python, Agent Workflows, Vision Model Gating, Document Classification, Cost Control, Applied Research]
stats:
  - value: '3,000+'
    label: 'documents in scope'
    label_zh: '份文档处理范围'
  - value: '4-layer'
    label: 'pipeline architecture'
    label_zh: '层分类流水线'
  - value: '¥0.04–0.5'
    label: 'cost per document'
    label_zh: '单文档处理成本'
  - value: '~95%'
    label: 'lower cost vs OCR/VLM-heavy baselines'
    label_zh: '较传统 OCR / VLM 方案降本'
---

DataTaxonomy is a document intelligence system developed in remote collaboration with an international architecture practice in Denmark. The problem was straightforward but costly: large planning and design teams accumulate thousands of files, yet the archive remains effectively unreadable at decision time. Reports, drawings, renderings, and spreadsheets sit together without a usable structure, so critical constraints are often harder to find than they should be.

The system was designed around a four-layer pipeline: routing extraction, seven-dimensional classification, design-impact scoring, and risk review. Instead of treating every file the same way, the pipeline first determines how much signal is available and what kind of model involvement is actually necessary, then pushes each document through the appropriate path.

The project was built for more than 3,000 unstructured project documents spanning live work in very different contexts, including Middle Eastern urban masterplans, North American airport land-use updates, and Nordic timber-based developments. The goal was not just to label files, but to make the archive legible enough to support design work, review priorities, and downstream retrieval.

A key design choice was cost control. The system combines a pipeline architecture with agent-style decision points so that expensive model calls are used selectively rather than by default. Visual models are invoked only when pre-screening detects content such as drawings, diagrams, or renderings; text-heavy files stay on cheaper language-only paths. That brought single-document processing cost into a roughly RMB 0.04–0.5 range, around 95% lower than heavier OCR-plus-VLM alternatives.

The output is not framed as a benchmark against a fixed ground-truth dataset. Instead, the project argues for a methodology: involving AI directly in architectural document classification under real production constraints, with attention to routing, confidence, and review design rather than headline accuracy alone. The resulting system serves as both a production tool and a research object.

The work is currently being developed into an academic paper, with the findings and methodological claims being prepared for peer review. The paper is being organized with shared first authorship.

*This is a private practice collaboration. The project documents are confidential client materials, and the codebase is not public.*

**Tools:** Python · LLM pipelines · Agent workflows · Vision models · Cost-aware routing

<!-- zh -->

DataTaxonomy 是一个与丹麦某国际建筑事务所远程协作完成的文档智能分类系统。它要解决的问题很直接：大型设计与规划项目会积累海量文档，但真正到了需要做判断的时候，档案本身往往仍然是“不可读”的。报告、图纸、渲染图、表格与会议材料混杂堆叠，关键约束信息常常比想象中更难被找到。

针对这一问题，我设计并部署了一套四层分类流水线：路由提取 → 七维分类 → 影响力评分 → 风险审查。系统并不把所有文件一视同仁，而是先判断文件可读性、信息密度与所需模型类型，再决定进入怎样的处理路径。

项目面向 3000 余份非结构化建筑实践文档，覆盖中东城市总体规划、北美机场用地更新、北欧全木结构社区等在建项目。它的目标不只是给文件贴标签，而是把原本难以利用的项目档案转化为可以支撑设计判断、审查优先级与后续检索的结构化地图。

其中一个核心设计重点是成本控制。系统将 Pipeline 与 Agent 式判断节点结合起来，不默认调用最昂贵的模型，而是按需分配推理成本。只有在预筛环节识别到图纸、渲染图、图解等视觉内容时，才会调用视觉模型；以文字为主的文件则走更低成本的语言模型路径。借助这种门控机制，单文档处理成本被控制在约 0.04–0.5 元，较传统 OCR 与 VLM 重方案降低约 95%。

这个项目并不是围绕一个既定真值集去做传统准确率竞赛；它更强调一种方法论主张：在真实生产约束下，让 AI 直接参与建筑文档分类，并把路由、置信度与审查机制本身视为系统设计的一部分，而不是只追求单点精度指标。最终产出的既是可落地的生产工具，也是一个可被研究讨论的对象。

目前，这项工作正整理为学术论文，准备提交同行评议；相关成果将以共同第一作者形式署名。

*该项目属于私人事务所合作，项目文档均为受保密协议保护的客户材料，代码库不对外公开。*

**工具：** Python · LLM 流水线 · Agent 工作流 · 视觉模型 · 成本感知路由
