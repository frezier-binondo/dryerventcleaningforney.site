/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36aaf5',
          500: '#0c8de4',
          600: '#016fc2',
          700: '#02589d',
          800: '#064b82',
          900: '#0b3f6d',
          950: '#072848',
        },
        navy: {
          800: '#111f3d',
          900: '#0b162c',
          950: '#060d1b',
        },
        flame: {
          500: '#ff6b35',
          600: '#ea580c',
          700: '#c2410c',
        },
        popup: {
          DEFAULT: '#0284c7', // vibrant cyan/blue popup
          dark: '#0369a1',
          accent: '#d97706', // amber accent popup
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
