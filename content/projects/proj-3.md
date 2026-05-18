---
layout: post
title: 'Geolife Daily Mobility: Reconstructing Urban Movement from GPS Trajectories'
thumbnail: /assets/img/projects/proj-3/thumbnail.png
tagline: '182 people. Years of GPS traces across Beijing. What does it take to go home — and when do people decide to keep exploring?'
skills: [Python, pandas, geopandas, numpy, matplotlib, scipy, Quarto]
---

The [Microsoft Geolife dataset](https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/) records GPS trajectories from 182 users across several years in Beijing — millions of location points that, with the right processing, become stories about how people actually move through cities.

{% include image.html url="https://lluluciano0505.github.io/Python-Mobility/" image="projects/proj-3/thumbnail.png" %}

Raw coordinates are converted into structured visit events, classifying each stop as home or non-home. From there, home-based trips are reconstructed to ask two questions: **How does the probability of returning home evolve as a trip unfolds?** And do distinct mobility "types" emerge across users?

Hazard and survival models capture the return-home dynamics — showing that the pull toward home shifts predictably over the course of a day. User-level clustering then groups people by their mobility signatures, revealing that routine and exploration are not uniformly distributed across a population.

[View Full Project →](https://lluluciano0505.github.io/Python-Mobility/)

**Tools:** Python · pandas · geopandas · numpy · matplotlib · scipy · Quarto
