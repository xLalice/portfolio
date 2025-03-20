import { DiBlackberry } from "react-icons/di";

export default {
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 2s infinite",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [{
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarcolor: "rgb(31 29 29) white"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "black",
          },
          "&::-webkit-scrollbar-thumb": {
            border: "1px solid black",
            backgroundColor: "white",
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover", "focus"])
    }
  }],
};
