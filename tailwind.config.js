/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        logo: '#F6921E',
        dark: '#18181B',
        mid: '#27272A',
        light: '#A1A1AA',
      },
      width: {
        container: '62.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        tight: ['InterTight', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
