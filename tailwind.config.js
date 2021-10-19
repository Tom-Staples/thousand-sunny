const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '450px',
      sm: '750px',
      md: '1000px',
      xl: '1500px'
    },
    colors: {
      white: colors.white,
      blue: colors.blue
    },
    extend: {
      colors: {
        orange: '#FB8F1D',
        gray: '#B8BECD',
        black: '#202336',
        lightBlack: '#4A4C53',
        darkBlack: '#000000',
        lightGray: '#AFB0B9',
        backgroundGray: '#E5E5E5',
        variant1Gray: '#7D7987',
        footerGray: '#F9F9FB',
        footerTextGray: '#848484',
        footerDividerGray: '#C4C4C4'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfairDisplay: ['"Playfair Display"', 'serif'],
        mulish: ['Mulish', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
