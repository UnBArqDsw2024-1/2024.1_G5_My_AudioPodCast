/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
      maxWidth: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}