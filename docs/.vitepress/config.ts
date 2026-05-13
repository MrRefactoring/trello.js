import { defineConfig } from 'vitepress';
import typedocSidebar from '../api/typedoc-sidebar.json' with { type: 'json' };
import typedocSidebarRu from '../api/typedoc-sidebar.ru.json' with { type: 'json' };

const SITE_URL = 'https://mrrefactoring.github.io/trello.js';
const SITE_TITLE = 'trello.js';
const SITE_DESCRIPTION_EN = 'Type-safe Trello REST API client for TypeScript and JavaScript. ESM-only, tree-shakable, validated by Zod 4. Full coverage of boards, cards, lists, webhooks, members, organizations.';
const SITE_DESCRIPTION_RU = 'Типобезопасный клиент Trello REST API для TypeScript и JavaScript. Только ESM, tree-shaking, валидация через Zod 4. Полное покрытие досок, карточек, списков, webhooks, участников, организаций.';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const guideSidebar = (prefix = '') => [
  {
    text: prefix ? 'Руководство' : 'Guide',
    items: [
      { text: prefix ? 'Быстрый старт' : 'Getting Started', link: `${prefix}/guide/getting-started` },
      { text: prefix ? 'Установка' : 'Installation', link: `${prefix}/guide/installation` },
      { text: prefix ? 'Аутентификация' : 'Authentication', link: `${prefix}/guide/authentication` },
      { text: prefix ? 'Tree-Shaking' : 'Tree-Shaking', link: `${prefix}/guide/tree-shaking` },
      { text: 'TypeScript', link: `${prefix}/guide/typescript` },
      { text: prefix ? 'Обработка ошибок' : 'Error Handling', link: `${prefix}/guide/error-handling` },
    ],
  },
  {
    text: prefix ? 'Рецепты' : 'Recipes',
    items: [
      {
        text: prefix ? 'Основное' : 'Core',
        collapsed: false,
        items: [
          { text: prefix ? 'Доски' : 'Boards', link: `${prefix}/recipes/boards` },
          { text: prefix ? 'Списки' : 'Lists', link: `${prefix}/recipes/lists` },
          { text: prefix ? 'Карточки' : 'Cards', link: `${prefix}/recipes/cards` },
          { text: prefix ? 'Чек-листы' : 'Checklists', link: `${prefix}/recipes/checklists` },
          { text: prefix ? 'Метки' : 'Labels', link: `${prefix}/recipes/labels` },
          { text: 'Custom Fields', link: `${prefix}/recipes/custom-fields` },
        ],
      },
      {
        text: prefix ? 'Люди и доступ' : 'People & Access',
        collapsed: false,
        items: [
          { text: prefix ? 'Участники' : 'Members', link: `${prefix}/recipes/members` },
          { text: prefix ? 'Организации' : 'Organizations', link: `${prefix}/recipes/organizations` },
          { text: 'Enterprises', link: `${prefix}/recipes/enterprises` },
          { text: prefix ? 'Токены' : 'Tokens', link: `${prefix}/recipes/tokens` },
        ],
      },
      {
        text: prefix ? 'Активность' : 'Activity',
        collapsed: false,
        items: [
          { text: prefix ? 'Действия' : 'Actions', link: `${prefix}/recipes/actions` },
          { text: prefix ? 'Уведомления' : 'Notifications', link: `${prefix}/recipes/notifications` },
          { text: prefix ? 'Поиск' : 'Search', link: `${prefix}/recipes/search` },
        ],
      },
      {
        text: prefix ? 'Интеграции' : 'Integrations',
        collapsed: false,
        items: [
          { text: 'Webhooks', link: `${prefix}/recipes/webhooks` },
          { text: prefix ? 'Плагины' : 'Plugins', link: `${prefix}/recipes/plugins` },
          { text: 'Batch', link: `${prefix}/recipes/batch` },
          { text: 'Emoji', link: `${prefix}/recipes/emoji` },
        ],
      },
    ],
  },
  {
    text: prefix ? 'Миграция' : 'Migration',
    items: [
      { text: 'v1 → v2', link: `${prefix}/migration/v1-to-v2` },
    ],
  },
];

