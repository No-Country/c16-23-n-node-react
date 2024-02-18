/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"], // Añade "jsx" a la lista de extensiones
  theme: {
    // colors: {
    //   primary: {
    //     firsT: "#192655",
    //   },
    // },
    screens: {
      sm: "360px",
      // md: '768px',
      lg: "976px",
      // xl: '1440px',
    },
    colors: {
      primary: "#F3F0CA",
      secondary: "#192655",
      white: "#FFF6E9",
      tertiary: "#3876BF",
      primaryDark: "#E1AA74",
      secondaryDark: "#0D1821",
      pink: "#ff49db",
      orange: "#ff7849",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      sm: ["24px", "36px"],
    },
    extend: {
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
        740: "740px",
        360: "360px",
        // this is for the cards
        220: "220px",
        //this is for footer
        469: "469px",
      },
      width: {
        68: "68px",
        285: "285px",
        328: "328px",
        320: "320px",
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
};

//! <!-- ! Modificacion -->
