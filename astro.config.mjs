// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
