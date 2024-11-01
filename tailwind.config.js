import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        custom: "2rem",
        mobile: "0.5rem",
      },
      fontFamily: {
        custom: ["poppins", "sans-serif"],
      },
      borderRadius: {
        mobile: "6rem",
        desktop: "14rem",
      },
    },
  },
  plugins: [fluid],
};
