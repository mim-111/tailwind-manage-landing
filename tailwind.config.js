/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedBlue: 'hsl(210, 100%, 50%)',
          veryPaleRed: 'hsl(0, 100%, 50%)',
          veryLightGray: 'hsl(60, 100%, 50%)',
      }
    },
  },
  plugins: [],
}

