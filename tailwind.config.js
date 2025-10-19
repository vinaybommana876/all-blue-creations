/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all your source files
  ],
  theme: {
    extend: {
      colors: {
        // you can add custom colors here
        pinkCustom: "#e79098",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
