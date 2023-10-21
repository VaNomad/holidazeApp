/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/nickson.jpg')",
      },
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blackish: "#141414",
        holigreen: "#70C376",
        holired: "#C37070",
        holiblue: "#70BAC3",
        holipink: "#FCB5FD",
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
