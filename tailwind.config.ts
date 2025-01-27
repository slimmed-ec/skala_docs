import type { Config } from "tailwindcss";

export default {
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
      },
      backgroundImage: {
        "gradient-line":
          "linear-gradient(50deg, #714dff, #9c83ff 31.28%, #e151ff 77.97%, #fff759 95.64%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
