module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cta: '#DE49F7',
        link: '#9BC5F8',
        background: '#242424',
        'background-light': '#2A2A2A',
        reading: '#EEEEEE',
        primary: '#7D3AF5',
        secondary: '#EC4476',
        accent: '#FAD34C',
        'secondary-accent': '#F4923F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
