import { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/api";
import { cooper } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Cedric Amaya",
  description:
    "Articles and reflections on software development, side projects, and the craft of coding.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  // Group posts by month and year
  const groupedPosts = posts.reduce(
    (groups, post) => {
      const date = new Date(post.date);
      const monthYear = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      if (!groups[monthYear]) {
        groups[monthYear] = [];
      }
      groups[monthYear].push(post);
      return groups;
    },
    {} as Record<string, typeof posts>
  );

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

      <div className="max-w-4xl">
        {Object.entries(groupedPosts).map(
          ([monthYear, postsInMonth], groupIndex) => (
            <div key={monthYear}>
              {groupIndex > 0 && <hr className="border-yellow-800/20 my-8" />}
              <h2 className="text-sm uppercase text-stone-600 mb-4 font-semibold tracking-wide">
                {monthYear}
              </h2>
              <div className="space-y-4">
                {postsInMonth.map((post) => (
                  <article
                    key={post.slug}
                    className={post.draft ? "opacity-60" : ""}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold group-hover:text-yellow-800 transition-colors">
                          {post.title}
                        </h3>
                        {post.draft && (
                          <span className="text-xs font-semibold uppercase px-2 py-0.5 bg-yellow-800/20 text-yellow-900 rounded">
                            Draft
                          </span>
                        )}
                      </div>
                      <time className="text-xs text-stone-600 mb-2 block">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      {post.excerpt && (
                        <p className="text-sm text-stone-700 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
