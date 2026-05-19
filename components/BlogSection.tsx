"use client";

import BlogCard from "./BlogCard";
import type { Post } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const { locale } = useLocale();
  const t = translations[locale].sections.blog;

  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.title}</h2>
        <p className="text-slate-500 mb-10">{t.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
