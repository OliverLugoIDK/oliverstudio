import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        carbon: "#0B0B0D",
        graphite: "#111114",
        line: "#27272A",
        redImpact: "#FF1B2E",
        redDeep: "#A60012",
        paper: "#F5F0E8"
      },
      boxShadow: {
        redGlow: "0 0 60px rgba(255, 27, 46, 0.20)",
        redSoft: "0 24px 80px rgba(166, 0, 18, 0.22)"
      },
      backgroundImage: {
        "red-radial": "radial-gradient(circle at 50% 0%, rgba(255,27,46,.23), transparent 34%), radial-gradient(circle at 80% 22%, rgba(166,0,18,.16), transparent 28%)",
        "panel-grid": "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
export default config;
