import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF3F7',
        },
        violet: {
          50: '#EADFF2',
          100: '#E9DFF2',
          500: '#A678B4',
          600: '#8A5A9F',
        },
        rose: {
          300: '#F7C8E0',
        },
        pink: {
          300: '#E4B6CC',
        },
        charcoal: {
          900: '#2E2E2E',
        },
        slate: {
          600: '#6D6D6D',
        },
      },
      boxShadow: {
        violetSoft: '0 4px 8px rgba(166, 120, 180, 0.3)',
      },
    },
  },
  plugins: [],
})
