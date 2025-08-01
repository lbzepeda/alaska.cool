// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), icon(), react()],
});