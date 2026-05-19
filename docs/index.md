---
layout: home

hero:
  name: trello.js
  text: Type-safe Trello REST API client
  tagline: Full coverage of the Trello API, validated by Zod, tree-shakable, ESM-only.
  image:
    src: /logo.svg
    alt: trello.js
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: GitHub
      link: https://github.com/MrRefactoring/trello.js

features:
  - icon: 🔒
    title: Type-safe end to end
    details: Every endpoint, parameter and response is fully typed. No more guessing what the API returns.
  - icon: ✅
    title: Runtime validation
    details: Responses are validated by Zod 4 schemas. Catch API drift at the boundary, not deep in your code.
  - icon: 🌳
    title: Tree-shakable
    details: Subpath exports per namespace. Import only what you use — your bundle stays small.
  - icon: 📦
    title: ESM-only, zero overhead
    details: Built for modern Node.js (≥22) and bundlers. No CJS legacy. Single dependency — Zod.
  - icon: 🧪
    title: Full coverage
    details: 17 namespaces, 250+ methods, auto-generated from the official Trello swagger.
  - icon: ⚡
    title: Built-in 429 retry
    details: Rate-limit responses retry with exponential backoff automatically.
---
