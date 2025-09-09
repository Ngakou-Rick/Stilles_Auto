import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1a1a',
        'primary-dark-soft': '#2a2a2a',
        'primary-light': '#f2f2f2',
        'accent-gold': '#daa520',
        'accent-silver': '#c0c0c0',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
}
export default config
