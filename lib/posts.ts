import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "./types";
import { markdownToHtml, splitLocaleContent } from "./markdown";

const postsDir = path.join(process.cwd(), "content/posts");

function slugFromFilename(filename: string): string {
  // Strip leading YYYY-MM-DD- date prefix, then .md
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
}

function dateFromFilename(filename: string): string {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "";
}

function findFileBySlug(slug: string): string | null {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.find((f) => slugFromFilename(f) === slug) ?? null;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = slugFromFilename(filename);
    const date = dateFromFilename(filename);
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      title_zh: data.title_zh ?? "",
      date: data.date ? String(data.date) : date,
      thumbnail: data.thumbnail ?? "",
      summary: data.description ?? data.summary ?? data.tagline ?? "",
      summary_zh: data.summary_zh ?? "",
      content: "",
      content_zh: "",
      hidden: data.hidden === true,
    };
  });

  return posts
    .filter((p) => !(p as Post & { hidden?: boolean }).hidden)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filename = findFileBySlug(slug);
  if (!filename) return null;

  const filePath = path.join(postsDir, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const date = dateFromFilename(filename);
  const { en, zh } = splitLocaleContent(content);

  return {
    slug,
    title: data.title ?? slug,
    title_zh: data.title_zh ?? "",
    date: data.date ? String(data.date) : date,
    thumbnail: data.thumbnail ?? "",
    summary: data.description ?? data.summary ?? data.tagline ?? "",
    summary_zh: data.summary_zh ?? "",
    content: await markdownToHtml(en),
    content_zh: zh ? await markdownToHtml(zh) : "",
  };
}
