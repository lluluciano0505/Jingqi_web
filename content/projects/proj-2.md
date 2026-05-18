---
layout: post
title: 'Philadelphia Fire Alarms Analysis'
thumbnail: /assets/img/projects/proj-2/thumbnail.png
tagline: '77% of Philadelphia fire incidents are false alarms. This model predicts which calls they are — so crews can respond smarter without compromising safety.'
skills: [R, sf, tidyverse, spatstat, caret, ggplot2]
---

False alarms make up 77% of all fire-related incidents in Philadelphia, pulling resources from real emergencies. This project builds a predictive model to flag high-probability false alarms before dispatch.

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/FINAL_1.html" image="projects/proj-2/thumbnail.png" %}

Six datasets were integrated — NFIRS incident records, Census ACS demographics, L&I fire-alarm compliance data for 26,310 buildings, hourly weather from PHL airport, fire station locations, and urban geography — into three logistic regression models of increasing complexity. The final model achieves AUC 0.672, identifying weather conditions, educational attainment, and building compliance as the strongest predictors.

The model also surfaces equity concerns: some demographic patterns persist in false-alarm rates even after controlling for environment and operations, demanding careful policy interpretation.

A 0.4 probability threshold is recommended for deployment — enabling lighter-response packages on high-confidence false alarms, paired with targeted community education and enforcement.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/FINAL_1.html)
[View Presentation →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/presentation/Final_Presentation.html#/title-slide)

**Tools:** R · sf · tidyverse · spatstat · caret · ggplot2
