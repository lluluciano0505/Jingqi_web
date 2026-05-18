---
layout: post
title: 'LSTM Spatial Flow Prediction: Modeling Urban Mobility with Deep Learning'
thumbnail: /assets/img/projects/proj-4/thumbnail.png
tagline: 'A 2-layer LSTM that learns the rhythm of a city — predicting flow across 500m grid cells from 4 hours of movement history and 85 dimensions of urban context.'
skills: [Python, PyTorch, DuckDB, pandas, numpy, matplotlib, Google Colab]
---

Cities pulse in patterns. This project asks whether a neural network can learn them well enough to predict where people will move next.

Using [YJMob100K](https://www.nature.com/articles/s41597-022-01754-0) — anonymized mobile phone trajectories discretized into 500m × 500m grid cells at 30-minute intervals — an LSTM model predicts the next inflow or outflow for each cell, given 4 hours of prior movement (8 timesteps). Feature vectors combine current flow values, ~85 POI-category dimensions queried via DuckDB, and sinusoidal time encodings.

{% include image.html url="https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html" image="projects/proj-4/thumbnail.png" %}

A linear baseline serves as the comparison. It fails catastrophically — performing **more than two orders of magnitude worse** than the LSTM (test MSE ≈ 4.15 vs. baseline's collapse). Temporal sequence isn't optional; ignoring it destroys predictive power.

The LSTM accurately reproduces citywide flow structure across space and time. Remaining errors concentrate in high-intensity, high-volatility zones — pointing toward future work with attention mechanisms or spatial graph neural networks.

[View Full Notebook →](https://lluluciano0505.github.io/AI_Mobility/ai_mobility_flow_prediction.html)

**Tools:** Python · PyTorch · DuckDB · pandas · numpy · matplotlib · Google Colab
