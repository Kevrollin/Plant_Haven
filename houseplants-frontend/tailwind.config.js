module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32", // Deep Green
        secondary: "#A5D6A7", // Soft Green
        accent: "#8D6E63", // Earthy Brown
        background: "#F1F8E9", // Light Leafy Green
        text: "#2E3B32", // Dark Green Text
      },
      maxWidth: {
        "custom": "1600px",
      },
    },
  },
  plugins: [],
};
