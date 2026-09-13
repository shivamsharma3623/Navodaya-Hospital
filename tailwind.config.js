/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: "#123B5D",
          dark: "#0B2940",
          light: "#1F5B7A",
        },
        sand: "#F8FAFC",
        sage: "#EAF3F8",
        gold: {
          DEFAULT: "#2F80ED",
          soft: "#B9D8FF",
        },
        ink: "#1F2937",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
