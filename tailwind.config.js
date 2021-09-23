module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'morpho-pattern': "url('morpho-pattern.png')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
