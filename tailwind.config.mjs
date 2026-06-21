import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
        },
        navy: {
          DEFAULT: "#4F46E5",
          600: "#4F46E5",
          700: "#4338CA",
        },
        terracotta: {
          400: "#A5B4FC",
          500: "#F59E0B",
          600: "#D97706",
        },
        primary: { DEFAULT: "#4F46E5" },
        accent: { DEFAULT: "#F59E0B" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0B1120" },
        ink: {
          900: "#1E1B4B",
          700: "#4338CA",
          500: "#6366F1",
        },
      },
      maxWidth: {
        prose: "68ch",
        site: "72rem",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#334155" } },
      },
      fontFamily: {
        display: ["DM Sans", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
