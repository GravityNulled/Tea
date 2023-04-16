/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#282828",
        secondary: "#C3B212",
        background: "FEFEFE",
        "background-2": "#F4F4F4",
        outline: "#A0A0A0",
      },
      fontFamily: {
        primary: "Montserrat",
        secondary: "Prosto One",
      },
    },
  },
  plugins: [],
};
