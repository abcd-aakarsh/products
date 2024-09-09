/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mob":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/hero_mob.jpg')",
        "hero-desk":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/hero2.jpg')",
        "elevate-men":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/elevate_men.jpg')",
        "elevate-women":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/elevate_women.jpg')",
        "elevate-bag":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/elevate_bag.jpg')",
      },
    },
  },
  plugins: [],
};
