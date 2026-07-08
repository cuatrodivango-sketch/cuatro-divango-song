import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        brand: {
          red: "#D8121F",
          "red-dark": "#B00E19",
          navy: "#101C3A",
          "navy-deep": "#0B1430",
          ink: "#141B2E",
          body: "#4B5265",
          muted: "#8A90A0",
          paper: "#F4F5F8",
          card: "#FFFFFF",
          line: "#E6E8EF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,28,58,0.05), 0 8px 24px rgba(16,28,58,0.07)",
        "card-hover":
          "0 2px 4px rgba(16,28,58,0.06), 0 14px 34px rgba(16,28,58,0.12)",
        cta: "0 6px 18px rgba(216,18,31,0.32)",
      },
      borderRadius: {
        card: "14px",
      },
      maxWidth: {
        shell: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
