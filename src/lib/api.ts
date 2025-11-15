import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = join(process.cwd(), "posts");

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  draft?: boolean;
}

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
 * Filters out those with `draft = false` in production.
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => process.env.NODE_ENV !== "production" || !post.draft)
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}
