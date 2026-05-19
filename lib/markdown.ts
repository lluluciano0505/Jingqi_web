import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export function splitLocaleContent(raw: string): { en: string; zh: string } {
  const sep = raw.indexOf("<!-- zh -->");
  if (sep === -1) return { en: raw, zh: "" };
  return {
    en: raw.slice(0, sep).trim(),
    zh: raw.slice(sep + "<!-- zh -->".length).trim(),
  };
}

function processLiquidIncludes(markdown: string): string {
  // Strip all {% include image.html %} tags — the page header already
  // shows the thumbnail, and markdown text links handle navigation.
  return markdown.replace(/\{%\s*include image\.html\s+.*?\s*%\}/g, "");
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(processLiquidIncludes(markdown));
  return result.toString();
}
