module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './web/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: require('./src/config/themeColors').default,
    },
  },
  plugins: [],
};
