module.exports = {
  theme: {
    extend: {
      height: theme => ({
        '500': '500px',
        '750': '750px',
      })
    }
  },
  purge: [
    // Use *.tsx if using TypeScript
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ]
  // ...
}