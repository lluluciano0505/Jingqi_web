import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { LocaleText, LocaleHtml } from "@/components/LocaleText";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

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

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const imgSrc = post.thumbnail || thumbnailPath(slug);

  return (
    <main className="min-h-screen pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand transition-colors mb-8"
        >
          ← Back
        </Link>

        {imgSrc && (
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-brand/80 to-slate-700 mb-8">
            <Image src={imgSrc} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <p className="text-sm text-slate-400 mb-2">{formatDate(post.date)}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
          <LocaleText en={post.title} zh={post.title_zh} />
        </h1>

        <LocaleHtml
          en={post.content}
          zh={post.content_zh}
          className="mt-8 prose prose-slate max-w-none"
        />
      </div>
    </main>
  );
}
