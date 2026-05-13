import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

const alias = [{ find: /^#\/(.*)/, replacement: resolve(__dirname, 'src/$1') }];

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['tests/unit/**/*.test.ts'],
          environment: 'node',
        },
        resolve: { alias },
      },
      {
        test: {
          name: 'live',
          include: ['tests/live/**/*.live.test.ts'],
          fileParallelism: false,
          testTimeout: 30_000,
          hookTimeout: 30_000,
        },
        resolve: { alias },
      },
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      // exclude generated models and parameters — they have no logic to test
      exclude: ['src/models/**', 'src/parameters/**', 'src/api/index.ts'],
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: 'coverage',
    },
  },
});
