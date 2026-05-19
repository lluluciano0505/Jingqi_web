---
layout: post
title: 'LSTM Spatial Flow Prediction: Modeling Urban Mobility with Deep Learning'
title_zh: 'LSTM空间流量预测：用深度学习建模城市出行'
thumbnail: /assets/img/projects/proj-4/thumbnail.png
tagline: 'A 2-layer LSTM that learns the rhythm of a city — predicting flow across 500m grid cells from 4 hours of movement history and 85 dimensions of urban context.'
tagline_zh: '双层LSTM学习城市的节律——从4小时出行历史与85维城市特征，预测500米网格内的人流量变化。'
group: ML
skills: [Python, PyTorch, DuckDB, pandas, numpy, matplotlib, Google Colab]
---

Cities pulse in patterns. This project asks whether a neural network can learn them well enough to predict where people will move next.

Using [YJMob100K](https://www.nature.com/articles/s41597-022-01754-0) — anonymized mobile phone trajectories discretized into 500m × 500m grid cells at 30-minute intervals — an LSTM model predicts the next inflow or outflow for each cell, given 4 hours of prior movement (8 timesteps). Feature vectors combine current flow values, ~85 POI-category dimensions queried via DuckDB, and sinusoidal time encodings.

{% include image.html url="https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html" image="projects/proj-4/thumbnail.png" %}

A linear baseline serves as the comparison. It fails catastrophically — performing **more than two orders of magnitude worse** than the LSTM (test MSE ≈ 4.15 vs. baseline's collapse). Temporal sequence isn't optional; ignoring it destroys predictive power.

The LSTM accurately reproduces citywide flow structure across space and time. Remaining errors concentrate in high-intensity, high-volatility zones — pointing toward future work with attention mechanisms or spatial graph neural networks.

[View Full Notebook →](https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html)

**Tools:** Python · PyTorch · DuckDB · pandas · numpy · matplotlib · Google Colab

<!-- zh -->

城市以规律跳动。本项目试图回答：神经网络能否充分学习这些规律，进而预测人们下一步的去向？

使用[YJMob100K](https://www.nature.com/articles/s41597-022-01754-0)——匿名化手机轨迹数据，以30分钟为间隔离散化至500m×500m网格——LSTM模型基于过去4小时的出行记录（8个时间步），预测每个网格单元的下一个流入量或流出量。特征向量结合了当前流量值、通过DuckDB查询的约85个POI类别维度，以及正弦时间编码。

{% include image.html url="https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html" image="projects/proj-4/thumbnail.png" %}

线性基准模型作为对比。它的表现灾难性失败——**测试MSE比LSTM差两个数量级以上**（约4.15 vs. 基准模型的崩溃）。时间序列不是可选项；忽略它会彻底摧毁预测能力。

LSTM准确重现了全城跨时空的流量结构。剩余误差集中在高强度、高波动区域——指向未来引入注意力机制或空间图神经网络的研究方向。

[查看完整笔记本 →](https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html)

**工具：** Python · PyTorch · DuckDB · pandas · numpy · matplotlib · Google Colab
