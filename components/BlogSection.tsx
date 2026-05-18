import BlogCard from "./BlogCard";
import type { Post } from "@/lib/types";

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Blog & Creation</h2>
        <p className="text-slate-500 mb-10">Writing, maps, and spatial explorations.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
