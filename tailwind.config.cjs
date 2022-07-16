/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        brand1: "#CAF0F8",
        brand2: "#90E0EF",
        brand3: "#00B4D8",
        brand4: "#0077B6",
        brand5: "#03045E",
      },
    },
  },
  plugins: [],
};
