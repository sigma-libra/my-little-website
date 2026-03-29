/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brown: '#964B00',
        cactusGreen: 'rgb(138, 173, 138)',
        lakeGrey: 'rgb(114, 150, 176)',
        darkGrey: 'rgb(75, 87, 83)',
        mossGreen: 'rgb(103, 156, 103)',
        forestDark: '#151e19',
        warmIvory: '#f2ede6',
        dustyRose: '#f0dada',
        roseBlush: '#f2b8bf',
        roseDark: '#8B3252',
        warmStone: '#8a7e79',
      },
      spacing: {
        '15': '60px',
      },
    },
  },
  plugins: [],
}