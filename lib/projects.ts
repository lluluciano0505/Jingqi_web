import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "./types";
import { markdownToHtml } from "./markdown";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(projectsDir, filename), "utf8");
    const { data } = matter(raw);

    return {
      id: slug,
      slug,
      title: data.title ?? slug,
      tagline: data.tagline ?? "",
      skills: Array.isArray(data.skills) ? data.skills : [],
      thumbnail: data.thumbnail ?? "",
      content: "",
    };
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    id: slug,
    slug,
    title: data.title ?? slug,
    tagline: data.tagline ?? "",
    skills: Array.isArray(data.skills) ? data.skills : [],
    thumbnail: data.thumbnail ?? "",
    content: await markdownToHtml(content),
  };
}
