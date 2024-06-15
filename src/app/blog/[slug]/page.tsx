import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { league } from "@/lib/fonts";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHTML from "@/lib/markdownToHTML";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;
  const post = getPostBySlug(slug);

  return {
    title: `${post.title} | Cedric Amaya`,
    description: post.excerpt,
  };
}

function formatDateString(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export default async function Page({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const content = await markdownToHTML(post.content);

  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>
            {post.title}
          </h2>

          <nav className="relative flex flex-row gap-2 font-semibold">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <p className="text-sm">{formatDateString(post.date)}</p>

        <article
          className="prose prose-stone prose-invert max-w-prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
