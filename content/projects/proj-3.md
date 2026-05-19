---
layout: post
title: 'Geolife Daily Mobility: Reconstructing Urban Movement from GPS Trajectories'
title_zh: '城市日常出行：从GPS轨迹重建北京移动模式'
thumbnail: /assets/img/projects/proj-3/thumbnail.png
tagline: '182 people. Years of GPS traces across Beijing. What does it take to go home — and when do people decide to keep exploring?'
tagline_zh: '182人，多年来横跨北京的GPS轨迹。回家需要什么——人们又在何时决定继续探索？'
group: Analytics
skills: [Python, pandas, geopandas, numpy, matplotlib, scipy, Quarto]
---

The [Microsoft Geolife dataset](https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/) records GPS trajectories from 182 users across several years in Beijing — millions of location points that, with the right processing, become stories about how people actually move through cities.

{% include image.html url="https://lluluciano0505.github.io/Python-Mobility/" image="projects/proj-3/thumbnail.png" %}

Raw coordinates are converted into structured visit events, classifying each stop as home or non-home. From there, home-based trips are reconstructed to ask two questions: **How does the probability of returning home evolve as a trip unfolds?** And do distinct mobility "types" emerge across users?

Hazard and survival models capture the return-home dynamics — showing that the pull toward home shifts predictably over the course of a day. User-level clustering then groups people by their mobility signatures, revealing that routine and exploration are not uniformly distributed across a population.

[View Full Project →](https://lluluciano0505.github.io/Python-Mobility/)

**Tools:** Python · pandas · geopandas · numpy · matplotlib · scipy · Quarto

<!-- zh -->

[微软Geolife数据集](https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/)记录了182名用户在北京多年间的GPS轨迹——数百万个位置点，经过合理的处理后，能够还原出人们真实穿行城市的故事。

{% include image.html url="https://lluluciano0505.github.io/Python-Mobility/" image="projects/proj-3/thumbnail.png" %}

原始坐标被转化为结构化的访问事件，每次停留被分类为"家"或"非家"。在此基础上，重建以家为起点的出行，以回答两个核心问题：**随着出行展开，返回家的概率是如何演变的？** 不同用户之间是否存在差异化的出行"类型"？

风险模型和生存模型捕捉了返家动态——揭示出一天之中，回家的牵引力随时间可预测地变化。用户层面的聚类分析进一步根据出行特征对人群进行划分，说明规律性与探索性并非在所有人身上均匀分布。

[查看完整项目 →](https://lluluciano0505.github.io/Python-Mobility/)

**工具：** Python · pandas · geopandas · numpy · matplotlib · scipy · Quarto
