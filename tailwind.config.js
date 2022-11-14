/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'simbiosis-gray': "#999"
      },
      fontFamily : {
        "Roboto" : ["Roboto", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}