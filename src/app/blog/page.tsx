import Link from "next/link";
import { league } from "@/lib/fonts";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";

function formatDateToMonthYear(dateStr: string): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
}

function groupByMonthYear(posts: Post[]): { [key: string]: Post[] } {
  return posts.reduce((acc, item) => {
    const monthYear = formatDateToMonthYear(item.date);
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(item);
    return acc;
  }, {} as { [key: string]: Post[] });
}

export default function Page() {
  const groupedBlogPosts = groupByMonthYear(getAllPosts());

  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>Blog</h2>

          <nav className="relative flex flex-row gap-2 font-semibold">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {Object.entries(groupedBlogPosts).map(([date, posts]) => (
          <div key={date}>
            <h3 className={`${league.className} text-2xl`}>{date}</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
