/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-text': "#AEAEAE",
        'job-text': "#DFDFDF",
        'header-bg': "#7e6282"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'jetbrains': ['JetBrainsMono', 'monospace'],
        'courier-new': ['Courier New', 'monospace'],
        'sofia-sans': ['Sofia Sans', 'sans-serif']
      },
    },

  },
  plugins: [],
}

