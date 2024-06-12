import type { Metadata } from "next";
import Link from "next/link";
import { League_Gothic, Source_Serif_4 } from "next/font/google";

import "./globals.css";

export const league = League_Gothic({ subsets: ["latin"] });
export const source = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cedric Amaya — Software Engineer",
  description:
    "Cedric Amaya: Developer. Tinkerer. Solopreneur. Specializing in zero-to-one product development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={source.className}>
        <div className="grain">
          <div className="texture" />
        </div>

        <main className="max-w-screen-2xl m-auto relative p-8">
          <h1
            className={`${league.className} text-7xl uppercase md:sticky md:top-16`}
          >
            <Link href="/">Cedric Amaya</Link>
          </h1>

          {children}
        </main>

        <footer className="relative p-8 text-xs text-center">
          cedthe.dev © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}