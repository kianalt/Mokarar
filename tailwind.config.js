/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1C1E",         // your dark text color
        primary: "ffff",     // your main accent
        secondary: "#ceaf87", 
        red:"#ab1219",
        background: "#FFFFFF",  // default background
        darkbg: "#0D0D0F",      // dark mode background
        lighttext: "#F5F5F7",   // light text for dark mode
      },
    },
  },
  darkMode: "class", // allows switching dark/light via a class
  plugins: [],
};
