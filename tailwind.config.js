module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#0d59f2",
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
          "background-light": "#f5f6f8",
          "background-dark": "#101622",
          "card-dark": "#161c29",
          "border-dark": "rgba(255, 255, 255, 0.1)",
          "text-muted-dark": "#9ca6ba",
          "star-filled": "#ffc107",
          "star-empty": "#374151",
        },
        fontFamily: {
          display: ["Inter", "sans-serif"],
          sans: ["Noto Sans JP", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "progress-bar": {
            "0%": { width: "0%" },
          },
          "glow": {
            "0%, 100%": { color: "rgb(209, 213, 219)" },
            "50%": { color: "#ffc107" },
          },
          "move-forever": {
            "0%": { transform: "translate3d(-90px, 0, 0)" },
            "100%": { transform: "translate3d(85px, 0, 0)" },
          },
          "star-glow": {
            "0%, 100%": {
              opacity: "0.4",
              transform: "translate(-50%, -50%) scale(0.8)",
            },
            "50%": {
              opacity: "1",
              transform: "translate(-50%, -50%) scale(1.2)",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "progress-bar-90": "progress-bar 1.5s ease-out forwards 0.2s",
          "progress-bar-80": "progress-bar 1.5s ease-out forwards 0.2s",
          "progress-bar-60": "progress-bar 1.5s ease-out forwards 0.2s",
          "glow": "glow 0.6s ease-in-out",
          "wave-7s": "move-forever 7s cubic-bezier(.55,.5,.45,.5) infinite",
          "wave-10s": "move-forever 10s cubic-bezier(.55,.5,.45,.5) infinite",
          "wave-13s": "move-forever 13s cubic-bezier(.55,.5,.45,.5) infinite",
          "wave-20s": "move-forever 20s cubic-bezier(.55,.5,.45,.5) infinite",
          "star-glow": "star-glow 3s ease-in-out infinite",
        },
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [],
    darkMode: ["class"],
  };
  