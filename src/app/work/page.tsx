import Link from "next/link";
import { league } from "@/lib/fonts";

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
        <div>
          <span className="text-sm">December 2022 - July 2023</span>
          <h3 className={`${league.className} text-2xl`}>
            <a href="https://www.connectrn.com/" target="_blank">
              connectRN ↝
            </a>
          </h3>
          <p className="font-semibold">Software Engineer, Full Stack</p>
          <p>
            Developed a novel CLI static analysis tool written in Go to replay
            backend service usage. Other efforts included a focus on platform
            stability and documenting processes and SOPs for knowledge-sharing.
          </p>
        </div>

        <div>
          <span className="text-sm">September 2020 - November 2022</span>
          <h3 className={`${league.className} text-2xl`}>
            <a href="https://www.hellosaurus.com/" target="_blank">
              Hellosaurus ↝
            </a>
          </h3>
          <p className="font-semibold">Full Stack Engineer</p>
          <p>
            Worked on a variety of projects, from the marketing site powered by
            Next.js to the CMS and Creator Studio, a React-powered web app for
            creators to create and manage interactive videos backed by Unity.
          </p>
        </div>

        <div>
          <span className="text-sm">June 2020 - September 2020</span>
          <h3 className={`${league.className} text-2xl`}>
            <a href="https://www.moogsoft.com/" target="_blank">
              Moogsoft ↝
            </a>
          </h3>
          <p className="font-semibold">Software Engineering Intern</p>
          <p>
            Wrangled JavaScript charting libraries and helped optimize web app
            bundling and build performance for the new cloud-based AIOps
            platform.
          </p>
        </div>

        <div>
          <span className="text-sm">March 2017 - June 2020</span>
          <h3 className={`${league.className} text-2xl`}>
            <a href="https://www.menlosecurity.com/" target="_blank">
              Menlo Security ↝
            </a>
          </h3>
          <p className="font-semibold">
            Software Development Engineer in Test Co-op
          </p>
          <p>
            Developed an automated script to parse nightly test logs and update
            a spreadsheet for engineers to identity and fix flaky tests.
          </p>
        </div>
      </div>
    </section>
  );
}
