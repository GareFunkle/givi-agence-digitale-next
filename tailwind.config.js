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
        beige: "#c9af9b",
        "beige-light": "#efe7dc",
        brown: "#6d513f",
        "brown-light": "#c47e62",
        dark: "#1a1915",
      },
      backgroundImage: {
        "hero-background": "url('/home/banner/banniere-page-accueil.jpg')",
        "hero-news": "url('/news/image-news.jpg')",
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
