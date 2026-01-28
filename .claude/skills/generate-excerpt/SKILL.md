---
name: generate-excerpt
description:
  Generates concise long-form article subheadings/excerpt that preview the
  thesis and narrative arc. Use when creating summaries displayed next to
  article content.
disable-model-invocation: true
allowed-tools: Read, Write, Edit
---

Given the blog post at $ARGUMENTS in the @posts directory, read the main
content, then generate and insert/update a double-quoted one-line string for
`excerpt` loosely following the below rules/steps:

1. **Extract the narrative arc**  
   Identify the transformation or core thesis (e.g., fear → experimentation →
   leverage). Ignore implementation details.

2. **Match the target tone and format**  
   Use declarative, reflective prose similar to technical blog subtitles. Avoid
   marketing language, lists, or hype.

3. **Use a compact causal structure**  
   This encodes journey, mechanism, and outcome in one sentence.

4. **Emphasize worldview or workflow change**  
   Focus on how the author’s practice or thinking changed, not the specific
   tools or projects.

5. **Keep it high-level but grounded**  
   Use abstract nouns (e.g. “workflow,” “leverage,” “relationship with
   software”) tied to a concrete domain (e.g. “agent-driven coding,” “LLMs,”
   “vibe coding”).

6. **Optimize for thesis-preview style**  
   The subheading should augment or preview the argument, not summarize content.
   Think academic subtitle, informal tone.

If no such file for $ARGUMENTS exists or found, briefly warn the user and exit
early WITHOUT modifying any files.

---

### Example Application

**Title:** Vibe Coding is One Helluva Drug  
**Derived Excerpt:**  
“From existential dread to practical leverage: how hands-off, agent-driven
coding reshaped my workflow and relationship with writing software.”

**Title:** Substack Subscriptions Aren’t Enough  
**Derived Excerpt:**  
“Why subscription-only monetization is misaligned—and how a dual model of
subscriptions and per-post payments might fix it.”
