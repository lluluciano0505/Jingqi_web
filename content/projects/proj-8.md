---
layout: post
title: 'Philly Cultural Radar'
thumbnail: /images/projects/proj-8/thumbnail.png
tagline: 'A 3-layer AI pipeline that autonomously discovers, scrapes, and archives events from Philadelphia libraries and museums.'
skills: [React, Anthropic Claude API, Web Search, Vite, JavaScript]
---

Philly Cultural Radar is an agentic web application that automates the discovery and archiving of cultural events across Philadelphia's libraries and museums. The system runs a three-layer pipeline: geographic venue mapping, AI-powered event scraping, and structured data archiving — all triggered from a single interface.

**Layer 1 — Venue Map:** An interactive map renders all participating Philadelphia venues with type, address, and status metadata.

**Layer 2 — AI Scraping:** Each venue is passed to Claude (claude-sonnet-4-5) with a web search tool. The model autonomously navigates the venue's event pages, extracts upcoming events, and returns structured JSON — no hardcoded scraping logic.

**Layer 3 — Archive Table:** Scraped events are collected into a filterable, searchable table with title, date, venue, and category fields.

The pipeline replaces brittle rule-based scrapers with an LLM that can handle any venue website layout. Adding a new venue requires only a single entry in the data file.

[View on GitHub →](https://github.com/lluluciano0505/UrbanRhythm)
