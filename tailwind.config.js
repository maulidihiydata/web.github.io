/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      screens: {
        'sm500': '500px',
        'xs': '400px',
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

