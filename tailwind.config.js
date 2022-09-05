/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xlg: "1440px"
    },
    extend: {
      colors: {
        primary: "#F2F3FA",
        active: "#938DF3",
        post: "#353645",
        
        
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}
