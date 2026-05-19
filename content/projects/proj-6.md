---
layout: post
title: 'Vision × Earth Observation: Remote Sensing and Deep Learning on Satellite Imagery'
title_zh: '视觉 × 地球观测：遥感与深度学习卫星图像分析'
thumbnail: /assets/img/projects/proj-6/thumbnail.png
tagline: 'From Sentinel-2 pixels to wildfire damage maps — applying CNNs and U-Net segmentation to satellite imagery to classify land cover and predict structural destruction.'
tagline_zh: '从Sentinel-2像素到野火损毁图——将CNN和U-Net语义分割应用于卫星图像，进行土地覆盖分类与结构破坏预测。'
group: ML
categories: [Remote Sensing, Deep Learning, Computer Vision]
skills: [Python, PyTorch, Google Earth Engine, STAC API, GeoPandas, scikit-learn, Sentinel-2]
---

Satellite imagery sees what ground surveys can't — but turning pixels into meaning requires the right models. This portfolio applies computer vision and deep learning to two distinct Earth observation problems, using Sentinel-2 multispectral data as the shared foundation.

{% include image.html url="https://lluluciano0505.github.io/vision-EO/" image="projects/proj-6/thumbnail.png" %}

**Part 1 — EuroSAT Land Cover Classification**

A CNN is trained to classify multispectral satellite tiles into 10 land-use categories — from industrial zones to forests, rivers, and croplands — using the EuroSAT benchmark derived from Sentinel-2 imagery. Traditional ML baselines establish the performance floor; the CNN shows what spatial feature learning adds on top.

**Part 2 — 2025 LA Palisades Fire Damage Prediction**

In January 2025, the Palisades fire devastated residential areas across Los Angeles. Using pre- and post-fire Sentinel-2 imagery, a **U-Net semantic segmentation model** predicts structural damage at the parcel level. The model integrates Digital Elevation Model (DEM) aspect data — encoding how terrain shape drives fire spread — and is validated against CAL FIRE DINS field assessments on the ground.

The result is a topographically-aware damage prediction pipeline that operationalizes satellite imagery for rapid post-disaster assessment, with implications for insurance triage, resource deployment, and long-term rebuilding planning.

[View Full Project →](https://lluluciano0505.github.io/vision-EO/)

**Collaborators:** Tess Vu, Jingqi Lu, Ming Cao — UPenn MUSA 2026

**Tools:** Python · PyTorch · Google Earth Engine · STAC API · GeoPandas · scikit-learn · Sentinel-2

<!-- zh -->

卫星图像能看到地面勘测所无法触及的地方——但将像素转化为有意义的信息，需要正确的模型。本项目将计算机视觉和深度学习应用于两个截然不同的地球观测问题，以Sentinel-2多光谱数据作为共同基础。

{% include image.html url="https://lluluciano0505.github.io/vision-EO/" image="projects/proj-6/thumbnail.png" %}

**第一部分 — EuroSAT土地覆盖分类**

CNN被训练用于将多光谱卫星图像分类为10种土地利用类别——从工业区到森林、河流和农田——使用基于Sentinel-2的EuroSAT基准数据集。传统机器学习基准确立了性能下限；CNN则展示了空间特征学习所带来的额外提升。

**第二部分 — 2025年洛杉矶帕利塞兹山火损毁预测**

2025年1月，帕利塞兹山火重创洛杉矶多处住宅区。利用火灾前后的Sentinel-2影像，**U-Net语义分割模型**在地块级别预测结构损毁。模型整合了数字高程模型（DEM）的坡向数据——编码地形形状如何驱动火势蔓延——并与CAL FIRE DINS地面实地评估数据进行验证。

最终形成了一套具备地形感知能力的损毁预测流水线，可将卫星图像快速转化为灾后评估工具，对保险理赔分类、资源调配和长期重建规划均具有实际意义。

[查看完整项目 →](https://lluluciano0505.github.io/vision-EO/)

**合作者：** Tess Vu、Jingqi Lu、Ming Cao — UPenn MUSA 2026

**工具：** Python · PyTorch · Google Earth Engine · STAC API · GeoPandas · scikit-learn · Sentinel-2
