/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bluebg: "#172B4D",
      lightGreen: "#D4F6CC",
      gray: "#2D334A",
      orange: "#EF5B0C",
      offWhite: "#F5F5F5",
      darkGreen: "#04420C",
      blueText: "#272343",
      navText: "#DCDCDC",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "service-card-gradient": `linear-gradient(90deg, rgba(4, 66, 12, 0.4) 0%, rgba(108, 156, 108, 0.45) 52%, rgba(180, 230, 180, 1) 98%)`,
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
  darkMode: "class",
};
