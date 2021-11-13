module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'xl': '3rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ "daisyui" ],
}
