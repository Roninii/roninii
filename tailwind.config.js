const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary': '#7E4ED2;',
        'primary-dark': '#5d3991',
        'secondary': '#04dac6'
      }
    },
  },
  variants: {
    padding: ['hover', 'focus'],
    borderRadius: ['focus'],
    border: ['focus'],
    textColor: ['focus-within']
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.primary-gradient': {
          'background': 'linear-gradient(to right, #6200ee, #04dac6)',
        },
      }

      addUtilities(newUtilities, [])
    })
  ],
}
