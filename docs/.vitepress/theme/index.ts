// Custom VitePress theme: extends the default theme with automatic locale
// detection for first-time visitors and locale-persistence on subsequent
// visits.
//
// Detection logic:
//   1. On first visit (no localStorage flag):
//      - If URL is already under /ru/ → remember locale = 'ru'.
//      - Else if navigator.language starts with 'ru' → redirect to /ru/<path>.
//      - Else → remember locale = 'en'.
//   2. On any in-app navigation (incl. language switcher click) → sync the
//      stored locale with the URL.
//
// The initial-load redirect runs synchronously from an inline <head> script
// (see config.ts) to avoid a brief flash of EN content before the redirect.
// This module handles SPA navigation only.

import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { inBrowser } from 'vitepress';

const STORAGE_KEY = 'trello.js:locale';
const BASE = '/trello.js/';

function localeFromPath(path: string): 'en' | 'ru' {
  return path.startsWith(BASE + 'ru/') || path === BASE + 'ru' || path === BASE + 'ru/'
    ? 'ru'
    : 'en';
}

export default {
  extends: DefaultTheme,

  enhanceApp({ router }) {
    if (!inBrowser) return;

    // Keep stored locale in sync with the URL on every SPA navigation
    // (covers language-switcher clicks and any internal link traversal).
    const originalOnAfter = router.onAfterRouteChange;
    router.onAfterRouteChange = (to: string) => {
      try {
        localStorage.setItem(STORAGE_KEY, localeFromPath(to));
      } catch {
        // localStorage disabled / quota exceeded — ignore
      }
      originalOnAfter?.(to);
    };
  },
} satisfies Theme;
