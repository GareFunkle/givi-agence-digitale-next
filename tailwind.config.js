/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "title-big": "calc(3rem + 1vw)",
        "title-medium": "calc(2rem + 1vw)",
        "title-small": "calc(2rem + 1vw / 100)",
        two: "2rem",
      },
      colors: {
        pink: "#ff00a8",
        "dark-light": "#1c1c1f",
      },
      backgroundImage: {
        "hero-background":
          "url('/assets/Home/Banner/banniere-page-accueil.jpg')",
        "hero-news": "url('/assets/news/image-news.jpg')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
