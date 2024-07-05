/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#964B00',
        cactusGreen: 'rgb(138, 173, 138)',
      },
      spacing: {
        '15': '60px',
      },
    },
  },
  plugins: [],
}