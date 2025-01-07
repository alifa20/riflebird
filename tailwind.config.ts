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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#0A0C14",
        cream: "#DDDDD7",
        charcoal: "#2A2829",
      },
      animation: {
        fadeIn: 'fadeIn 0.9s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['var(--font-almarai)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-almarai)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;