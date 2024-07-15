import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averiaSerifLibre: ['"Averia Serif Libre"', "serif"],
        inter: ['"Inter"', "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
