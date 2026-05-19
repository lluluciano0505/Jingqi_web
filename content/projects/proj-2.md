---
layout: post
title: 'Philadelphia Fire Alarms Analysis'
title_zh: '费城火警误报分析'
thumbnail: /assets/img/projects/proj-2/thumbnail.png
tagline: '77% of Philadelphia fire incidents are false alarms. This model predicts which calls they are — so crews can respond smarter without compromising safety.'
tagline_zh: '费城77%的火警出警为误报。该模型预测哪些来电是误报——让消防队能更智慧响应，同时不牺牲安全。'
group: Analytics
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

<!-- zh -->

误报占费城所有火灾相关出警的77%，大量消防资源因此被虚耗在真实紧急情况之外。本项目构建了一个预测模型，在派遣前识别高概率误报。

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/FINAL_1.html" image="projects/proj-2/thumbnail.png" %}

本项目整合了六类数据——NFIRS事故记录、人口普查ACS人口社会经济数据、涵盖26,310栋建筑的L&I消防报警合规数据、来自PHL机场的逐小时气象数据、消防站位置，以及城市地理信息——构建了三个复杂度递增的逻辑回归模型。最终模型AUC达到0.672，天气状况、教育水平和建筑合规性是最强的预测因子。

模型同时揭示了公平性问题：部分人口统计模式在控制环境和运营变量后仍与误报率相关，在政策解读上需要审慎考量。

建议将0.4的概率阈值用于实际部署——对高置信度误报启用轻量级响应方案，同时配合社区教育和执法强化措施。

[查看完整分析 →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/FINAL_1.html)
[查看演示文稿 →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/Final/presentation/Final_Presentation.html#/title-slide)

**工具：** R · sf · tidyverse · spatstat · caret · ggplot2
