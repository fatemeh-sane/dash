/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontfamily:{
      'sans':['Pinar']
    },
    extend: {
      colors:{
        // bgColor:linearGradient("F8F9FA,F4F9FF"),
        primary:"#C4DFDF",
        secondary:"#E3F4F4",
        mainOrange:"#FFF4DE",
        subOrange:"#FFA800",
        mainPink:"#FFDEDE",
        subPink:"#F65464",
        mainBlue:"#E4F8FF",
        subBlue:"#00A3FF",
        subBlue1:"#0B4359",
        mainGreen:"#C5ECBE",
        subGreen:"#44713D",
        mainPurple:"#F3EFFB",
        subPurple:"#8950FC",
        colorActive:"#7ABB5B",
        colorInactive:"#C9CDC7",
        white:"#FFFFFF",
        number:"#585858",
        subNumber:"#505D6F",
        blackText:"#000000",



      }
    },
    fontFamily:{
      pinar:['pinar','sans-serif'],
      pinarB:['pinar','sans-serif']

    }
  },
  plugins: [],
}

