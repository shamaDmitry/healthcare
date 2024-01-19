/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'home-banner': "url('/images/homepage/banner.jpg')",
      },
      colors: {
        primary: 'rgba(27, 54, 100, 1)',
        secondary: 'rgba(191, 30, 46, 1)',
        'light-red': 'rgba(252, 244, 245, 1)',
        'light-gray': 'rgba(244, 244, 244, 1)',
        light: 'rgba(251, 251, 251, 1)',
        gray: 'rgba(72, 76, 82, 1)',
        separator: 'rgba(219, 219, 219, 1)',
        placeholder: 'rgba(159, 159, 159, 1)',
        mask: 'rgba(0, 0, 0, 0.2)',
        'gentle-black': 'rgba(6, 16, 33, 1)',
      },
    },
  },
  plugins: [],
};
