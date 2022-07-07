/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'main': '#FF566E',
        'background': '#f9fafb',
        'gray': '#F3F3F3',
        'dark': '#000000',
        'secondary': "#FF7B8E",
        'tertiary': "#FF2544",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
