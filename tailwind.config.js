/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#303841',
      grey: '#777777',
      yellow: '#f6c90e',
    },
    extend: {
      screens: {
        tablet: '800px',
        laptop: '1024px',
        desktop: '1290px',
      },
      keyframes: {
        flutter: {
          '0%, 100%': { transform: 'translateX(-50%) skew(0deg, -8deg)' },
          '50%': { transform: 'translateX(-30%) skew(8deg, -4deg )' },
        },
      },
      animation: {
        flutter: 'flutter 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
