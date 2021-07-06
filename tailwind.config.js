module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
  // ...
}