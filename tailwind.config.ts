import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
        // Cuerpo: Inter — legible, moderna, tecnológica
        sans: [
          "'Inter Variable'",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        // Display: Plus Jakarta Sans — premium, emocional, elegante
        display: [
          "'Plus Jakarta Sans Variable'",
          "'Plus Jakarta Sans'",
          "'Inter Variable'",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        // Sombras en capas, más suaves y profundas (premium)
        card: "0 1px 2px rgba(16,28,58,0.04), 0 4px 12px rgba(16,28,58,0.05), 0 12px 32px rgba(16,28,58,0.06)",
        "card-hover":
          "0 2px 4px rgba(16,28,58,0.05), 0 10px 24px rgba(16,28,58,0.09), 0 24px 56px rgba(16,28,58,0.12)",
        cta: "0 2px 6px rgba(216,18,31,0.25), 0 10px 26px rgba(216,18,31,0.30)",
        "cta-hover":
          "0 4px 10px rgba(216,18,31,0.28), 0 16px 38px rgba(216,18,31,0.38)",
        soft: "0 1px 3px rgba(16,28,58,0.06)",
      },
      borderRadius: {
        card: "18px",
        btn: "12px",
      },
      maxWidth: {
        shell: "1160px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
