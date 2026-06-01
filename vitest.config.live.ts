import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    include: ['tests/live/**/*.live.test.ts'],
    fileParallelism: false,
    globalSetup: ['./tests/live/setup/globalSetup.ts'],
    testTimeout: 30_000,
    hookTimeout: 30_000,
    reporters: ['verbose'],
    env: { TRELLO_STRICT_SCHEMAS: 'true' },
    coverage: {
      provider: 'v8',
      exclude: ['tests/**'],
    },
  },
  resolve: {
    alias: [{ find: /^#\/(.*)/, replacement: resolve(__dirname, 'src/$1') }],
  },
});
