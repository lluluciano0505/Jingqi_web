"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/lib/types";

function makeId(e: ExperienceEntry) {
  return `${e.institution}-${e.period}`;
}

interface TimelineEntryProps {
  entry: ExperienceEntry;
  isActive: boolean;
  index: number;
}

function TimelineEntry({ entry, isActive, index }: TimelineEntryProps) {
  const [expanded, setExpanded] = useState(false);
  const id = makeId(entry);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" as const }}
      className={`pl-4 border-l-2 transition-colors duration-300 ${
        isActive ? "border-brand bg-brand/5" : "border-slate-200"
      } rounded-r-lg p-4`}
    >
      <div className="flex flex-wrap justify-between items-start gap-2">
        <div>
          <h4 className="font-semibold text-slate-900">{entry.institution}</h4>
          <p className="text-sm text-brand mt-0.5">{entry.role}</p>
          <p className="text-xs text-slate-400 mt-0.5">
            {entry.city}, {entry.region}
          </p>
        </div>
        <span className="text-xs text-slate-400 whitespace-nowrap">{entry.period}</span>
      </div>

      <p className="mt-2 text-sm text-slate-600">{entry.summary}</p>

      {entry.details && entry.details.length > 0 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-xs text-brand hover:underline"
        >
          {expanded ? "Show less ↑" : "Show details ↓"}
        </button>
      )}

      {expanded && (
        <ul className="mt-2 space-y-1">
          {entry.details.map((d, i) => (
            <li key={i} className="text-xs text-slate-600 flex gap-2">
              <span className="text-brand mt-0.5">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      {entry.tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

interface ExperienceTimelineProps {
  education: ExperienceEntry[];
  experience: ExperienceEntry[];
  activeId: string | null;
}

export default function ExperienceTimeline({
  education,
  experience,
  activeId,
}: ExperienceTimelineProps) {
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    if (activeId && activeId !== activeRef.current) {
      activeRef.current = activeId;
      const el = document.getElementById(activeId);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeId]);

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Education</h3>
        <div className="space-y-4">
          {education.map((e, i) => (
            <TimelineEntry
              key={makeId(e)}
              entry={e}
              isActive={makeId(e) === activeId}
              index={i}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Experience</h3>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <TimelineEntry
              key={makeId(e)}
              entry={e}
              isActive={makeId(e) === activeId}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
