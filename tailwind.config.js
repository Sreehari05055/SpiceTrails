/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spice-green': '#22c55e',
        'spice-dark-green': '#16a34a',
        'spice-yellow': '#eab308',
        'spice-orange': '#f97316',
      }
    },
  },
  plugins: [],
}
