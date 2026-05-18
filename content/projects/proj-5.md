---
layout: post
title: 'DataTaxonomy: AI Classification Pipeline for Architectural Project Archives'
thumbnail: /assets/img/projects/proj-5/DataTaxonomy.png
tagline: 'Design offices drown in files nobody can find. DataTaxonomy turns a raw archive into a structured, searchable metadata catalogue — automatically.'
categories: [AI, LLM, Architecture, Data Infrastructure]
skills: [Python, OpenRouter API, Vision Models, Streamlit, Plotly, pandas, concurrent.futures]
---

DataTaxonomy is an AI-powered classification pipeline built for architectural and urban design practices. It takes a raw project file archive — thousands of PDFs, drawings, spreadsheets, models, and images accumulated across years of work — and transforms it into a structured, searchable metadata catalogue.

{% include image.html image="projects/proj-5/DataTaxonomy.png" %}

The core problem it solves is one every design office faces: project knowledge is buried. Files sit in folders organised by date or discipline, with names that made sense to whoever created them and to nobody else. When a new project starts, or a team inherits an archive mid-delivery, the cost of locating the right information is enormous. DataTaxonomy makes that knowledge legible.

**The pipeline runs in four layers.**

**Layer 1** extracts technical metadata and content from each file using format-specific readers and vision models. **Layer 2** uses a large language model to classify every file across seven taxonomy dimensions: domain, scale, lifecycle stage, asset type, information type, governance source, and confidentiality. **Layer 3** applies rule-based guards and risk triage, flagging files that need human review. **Layer 2.5** — the priority engine — assesses each file's decision relevance: how much would reading this file right now change what gets designed? It scores five dimensions (authority, scope, urgency, coverage, rawness) and produces a single priority score that surfaces the files most likely to influence live decisions.

Results are written to a CSV and visualised in an HTML dashboard with scatter plots, radar charts, and a review queue. Configuration is handled through a six-step web wizard. No code editing required.

*This is a private practice collaboration — the repository is not publicly available.*

**Tools:** Python · OpenRouter API · Vision Models · Streamlit · Plotly · pandas · concurrent.futures
