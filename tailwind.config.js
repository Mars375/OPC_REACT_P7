/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
      sans: ["Manrope", "sans-serif"],
    },
    fontSize: {
      "5xl": "2.75rem",
    },
    extend: {},
  },
  plugins: [],
};
