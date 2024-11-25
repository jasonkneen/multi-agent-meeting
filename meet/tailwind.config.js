/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'glow-color': 'var(--glow-color)',
        'background-start': 'var(--background-start)',
        'background-end': 'var(--background-end)',
      },
    },
  },
  plugins: [],
} 