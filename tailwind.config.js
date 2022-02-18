module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: (theme) => {
        return new Array(100)
          .fill(0)
          .map((_, i) => {
            const start = 0
            return {
              [`${i + start}`]: `${0.25 * (i + start)}rem`,
            }
          })
          .reduce((acc, cur) => ({ ...acc, ...cur }), {})
      },
    },
  },
  plugins: [],
}
