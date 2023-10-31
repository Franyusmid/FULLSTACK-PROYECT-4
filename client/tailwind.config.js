/** @type {import('tailwindcss').Config} */
export default {
  // Contenido
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Tema
  theme: {
    extend: {
      colors: {
        'HeaderColor': 'a8a47f',
        'regal-Golden': '#efb810',
      },
      fontFamily: {
        'typelittle': ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'vino': "url('./src/assets/imagenes/vino.PNG')",
        
    },
  },

  // Plugins
  plugins: [],

  // Exportación adicional (si es necesario)
  // module.exports = {
  //   theme: {
  //     extend: {
  //       // ...
  //     },
  //   },
  // },
}};