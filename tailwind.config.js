/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dracula-dark': '#282A36',
        'dracula-white': '#F8F8F2',
        'dracula-red': '#FF5555',
        'dracula-cyan': '#8BE9FD',
        'dracula-line': '#44475A',
        'dracula-green': '#50FA7B',
        'dracula-pink': '#FF79C6',
        'dracula-comment': '#6272A4',
        'dracula-orange': '#FFB86C',
        'dracula-purple': '#BD93F9',
        'dracula-yellow': '#F1FA8C',
        'dracula-wrapper': '#2B2D39',
      }
    }
  },
  plugins: [],
}