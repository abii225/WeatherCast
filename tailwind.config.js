/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "'Nunito Sans', sans-serif",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },

    extend: {
      colors: {
        primary: "#D5FF40",
        secondary: "#A7FED9",
      },
    },
  },
  plugins: [],
};
