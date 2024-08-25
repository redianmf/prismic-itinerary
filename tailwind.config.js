const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Source Serif Pro"', "Times New Roman"],
        secondary: ['"Noto Sans Variable"', "Times New Roman"],
      },
      colors: {
        primary: "#2d5a7b",
        secondary: "#414141",
        tertiary: "#125a55",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
});
