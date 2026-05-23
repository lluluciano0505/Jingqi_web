"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";

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
  const { locale } = useLocale();
  const title = locale === "zh" && project.title_zh ? project.title_zh : project.title;
  const tagline = locale === "zh" && project.tagline_zh ? project.tagline_zh : project.tagline;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" as const }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full"
      >
        <div className="relative w-full h-28 bg-gradient-to-br from-brand/80 to-slate-700">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => {}}
          />
        </div>

        <div className="p-3.5">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-2">
            {tagline}
          </p>

          <div className="mt-2 flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap"
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
