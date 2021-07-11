module.exports = {
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