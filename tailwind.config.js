
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      keyframes: {  
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
