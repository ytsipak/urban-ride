/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        libreFranklin: ["Libre Franklin", "sans-serif"],

      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#474fa0",
          100: "#F5F8FF",
        },
        "secondary-orange": "#fe5c3c",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: {
          DEFAULT: "#747A88",
          100: "#eeeff1",
          500: "rgba(123, 123, 123, 1)",
        },
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
        'threeStepsLine': "url('/line.png')"
      }
    },
  },
  plugins: [],
};