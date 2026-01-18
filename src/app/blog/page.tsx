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

  // Group posts by year
  const groupedPosts = posts.reduce(
    (groups, post) => {
      const date = new Date(post.date);
      const year = date.toLocaleDateString("en-US", {
        year: "numeric",
      });

      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(post);
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
        {Object.entries(groupedPosts)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, postsInYear], groupIndex) => (
            <div key={year}>
              {groupIndex > 0 && <hr className="border-yellow-800/20 my-8" />}
              <div className="text-sm uppercase text-stone-600 mb-4 font-semibold tracking-wide">
                {year}
              </div>
              <div className="space-y-1">
                {postsInYear.map((post) => {
                  const date = new Date(post.date);
                  const month = date.toLocaleDateString("en-US", {
                    month: "short",
                  });
                  const day = date.getDate().toString().padStart(2, "0");

                  return (
                    <article
                      key={post.slug}
                      className={post.draft ? "opacity-60" : ""}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex gap-4 items-baseline"
                      >
                        <time className="text-xs text-stone-600 uppercase w-12 shrink-0">
                          {month} {day}
                        </time>
                        <div className="flex items-center gap-2 flex-1">
                          <h2 className="text-md text-stone-700 font-semibold group-hover:text-yellow-800 transition-colors">
                            {post.title}
                          </h2>
                          {post.draft && (
                            <span className="text-xs font-semibold uppercase px-2 py-0.5 bg-yellow-800/20 text-yellow-900 rounded">
                              Draft
                            </span>
                          )}
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
