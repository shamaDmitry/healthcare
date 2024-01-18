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
      colors: {
        primary: 'rgba(27, 54, 100, 1)',
        secondary: 'rgba(191, 30, 46, 1)',
        'light-gray': 'rgba(244, 244, 244, 1)',
        light: 'rgba(251, 251, 251, 1)',
        gray: 'rgba(72, 76, 82, 1)',
        placeholder: 'rgba(159, 159, 159, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
