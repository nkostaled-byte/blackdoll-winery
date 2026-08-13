// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A08',
        coal: '#14110D',
        soot: '#1D1915',
        umber: '#2A2118',
        cream: '#F2E9D8',
        parchment: '#C9BA9F',
        gold: { DEFAULT: '#C4A052', bright: '#E4C476', dim: '#8A6D33' },
        wine: { DEFAULT: '#5A1B26', bright: '#8E2F3C' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 90px rgba(196, 160, 82, 0.16)',
        bottle: '0 40px 60px -20px rgba(0, 0, 0, 0.65)',
      },
      letterSpacing: {
        caps: '0.22em',
        wide2: '0.14em',
      },
    },
  },
  plugins: [],
};
