import { Metadata } from "next";

import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHTML from "@/lib/markdownToHTML";

import {
  BlogArticle,
  BlogPageLayout,
  BlogSidebar,
} from "@/components/blog-post";
import { CodeBlockMetadata } from "@/components/code-block-metadata";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const contentHtml = await markdownToHTML(post.content);

  return (
    <section className="w-full max-w-[1492px] mx-auto p-6 md:p-12">
      <BlogPageLayout title={post.title}>
        <BlogSidebar
          date={post.date}
          excerpt={post.excerpt}
        />
        <BlogArticle>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <CodeBlockMetadata />
        </BlogArticle>
      </BlogPageLayout>
    </section>
  );
}
