import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://dereje.fr',
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkPlugins: [remarkToc],
    gfm: false
  }), tailwind(), partytown(), sitemap(), preact()]
});