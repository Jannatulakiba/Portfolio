/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18211d",
        paper: "#f4f6f2",
        muted: "#65736a",
        lime: "#c8f169",
        coral: "#ef725b",
        forest: "#244b39",
        line: "#dce4db",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};