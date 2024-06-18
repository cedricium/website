import { Metadata } from "next";
import Link from "next/link";
import { league } from "@/lib/fonts";
import { Project } from "@/interfaces/project";

export const metadata: Metadata = {
  title: "Projects | Cedric Amaya",
};

const PROJECTS: Project[] = [
  {
    name: "Unearth",
    url: "https://github.com/tryunearth",
    description:
      "Platform to help Redditors manage and regain control of their saved content.",
  },
  {
    name: "gitdl",
    url: "https://github.com/cedricium/gitdl",
    description:
      "Download files and directories locally from a remote git repository.",
  },
  {
    name: "RapidTabOpener",
    url: "https://github.com/cedricium/rapidtabopener",
    description:
      "Firefox extension to open all the websites you want with one click of a button.",
  },
  {
    name: "wit",
    url: "https://github.com/cedricium/wit",
    description: "An initial commit message generator as a git hook.",
  },
  {
    name: "Stork",
    url: "https://github.com/cedricium/stork",
    description: "Newborn delivery counting app.",
  },
  {
    name: "Medium Bookmarklets",
    url: "https://github.com/cedricium/medium-bookmarklets",
    description:
      "Easy way to save your place in Medium articles and return to them later.",
  },
  {
    name: "conundrum",
    url: "https://github.com/cedricium/conundrum",
    description: "A simple riddle game, built with React.",
  },
  {
    name: "maker-link.js",
    url: "https://github.com/cedricium/maker-link.js",
    description: "JavaScript library for creating customizable Maker Links.",
  },
];

export default function Page() {
  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>Projects</h2>

          <nav className="relative flex flex-row gap-2 font-semibold">
            <Link href="/">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <h3 className={`${league.className} text-2xl`}>
              <a href={project.url} target="_blank">
                {project.name} ↝
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}

        {/* <article className="mt-8 prose prose-stone prose-invert">
          <h2>Open Source Contributions</h2>
        </article> */}
      </div>
    </section>
  );
}
