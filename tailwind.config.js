/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#31373D",
        bold: "#131316",
        primary: "#FF5403",
        link: "#4D5760",
        white: "#fff",
      },
      fontFamily: {
        sohne: ["Söhne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
