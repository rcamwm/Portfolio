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
        'solid-bg': "#392b3b",
        'body-text': "#AEAEAE",
        'job-text': "#DFDFDF",
        "tech-text": "#C8C8C8",
        'tech-bg': "#826d86",
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

