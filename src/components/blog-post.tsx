import { ReactNode } from "react";

import { cooper } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

// Private component for consistent separator styling
function BlogSeparator() {
  return (
    <Separator className="!w-[calc(100%+8rem)] -translate-x-16 bg-yellow-800/20 data-[orientation=horizontal]:h-px" />
  );
}

interface BlogPageLayoutProps {
  title: string;
  children: ReactNode;
}

function BlogPageLayout({ title, children }: BlogPageLayoutProps) {
  return (
    <>
      <div className="max-w-7xl bg-stone-800 border border-[rgba(226,213,197,0.2)] rounded-t-xl p-8 md:p-12 bg-[length:8px_8px] bg-[radial-gradient(#36342E_1px,_transparent_1px)]">
        <h1
          className={cn(
            "max-w-4xl text-3xl md:text-4xl text-balance text-stone-100",
            cooper.className
          )}
        >
          {title}
        </h1>
      </div>

      <div className="border border-yellow-800/20 flex flex-col md:flex-row rounded-b-xl max-w-7xl">
        {children}
      </div>
    </>
  );
}

interface BlogSidebarProps {
  date: string;
  excerpt?: string;
}

function BlogSidebar({ date, excerpt }: BlogSidebarProps) {
  return (
    <aside className="md:sticky md:top-0 h-full prose prose-stone prose-sm p-8 md:p-12 max-w-full md:w-1/3 border-yellow-800/20 border-b md:border-b-0 overflow-x-hidden">
      <h2 className="text-xs uppercase">Published</h2>
      <p>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {excerpt && (
        <>
          <BlogSeparator />
          <h2 className="text-xs uppercase">Summary</h2>
          <p>{excerpt}</p>
        </>
      )}

      <BlogSeparator />
    </aside>
  );
}

interface BlogArticleProps {
  children: ReactNode;
}

function BlogArticle({ children }: BlogArticleProps) {
  return (
    <article className="p-8 md:p-12 md:border-l border-yellow-800/20 flex-1 prose prose-stone prose-sm max-w-full">
      {children}
    </article>
  );
}

export { BlogPageLayout, BlogArticle, BlogSidebar };
