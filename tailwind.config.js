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
        'project-title': "#3D3D3D",
        'project-body': "#383838",
        'card-bg': "#757387",
        'project-bg': "#DFE3E5",
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

