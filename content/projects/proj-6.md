---
layout: post
title: 'Vision × Earth Observation: Remote Sensing and Deep Learning on Satellite Imagery'
thumbnail: /assets/img/projects/proj-6/thumbnail.png
tagline: 'From Sentinel-2 pixels to wildfire damage maps — applying CNNs and U-Net segmentation to satellite imagery to classify land cover and predict structural destruction.'
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
