/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["cupcake", "dark"]
  },
  plugins: [require("daisyui")],
  
  screens: {

      'max-sm': '640px',
      // => @media (min-width: 640px) { ... }
      'max-md': '768px',
      // => @media (min-width: 768px) { ... }
      'max-lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'max-xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'max-2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  },
  
}

// daisyui: {
//   themes: [
//     {
//       gunmetal: {
//         primary: "#99B6CC",
//         secondary: "#576152",
//         accent: "#A3AE9E",
//         neutral: "#D0EEFF",
//         "base-100": "#e7ebe5",
//         info: "#0000FF",
//         success: "#008000",
//         warning: "#A6A659",
//         error: "#FF0000"
//       }
//     }
//   ]
// },
