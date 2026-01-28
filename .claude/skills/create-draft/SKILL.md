---
name: create-draft
description:
  Creates a new draft blog post Markdown file with appropriate frontmatter in
  the posts/ directory.
disable-model-invocation: true
allowed-tools: Read, Write, Edit
---

Create a new Markdown file named $ARGUMENTS using the @template.md in this
project's @posts directory. If no $ARGUMENTS given, fallback to "untitled".

Use $ARGUMENTS or fallback for the frontmatter `title`, ensure `draft` is set to
`true` and set `date` equal to the current datetime in ISO format (i.e.
`new Date().toISOString()`) as a double-quoted string.
