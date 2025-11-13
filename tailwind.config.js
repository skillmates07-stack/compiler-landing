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
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#333333',
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
}
