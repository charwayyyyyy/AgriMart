/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ghanaian flag-inspired colors
        'ghana-red': '#CE1126',
        'ghana-gold': '#FCD116',
        'ghana-green': '#006B3F',
        // Earth tones for farm theme
        'soil': {
          50: '#FAF6F1',
          100: '#F0E6D5',
          200: '#E1CCAD',
          300: '#D2B285',
          400: '#C3995D',
          500: '#B47F35',
          600: '#8F652A',
          700: '#6B4B20',
          800: '#473215',
          900: '#23190B',
        },
        'harvest': {
          50: '#FDF8E7',
          100: '#FBEEC4',
          200: '#F8DD8C',
          300: '#F5CC54',
          400: '#F2BB1C',
          500: '#D9A412',
          600: '#AD830E',
          700: '#81620B',
          800: '#554107',
          900: '#2A2104',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      backgroundImage: {
        'kente-pattern': "url('/patterns/kente.svg')",
        'adinkra-pattern': "url('/patterns/adinkra.svg')",
      },
      animation: {
        'scroll-slow': 'scroll 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};