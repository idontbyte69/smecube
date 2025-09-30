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
        'soft': '0 10px 25px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        'xl': '1rem'
      },
      maxWidth: {
        'container': '1240px'
      }
    },
  },
  plugins: [],
}

