import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4285F4",
        lightblue: "#F1F3F4",
        lightgrey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
