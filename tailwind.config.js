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
        bebas: ['Bebas Neue', 'sans-serif'],
        zeyada: ['Zeyada', 'cursive'],
      },
      backgroundImage: {
        truck: "url('/andy-with-truck.png')",
      },
      screens: {
        mg: '900px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
