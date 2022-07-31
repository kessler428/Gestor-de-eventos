/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        banner: '#B28064',
        purple: '#855256',
        "bg-admin": '#02141D',
        "bg-violet": '#C129F9',
        "bg-violet-hover": '#9a18c9',
      }
    },
    fontFamily: {
      title: ["'Namashte'"],
    },
    backgroundImage:{
      home: "url('./img/bg.jpg')",
      flower: "url('./img/bg-flower.png')"
    }
  },
  plugins: [],
}
