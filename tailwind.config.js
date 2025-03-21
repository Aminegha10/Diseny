/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure Vite scans your files properly
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32a891", // Example custom color
      },
    },
  },
  plugins: [],
};
