/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c8563", // ✅ FIXED: only one #
      },
    },
  },
  plugins: [],
};
