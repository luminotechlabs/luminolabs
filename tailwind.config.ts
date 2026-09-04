import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        sage: {
          50: "#f4f7f2",
          100: "#e6ece2",
          200: "#cdd9c5",
          300: "#a8bd9c",
          400: "#7f9d72",
          500: "#5f8255",
          600: "#4a6844",
          700: "#3b5237",
          800: "#31432e",
          900: "#293828",
          950: "#131e13",
        },
        background: "#f9faf8",
        foreground: "#1e3322",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
