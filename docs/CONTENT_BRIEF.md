I'm sharing a folder of content files for my personal portfolio website. Here's what each file contains:

---

## Who I Am

**Jingqi Lu** — AI & Geospatial ML Engineer, actively job-seeking.
Focus: LLM integration, agentic systems, geospatial data engineering.
Email: lluluciano0505@gmail.com | GitHub: lluluciano0505 | LinkedIn: jingqi-lu-04a910266

---

## File Index

### `data/settings.yml`
Site-wide config. Contains:
- `intro_title`: my homepage headline (`AI & Geospatial ML Engineer`)
- `intro_text`: my homepage self-introduction (3 paragraphs, job-seeking tone)
- `social`: links to GitHub, LinkedIn, email
- `menu`: site navigation structure
- `resume`: path to CV PDF

### `data/experience.yml`
My full timeline as a YAML list. Each entry has: `city`, `institution`, `role`, `section` (Education or Experience), `period`, `summary`, `details` (bullet points), `tags`, and lat/lng coordinates.

Entries in order:
1. UCL — BA Geography with Social Data Science (2022–2025)
2. University of Amsterdam — Erasmus Exchange (2024)
3. UPenn — MS Urban Spatial Analytics, GPA 4.0 (2025–2026)
4. UPenn — Research Assistant: AI scraping agent for urban event intelligence (2026–)
5. Henning Larsen — AI data taxonomy pipeline for architectural archives, LLM/VLM via OpenRouter (2026–) ← most important
6. Hisense Cold Chain — Data Analysis Assistant (2024)
7. New Oriental — IELTS Teaching Assistant (2023)

### `projects/proj-1.md` — Philadelphia Housing Price Prediction
Spatial hedonic regression on 25,585 transactions. R, sf, spdep. Reveals geographic bias in assessments.

### `projects/proj-2.md` — Philadelphia Fire Alarms Analysis
ML model to predict false alarms (77% of calls). R, caret, spatstat.

### `projects/proj-3.md` — Geolife Daily Mobility
GPS trajectory analysis across Beijing. Python, geopandas, scipy.

### `projects/proj-4.md` — LSTM Spatial Flow Prediction
2-layer LSTM predicting urban flow across 500m grid cells. PyTorch, DuckDB.

### `projects/proj-5.md` — DataTaxonomy (Henning Larsen) ← FEATURED
AI pipeline classifying large architectural file archives into structured metadata. Python, OpenRouter API, Vision Models, Streamlit. Private repo.

### `projects/proj-6.md` — Vision × Earth Observation
CNN + U-Net on Sentinel-2 imagery for land cover and wildfire damage mapping. PyTorch, Google Earth Engine.

### `projects/proj-7.md` — Gym Network Report
Network analysis of gym accessibility. Python, NetworkX, Plotly.

Each project `.md` file has:
- `title`, `tagline` (one-liner), `skills` (list) in the frontmatter
- Full project description in the body (markdown)

### `posts/`
Two creative/blog entries:
- `2025-11-01-30-day-map-challenge.md` — 30-day map challenge participation
- `2025-12-01-who-gets-a-place-after-dark.md` — spatial analysis piece

### `pages/about.md`
My About Me page. Currently written in "graduate student" tone — should be rewritten to job-seeking tone if used.

### `pages/experience.md`
Stub page for the Experience section.

### `assets/CV_Jingqi.pdf`
My full CV as a PDF, available for download from the site.

### Images (not included in this export)
Images are in `assets/img/` in the original repo:
- `Lujingqi.jpg` / `headshot.webp` — my headshot
- `projects/proj-1/thumbnail.png` ... `proj-7/` — project thumbnails
- `musa-logo.png` — UPenn MUSA logo
