import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), mkcert()],
  server: { https: true, port: 3000 },
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@config', replacement: '/src/config' },
      { find: '@modules', replacement: '/src/modules' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@services', replacement: '/src/services' },
      { find: '@store', replacement: '/src/store' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
