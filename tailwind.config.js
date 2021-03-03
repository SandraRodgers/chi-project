const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      alibaster: {
        light: '',
        DEFAULT: '#eae7dc',
        dark: '',
      },
      tan: {
        light: '',
        DEFAULT: '#d8c385',
        dark: '',
      },
      davysGrey: {
        light: '',
        DEFAULT: '#5b5b5b',
        dark: '#3D3D3D',
      },
      blueJeans: {
        light: '',
        DEFAULT: '#10aff9',
        dark: '',
      },
      starCommandBlue: {
        light: '',
        DEFAULT: '#057cb3',
        dark: '',
      },
      yellowCrayola: {
        light:'',
        DEFAULT: '#fce622',
        dark: '',
      },
      maroon: {
        light:'',
        DEFAULT: '#8a0000',
        dark: '',
      },

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      sans: ['Libre Franklin', 'serif'],
      serif: ['Libre Baskerville', 'sans-serif']
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
