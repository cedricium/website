import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import stringify from "rehype-stringify";
import prism from "rehype-prism";

import "prismjs/themes/prism-tomorrow.min.css";

export default async function markdownToHTML(content: string) {
  const processedContent = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(prism)
    .use(stringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return contentHtml;
}
