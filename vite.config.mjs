import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { resolve } from 'path';

const extensions = [
  '.web.tsx',
  '.web.ts',
  '.web.js',
  '.tsx',
  '.ts',
  '.js',
]

export default defineConfig(({ mode }) => {
  const root = resolve(__dirname, `./web/`);
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === 'production';
  const packageJson = JSON.parse(
    fs.readFileSync('package.json').toString(),
  );
  return {
    root,
    base: '/',
    plugins: [
      react({
        exclude: /\.stories\.tsx?$/,
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties'],
          },
        },
      }),
    ],

    server: {
      port: Number(process.env.PORT) || 9020,
      /*fs: {
        allow: ['/'],
      }*/
    },

    build: {
      outDir: resolve(
        __dirname,
        'dist',
      ),
      rollupOptions: {
        input: resolve(root, 'index.html'),
      },
      sourcemap: true,
    },

    resolve: {
      alias: {
        '@/src': path.resolve(__dirname, './src'),
        'react-native': 'react-native-web',
      },
      extensions,
      dedupe: Object.keys(packageJson.dependencies),
    },

    define: {
      '__dirname': JSON.stringify(''),
      'process.env': {
        ENVIRONMENT: JSON.stringify(env.ENVIRONMENT || (isProd ? "production" : "development")),
        API_ENDPOINT: JSON.stringify(env.API_ENDPOINT || ""),
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
      },
    },
  };
});
