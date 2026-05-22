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
        bg: "#0a0a0f",
        surface: "#111118",
        "surface-2": "#16161f",
        border: "#1e1e2e",
        "border-bright": "#2a2a3e",
        muted: "#6b7280",
        text: "#e8e8f0",
        "text-dim": "#9ca3af",
        purple: "#8b5cf6",
        blue: "#3b82f6",
        "purple-dim": "#6d28d9",
      },
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.15)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;