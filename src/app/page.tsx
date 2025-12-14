import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

import { getAllPosts } from "@/lib/api";
import { cooper } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { InteractiveComputer } from "@/components/interactive-computer";
import { QuotationMark } from "@/components/quotation-mark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";

const EXPERIENCE = [
  {
    company: "Sagepost",
    role: "Lead Software Engineer",
    from: new Date(2025, 4),
    to: null,
    website: "https://sagepost.ai",
  },
  {
    company: "connectRN",
    role: "Software Engineer",
    from: new Date(2022, 11),
    to: new Date(2023, 6),
    website: "https://connectrn.com",
  },
  {
    company: "Hellosaurus",
    role: "Full Stack Engineer",
    from: new Date(2020, 7),
    to: new Date(2022, 10),
    website: "https://hellosaurus.com",
  },
  {
    company: "Moogsoft",
    role: "Software Engineering Intern",
    from: new Date(2020, 5),
    to: new Date(2020, 7),
    website: "https://moogsoft.com",
  },
  {
    company: "Mozilla",
    role: "Open Source Contributor (Firefox Notes)",
    from: new Date(2017, 6),
    to: new Date(2018, 6),
    website: "https://github.com/mozilla/notes",
  },
  {
    company: "Menlo Security",
    role: "Software Development Engineer in Test Co-op",
    from: new Date(2017, 2),
    to: new Date(2020, 5),
    website: "https://menlosecurity.com",
  },
];

const RECOMMENDATIONS = [
  {
    author: "Dan L.",
    role: "Engineering Manager",
    company: "connectRN",
    quote:
      "Cedric is a strengthening force on his team, a thoughtful developer with bright ideas and exceptional teamwork… He deleted thousands of lines of unused code, then designed a novel process to automatically detect dead code for future cleanup efforts… I was consistently impressed with Cedric's work and I know that he'll thrive in his next role.",
  },
  {
    author: "Jared S.",
    role: "Head of Engineering",
    company: "Hellosaurus",
    quote:
      "In more than two years as one of the earliest engineers at Hellosaurus, Cedric has artfully navigated the ambiguity that comes with such an early stage startup and grown to own some of the most critical areas of our codebase… His user-centric thinking and product intuition enable him to be especially prophylactic in his software design (i.e. to support how the product might evolve in the future).",
  },
  {
    author: "Mitch L.",
    role: "Senior Software Engineer",
    company: "Moogsoft",
    quote:
      "Curious, proactive, and easy to get along with: Cedric has proven that he possesses the qualities to become the best engineer he can be… He quickly became proficient in Vue, Jest, and the rest of our front-end stack, developing a reputation for quality, well-tested code… Cedric would make a fine addition to any engineering team.",
  },
  {
    author: "Anh P.",
    role: "Senior Software Engineer",
    company: "Moogsoft",
    quote:
      "I can always count on Cedric getting the work done… Very proactive, he can pick up the new tools quickly and able to apply them… Cedric is easy to work with, we had many brainstorm sessions with great productive results.",
  },
];

const CASE_STUDIES = [
  {
    slug: "/projects/hellosaurus-branded-subscription-flow",
    title: "Transforming Checkout at Hellosaurus",
    summary:
      "Built a custom subscription checkout with TypeScript, Next.js, and Stripe Elements, increasing sign-ups sixfold and processing over $50K in transactions.",
    company: {
      name: "Hellosaurus",
      logo: "https://www.hellosaurus.com/images/hellosaurus.png",
    },
  },
  {
    slug: "/projects/hellosaurus-homescreen-curation-tooling",
    title: "Rebuilding App Curation at Hellosaurus",
    summary:
      "Developed a Server-Driven UI system enabling instant homescreen updates, reducing release cycles and saving over 6 hours per update.",
    company: {
      name: "Hellosaurus",
      logo: "https://www.hellosaurus.com/images/hellosaurus.png",
    },
  },
  {
    slug: "/projects/connectrn-api-endpoint-analyzer",
    title: "Accelerating API Insights at connectRN",
    summary:
      "Developed a Go CLI tool to analyze API usage via AWS logs, automating manual reviews and enabling retirement of 20+ unused endpoints.",
    company: {
      name: "connectRN",
      logo: "https://cdn.prod.website-files.com/689ccaaf2d508bcba0f8168a/689de32b115aa29f1c0f4bf5_CRN_Wordmark_Navy%20and%20Purple.png",
    },
  },
  {
    slug: "/projects/hellosaurus-moments-api",
    title: "Scaling Engagement at Hellosaurus",
    summary:
      'Created the "Moments" API with Node.js and PostgreSQL to capture user-generated content, powering over 500K family highlights in-app.',
    company: {
      name: "Hellosaurus",
      logo: "https://www.hellosaurus.com/images/hellosaurus.png",
    },
  },
  {
    slug: "/projects/connectrn-feature-flag-viewer",
    title: "Optimizing Operations at connectRN",
    summary:
      "Led the creation of a React-based LaunchDarkly flag viewer, eliminating extra licenses and saving $8K annually.",
    company: {
      name: "connectRN",
      logo: "https://cdn.prod.website-files.com/689ccaaf2d508bcba0f8168a/689de32b115aa29f1c0f4bf5_CRN_Wordmark_Navy%20and%20Purple.png",
    },
  },
];

