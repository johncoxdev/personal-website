
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
        '6xl': '204px'
      },
      height: { 
        '100': '26rem',
        '114': '28rem',
        '128': '32rem'
      },
      width: {
        '100': '26rem',
        '114': '28rem',
        '128': '32rem'
      },
      fontFamily: {
        'michroma': ['var(--michroma)', 'sans-serif'],
        'exo': ['var(--exo)', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'dark-babyblue': '#41BAE0',
        'babyblue': '#6CDBEA',
        'blurple': '#2703B8',
        'purple': '#751E9E',
        'galactic-purple': '#30278F'
      },
      animation: {
        'animate-text': 'animate-text 3s ease-out infinite',
        'animate-ping': 'animate-ping 5s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {  
        'animate-ping': {
          '0%, 100%': {
            'transform': 'scale(2)',
            'opacity': '0'
          },
          '50%': {
            'transform': 'scale(1)',
            'opacity': '1'
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
