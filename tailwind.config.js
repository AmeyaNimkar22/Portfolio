/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Scans all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
