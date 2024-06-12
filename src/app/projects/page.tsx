import Link from "next/link";
import { league } from "@/app/layout";

export default function Page() {
  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2
            className={`${league.className} max-w-sm text-4xl text-whiteish/80`}
          >
            Projects
          </h2>

          <nav className="relative flex flex-row gap-2 font-medium">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        🚧 Under Construction…
      </div>
    </section>
  );
}
