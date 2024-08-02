/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },
    /* https://raw.githubusercontent.com/luisiacc/gruvbox-baby/main/extras/media/palettes/medium.svg */
    colors: {
      'gruvbox-dark': '#1e1e2e',
      'gruvbox-gray': '#a6adc8',
      'gruvbox-milk': '#bac2de',
      'gruvbox-red': '#f38ba8',
      'gruvbox-green': '#a6e3a1',
      'gruvbox-yellow': '#fabd2f',
    },
    extend: {},
  },
  plugins: [],
}

