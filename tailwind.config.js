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
      },
      animation: {
        bounceIn: "bounceIn 0.3s ease-out",
      },
      keyframes: {
        bounceIn: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}