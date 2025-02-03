/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magicPink: "#f8c8dc",
        pastelWhite: "#fffafc",
        glitterPink: "#ffb6c1",
        hotPink: "#FF69B4",
      },
    },
  },
  plugins: [daisyui],
};
