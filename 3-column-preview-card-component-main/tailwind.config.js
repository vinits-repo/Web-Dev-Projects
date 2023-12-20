/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'Bright-orange': 'hsl(31, 77%, 52%)',
        'Dark-cyan': 'hsl(184, 100%, 22%)',
        'Very-dark-cyan': 'hsl(179, 100%, 13%)',
        'Transparent-white': 'hsla(0, 0%, 100%, 0.75)',
       'Very-light-gray': 'hsl(0, 0%, 95%)',
      },

      fontFamily: {
        'Lexend-Deca': ['Lexend Deca', 'sans-serif'],
        'Big-Shoulder-Display': ['Big Shoulders Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

