//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-027884': 'linear-gradient(90deg, #027884 0%, #FFFFFF 100%)',
      }),
      backgroundColor: {
        'custom': '#027884',
      },
    },
  },
  plugins: [],
}

