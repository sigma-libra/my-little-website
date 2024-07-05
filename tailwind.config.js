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
        lakeGrey: 'rgb(114, 150, 176)',
        darkGrey: 'rgb(75, 87, 83)',
        mossGreen: 'rgb(103, 156, 103)'
      },
      spacing: {
        '15': '60px',
      },
    },
  },
  plugins: [],
}