const SKILLS = [
  "TypeScript",
  "JavaScript (ES6+)",
  "Python",
  "Go",
  "SQL",
  "HTML5",
  "CSS3",
  "Node.js",
  "Next.js",
  "React",
  "React Native",
  "Express.js",
  "Django",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Pinecone DB",
  "Drizzle ORM",
  "GraphQL",
  "REST",
  "Jest",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Docker",
  "Amazon Web Services (AWS)",
  "AWS S3",
  "AWS ELB",
  "Vercel",
  "Vercel AI SDK",
  "LangChain",
  "Celery",
  "Stripe Elements",
  "LaunchDarkly",
  "Storybook",
  "Figma",
  "Jira",
  "Confluence",
];

export default function Page() {
  const recentPosts = getAllPosts().slice(0, 5);
  return (
    <div className="flex flex-col">
      <section>
        <div className="w-full max-w-[1492px] mx-auto p-6 md:p-12 space-y-6">
          <h1
            className={cn(
              "max-w-4xl text-3xl md:text-4xl text-balance",
              cooper.className
            )}
          >
            Full-Stack Product Engineer
          </h1>
          {/* <p className="md:max-w-prose text-balance text-muted-foreground">
            Hi, I&apos;m Cedric! With a unique background in retail, customer
            service, and manual QA, I prioritize the end-user, delivering
            intuitive, impactful, and delightful experiences across various
            domains.
          </p> */}
          <Button
            size="sm"
            className="rounded-full"
            asChild
          >
            <Link href={"https://www.linkedin.com/in/cedricamaya"}>
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:items-start gap-12 w-full max-w-[1492px] mx-auto p-6 md:p-12">
        <div className="flex-1 shrink-0 flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase">Experience</h2>
          <div className="flex flex-col gap-3 md:gap-1">
            {EXPERIENCE.map((work) => (
              <div
                key={work.company}
                className="flex gap-4"
              >
                <h4 className="text-muted-foreground w-24 min-w-24">
                  {new Date(work.from).getFullYear()} -{" "}
                  {work?.to ? new Date(work.to).getFullYear() : "Present"}
                </h4>
                <div className="flex flex-col md:flex-row gap-0.5">
                  <div className="w-36 min-w-36">
                    <a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-800 transition-colors"
                    >
                      {work.company}
                    </a>
                  </div>
                  <p className="text-muted-foreground">{work.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center min-w-0">
          <Carousel className="gap-4 w-full">
            <CarouselContent>
              {RECOMMENDATIONS.map((rec) => (
                <CarouselItem key={rec.author}>
                  <div className="h-full">
                    <Card className="flex flex-col justify-between shadow-none bg-background border-yellow-800/20 border-2 h-full">
                      <CardContent
                        className={cn(
                          "flex flex-col items-start justify-center gap-2 p-6",
                          cooper.className
                        )}
                      >
                        <QuotationMark />
                        <span className="text-lg">{rec.quote}</span>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <span className="font-semibold">{rec.author}</span>
                        <span className="text-muted-foreground">
                          {rec.role}, {rec.company}
                        </span>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 justify-end">
              <CarouselPrevious className="border-none bg-yellow-800/10 hover:bg-yellow-800/20 text-muted-foreground" />
              <CarouselNext className="border-none bg-yellow-800/10 hover:bg-yellow-800/20 text-muted-foreground" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="bg-stone-800">
        <div className="p-6 md:p-12 w-full max-w-[1492px] mx-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-b-0 border-[rgba(226,213,197,0.2)]">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.slug}
                className="p-8 border-[rgba(226,213,197,0.2)] md:odd:border-r-2 border-b-2 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <div className="flex flex-col gap-12">
                  <h3
                    className={cn(
                      "text-base font-semibold text-stone-300",
                      cooper.className
                    )}
                  >
                    {study.title}
                  </h3>
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-balance text-muted-foreground text-sm">
                      {study.summary}
                    </p>

                    <Link
                      href={study.slug}
                      className="flex items-center gap-1 text-amber-600 hover:underline"
                    >
                      <span>Learn more</span>
                      <MoveRightIcon className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-8 border-[rgba(226,213,197,0.2)] md:odd:border-r-2 border-b-0 md:[&:nth-last-child(2)]:border-b-0">
              <div className="h-full flex flex-col items-center justify-center">
                <InteractiveComputer />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-8 border-2 border-[rgba(226,213,197,0.2)] bg-[length:8px_8px] bg-[radial-gradient(#36342E_1px,_transparent_1px)]">
            <Marquee speed={10}>
              <MarqueeContent>
                {SKILLS.slice(0, SKILLS.length / 2).map((trick) => (
                  <MarqueeItem
                    key={trick}
                    asChild
                  >
                    <div className="p-2 bg-stone-800 border-2 border-[rgba(226,213,197,0.2)]">
                      <p className="text-sm leading-tight text-muted-foreground">
                        {trick}
                      </p>
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
            <Marquee
              speed={10}
              dir="rtl"
            >
              <MarqueeContent>
                {SKILLS.slice(SKILLS.length / 2).map((trick) => (
                  <MarqueeItem
                    key={trick}
                    asChild
                  >
                    <div className="p-2 bg-stone-800 border-2 border-[rgba(226,213,197,0.2)]">
                      <p className="text-sm leading-tight text-muted-foreground">
                        {trick}
                      </p>
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-6 p-6 md:p-12 w-full max-w-[1492px] mx-auto">
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-semibold uppercase">Writing</h2>
          </div>
          <div className="flex flex-col gap-3 md:gap-1">
            {recentPosts.map((post) => (
              <div
                key={post.slug}
                className="flex gap-4"
              >
                <h4 className="text-muted-foreground w-24 min-w-24">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </h4>
                <div className="flex flex-col md:flex-row gap-0.5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-yellow-800 transition-colors"
                  >
                    {post.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-amber-600 hover:underline w-fit"
          >
            <span>View all posts</span>
            <MoveRightIcon className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
