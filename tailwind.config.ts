import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#050505",
        ink: "#141414",
        road: "#242424",
        amber: "#ffffff",
        ember: "#e31712",
        cream: "#070707",
        paper: "#f6f1ea"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 0, 0, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
