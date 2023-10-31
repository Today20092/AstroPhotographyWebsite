import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://today20092.github.io',
  base: '/astrowebsitephotography',
  integrations: [tailwind()]
});