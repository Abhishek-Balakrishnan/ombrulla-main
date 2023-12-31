import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import '@fontsource/space-grotesk';
import '@fontsource/outfit';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://Abhishek-Balakrishnan.github.io',
  base: '/ombrulla-main',
});