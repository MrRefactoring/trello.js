---
title: Установка — trello.js
description: Установка trello.js через pnpm, npm или yarn. Требует Node.js 22+ и ESM-проект. Работает с Vite, webpack, Rollup, esbuild.
---

# Установка

## Package manager

```bash
pnpm add trello.js
# или
npm install trello.js
# или
yarn add trello.js
```

## Требования

| Что | Минимум |
|---|---|
| Node.js | 22 |
| Module system | Только ESM (`"type": "module"` или bundler) |
| TypeScript | 5.0 рекомендуется (5.6+ для `verbatimModuleSyntax`) |

Единственная runtime-зависимость — `zod` (^4).

## Настройка проекта

В свежем Node.js-проекте `package.json` должен содержать:

```json
{
  "type": "module",
  "engines": { "node": ">=22" }
}
```

Для TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true
  }
}
```

`module: "NodeNext"` требует `.js` расширений в относительных импортах. Если так не хочется — используйте `module: "ESNext"` с `moduleResolution: "bundler"` (так настроен сам `trello.js`).

## CommonJS / старый Node

Не поддерживается. `trello.js@2.x` — только ESM, требует Node 22. Если застряли на старой инфраструктуре — пиньте `trello.js@1.x`, но он больше не поддерживается.

## Браузер

Работает в современных браузерах через любой сборщик (Vite, webpack 5+, Rollup, esbuild). Пакет с `sideEffects: false`, tree-shaking уберёт неиспользуемые namespace.

## Проверка

```bash
node --eval "import('trello.js').then(m => console.log(typeof m.createTrelloClient))"
```

Должно напечатать `function`.
