module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
      extend: {
        colors: {
          pandaCommon: {
            light: '#F7F8FA', 
            DEFAULT: '#1B1C1E',
            dark: '#131415'
          },
          pandaRed: {
            light: '#FF6B6B',
            DEFAULT: '#D43F3F',
            dark: '#A12B2B'
          }
        }
      },
    },
    plugins: [],
  }
  