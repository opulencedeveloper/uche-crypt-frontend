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
        mini: "320px",
      },
      fontFamily: {
        thin: ["CarosSoftThin", "sans-serif"],
        extraLight: ["CarosSoftExtraLight", "sans-serif"],
        normal: ["CarosSoftNormal", "sans-serif"],
        medium: ["CarosSoftMedium", "sans-serif"],
        bold: ["CarosSoftBold", "sans-serif"],
        extraBold: ["CarosSoftExtraBold", "sans-serif"],
        geistRegular: ["GeistRegular", "sans-serif"],
        geist500: ["GeistMedium", "sans-serif"],
        geist700: ["GeistBold", "sans-serif"],  
        BDOGrotesk300: ["BDOGroteskLight", "sans-serif"],
        BDOGrotesk500: ["BDOGroteskMedium", "sans-serif"],
      },
      spacing: {
        "5p": "5px",
        "9p": "9px",
        "10p": "10px",
        "18p": "18px",
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
        fffefb: "#FFFEFB",
        c006633: "#006633",
        e5e5e5: "#E5E5E5",
        c828282: "#828282",
        cD4EADF: "#D4EADF",
        cE6FFFE: "#E6FFFE",
        c2BA39E: "#2BA39E",
        c636363: "#636363",
        cFFFCEB: "#FFFCEB",
        c80711B: "#80711B",
        cF6F0FD: "#F6F0FD",
        c9E52F7: "#9E52F7",
        cE7FEF4: "#E7FEF4",
        cFF3B30: "#FF3B30",
        cFFEBEA: "#FFEBEA",
        cF4F4F5: "#F4F4F5",
        cF1F1F1: "#F1F1F1",
        c080808: "#080808",
        c050505: "#050505",
        c9E9E9E: "#9E9E9E",
        cF0FDF7: "#F0FDF7",
        c78788029: "#78788029",
        cF6F6F6A8: "#F6F6F6A8",
        rgba118118128: "rgba(118, 118, 128, 0.08)",
        rgba87235161: "rgba(87, 235, 161, 0.09)",
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
        "10p": "10px"
      },
      height: {
        84: "84px",
        homeHero: "calc(100vh - 84px)",
        35: "35px",
        fixed52: "52px",
        394: "394px",
        "81p": "81px",
        "10p": "10px",
        "49p": "49px",
        "41p": "41px",
        "33p": "33px",
        "37p": "37px"
      },
      margin: { 42: "42px", "35p": "35px", "22p": "22px" },
      padding: { 34: "34px", 37: "37px", 67: "67px", "14p": "14px", },
      fontSize: { 62: "62px", 28: "28px", "22p": "22px", "18p":"18px" },
      lineHeight: { 80: "80px", 42: "42px", 72: "72px" },
      width: { 184: "184px", 759: "759px", 338: "338px", "10p": "10px", "204p": "204px", "41p": "41px", "133p": "133px" },
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
