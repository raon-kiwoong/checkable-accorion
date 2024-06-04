import { defineConfig } from 'vite';
import { resolve } from 'path';

import dts from 'vite-plugin-dts';

export default defineConfig({
  // const isDevelopment = configEnv.mode === 'development';
  plugins: [dts()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  resolve: {
    alias: {
      app: resolve(__dirname, 'src', 'app'),
      components: resolve(__dirname, 'src', 'components'),
      hooks: resolve(__dirname, 'src', 'hooks'),
      infrastructure: resolve(__dirname, 'src', 'infrastructure'),
      types: resolve(__dirname, 'src', 'types'),
    },
  },
});
