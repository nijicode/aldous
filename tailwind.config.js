/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ['"Space Grotesk",sans-serif'],
        Poppins: ["Poppins ,sans-serif"],
        Quicksand: ["Quicksand , sans-serif"],
        Rubik: ['"Rubik Glitch Pop", sans-serif'],
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.18)",
        mud: "#18181e",
      },
      objectPosition: {
        mine: ["-10px 10%"],
      },
    },
  },
  plugins: [],
};
