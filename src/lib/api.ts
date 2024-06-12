import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const POSTS_DIRECTORY = join(process.cwd(), "posts");

function getPostSlugs() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

/**
 * getPostBySlug returns a matching Post for a given `slug`.
 */
export function getPostBySlug(slug: string): Post {
  const trueSlug = slug.replace(/\.md$/, "");
  const fullPath = join(POSTS_DIRECTORY, `${trueSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: trueSlug, content } as Post;
}

/**
 * getAllPosts returns all posts from POSTS_DIRECTORY.
 *
 * TODO: filter out those whose `draft` = true when `process.NODE_ENV == production`
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return (
    slugs
      .map((slug) => getPostBySlug(slug))
      // .filter((post) => process.env.NODE_ENV !== "production" && !post.draft)
      .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  );
}
