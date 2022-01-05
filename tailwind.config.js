const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "informationSectionImg": "url('/public/img/st-louis-ocd-resources.svg')",
      },
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
