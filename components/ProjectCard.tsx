"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

function thumbnailPath(slug: string): string {
  if (slug === "proj-5") return `/images/projects/${slug}/DataTaxonomy.png`;
  if (slug === "proj-7") return `/images/projects/${slug}/proj_7.png`;
  return `/images/projects/${slug}/thumbnail.png`;
}


interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const imgSrc = thumbnailPath(project.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" as const }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full"
      >
        {/* Thumbnail */}
        <div className="relative w-full h-48 bg-gradient-to-br from-brand/80 to-slate-700">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => {}}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">
            {project.tagline}
          </p>

          {/* Skill tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
