/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        spaceMono: ['Space Mono', 'monospace']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
