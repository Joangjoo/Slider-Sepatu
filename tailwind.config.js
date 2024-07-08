/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'Background' : '#11212E',
        'BackgroundSp' : '#0C1821',
        'font' : '#E9EBEB',
        'star' : '#FFBA00',
        'garis' : '#11325B'
      },
      fontFamily : {
        rubik : ["Rubik Glitch Pop", "system-ui"],
      }
    },
  },
  plugins: [],
}

