/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fffff",
        blueColor: "#13a8ec",
        errorRed: "#FF0000",
      },
    },
  },
  plugins: [],
};
