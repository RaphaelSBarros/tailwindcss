/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts,js}" //monitoramento das extensões
  ],
  theme: {
    extend: {
      colors: {
        'vermelho': '#FF0000',
        'vermelhoescuro': '#990000'
      }
    },
  },
  plugins: [],
}

