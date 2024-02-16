/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors:{
        "Primary": "#F3F0CA",
        "PrimaryDark": "#E1AA74",
        "Secondary": '#192655',
        "SecondaryDark": '#0D1821',
        "Tertiary": '#3876BF',
        "White": "#FFFAF3",
        "Gray": "#D8D9DA",
        "GrayDark": "#939393",
        "Black": "#191919",
      },
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')"
      }
    },
  },
  plugins: [],
}
