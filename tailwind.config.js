/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff00a8',
        'dark-light': '#1c1c1f',
      },
      backgroundColor: {
        test: 'url(#goo)', // exemple d'utilisation d'un filtre SVG nommé "blur"
      },
      backgroundImage: {
        'hero-background': "url('/assets/Home/Banner/banner_givi.jpg')",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
