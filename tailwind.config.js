/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/(tabs)/*.{js,jsx,ts,tsx}",
    "./app/(auth)/*.{js,jsx,ts,tsx}",
    "./app/(page)/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
