import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import tailwind from '@astrojs/tailwind'
// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula',
      },
      remarkPlugins: [remarkToc],
      remarkRehype: {
        footnoteLabel: 'Footnotes',
      },
      gfm: false,
    }),
    tailwind(),
  ],
})
