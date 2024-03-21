/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily              : {
        sans: `" 'Source Sans Pro', arial, sans-serif"`,
        serif: `"IBM Plex Sans"`,
      },
      colors                  : {
        primaryColor:'rgb(111, 82, 67)',
        primaryLightColor:'rgb(122, 89, 74)',
        textColor:'rgb(94, 94, 94)',
        inputBg:'rgb(246, 246, 246)',
        borderColor:'rgb(218, 218, 218)',
        headingColor:'rgb(27, 27, 27)'
      },
      boxShadow: {
        'buttonBoxShadow': '4px 3px 0px 2px rgba(0, 0, 0, 0.2)',
        'reserveButtonBoxShadow': '4px 3px 0px 2px rgb(79, 51, 38)',

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '3rem',      // Padding for small screens (640px and up)
          md: '2rem',      // Padding for medium screens (768px and up)
          lg: '2rem',      // Padding for large screens (1024px and up)
          xl: '2rem',      // Padding for extra-large screens (1280px and up)
        },
      },
    },
  },
  plugins: [],
}

