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
          'deep-green': '#22A699',
          'yellow': '#F2BE22',
          'orange': '#F29727',
          'red': '#F24C3D',
        },
      },
      plugins: [],
    }
  }

