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
        "tech-text": "#C8C8C8",
        'header-bg': "#7E6282",
        'card-bg': "#655168",
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

