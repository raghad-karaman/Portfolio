import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EE",
        ink: "#15181D",
        steel: "#5B6470",
        line: "#E4E0D6",
        signal: "#B3261E",
        panel: "#FFFFFF",
        dark: {
          paper: "#12141A",
          panel: "#181B22",
          ink: "#EEECE4",
          steel: "#8B93A1",
          line: "#262A33"
        }
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: {
        content: "1180px"
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }]
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
