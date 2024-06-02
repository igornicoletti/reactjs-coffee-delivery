import headlessuiPlugin from '@headlessui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'in-cyan': '#8BE9FD',
        'in-dark': '#282A36',
        'in-green': '#50FA7B',
        'in-orange': '#FFB86C',
        'in-purple': '#c084fc',
        'in-red': '#FF5555',
        'in-slate': '#2B2D39',
        'in-stone': '#44475A',
        'in-white': '#F8F8F2',
      }
    }
  },
  plugins: [
    headlessuiPlugin
  ],
}