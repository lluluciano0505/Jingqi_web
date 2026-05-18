# Build My Personal Portfolio Website

## Who I Am

I'm **Jingqi Lu**, an AI/ML engineer actively looking for a job. My focus is on LLM integration, agentic systems, and geospatial data engineering.

**Homepage intro (already written, use this exactly):**
- Title: `AI & Geospatial ML Engineer`
- Text:
  > I build AI agent systems and LLM-powered pipelines that turn unstructured data into structured, queryable knowledge.
  >
  > Currently leading an AI agent–based data classification system at Henning Larsen, integrating multiple LLMs and VLMs via OpenRouter to automate semantic parsing of large-scale architectural project files. Also building AI-driven urban event databases at UPenn using automated scraping agents.
  >
  > Skilled in Python, LLM/VLM integration, agentic modeling, deep learning (CNN, Mask R-CNN, U-Net), and geospatial engineering. Open to AI/ML engineering roles in urban tech, data infrastructure, or applied AI.

**Contact / Social:**
- Email: lluluciano0505@gmail.com
- GitHub: https://github.com/lluluciano0505
- LinkedIn: https://www.linkedin.com/in/jingqi-lu-04a910266
- CV PDF: available at `/assets/CV_Jingqi.pdf`

---

## What I Want to Build

A **Next.js personal portfolio website** with a **scroll-driven, story-like feel**:
- The page should guide the viewer through my story as they scroll down
- Smooth animations on scroll (use **Framer Motion**)
- Modern, clean design — think minimal but expressive, not generic template
- Sections: Hero → About → Projects (featured) → Experience → Contact
- Deploy to **Vercel** (connect GitHub repo)

**Tech stack:** Next.js (App Router), Tailwind CSS, Framer Motion

---

## My Content (all files are in this folder)

### `data/settings.yml`
Site-wide settings: my name, intro title/text, social links, menu structure.

### `data/experience.yml`
My full experience timeline in YAML — includes Education and Work Experience entries, each with: city, institution, role, period, summary, details (bullet points), tags, and lat/lng coordinates.

**Key entries to highlight:**
- **Henning Larsen** (2026.01–): AI agent data taxonomy for architectural archives — LLM/VLM orchestration via OpenRouter, benchmarked Claude 3.5 vs GPT-4o
- **UPenn Research Assistant** (2026.02–): AI-scraping agent for urban event intelligence
- **Hisense Cold Chain** (2024.07–08): Data analysis and visualization

### `projects/` — 7 project markdown files

| File | Title | Key Skills |
|------|-------|------------|
| proj-1.md | Philadelphia Housing Price Prediction | R, spatial regression, hedonic model |
| proj-2.md | Philadelphia Fire Alarms Analysis | R, spatial ML, random forest |
| proj-3.md | Geolife Daily Mobility (GPS Trajectories) | Python, pandas, geopandas |
| proj-4.md | LSTM Spatial Flow Prediction | Python, PyTorch, deep learning |
| proj-5.md | DataTaxonomy (Henning Larsen) | Python, LLM, OpenRouter, Streamlit — **most important project** |
| proj-6.md | Vision × Earth Observation (Remote Sensing) | PyTorch, CNN, U-Net, Sentinel-2 |
| proj-7.md | Gym Network Report | Python, NetworkX |

Each `.md` file has a `tagline` field (one-liner summary) and full content in the body.

### `posts/`
2 blog posts / creative work entries. Can be shown in a Blog section or omitted if it clutters the site.

### `pages/about.md`
My About Me text — **needs to be rewritten** to match job-seeking tone (remove "graduate student" framing, focus on what I do and what I'm looking for). Use the homepage intro as the tone reference.

### `assets/CV_Jingqi.pdf`
My CV — link to it from the site as a downloadable PDF.

---

## Images

Images are **not included** in this export (they're binary files). For now:
- Use placeholder/gradient backgrounds where project thumbnails would go
- My headshot filename is `Lujingqi.jpg` (or `headshot.webp`) — I'll add it manually later
- Project thumbnails live at paths like `/assets/img/projects/proj-1/thumbnail.png`

---

## What to Build First

1. **Set up Next.js project** with Tailwind CSS + Framer Motion
2. **Build the homepage** with scroll-driven sections:
   - Hero (name, title, CTA to CV)
   - Featured Projects (3–4 cards, pull from project md files)
   - Experience timeline (pull from experience.yml)
   - Contact / footer
3. **Parse the content files** — use `gray-matter` for `.md` frontmatter, `js-yaml` for `.yml`
4. **About page** — rewrite the text with a job-seeking, first-person tone
5. **Projects index page** — grid of all 7 projects with taglines and skill tags
6. **Individual project pages** — render the markdown body

## Design Notes

- Color palette: up to you, but something dark/neutral with one accent color works well for AI/ML portfolios
- Typography: clean sans-serif, generous whitespace
- The scroll animation should feel intentional, not gimmicky — fade-in and slide-up is enough
- DataTaxonomy (proj-5) is my most impressive project — make sure it's featured prominently on the homepage
