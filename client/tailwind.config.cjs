/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["cupcake", "dark"]
  },
  plugins: [require("daisyui")]
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
