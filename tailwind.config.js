/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ar: ["Tajawal"],
      en: ["Roboto"],
      "font-bi": ["Roboto", "Tajwal"],
    },
    extend: {
      colors: {
        "primary-dark": "#e19c47",
        "primary-dark-1": "#7d5728",
        "primary-dark-2": "#644520",
        "primary-light": "#fbbd72",
        "primary-light-1": "#fddeb9",
        primary: "#faad4f",
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
