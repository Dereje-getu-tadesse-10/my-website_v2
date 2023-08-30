/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}