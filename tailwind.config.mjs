import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F8FAFC",
          100: "#0F0F23",
          200: "#E2E8F0",
        },
        terracotta: {
          400: "#60A5FA",
          500: "#1E1B4B",
          600: "#1E3A5F",
        },
        primary: { DEFAULT: "#1E1B4B" },
        accent: { DEFAULT: "#22C55E" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#F8FAFC" },
        ink: {
          900: "#F8FAFC",
          700: "#4A4340",
          500: "#6E6863",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ["Amatic SC", "Georgia", "serif"],
        sans: ["Cabin", "system-ui", "sans-serif"],
        body: ["Cabin", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
