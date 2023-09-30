/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blackish: "#141414",
      },
      fontFamily: {
        dm: ["Dm Sans", "sans-serif"],
        alli: ["Allison", "cursive"],
        ndo: ["Nothing You Could Do", "cursive"],
        qwig: ["Qwigley", "cursive"],
        shali: ["Shalimar", "cursive"],
      },
    },
  },
  plugins: [],
};
