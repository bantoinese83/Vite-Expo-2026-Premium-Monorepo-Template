/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    colors: {
      background: "hsl(240 10% 3.9%)",
      foreground: "hsl(0 0% 98%)",
      primary: {
        DEFAULT: "hsl(0 0% 98%)",
        foreground: "hsl(240 5.9% 10%)",
      },
      secondary: {
        DEFAULT: "hsl(240 3.7% 15.9%)",
        foreground: "hsl(0 0% 98%)",
      },
      destructive: {
        DEFAULT: "hsl(0 62.8% 30.6%)",
        foreground: "hsl(0 0% 98%)",
      },
      muted: {
        DEFAULT: "hsl(240 3.7% 15.9%)",
        foreground: "hsl(240 5% 64.9%)",
      },
      accent: {
        DEFAULT: "hsl(240 3.7% 15.9%)",
        foreground: "hsl(0 0% 98%)",
      },
      popover: {
        DEFAULT: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
      },
      card: {
        DEFAULT: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
      },
      border: "hsl(240 3.7% 15.9%)",
      input: "hsl(240 3.7% 15.9%)",
      ring: "hsl(240 4.9% 83.9%)",
    },
    borderRadius: {
      lg: "0.75rem",
      md: "calc(0.75rem - 2px)",
      sm: "calc(0.75rem - 4px)",
    },
  },
};
export const plugins = [];
