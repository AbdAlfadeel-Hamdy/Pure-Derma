/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mixed: ["Roboto", "Tajawal", "sans-serif"],
      },
      colors: {
        primary: "#faad4f",
        "primary-dark": "#e19c47",
        "primary-dark-1": "#7d5728",
        "primary-dark-2": "#644520",
        "primary-dark-3": "#4B3418",
        "primary-light": "#fbbd72",
        "primary-light-1": "#FCC684",
        "primary-light-2": "#fddeb9",
        "gray-light-1": "#faf9f9",
        "gray-light-2": "#f4f2f2",
        "gray-light-3": "#f0eeee",
        "gray-light-4": "#ccc",
        "gray-dark-1": "#333",
        "gray-dark-2": "#777",
        "gray-dark-3": "#999",
      },
    },
  },
  plugins: [],
};
