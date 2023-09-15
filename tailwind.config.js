/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        gray: "#ABB2BF",
        background: "#282C33",
        white: "#FFFFFF",
      },
      scrollMargin: {
        custom: "100px",
        secondCustom: "15px",
      },
    },
  },
  plugins: [],
};
