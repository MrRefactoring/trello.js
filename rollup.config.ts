import alias from '@rollup/plugin-alias';
import { defineConfig } from 'rollup';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

const __dirname = fileURLToPath(new URL('./', import.meta.url));

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      alias({
        entries: [
          { find: '~', replacement: resolve(__dirname, 'src') },
        ]
      }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
  }
]);
