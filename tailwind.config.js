/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { top: '0px' },
          '100%': { top: '100vh' },
        },
      },
      animation: {
        fall: 'fall 5s linear infinite',
      },
    },
  },
  plugins: [],
}

