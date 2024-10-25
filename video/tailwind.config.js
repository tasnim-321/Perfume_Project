const plugin = require("tailwindcss/plugin")


const Myclass = plugin(function ({addUtilities}) {

addUtilities({

".my-rotate-y-180":{
  transform:"rotateY(180deg)",

},
".preserve-3d":{
  transformStyle:"preserve-3d",
},

".persective":{
  persective:"1000px",
},

".backface-hidden":{
  backfaceVisibility:"hidden",
},

}) ;
}) ;



/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }






  