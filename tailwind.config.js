/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      square: 'square',
      circle: 'circle',
    },
    extend: {
      colors: {
        'body-text': "#AEAEAE",
        'job-text': "#DFDFDF",
        'card-bg': "#757387",
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

