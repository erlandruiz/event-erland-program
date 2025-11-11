/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"], // permite dark mode con class="dark"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "15px",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1310px",
    },
    fontFamily: {
      primary:"var(--font-poppins)",
      secondary:"var(--font-caveat)"
    },
    extend: {
      colors: {
        primary: "#0f1017",
        accent: {
          DEFAULT: "#e14817",
          hover: "#cb4419",
        },
        secondary: {
          DEFAULT: "#1b1c23",
          hover: "#1f212d",
        },
        tertiary: {
          DEFAULT: "#26272e",
          hover: "#24252c",
        },
        grey:"#737373"
      },
      backgroundImage:{
        hero_bg1:"url(/assets/hero/hero-bg1.png)",
        hero_bg2:"url(/assets/hero/hero-bg2.png)",
        pattern_bg:"url(/assets/pattern_bg.png)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
