/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        text: {
          primary: '#9fef03',
        },
        primary: '#56f3a2',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
