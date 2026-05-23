// ProjectCard + ProjectsGrid.
// Two density modes:
//   - "canonical"     — live-site 3-col grid with full image + tagline + chips.
//   - "compact"       — 4-col grid with smaller image + 2-line tagline + 3 chips.
// The compact mode keeps the same card shell (rounded-xl, hover-lift, image
// scale-105) so visual rhythm is preserved.

function ProjectCardCanonical({ project, index, onOpen }) {
  const { locale } = useLocale();
  const title = pick(locale, project.title, project.title_zh);
  const tagline = pick(locale, project.tagline, project.tagline_zh);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group block text-left w-full rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full"
      >
        <div className="relative w-full h-48 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.8), #334155)" }}>
          <img
            src={project.img}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-slate-500 line-clamp-4">{tagline}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.skills.slice(0, 5).map((s) => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{s}</span>
            ))}
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function ProjectCardCompact({ project, index, onOpen }) {
  const { locale } = useLocale();
  const title = pick(locale, project.title, project.title_zh);
  const tagline = pick(locale, project.tagline, project.tagline_zh);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group block text-left w-full rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full"
      >
        <div className="relative w-full h-28 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.8), #334155)" }}>
          <img
            src={project.img}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-3.5">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-2">{tagline}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.skills.slice(0, 3).map((s) => (
              <span key={s} className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap" style={{ fontSize: 10 }}>{s}</span>
            ))}
          </div>
        </div>
      </button>
    </motion.div>
  );
}

const GROUP_ORDER = ["AI", "ML", "Analytics"];

function ProjectsGrid({ onOpenProject, density = "canonical" }) {
  const { locale } = useLocale();
  const t = SITE.t[locale].sections.projects;

  const grouped = GROUP_ORDER.map((key) => ({
    key,
    label: t.groups[key],
    items: SITE.projects.filter((p) => p.group === key),
  })).filter((g) => g.items.length > 0);

  const Card = density === "compact" ? ProjectCardCompact : ProjectCardCanonical;
  const gridCols =
    density === "compact"
      ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
  const groupGap = density === "compact" ? "space-y-10" : "space-y-16";
  const groupHeadMb = density === "compact" ? "mb-4" : "mb-6";

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">{t.title}</h2>
        <div className={groupGap}>
          {grouped.map(({ key, label, items }) => (
            <div key={key}>
              <h3 className={`text-lg font-semibold text-brand ${groupHeadMb} flex items-center gap-3`}>
                {label}
                {density === "compact" && (
                  <span className="text-xs font-normal text-slate-400">{items.length}</span>
                )}
                <span className="h-px flex-1" style={{ background: "rgba(30,58,95,0.2)" }} />
              </h3>
              <div className={gridCols}>
                {items.map((p, i) => (
                  <Card key={p.slug} project={p} index={i} onOpen={onOpenProject} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProjectsGrid, ProjectCardCanonical, ProjectCardCompact });
