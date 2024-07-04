/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist : ["text-3xl","text-red-600","before:bg-blue-400","before:bg-green-400","before:bg-yellow-400"],
  theme: {
    extend: {
      fontFamily:{
       'inter' : ['inter'], 
       'poppins' : ['poppins'] ,
       'freeman' : ['freeman'] ,
       'bubblegumsans' : ['bubblegum sans'] ,
      },
    },
  },
  plugins: [],
}

