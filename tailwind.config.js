
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        'off-black': '#0B0B0B',
        'white': '#ffffff',
        'gray': '#303030',
        'light-orange': '#FFE0B1',
      },
      transitionDuration: {
        '1': '1000ms',
        '2': '2000ms',
        '3': '3000ms',
        '4': '4000ms',
        '5': '5000ms'
      },
      animation: {
        'animate-text': 'animate-text 3s ease-out infinite',
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
      keyframes: {  
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
        }
      },
    },
  },
  variants: {
    extend: {
      gradientTransition: ['hover'],
    }
  },
  plugins: [],
}
