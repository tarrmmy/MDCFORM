/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F21AA",
        primary_dark: "#090722",
        prime: "#5246B8",
        dim: "#EFEEFC",
        light: "#FEFEFE",
        slate: "#F1F0F9",
        accent: "#6AD6F0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
