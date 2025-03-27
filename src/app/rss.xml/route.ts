import { getAllPosts } from "@/lib/api";
import { Feed } from "feed";

function getEnvAwareURL(path?: string): string {
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

  return path ? `${domain}/${path.replace(/^\//, "")}` : domain;
}

export async function GET() {
  const posts = getAllPosts();
  const feed = new Feed({
    title: "Cedric Amaya - cedthedev",
    description: "Personal website and blog for Cedric Amaya.",
    id: getEnvAwareURL(),
    link: getEnvAwareURL(),
    copyright: `Copyright © ${new Date().getFullYear()}, Cedric Amaya`,
    feed: getEnvAwareURL("/rss.xml"),
    favicon: getEnvAwareURL("/favicon.ico"),
  });

  posts.forEach((post) => {
    if (post.draft) return;
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: getEnvAwareURL(`/blog/${post.slug}`),
      date: new Date(post.date),
    });
  });

  return new Response(feed.rss2());
}
