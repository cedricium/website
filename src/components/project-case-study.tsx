import { ReactNode } from "react";

import { cooper } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

// Private component for consistent separator styling
function ProjectSeparator() {
  return (
    <Separator className="!w-[calc(100%+8rem)] -translate-x-16 bg-yellow-800/20 data-[orientation=horizontal]:h-px" />
  );
}

interface ProjectOutcomesProps {
  outcomes: string[];
}

function ProjectOutcomes({ outcomes }: ProjectOutcomesProps) {
  return (
    <ul>
      {outcomes.map((outcome) => (
        <li key={outcome}>{outcome}</li>
      ))}
    </ul>
  );
}

interface ProjectPageLayoutProps {
  title: string;
  children: ReactNode;
}

function ProjectPageLayout({ title, children }: ProjectPageLayoutProps) {
  return (
    <>
      <h1
        className={cn(
          "max-w-4xl text-3xl md:text-4xl text-balance",
          cooper.className
        )}
      >
        {title}
      </h1>

      <div className="mt-10 border border-yellow-800/20 flex flex-col md:flex-row rounded-xl max-w-7xl">
        {children}
      </div>
    </>
  );
}

interface ProjectSidebarProps {
  company: {
    name: string;
    overview: string;
    industry: string;
  };
  outcome: ReactNode;
  role: string;
}

function ProjectSidebar({ company, outcome, role }: ProjectSidebarProps) {
  return (
    <aside className="md:sticky md:top-0 h-full prose prose-stone prose-sm p-8 md:p-12 max-w-full md:w-1/3 border-yellow-800/20 border-b md:border-b-0 overflow-x-hidden">
      <h2 className="text-xs uppercase">About {company.name}</h2>
      <p>{company.overview}</p>

      <ProjectSeparator />

      <h2 className="text-xs uppercase">Industry</h2>
      <p>{company.industry}</p>

      <ProjectSeparator />

      <h2 className="text-xs uppercase">Role</h2>
      <p>{role}</p>

      <ProjectSeparator />

      <h2 className="text-xs uppercase">Outcome</h2>
      {outcome}

      <ProjectSeparator />
    </aside>
  );
}

interface ProjectArticleProps {
  children: ReactNode;
}

function ProjectArticle({ children }: ProjectArticleProps) {
  return (
    <article className="p-8 md:p-12 md:border-l border-yellow-800/20 flex-1 prose prose-stone prose-sm max-w-full">
      {children}
    </article>
  );
}

export { ProjectPageLayout, ProjectArticle, ProjectSidebar, ProjectOutcomes };
