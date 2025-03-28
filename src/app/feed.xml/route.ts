import { getAllPosts } from "@/lib/api";
import { Feed } from "feed";

function getEnvAwareUrl(path?: string): string {
  const env = process.env.NODE_ENV || "development";
  let domain: string;

  switch (env) {
    case "production":
      domain = "https://cedthe.dev";
      break;
    // case 'staging':
    //   domain = 'https://staging.example.com';
    //   break;
    default:
      domain = "http://localhost:3000";
  }

  return path ? `${domain}/${path.replace(/^\//, "")}` : `${domain}/`;
}

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = getEnvAwareUrl();

  const feed = new Feed({
    title: "Cedric Amaya - cedthe.dev",
    description: "Personal website and blog for Cedric Amaya.",
    id: siteUrl,
    link: siteUrl,
    copyright: `Copyright (c) ${new Date().getFullYear()}, Cedric Amaya`,
    feed: getEnvAwareUrl("/feed.xml"),
    favicon: getEnvAwareUrl("/favicon.ico"),
    image: getEnvAwareUrl("/favicon.ico"),
    author: { name: "Cedric Amaya" },
  });

  posts.forEach((post) => {
    if (post.draft) return;
    const postUrl = getEnvAwareUrl(`/blog/${post.slug}`);
    feed.addItem({
      title: post.title,
      id: postUrl,
      link: postUrl,
      content: post.excerpt,
      date: new Date(post.date),
      author: [{ name: "Cedric Amaya" }],
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml",
    },
  });
}
