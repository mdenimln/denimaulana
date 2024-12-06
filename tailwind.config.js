/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        'primary': ['#000000']
      },
      colors: {
        'primary': ['#000000']
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}