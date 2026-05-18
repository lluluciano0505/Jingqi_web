---
layout: post
title: 'Philadelphia Housing Price Prediction Model'
thumbnail: /assets/img/projects/proj-1/thumbnail.png
tagline: 'A spatial hedonic regression model trained on 25,585 real transactions — exposing the geographic inequality baked into how Philadelphia prices and values homes.'
skills: [R, tidyverse, sf, spdep, ggplot2]
---

Philadelphia's housing market is deeply unequal — and this model makes that visible. Using 25,585 OPA property sales from 2023–2024, four progressively complex regression models were built, layering structural features, Census socioeconomics, spatial accessibility, and interaction terms.

{% include image.html url="https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html" image="projects/proj-1/thumbnail.png" %}

The final model explains 61% of price variation. Living area, house age, healthcare proximity, and neighborhood income and education are dominant predictors. But the more revealing result: the model **systematically underpredicts in wealthy areas and overpredicts in disadvantaged ones** — suggesting official assessments may carry the same bias.

Prediction errors cluster spatially, pointing to neighborhood dynamics no regression captures. In high-unemployment areas, crime's negative impact on price shrinks — adding policing doesn't raise values when underlying economic conditions remain weak.

[View Full Analysis →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/appendix_nolog.html)
[View Presentation →](https://lluluciano0505.github.io/Jingqi_Data_Policy_Portfolio/assignments/midterm/Presentation_slides.html#/title-slide)

**Tools:** R · tidyverse · sf · spdep · ggplot2
