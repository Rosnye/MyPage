/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-primary' : '#D55DF0',
        'red-primary' : '#F05D71',
        'rose-primary' : '#EF5EC8',
        'violet-secondary' : '#A55DF0',
        'red-secondary' : '#F0715D',
      },
    },
  },
  plugins: [],
}