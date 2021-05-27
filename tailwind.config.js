const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
    ],
  },
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
      whitesmoke: {
        light: '',
        DEFAULT: '#f5f5f5',
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
      carolinaBlue: {
        light: '',
        DEFAULT: '#13A3DC',
        dark: '',
      },
      starCommandBlue: {
        light: '',
        DEFAULT: '#057cb3',
        dark: '',
      },
      middleYellow: {
        light:'',
        DEFAULT: '#FEEA00',
        dark: '',
      },
      maroon: {
        light:'',
        DEFAULT: '#8a0000',
        dark: '',
      },
      seaGreen: {
        light: '#eafce8',
        DEFAULT: '#8cc686',
        dark: '#1bb279'
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
      sans: ['Poppins', 'sans'],
      serif: ['Playfair Display', 'serif']
    },
    extend: {
      backgroundImage: theme => ({
      'banner-desktop': "url('~assets/images/banner_desktop11.png')",
      'banner-background': "url('~assets/images/banner_background.png')",
       'blue-dots': "url('~assets/images/bluebackground.png')",
      }),
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  variants: {
    extend: {
      animation: ["motion-safe"]
    },
    
  },
  plugins: [

  ],
}
