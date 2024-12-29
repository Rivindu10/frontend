/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode:['class'],
  content: ["./app/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    
    extend: {},
  },
  plugins: [],
}