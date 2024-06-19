// tailwind.config.js

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm : '640px',
      md : '768px',
      lg : '960px',
      xl : '1200px',
    },
    extend: {
      colors: {
        primary: '#121212',     // Very Dark Gray
        accent: {
          DEFAULT: '#FF3B3F',   // Vibrant Red
          hover: '#E33135',     // Slightly Darker Red
          active: '#C22B2F',    // Even Darker Red
        },
        link: {
          DEFAULT: '#FF3B3F',   // Vibrant Red
          hover: '#E33135',     // Slightly Darker Red
          active: '#C22B2F',    // Even Darker Red
          visited: '#B5B5B5',   // Light Gray
        },
        background: {
          DEFAULT: '#121212',   // Very Dark Gray
          accent: '#1D1D1D',    // Slightly Lighter Dark Gray
        },
      },
      fontFamily: {
        primary: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited', 'hover', 'active'],
      backgroundColor: ['hover', 'active'],
      borderColor: ['hover', 'active'],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
