/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F6F6FB',
        'main-color': '#1625AB',
        'main-color-hover': '#1A2CC9',
      },
    },
  },
  plugins: [],
};
