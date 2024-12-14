import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "swiss-bold-italic": ["var(--font-swiss-bold-italic)"],
        "swiss-bold": ["var(--font-swiss-bold)"],
        "swiss-italic": ["var(--font-swiss-italic)"],
        "swiss-medium": ["var(--font-swiss-medium)"],
        "swiss-regular": ["var(--font-swiss-regular)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
