export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  skills: string[];
  thumbnail: string;
  content: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  summary: string;
  content: string;
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
  intro_text: string;
  social: { icon: string; link: string }[];
  resume: string;
}
