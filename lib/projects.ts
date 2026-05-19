import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "./types";
import { markdownToHtml, splitLocaleContent } from "./markdown";

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
      title_zh: data.title_zh ?? "",
      tagline: data.tagline ?? "",
      tagline_zh: data.tagline_zh ?? "",
      skills: Array.isArray(data.skills) ? data.skills : [],
      thumbnail: data.thumbnail ?? "",
      content: "",
      content_zh: "",
      group: (data.group as Project["group"]) ?? "Analytics",
    };
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { en, zh } = splitLocaleContent(content);

  return {
    id: slug,
    slug,
    title: data.title ?? slug,
    title_zh: data.title_zh ?? "",
    tagline: data.tagline ?? "",
    tagline_zh: data.tagline_zh ?? "",
    skills: Array.isArray(data.skills) ? data.skills : [],
    thumbnail: data.thumbnail ?? "",
    content: await markdownToHtml(en),
    content_zh: zh ? await markdownToHtml(zh) : "",
    group: (data.group as Project["group"]) ?? "Analytics",
  };
}
