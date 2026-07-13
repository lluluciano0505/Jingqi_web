import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import { LocaleText, LocaleHtml } from "@/components/LocaleText";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

function thumbnailPath(slug: string): string {
  if (slug === "proj-5") return `/images/projects/${slug}/DataTaxonomy.png`;
  if (slug === "proj-7") return `/images/projects/${slug}/proj_7.png`;
  return `/images/projects/${slug}/thumbnail.png`;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const imgSrc = thumbnailPath(slug);

  return (
    <main className="min-h-screen pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand transition-colors mb-8"
        >
          ← Back
        </Link>

        {/* Thumbnail */}
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-brand/80 to-slate-700 mb-8">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
          <LocaleText en={project.title} zh={project.title_zh} />
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          <LocaleText en={project.tagline} zh={project.tagline_zh} />
        </p>

        {project.stats.length > 0 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-3 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-brand">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  <LocaleText en={stat.label} zh={stat.label_zh || stat.label} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-brand/10 text-brand font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <LocaleHtml
          en={project.content}
          zh={project.content_zh}
          className="mt-10 prose prose-slate max-w-none"
        />
      </div>
    </main>
  );
}
