export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1500px',
      },
      colors: {
        'black': '#323039',
        'gray': '#ccbcbc',
        'white': '#ffffff',
        'blue': '#18C3F8',
        'green': '#20d489',
        'green-act': '#19b674',
      },
    },
  },
  plugins: [],
}
