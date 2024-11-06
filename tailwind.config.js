// const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "rgb(139 92 246)",
        "primary-dark": "rgb(109 40 217)",
        "primary-light": "rgb(196 181 253)",
      },
      // colors: {
      //   gray: colors.coolGray,
      //   blue: colors.red[500],
      //   red: colors.rose,
      //   pink: colors.fuchsia,
      // },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
