/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,

    files: [
      './src/**/*.js',
      './src/script/**/*.{html, js}',
      './src/script/components/*.{html, js}',
      './src/script/helpers/*.{html, js}',
      './src/script/models/*.{html, js}',
      './src/script/utils/*.{html, js}',
      './src/index.html',
    ],
  },
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
      sans: ["Manrope", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.75rem",
      "6xl": "3.5rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
    },

    extend: {
    },
  },
  plugins: [],
};
