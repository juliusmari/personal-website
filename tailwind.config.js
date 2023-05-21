/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'golang' : '#00aef7',
        'typescript' : '#2d7ac7',
        'python' : '#ffe366',
        'javascript' : '#f0dc4e',
        'java' : '#5382a1',
        'php' : '#787cb4',
        'csharp' : '#9a4993',
        'cplusplus' : '#659bd3',
        'html' : '#ff6f00',
        'css' : '#2465f1',
        'bootstrap' : '#7e0af9',
        'tailwind' : '#01b7d6',
        'sass' : '#ce679a',
        'grpc' : '#57bfbe',
        'mysql' : '#466c87',
        'postgresql' : '#ffffff',
        'oracle' : '#f3131b',
        'colorPurple' : '#6E07F3',
        'colorBlack' : '#141c3a',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  plugins: [],
}

