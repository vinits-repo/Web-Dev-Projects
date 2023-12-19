/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        'cream': 'hsl(30, 38%, 92%)',
        'white': 'hsl(0, 0%, 100%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'dark-cyan': 'hsl(158, 36%, 37%)'
      },

      fontFamily: {
        'Montserrat': ["Montserrat", "sans-serif"],
        'Fraunces': ["Fraunces", "serif"],
      }
    },
  },
  plugins: [],
}

