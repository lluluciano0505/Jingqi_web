"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

function thumbnailPath(slug: string): string | null {
  if (slug === "30-day-map-challenge") {
    return "/images/posts/30daymapchallenge/thumbnail.png";
  }
  if (slug === "who-gets-a-place-after-dark") {
    return "/images/posts/who-gets-a-place/thumbnail.png";
  }
  return null;
}

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const imgSrc = thumbnailPath(post.slug);
  const { locale } = useLocale();
  const title = locale === "zh" && post.title_zh ? post.title_zh : post.title;
  const summary = locale === "zh" && post.summary_zh ? post.summary_zh : post.summary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" as const }}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="group block rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full"
      >
        {/* Thumbnail */}
        <div className="relative w-full h-44 bg-gradient-to-br from-brand/80 to-slate-700">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-slate-400 mb-1">{formatDate(post.date)}</p>
          <h3 className="font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug">
            {title}
          </h3>
          {summary && (
            <p className="mt-2 text-sm text-slate-500 line-clamp-4">{summary}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
