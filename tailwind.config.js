
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'michroma': ['var(--michroma)'],
        'exo': ['var(--exo)']
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
        text: 'text 3s ease-out infinite',
      },
      keyframes: {  
        text: {
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
