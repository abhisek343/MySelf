/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',    // Indigo - Trust & Professionalism
        'primary-light': '#818CF8',
        'primary-dark': '#3730A3',
        'secondary': '#10B981', // Emerald - Growth & Success
        'secondary-light': '#34D399',
        'secondary-dark': '#059669',
        'accent': '#EC4899',    // Pink - Creativity & Modern
        'accent-light': '#F472B6',
        'accent-dark': '#DB2777',
        'neutral': '#F9FAFB',   // Light Gray (light mode bg)
        'neutral-dark': '#111827', // Dark Gray (dark mode bg)
        'text-main': '#1F2937', // Dark Text (light mode)
        'text-main-dark': '#F3F4F6', // Light Text (dark mode)
        'surface': '#FFFFFF',   // Surface color (light mode)
        'surface-dark': '#1F2937', // Surface color (dark mode)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
} 