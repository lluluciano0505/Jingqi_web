export interface Project {
  id: string;
  slug: string;
  title: string;
  title_zh: string;
  tagline: string;
  tagline_zh: string;
  skills: string[];
  thumbnail: string;
  content: string;
  content_zh: string;
  group: "AI" | "ML" | "Analytics";
}

export interface Post {
  slug: string;
  title: string;
  title_zh: string;
  date: string;
  thumbnail: string;
  summary: string;
  summary_zh: string;
  content: string;
  content_zh: string;
}

export interface ExperienceEntry {
  institution: string;
  role: string;
  section: "Education" | "Experience";
  period: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  summary: string;
  details: string[];
  tags: string[];
}

export interface SiteSettings {
  intro_title: string;
  intro_title_zh: string;
  intro_text: string;
  intro_text_zh: string;
  social: { icon: string; link: string }[];
  resume: string;
}
