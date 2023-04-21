/** @type {import('tailwindcss').Config} */
const purge = process.env.NODE_ENV === 'production' ? true : false;
console.log(process.env.NODE_ENV)
module.exports = {
  purge: { enabled: purge, content: [
    './build/**/*.html'
  ] },
  theme: {
    extend: {},
  },
  plugins: [],
}

