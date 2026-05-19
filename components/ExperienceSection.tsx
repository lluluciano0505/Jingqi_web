"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";
import type { ExperienceEntry } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const ExperienceMap = dynamic(() => import("./ExperienceMap"), { ssr: false });

interface ExperienceSectionProps {
  education: ExperienceEntry[];
  experience: ExperienceEntry[];
}

export default function ExperienceSection({
  education,
  experience,
}: ExperienceSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const allEntries = [...education, ...experience];
  const { locale } = useLocale();
  const t = translations[locale].sections.experience;

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.title}</h2>
        <p className="text-slate-500 mb-10">{t.subtitle}</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-80 w-full mb-10 rounded-xl overflow-hidden shadow-sm"
        >
          <ExperienceMap
            entries={allEntries}
            activeId={activeId}
            onMarkerClick={setActiveId}
          />
        </motion.div>

        <ExperienceTimeline
          education={education}
          experience={experience}
          activeId={activeId}
        />
      </div>
    </section>
  );
}
