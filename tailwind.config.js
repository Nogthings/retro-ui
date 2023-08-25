/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
  }
};

