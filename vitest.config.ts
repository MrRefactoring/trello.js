import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

config();

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    testTimeout: 60000,
    alias: {
      '~': resolve(__dirname, 'src'),
      '~tests': resolve(__dirname, 'tests'),
    }
  }
});
