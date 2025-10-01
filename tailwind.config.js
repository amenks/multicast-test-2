// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      pp: "0.9375rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      title: "1.375rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      blue: colors.blue,
      black: colors.black,
      yellow: colors.yellow,
      red: colors.red,
    },
    extend: {
      colors: {
        "sc-gray": "#222222",
        white: "#ffffff",
        "mc-green": "#2bc3a7",
        "mc-dark-green": "#14594d"
      },
    },
  },
  variants: {},
  plugins: [],
}