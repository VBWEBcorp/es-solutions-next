/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        rounded: ['var(--font-quicksand)', 'Quicksand', 'Inter', 'system-ui', 'sans-serif'],
        signature: ['var(--font-dancing)', '"Dancing Script"', 'cursive'],
        // Le contenu des articles utilise `font-norwester`. La police n'etait pas
        // chargee sur l'ancien site : on retombe sur Inter pour un rendu identique.
        norwester: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#023654',
        },
        accent: {
          DEFAULT: '#EB6718',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
