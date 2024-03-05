/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: '#111927',
        text: {
          DEFAULT: '#a4b1cd',
          primary: '#9fef03',
        },
        primary: '#56f3a2',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
