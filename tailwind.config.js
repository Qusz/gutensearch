/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/components/**/*.{html,ts}',
    './src/app/layouts/**/*.{html,ts}',
    './src/app/pages/**/*.{html,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

