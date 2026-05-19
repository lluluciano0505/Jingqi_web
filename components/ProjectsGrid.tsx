"use client";

import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

interface ProjectsGridProps {
  projects: Project[];
}

const GROUP_ORDER: Project["group"][] = ["AI", "ML", "Analytics"];

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { locale } = useLocale();
  const t = translations[locale].sections.projects;

  const grouped = GROUP_ORDER.map((key) => ({
    key,
    label: t.groups[key],
    items: projects.filter((p) => p.group === key),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">{t.title}</h2>

        <div className="space-y-16">
          {grouped.map(({ key, label, items }) => (
            <div key={key}>
              <h3 className="text-lg font-semibold text-brand mb-6 flex items-center gap-3">
                {label}
                <span className="h-px flex-1 bg-brand/20" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
