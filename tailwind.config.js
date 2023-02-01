/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bh-primary)',
        secondary: 'var(--color-bh-secondary)'
      },
      textColor: {
        accent: 'var(--color-text-accent',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      }
    },
  },
  plugins: [],
}
