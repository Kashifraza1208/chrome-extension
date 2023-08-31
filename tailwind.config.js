/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      width: {
        125: "31.25rem",
      },
      height: {
        125: "31.25rem",
      },
    },
  },
  plugins: [],
};
