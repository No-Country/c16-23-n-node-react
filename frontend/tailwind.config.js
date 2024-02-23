/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        Primary: "#F3F0CA",
        PrimaryDark: "#E1AA74",
        Secondary: "#192655",
        SecondaryDark: "#0D1821",
        Tertiary: "#3876BF",
        White: "#FFFAF3",
        Gray: "#D8D9DA",
        GrayDark: "#939393",
        Black: "#191919",
        TertiaryDark: "#446A95"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "input": "0px 4px 12px 0px #0D0A2C0F",
      },
      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {

        72: "72px",
        104: "104px",
        120: "120px",
        160: "160px",
        740: "740px",
        238: "238px",
        340: "340px",
        360: "360px",
        // this is for the cards
        220: "220px",
        //this is for footer
        469: "469px",
      },
      width: {
        68: "68px",
        180: "180px",
        285: "285px",
        328: "328px",
        320: "320px",
        360: "360px"
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
