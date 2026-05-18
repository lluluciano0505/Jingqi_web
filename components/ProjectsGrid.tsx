import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Put proj-5 (DataTaxonomy) first
  const sorted = [
    ...projects.filter((p) => p.slug === "proj-5"),
    ...projects.filter((p) => p.slug !== "proj-5"),
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
        <p className="text-slate-500 mb-10">Selected work in AI, geospatial ML, and urban data.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
