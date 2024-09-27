import type { Config } from "tailwindcss";
import { spacing, fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "text-gray-700",
            a: {
              color: "text-blue-500",
              "&:hover": {
                color: "text-blue-700",
              },
              code: { color: "text-blue-400" },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: "text-pink-500" },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: "text-gray-300",
            a: {
              color: "text-blue-400",
              "&:hover": {
                color: "text-blue-600",
              },
              code: { color: "text-blue-400" },
            },
            blockquote: {
              borderLeftColor: "text-gray-700",
              color: "text-gray-300",
            },
            "h2,h3,h4": {
              color: "text-gray-100",
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: "text-gray-700" },
            ol: {
              li: {
                "&:before": { color: "text-gray-500" },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: "bg-gray-500" },
              },
            },
            strong: { color: "text-gray-300" },
            thead: {
              color: "text-gray-100",
            },
            tbody: {
              tr: {
                borderBottomColor: "text-gray-700",
              },
            },
          },
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
