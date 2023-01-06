const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#7678ED',
      },
      animation: {
        'slow-fade-in': 'fadeIn 750ms linear',
        'slide-up-and-fade': 'slideUpAndFade 100ms',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { transform: '100' },
        },
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        underline: '0px 2px 0px',
      },
    },
  },
  plugins: [],
};
