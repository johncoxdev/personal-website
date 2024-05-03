import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      letterSpacing: {
        'widestxl': '0.14em',
        'widest2xl': '0.2em'
      },
      cursor: {
        'custom': 'url(/cursor.png), auto'
      },
      backgroundImage: {
        'stars': 'url(/big_background.png)'
      },
      blur: {
        '4xl': '72px', 
        '5xl': '152px',
        '6xl': '204px',
        '7xl': '254px',
        '8xl': '304px',
        '9xl': '354px'
      },
      height: { 
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '100': '26rem',
        '114': '28rem',
        '128': '32rem'
      },
      width: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '100': '26rem',
        '114': '28rem',
        '128': '32rem'
      },
      fontFamily: {
        'julius': ['var(--julius)', 'sans-serif'],
        'exo': ['var(--exo)', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        'off-black': '#050505',
        'dark-blue': '#030325',
        'white': '#ffffff',
        'light-orange': '#FFE0B1',
        'blue-black': '#0B0D16',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'animate-ping': {
          '0%, 100%': {
            'transform': 'scale(1)',
          },
          '50%': {
            'transform': 'scale(0.5)',
          }
        },
        'animate-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'meteor': {
          "0%": { 
            transform: "rotate(215deg) translateX(0)",
            opacity: "1" 
          },
          "70%": { 
            opacity: "1" 
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'animate-text': 'animate-text 3s ease-out infinite',
        "meteor-effect": "meteor 5s linear infinite",
        'ping-1': `animate-ping 1s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-2': `animate-ping 2s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-3': `animate-ping 3s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-4': `animate-ping 4s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-5': `animate-ping 5s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-6': `animate-ping 6s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-7': `animate-ping 7s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-8': `animate-ping 8s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-9': `animate-ping 9s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
        'ping-0': `animate-ping 10s cubic-bezier(1, 0.5, 0.2, 1) infinite`,
      },
      transitionDuration: {
        '1': '1000ms',
        '2': '2000ms',
        '3': '3000ms',
        '4': '4000ms',
        '5': '5000ms'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config