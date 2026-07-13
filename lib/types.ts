export interface ProjectStat {
  value: string;
  label: string;
  label_zh?: string;
}

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
  stats: ProjectStat[];
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
  institution_zh?: string;
  role: string;
  role_zh?: string;
  section: "Education" | "Experience";
  period: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  summary: string;
  summary_zh?: string;
  details: string[];
  details_zh?: string[];
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
