import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        tablet: "900px",
      },
      fontFamily: {
        thin: ["CarosSoftThin", "sans-serif"],
        extraLight: ["CarosSoftExtraLight", "sans-serif"],
        normal: ["CarosSoftNormal", "sans-serif"],
        medium: ["CarosSoftMedium", "sans-serif"],
        bold: ["CarosSoftBold", "sans-serif"],
        extraBold: ["CarosSoftExtraBold", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        honeydew: "#F9FFFC",
        dark1: "#3A3A3C",
        dark4: "#C7C9D9",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primarygreen1: "#006633",
        oldlace: "#FCF8ED",
        deepGreen: "#003D1F",
        amber: "#E5B800",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      height: {
        84: "84px",
        homeHero: "calc(100vh - 84px)",
        35: "35px",
        fixed52: "52px",
        394: "394px",
      },
      margin: { 42: "42px" },
      padding: { 34: "34px", 37: "37px", 67: "67px" },
      fontSize: { 62: "62px", 28: "28px" },
      lineHeight: { 80: "80px", 42: "42px", 72: "72px" },
      width: { 184: "184px", 759: "759px", 338: "338px" },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
