// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://alaska.cool',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    icon(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-NI",
          en: "en-US",
          zh: "zh-CN",
        },
      },
    }),
  ],
});