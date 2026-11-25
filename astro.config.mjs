// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Public address of the site: the main GitHub Pages address (repository "federicolucifora.github.io"),
  // so there is no sub-folder ("base"). The old sites (/Portfolio and /visual-designer) redirect here.
  site: 'https://federicolucifora.github.io',
  // Pages are files like about.html and work/mkwii.html, with the same names as the old site,
  // so the redirects from the old addresses are simple.
  build: { format: 'file' },
  trailingSlash: 'ignore',

  // The Rubik font is downloaded once while building and served from the site itself
  // (faster, and visitors' browsers don't contact Google). Only the weights the CSS uses are included.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      weights: [400, 500, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],

  // Pictures: the WebP versions keep the colours sharper ("smartSubsample"), which matters on the renders.
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { webp: { smartSubsample: true } },
    },
  },

  // When the mouse goes over a link, the next page is loaded in advance so it opens almost instantly.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
