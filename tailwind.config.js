const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem'
    },
    extend: {
      colors: {
        primary: '#5F3DF7'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '350ms'
      }
    }
  },
  plugins: [
    //это делается для объединения нескольких свойств CSS водно(в нашем случае это будет центрирование по центру)
    plugin(({ addUtilities, addComponents }) => {
      addComponents({
        '.shadow-icon': {
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '0.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#353538',
          fontSize: '2.3rem',
          backgroundColor: '#fff',
          transition: 'box-shadow .4s ease-in-out',
          boxShadow: '0 4px 10px rgba(45, 8, 125, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 50px rgba(45, 8, 125, 0.3)'
          }
        }
      })
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    })
  ]
}
