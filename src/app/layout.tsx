import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

import { hanken } from "@/lib/fonts";

import "./globals.css";

import { Signature } from "@/components/signature";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Cedric Amaya — Full-Stack Product Engineer",
  description:
    "Developer and tinkerer specializing in zero-to-one product development.",
};

const LINKS = [
  { href: "/", title: "Home" },
  { href: "/files/resume", title: "Resume" },
  { href: "/blog", title: "Blog" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-background ${hanken.className}`}>
        <header className="w-full max-w-[1492px] mx-auto">
          <nav className="p-6 md:px-12 space-y-2 flex items-center justify-between">
            <div>
              <Link
                href="/"
                title="Cedric Amaya"
                className="block w-fit"
              >
                <Signature />
              </Link>
            </div>

            <ul className="flex gap-2 items-center">
              {LINKS.map((link, index) => (
                <Fragment key={link.href}>
                  <li className="hover:text-yellow-800 transition-colors">
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                  {index < LINKS.length - 1 && <li aria-hidden="true"> · </li>}
                </Fragment>
              ))}
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="w-full max-w-[1492px] mx-auto mt-16 py-4 border-t border-border text-xs text-muted-foreground">
          <div className="px-4 md:px-12 flex items-center justify-between">
            &copy; {new Date().getFullYear()} Cedric Amaya
            <ul className="flex gap-2 h-4">
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/cedricamaya"
                >
                  LinkedIn
                </Link>
              </li>
              <Separator orientation="vertical" />
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/cedricium"
                >
                  GitHub
                </Link>
              </li>
              <Separator orientation="vertical" />
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/cedricamaya"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>

      <Analytics />
    </html>
  );
}
