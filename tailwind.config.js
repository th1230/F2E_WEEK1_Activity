/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["cubic-11"],
      },
      colors: {
        "my-primary": "#b82a06",
        "my-secondary": "#3c0c00",
        "my-gray": "#dcdcdc",
        "my-tertiary": "#ffb3a4",
        "my-blue": "#0061a1",
        "my-green": "green",
      },
      screens:{
        "2xl":"1440px",
        "3xl":"1920px"
      },
      container:{
        "3xl":"1920px"
      }
    },
  },
  plugins: [],
};
