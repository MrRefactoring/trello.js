---
layout: home

hero:
  name: trello.js
  text: Типобезопасный клиент Trello REST API
  tagline: Полное покрытие API Trello, валидация через Zod, tree-shaking, только ESM.
  image:
    src: /logo.svg
    alt: trello.js
  actions:
    - theme: brand
      text: Быстрый старт
      link: /ru/guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: GitHub
      link: https://github.com/MrRefactoring/trello.js

features:
  - icon: 🔒
    title: Сквозная типизация
    details: Каждый эндпоинт, параметр и ответ полностью типизирован. Никаких догадок о том, что вернёт API.
  - icon: ✅
    title: Валидация на рантайме
    details: Ответы проверяются Zod 4 схемами. Несоответствия API ловятся на границе, а не глубоко в коде.
  - icon: 🌳
    title: Tree-shaking
    details: Subpath-экспорты на каждый namespace. Импортируете только нужное — бандл остаётся компактным.
  - icon: 📦
    title: Только ESM, без оверхеда
    details: Сделано для современного Node.js (≥22) и сборщиков. Никакого legacy CJS. Одна зависимость — Zod.
  - icon: 🧪
    title: Полное покрытие
    details: 17 namespace, 250+ методов, генерируется из официального swagger Trello.
  - icon: ⚡
    title: Встроенный retry на 429
    details: Rate-limit-ответы автоматически ретраятся с экспоненциальной задержкой.
---
