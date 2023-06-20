import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blurple: "#7289da",
      },
    },
  },
  plugins: [],
} satisfies Config;
