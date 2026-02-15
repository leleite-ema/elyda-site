import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: "#F5F2EA",
          green: "#3F8C6A",
          ink: "#1F2A37",
          slate: "#4F5D75",
          line: "#E7E2D8",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
