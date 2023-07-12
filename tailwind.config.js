/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#884A39',
          'secondary': '#C38154',
          'tertiary': '#FFC26F',
          'quaternary': '#F9E0BB'
        },
      },
      plugins: [],
    }
  }
