/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '30': '0.30',
      },
      colors: {
        'jest': '#C63D14',
      },
    },
  },
  plugins: [],
}