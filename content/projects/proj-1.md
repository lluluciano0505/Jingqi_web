---
layout: post
title: 'Philadelphia Housing Price Prediction Model'
title_zh: '费城房价预测模型'
thumbnail: /assets/img/projects/proj-1/thumbnail.png
tagline: 'A spatial hedonic regression model trained on 25,585 real transactions — exposing the geographic inequality baked into how Philadelphia prices and values homes.'
tagline_zh: '基于2.5万条真实交易数据的空间特征价格回归模型——揭示费城房价估算中根植已久的地理不平等。'
group: Analytics
skills: [R, tidyverse, sf, spdep, ggplot2]
---

Philadelphia's housing market is deeply unequal — and this model makes that visible. Using 25,585 OPA property sales from 2023–2024, four progressively complex regression models were built, layering structural features, Census socioeconomics, spatial accessibility, and interaction terms.

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html" image="projects/proj-1/thumbnail.png" %}

The final model explains 61% of price variation. Living area, house age, healthcare proximity, and neighborhood income and education are dominant predictors. But the more revealing result: the model **systematically underpredicts in wealthy areas and overpredicts in disadvantaged ones** — suggesting official assessments may carry the same bias.

Prediction errors cluster spatially, pointing to neighborhood dynamics no regression captures. In high-unemployment areas, crime's negative impact on price shrinks — adding policing doesn't raise values when underlying economic conditions remain weak.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html)
[View Presentation →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/Presentation_slides.html#/title-slide)

**Tools:** R · tidyverse · sf · spdep · ggplot2

<!-- zh -->

费城的住房市场存在深度不平等——这个模型让这种不平等变得可见。基于2023–2024年间2.5万条OPA房产交易数据，本项目构建了四个复杂度逐步提升的空间特征价格回归模型，依次叠加结构特征、人口普查社会经济数据、空间可达性，以及交互项。

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html" image="projects/proj-1/thumbnail.png" %}

最终模型解释了61%的价格变异。居住面积、房龄、医疗设施可达性，以及所在社区的收入与教育水平是最显著的预测因子。但更具揭示性的结果是：**模型在富裕地区系统性低估，在弱势社区系统性高估**——这表明官方评估可能也存在同样的偏差。

预测误差在空间上呈现聚集性，指向任何回归模型都无法捕捉的邻里动态。在高失业率地区，犯罪率对房价的负向影响会缩小——当基础经济条件仍然薄弱时，加强治安并不会提升房产价值。

[查看完整分析 →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html)
[查看演示文稿 →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/Presentation_slides.html#/title-slide)

**工具：** R · tidyverse · sf · spdep · ggplot2
