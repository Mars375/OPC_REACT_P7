/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,

    files: [
      './src/**/*.js',
      './src/**/*.{html, js}',
      './src/script/**/*.{html, js}',
      './src/script/components/*.{html, js}',
      './src/script/helpers/*.{html, js}',
      './src/script/models/*.{html, js}',
      './src/script/utils/*.{html, js}',
      './src/index.html'
    ],
  },
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
