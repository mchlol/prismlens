import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blueblack: "#1A191F",
      riderred: '#D31507',
      ridergreen: '#B2D28F',
      rideryellow: '#F5D60A',
      ridercream: '#FAF9E5'
    },
    extend: {
      fontFamily: {
        averiaSerifLibre: ['"Averia Serif Libre"', "serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
