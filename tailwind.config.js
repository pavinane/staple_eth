/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      
      colors: {
        // 'blue': '#1fb6ff',
        // 'purple': '#7e5bef',
        'pink': '#FFF2ED',
        'orange': '#FFDBA3',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      backgroundColor:{
        "bg-orange-400":"#FF7449",
        "bg-pink-400":"#FFF2ED",
        "bg-pink-300":"#FFF1ED",
        "bg-orange-300":"#FFDBA3"
      },
    
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      container: {
        center: true,
      },
    }
  
  },
  plugins: [],
}