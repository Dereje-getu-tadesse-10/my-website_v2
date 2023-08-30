import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkPlugins: [remarkToc],
    remarkRehype: {
      footnoteLabel: 'Footnotes'
    },
    gfm: false
  }), tailwind()],
  experimental: {
    viewTransitions: true
  },
  output: 'server',
  adapter: netlify()
});