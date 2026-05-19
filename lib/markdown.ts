import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

function processLiquidIncludes(markdown: string): string {
  return markdown.replace(
    /\{%\s*include image\.html\s+(.*?)\s*%\}/g,
    (_, attrs) => {
      const get = (name: string) => {
        const m = attrs.match(new RegExp(`${name}="([^"]+)"`));
        return m ? m[1] : null;
      };

      const url = get("url");
      const imagePath = get("image");

      if (!imagePath) return "";

      const imgSrc = `/images/${imagePath}`;
      const img = `<img src="${imgSrc}" alt="Project preview" style="width:100%;border-radius:0.75rem;display:block" />`;

      if (url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="display:block;margin:2rem 0">${img}</a>`;
      }

      return `<div style="margin:2rem 0">${img}</div>`;
    }
  );
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(processLiquidIncludes(markdown));
  return result.toString();
}
