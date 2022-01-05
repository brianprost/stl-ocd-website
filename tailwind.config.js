const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Italiana', ...defaultTheme.fontFamily.serif],
        'sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require("tailwind-animatecss")
  ],
}
