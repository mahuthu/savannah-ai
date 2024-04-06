/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { colors: {
      gold: '#FFD700',
      'custom-jungle-green': '#243F1C', // Add your preferred gold color code here
    },
      
    },
  },
  plugins: [],
}

