/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f6e3ec',
          accent: '#ed2849',
          text: '#1e293b',
        },
      },
      fontFamily: {
        'bangla': ['Hind Siliguri', 'sans-serif'],
        'english': ['Akseleran', 'sans-serif'],
        'mixed': ['Hind Siliguri', 'Akseleran', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.06)',
        'xl': '0 25px 50px rgba(0,0,0,0.1)',
        '2xl': '0 50px 100px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem'
      },
      maxWidth: {
        'container': '1240px'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient-shift 3s ease infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px'
      }
    },
  },
  plugins: [],
}

