/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {},
    screens:{
      sm:'540px',
      md:'720px',
      lg:'960px',
      xl:'1140px',
      '2xl':'1320px'
    }
  },
}

