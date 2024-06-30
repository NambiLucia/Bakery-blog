/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'custom-grey': '#303030',
        'custom-yellow': '#ffc966',
        'custom-grey': '#232323',
        'custom-green': '#01746c',
      },
      fontFamily: {
        'Cinzel': ['Cinzel'],
        "Lato":['Lato'],
      },
    },
  },
  plugins: [],
}

