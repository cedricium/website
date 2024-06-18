import { Metadata } from "next";
import Link from "next/link";
import { league } from "@/lib/fonts";
import { Experience, Reference } from "@/interfaces/experience";

export const metadata: Metadata = {
  title: "Work Experience | Cedric Amaya",
};

const WORK_HISTORY: Experience[] = [
  {
    company: { name: "connectRN", url: "https://www.connectrn.com/" },
    doe: "December 2022 - July 2023",
    title: "Software Engineer, Full Stack",
    description:
      "Developed a novel CLI static analysis tool written in Go to replay backend service usage. Other efforts included a focus on platform stability and documenting processes and SOPs for knowledge-sharing.",
  },
  {
    company: { name: "Hellosaurus", url: "https://www.hellosaurus.com/" },
    doe: "September 2020 - November 2022",
    title: "Full Stack Engineer",
    description:
      "Worked on a variety of projects, from the marketing site powered by Next.js to the CMS and Creator Studio, a React-powered web app for creators to create and manage interactive videos backed by Unity.",
  },
  {
    company: { name: "Moogsoft", url: "https://www.moogsoft.com/" },
    doe: "June 2020 - September 2020",
    title: "Software Engineering Intern",
    description:
      "Wrangled JavaScript charting libraries and helped optimize web app bundling and build performance for the new cloud-based AIOps platform.",
  },
  {
    company: { name: "Menlo Security", url: "https://www.menlosecurity.com/" },
    doe: "March 2017 - June 2020",
    title: "Software Development Engineer in Test Co-op",
    description:
      "Developed an automated script to parse nightly test logs and update a spreadsheet for engineers to identity and fix flaky tests.",
  },
];

const REFERENCES: Reference[] = [
  {
    name: "Dan",
    title: "Engineering Manager",
    company: "connectRN",
    quote:
      "Cedric is a strengthening force on his team, a thoughtful developer with bright ideas and exceptional teamwork. His teammates gravitate toward him as they collaborate on projects, and he carefully shapes solutions around his discoveries and the feedback he receives, then documents his findings for others to follow… I was consistently impressed with Cedric's work and I know that he'll thrive in his next role.",
  },
  {
    name: "Jared",
    title: "Head of Engineering",
    company: "Hellosaurus",
    quote:
      "In more than two years as one of the earliest engineers at Hellosaurus, Cedric has artfully navigated the ambiguity that comes with such an early stage startup and grown to own some of the most critical areas of our codebase. His user-centric thinking and product intuition enable him to be especially prophylactic in his software design (i.e. to support how the product might evolve in the future)… Overall, Cedric is a powerful and flexible generalist who can be immediately productive in any JavaScript context. His technical skills, user-centric thinking, and low-ego team orientation make him a tremendous asset to any team lucky enough to have him.",
  },
  {
    name: "Anh",
    title: "Senior Software Engineer",
    company: "Moogsoft",
    quote:
      "I can always count on Cedric getting the work done. Very proactive, he can pick up the new tools quickly and able to apply them. Cedric is easy to work with, we had many brainstorm sessions with great productive results. It was a pleasure having Cedric as a team member.",
  },
  {
    name: "Mitch",
    title: "Senior Software Engineer",
    company: "Moogsoft",
    quote:
      "Curious, proactive, and easy to get along with: Cedric has proven that he possesses the qualities to become the best engineer he can be. He quickly became proficient in Vue, Jest, and the rest of our front-end stack, developing a reputation for quality, well-tested code. Though his job description focused on front-end development, he did not hesitate to jump in when we needed to benchmark our Node.js build process, or clarify requirements and designs with the product team. He already well understands that one of the keys to success is to take the company very seriously while simultaneously not taking yourself too seriously and keeping one's ego in check. Cedric would make a fine addition to any engineering team.",
  },
];

export default function Page() {
  return (
    <section className="flex flex-row gap-8 flex-wrap md:mt-10 md:flex-nowrap">
      <header className="w-full md:w-1/2">
        <div className="space-y-2 md:sticky md:top-36">
          <h2 className={`${league.className} max-w-sm text-4xl`}>
            Work Experience
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
        {WORK_HISTORY.map((experience) => (
          <div key={experience.company.name}>
            <span className="text-sm">{experience.doe}</span>
            <h3 className={`${league.className} text-2xl`}>
              <a href={experience.company.url} target="_blank">
                {experience.company.name} ↝
              </a>
            </h3>
            <p className="text-stone-400 font-semibold">{experience.title}</p>
            <p>{experience.description}</p>
          </div>
        ))}

        <article className="mt-8 prose prose-stone prose-invert">
          <h2>References</h2>

          {REFERENCES.map((reference) => (
            <div key={reference.name}>
              <blockquote
                className="mb-2"
                cite="https://www.linkedin.com/in/cedricamaya/details/recommendations/?detailScreenTabIndex=0"
              >
                <p className="mb-0 leading-normal">{reference.quote}</p>
              </blockquote>

              <footer>
                —{reference.name}, {reference.title} @ {reference.company}
              </footer>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
