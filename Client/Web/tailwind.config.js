/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode with a "class" strategy
  theme: {
    extend: {
      colors: {
        // Semantic color palette for light mode
        light: {
          main: "#036BDC",           // Main brand color
          secondary: "#014B9C",      // Secondary color
          accent: "#93C2F5",         // Accent color
          background: "#FAF9F6",     // Main background
          surface: "#FDFDFD",        // Surface (cards, containers)
          text: "#0E0E0E",           // Primary text
          helperText: "#646464",     // Helper or secondary text
          border: "#D3D3D3",         // Border colors
        },
        // Semantic color palette for dark mode
        dark: {
          main: "#93C2F5",           // Main brand color
          secondary: "#036BDC",      // Secondary color
          accent: "#014B9C",         // Accent color
          background: "#0E0E0E",     // Main background
          surface: "#000000",        // Surface (cards, containers)
          text: "#FAF9F6",           // Primary text
          helperText: "#A1A1A1",     // Helper or secondary text
          border: "#646464",         // Border colors
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // Set "Manrope" as the default font
      },
      spacing: {
        180: "45rem", // Section spacing
        64: "16rem",  // Title to section
        54: "13.5rem", // Merging space
        30: "7.5rem", // Border radius
        24: "6rem",   // Gutter
      },
      borderRadius: {
        "boarder-curve": "30px",
      },
    },
  },
  plugins: [],
};
