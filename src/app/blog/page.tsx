import Link from "next/link";
import { Metadata } from "next";

import { getAllPosts } from "@/lib/api";
import { cooper } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and reflections on software development, side projects, and the craft of coding.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="w-full max-w-[1492px] mx-auto p-6 md:p-12">
      <h1
        className={cn(
          "max-w-4xl text-3xl md:text-4xl text-balance mb-10",
          cooper.className
        )}
      >
        Blog
      </h1>

      <div className="max-w-4xl space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-yellow-800/20 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-yellow-800 transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-stone-600 mb-3 block">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </time>
              {post.excerpt && (
                <p className="text-stone-700 leading-relaxed">{post.excerpt}</p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
