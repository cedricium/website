import Link from "next/link";
import { league } from "@/lib/fonts";

export default function Page() {
  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>
            Software Engineer
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
        <p>
          Hello! Thanks for visiting my little corner of the web. I&apos;m
          Cedric: a full-stack software engineer, tinkerer, and solopreneur
          based out of the San Francisco Bay Area.
        </p>
        <p>
          My specialty lies in zero-to-one product development. I&apos;ve worked
          in a number of domains including: cyber security, AIOps, ed-tech, and
          health-tech.
        </p>
        <p>
          I&apos;m a user-centric and empathetic developer who loves to craft
          solutions for real-world problems and improve efficiency through
          automation.
        </p>
        <p>
          I don&apos;t just spend all day on the computer (looking at you Jason
          Adderly&apos;s boy)—when I&apos;m not programming, I enjoy fostering
          dogs, riding around on my old but reliable road bike, and watching
          Formula 1.
        </p>
      </div>
    </section>
  );
}
