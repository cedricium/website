---
title: Vibe Coding is One Helluva Drug
date: "2026-01-27T23:45:12.000Z"
draft: true
excerpt:
  "From existential dread to practical leverage: how hands-off, agent-driven
  coding reshaped my workflow, output, and relationship with writing software."
---

- like many devs, initially felt a sort of existential crisis, primarily from
  all the tech twitter talk/discourse around vibe coding and how agents will
  make devs extinct/redundant
  - karpathy: https://x.com/karpathy/status/2004607146781278521
  - boris cherny: https://x.com/bcherny/status/2004626064187031831
- candidly, these issues were compounded by the fact of not being gainfully
  employed for over a year while reading this; didn't exactly help my mentals
- wasn't until I actually sat down and was able to dedicate some time to vibe
  code myself
- define vibe coding: have been using LLMs to help write code previously since
  shortly after ChatGPT came out, though very much a manual process:
  - define function signatures, ask to complete them; copy/paste into editor
  - paste functions or files, ask to generate comments/documenation; copy/paste
    into editor
  - friction in moving between editor and browser to manually copy/paste things
    gave me a sense of control, didn't feel like losing that artisanal,
    hand-written aspect of coding even when work was LLM generated
- vibe coding in my terms: hands off, English-prompted pair-programming with an
  agent in local environment (ie updates in local editor, no copy/pasting)
- like most skills that require practicing to improve, initial attempts at VC
  were frustrating
  - despite giving what I thought were verbose, well-thought prompts, agent
    seemed to overlook things or use outdated methods; e.g. old React/Next.js
    standards/practices (not using server actions/components, useEffect to fetch
    APIs instead of server component fetching data directly)
- wasn't until with more practice and application of best practices outlined by
  official docs + patterns discussed on twitter did I start to see the benefits:
  - speed/output: single agent outcodes me magnitudes faster
  - iteration: see above; even if agent produces subpar/not acceptable code;
    still quicker to review and ask for edits than manually code by hand
    - key is solid up-front planning (Plan Mode) combined with
      AskUserQuestionTool to think in-depth & uncover edge cases, access
      patterns, non-obvious etc. -- things I would've inevitably ran into down
      the line after implementing by hand but overlooked
    - the above equates to Pareto rule: most solutions hit the mark; when they
      don't, 80% of the solution is sound and 20% rehashing with agent to get it
      to acceptable state (this iteration still faster than myself doing the
      work with more mental bandwidth savings for other tasks)
  - great for perfectionists like myself: can be nitpicky af, prompting as many
    follow-up changes required to get the thing _just right_
- vibe coded projects tasks:
  - website:
    - portfolio redesign/overhaul
    - stylized content headers
    - hard-coded --> MDX implementation for project write-ups
    - rich code-blocks and metadata
    - /files router for serving static files
    - `/create-draft` skill for bootstrapping new draft-status blog post using a
      provided template
  - CO DMV earlier appointment monitoring tool
  - Fanatics merchandise restock monitoring tool
  - SaaS: to be announced, but 90%+ vibe coded
