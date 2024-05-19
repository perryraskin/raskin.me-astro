import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import solid from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import prism from "rehype-prism-plus"

// https://astro.build/config
export default defineConfig({
  site: "https://raskin.me",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [prism],
  },
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
  ],
})
