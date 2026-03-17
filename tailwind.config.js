/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'robostack-primary': '#3b82f6',
        'robostack-secondary': '#1e40af',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        robostack: {
          "primary": "#3b82f6",
          "secondary": "#1e40af",
          "accent": "#06b6d4",
          "neutral": "#374151",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "dark",
      "light",
    ],
    darkTheme: "dark",
  },
}
