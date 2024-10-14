/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
            fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
}

