/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white":  "#FFFFFFff",
      "secondary": "#B4BF8Fff",
      "primary": "#5B700Cff",
      "ternary": "#f8faf6",
      "reseda-green": "#6D7554ff",
      "moss-green": "#96A75Aff",
      "error": "#B71C1C"
    },
    fontSize: {
      "xl": "1.25rem",
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      "big-title": "8rem"
    }
    
  },
  plugins: [],
}

