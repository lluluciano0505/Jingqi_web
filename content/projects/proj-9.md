---
layout: post
title: 'Space-Time Prediction of Bike Share Demand'
title_zh: '共享单车时空需求预测'
thumbnail: /images/projects/proj-9/thumbnail.png
tagline: '135,000 trips. 93 stations. A space-time panel model that shows why the last hour of demand tells you more than the whole neighborhood does.'
tagline_zh: '13.5万次骑行，93个站点。时空面板模型揭示：过去一小时的需求，比整个社区人口统计更能预测下一小时。'
group: Analytics
skills: [R, tidyverse, sf, tidycensus, ggplot2, riem]
---

Philadelphia's Indego bike-share system logged 135,491 trips in Q2 2024 across 93 stations. This project builds a space-time panel model — 169,368 station-hour records at hourly resolution — to forecast demand and identify where and when predictions break down.

**Model Design**

Five nested OLS models were estimated, progressively adding feature groups: time and weather → temporal lags → neighborhood demographics → station fixed effects → rush hour interactions. A Poisson GLM was also tested as a count-appropriate alternative.

The decisive finding came early: **Model 2 (temporal lags only) achieved MAE 0.71 trips per station-hour**, outperforming all more complex specifications. The 1-hour lag and same-hour-previous-day lag alone explain most of the predictable variation. Adding demographics, station fixed effects, perfect-weather indicators, and rolling 7-day means pushed MAE to 0.73 — a small but consistent degradation, pointing to overfitting rather than richer signal.

**Temporal cross-validation** was enforced strictly: train on weeks 1–22 (April–early June), test on weeks 23–26 (late June). No lookahead bias.

**Key Findings**

- **Demand is path-dependent.** Recent history predicts better than neighborhood context. Static demographic variables (income, transit share, race) add almost nothing once lags are included.
- **High-demand stations are harder to predict.** Center City and University City stations reach MAE of 1.5 trips/hour due to volatile commuter, tourist, and university traffic. Peripheral residential stations hover near 0.5.
- **PM rush is the worst-predicted window.** Weekday 3–6 PM shows the largest absolute errors — heterogeneous commute behavior and competing demand create patterns OLS can't capture.
- **Q2 is noisier than Q1.** Warm-season leisure trips introduce volatility absent from winter commute patterns; the same model architecture achieves MAE 0.50 on Q1 2025 data.
- **Missing signals dominate residuals.** Events, university calendars, transit disruptions, and station capacity are unobserved — structured residuals point directly to these gaps.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/assignment_5/hw_5.html)

**Tools:** R · tidyverse · sf · tidycensus · riem · ggplot2

<!-- zh -->

费城 Indego 共享单车系统在2024年第二季度共记录了135,491次骑行，覆盖93个站点。本项目构建了一个时空面板模型——以小时为分辨率，共169,368条站点-小时观测记录——用于预测需求并识别预测失准的时空规律。

**模型设计**

本项目逐步嵌套估计了5个OLS模型：时间与天气 → 时间滞后项 → 社区人口统计 → 站点固定效应 → 早晚高峰交互项。同时测试了适合计数数据的泊松GLM作为对比。

关键发现在早期便已浮现：**模型2（仅含时间滞后项）实现了每站点-小时0.71次的平均绝对误差（MAE）**，优于所有更复杂的规格。1小时滞后项与"前一天同一小时"滞后项，单独就能解释大部分可预测变异。加入人口统计、站点固定效应、"完美天气"指标和7天滚动均值后，MAE反升至0.73——轻微但稳定的退步，指向过拟合而非信号增益。

**时序交叉验证**严格执行：以第1–22周（4月至6月初）为训练集，第23–26周（6月末）为测试集，无任何前瞻偏误。

**核心发现**

- **需求具有路径依赖性。** 近期历史比社区背景更能预测需求。一旦加入滞后项，静态人口统计变量（收入、公交通勤比例、种族构成）几乎不提供增量信息。
- **高需求站点更难预测。** 中心城区和大学城站点的MAE高达1.5次/小时，源于通勤者、游客和校园流量的高度波动；外围居住型站点的MAE约为0.5次。
- **工作日下午是预测最差的时段。** 工作日15–18时误差最大——多元化的通勤行为与相互竞争的需求产生了OLS无法捕捉的模式。
- **第二季度比第一季度噪声更大。** 温暖季节的休闲骑行引入了冬季通勤模式中不存在的波动性；相同模型架构在2025年第一季度数据上MAE为0.50。
- **残差揭示缺失信号。** 赛事活动、大学校历、公交中断和站点容量均未纳入模型——结构性残差直接指向这些信息缺口。

[查看完整分析 →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/assignment_5/hw_5.html)

**工具：** R · tidyverse · sf · tidycensus · riem · ggplot2
