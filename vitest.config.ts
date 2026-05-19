import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
    reporters: ['verbose'],
  },
  resolve: {
    alias: [{ find: /^#\/(.*)/, replacement: resolve(__dirname, 'src/$1') }],
  },
});
