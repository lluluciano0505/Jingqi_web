import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { SiteSettings } from "./types";

const settingsFile = path.join(process.cwd(), "content/data/settings.yml");

export function getSettings(): SiteSettings {
  const raw = fs.readFileSync(settingsFile, "utf8");
  const data = yaml.load(raw) as Record<string, unknown>;

  return {
    intro_title: (data.intro_title as string) ?? "",
    intro_title_zh: (data.intro_title_zh as string) ?? "",
    intro_text: (data.intro_text as string) ?? "",
    intro_text_zh: (data.intro_text_zh as string) ?? "",
    social: (data.social as SiteSettings["social"]) ?? [],
    resume: (data.resume as string) ?? "",
  };
}
