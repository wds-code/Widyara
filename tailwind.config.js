/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
      },
      colors: {
        beton: "#E4E7EB", // warna dasar: abu beton
        tinta: "#18202B", // warna teks & header
      },
    },
  },
  plugins: [],
};
