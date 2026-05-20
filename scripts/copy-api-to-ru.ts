// Mirrors the TypeDoc-generated API reference for the RU locale so URLs like
// /ru/api/... resolve (VitePress's language switcher rewrites /api/* →
// /ru/api/* when the user clicks "Русский" on an API page). The API reference
// content is English-only; this copy exists so the route is reachable and
// SEO-tagged via hreflang as the same page.
//
// Also produces typedoc-sidebar.ru.json — the same sidebar tree but with all
// links rewritten from /api/* to /ru/api/* — so navigation within the API
// reference under RU stays inside the RU locale.

import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src = resolve(root, 'docs/api');
const dst = resolve(root, 'docs/ru/api');
const sidebarSrc = resolve(src, 'typedoc-sidebar.json');
const sidebarRu = resolve(src, 'typedoc-sidebar.ru.json');

if (!existsSync(src)) {
  console.error(`[copy-api-to-ru] source not found: ${src}. Run 'pnpm docs:api' first.`);
  process.exit(1);
}

// 1. Mirror the directory tree
if (existsSync(dst)) rmSync(dst, { recursive: true, force: true });
cpSync(src, dst, { recursive: true });

// 2. Trim the sidebar JSON so VitePress doesn't embed all 328 model/parameter
// type pages into the navigation tree (they're still linked from function
// signatures — but inlining them into every page's hydration state inflates
// each HTML to ~1.5 MB).
const SIDEBAR_EXCLUDE = new Set(['models', 'parameters']);

type SidebarEntry = { text: string;[key: string]: unknown };

if (existsSync(sidebarSrc)) {
  const sidebar = JSON.parse(readFileSync(sidebarSrc, 'utf-8')) as SidebarEntry[];
  const trimmed = sidebar.filter((entry) => !SIDEBAR_EXCLUDE.has(entry.text));

  writeFileSync(sidebarSrc, JSON.stringify(trimmed));

  // RU-prefixed variant: every "/api/..." link → "/ru/api/..."
  const ruSidebar = JSON.stringify(trimmed).replaceAll('"/api/', '"/ru/api/');

  writeFileSync(sidebarRu, ruSidebar);
}

const rel = (p: string): string => p.replace(root + '/', '');

console.log(`[copy-api-to-ru] ${rel(src)} → ${rel(dst)}`);
console.log(`[copy-api-to-ru] ${rel(sidebarSrc)} → ${rel(sidebarRu)} (with /ru/api/ prefix)`);
