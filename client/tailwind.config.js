/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'typelittle':['Dancing Script', 'cursive'],
      },
      colors:{
        'regal-Golden':'#efb810',
  
    },
  },
  plugins: [],
}}

// font-family: 'Dancing Script', ;
// font-family: 'Kanit', sans-serif;
// font-family: 'Roboto', sans-serif;