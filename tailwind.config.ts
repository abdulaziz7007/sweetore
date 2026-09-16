import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        cocoa: "#3B241B",
        rose: "#DFA5A0",
        blush: "#F3D9D2",
        gold: "#B58A57"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(59,36,27,.10)",
        card: "0 10px 35px rgba(59,36,27,.08)"
      }
    }
  },
  plugins: []
};

export default config;