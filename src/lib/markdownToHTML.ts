import rehypePrettyCode from "rehype-pretty-code";
import raw from "rehype-raw";
import stringify from "rehype-stringify";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHTML(content: string) {
  const processedContent = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      theme: "github-light",
      keepBackground: true,
    })
    .use(raw)
    .use(stringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return contentHtml;
}
