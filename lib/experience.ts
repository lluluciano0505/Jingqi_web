import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { ExperienceEntry } from "./types";

const dataFile = path.join(process.cwd(), "content/data/experience.yml");

export function getExperience(): ExperienceEntry[] {
  const raw = fs.readFileSync(dataFile, "utf8");
  return yaml.load(raw) as ExperienceEntry[];
}

export function getExperienceBySection(): {
  education: ExperienceEntry[];
  experience: ExperienceEntry[];
} {
  const all = getExperience().filter((e) => !(e as ExperienceEntry & { hidden?: boolean }).hidden);
  return {
    education: all.filter((e) => e.section === "Education"),
    experience: all.filter((e) => e.section === "Experience"),
  };
}
