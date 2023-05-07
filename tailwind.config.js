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
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
