import type { Metadata } from "next";
import Link from "next/link";
import { league, source } from "@/lib/fonts";

import StatusIndicator from "@/components/status-indicator";

import "./globals.css";

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

        <main className="max-w-screen-2xl m-auto relative p-4 pt-8 md:p-8">
          <h1
            className={`${league.className} w-fit text-7xl uppercase md:sticky md:top-16`}
          >
            <Link href="/">Cedric Amaya</Link>
          </h1>

          {children}
        </main>

        <footer className="relative space-y-1 p-8 text-xs text-center">
          <div>cedthe.dev © {new Date().getFullYear()}</div>
          <StatusIndicator />
        </footer>
      </body>
    </html>
  );
}
