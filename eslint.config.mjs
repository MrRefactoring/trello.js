import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quote-props': ['error', 'as-needed'],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/semi': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]);