const apiSidebar = [{ text: 'API Reference', items: typedocSidebar }];
const apiSidebarRu = [{ text: 'API Reference', items: typedocSidebarRu }];

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION_EN,
  base: '/trello.js/',
  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: [
    'localhostLinks',
    /^\/cloud\/trello\//,
    /^\/api\//,
    // Empty () links from unresolved JSDoc {@link} references in the
    // Trello swagger descriptions — VitePress normalises them to './index'.
    /^\.\/index$/,
    /^\.\.\/index$/,
  ],

  sitemap: {
    hostname: SITE_URL + '/',
  },

  head: [
    // Auto-detect locale on first visit:
    //   - If the path is already under /ru/ → record locale = 'ru', no redirect.
    //   - Else if navigator.language starts with 'ru' AND there's no prior choice
    //     in localStorage → redirect to the RU equivalent of the current path
    //     (preserves search + hash). Inline so it runs synchronously before
    //     the body paints — no flash of EN content.
    //   - Else → record locale = 'en'.
    // Once a locale is stored, this script returns without redirecting; the
    // user's explicit choice (via the language switcher) is respected forever.
    ['script', {}, `(function(){try{var K='trello.js:locale',B='/trello.js/',p=location.pathname,isRu=p.indexOf(B+'ru/')===0||p===B+'ru'||p===B+'ru/';var s=localStorage.getItem(K);if(s)return;if(isRu){localStorage.setItem(K,'ru');return;}var L=(navigator.language||'').toLowerCase();if(L.indexOf('ru')===0&&p.indexOf(B)===0){localStorage.setItem(K,'ru');location.replace(p.replace(B,B+'ru/')+location.search+location.hash);}else{localStorage.setItem(K,'en');}}catch(e){}})();`],

    ['link', { rel: 'icon', href: '/trello.js/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'author', content: 'Vladislav Tupikin' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE }],
    ['meta', { property: 'og:title', content: `${SITE_TITLE} — Type-safe Trello REST API client` }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION_EN }],
    ['meta', { property: 'og:url', content: SITE_URL + '/' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:alt', content: 'trello.js — Type-safe Trello REST API client' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: `${SITE_TITLE} — Type-safe Trello REST API client` }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION_EN }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],

    // JSON-LD: SoftwareSourceCode
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: SITE_TITLE,
      description: SITE_DESCRIPTION_EN,
      codeRepository: 'https://github.com/MrRefactoring/trello.js',
      programmingLanguage: 'TypeScript',
      runtimePlatform: 'Node.js',
      license: 'https://opensource.org/licenses/MIT',
      author: {
        '@type': 'Person',
        name: 'Vladislav Tupikin',
      },
      keywords: 'trello, trello-api, typescript, esm, zod, tree-shaking, type-safe, atlassian, kanban',
      url: SITE_URL + '/',
    })],
  ],

  transformHead: ({ pageData }) => {
    const head: [string, Record<string, string>][] = [];

    // Normalise path: strip .md, collapse "/index" or root "index" to ""
    const relativePath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/(^|\/)index$/, '$1')
      .replace(/\/$/, '');

    const isRu = relativePath === 'ru' || relativePath.startsWith('ru/');
    const enRelative = isRu ? relativePath.replace(/^ru\/?/, '') : relativePath;
    const ruRelative = isRu ? relativePath : (relativePath ? `ru/${relativePath}` : 'ru');

    const url = (p: string) => `${SITE_URL}/${p ? p + '/' : ''}`.replace(/\/+$/, '/');

    head.push(['link', { rel: 'canonical', href: url(relativePath) }]);
    head.push(['link', { rel: 'alternate', hreflang: 'en', href: url(enRelative) }]);
    head.push(['link', { rel: 'alternate', hreflang: 'ru', href: url(ruRelative) }]);
    head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: url(enRelative) }]);

    return head;
  },

  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MrRefactoring/trello.js' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/trello.js' },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: SITE_DESCRIPTION_EN,
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Recipes', link: '/recipes/boards' },
          { text: 'API', link: '/api/' },
          { text: 'Migration', link: '/migration/v1-to-v2' },
        ],
        sidebar: {
          '/guide/': guideSidebar(),
          '/recipes/': guideSidebar(),
          '/migration/': guideSidebar(),
          '/api/': apiSidebar,
        },
        editLink: {
          pattern: 'https://github.com/MrRefactoring/trello.js/edit/master/docs/:path',
          text: 'Edit this page on GitHub',
        },
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      description: SITE_DESCRIPTION_RU,
      themeConfig: {
        nav: [
          { text: 'Руководство', link: '/ru/guide/getting-started' },
          { text: 'Рецепты', link: '/ru/recipes/boards' },
          { text: 'API', link: '/api/' },
          { text: 'Миграция', link: '/ru/migration/v1-to-v2' },
        ],
        sidebar: {
          '/ru/guide/': guideSidebar('/ru'),
          '/ru/recipes/': guideSidebar('/ru'),
          '/ru/migration/': guideSidebar('/ru'),
          '/ru/api/': apiSidebarRu,
        },
        editLink: {
          pattern: 'https://github.com/MrRefactoring/trello.js/edit/master/docs/:path',
          text: 'Редактировать на GitHub',
        },
        outline: { label: 'На этой странице', level: [2, 3] },
        docFooter: { prev: 'Назад', next: 'Далее' },
      },
    },
  },
});
