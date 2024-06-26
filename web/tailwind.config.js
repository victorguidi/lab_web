/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          background: '#010101',
          text: '#ffffff',
        },
      },
      typography: (theme) => ({
        white: {
          css: {
            color: theme('colors.white'),
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            h5: { color: theme('colors.white') },
            h6: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            code: { color: theme('colors.white'), whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
            figcaption: { color: theme('colors.white') },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.white'),
            },
            'ol > li::before': { color: theme('colors.white') },
            'ul > li::before': { backgroundColor: theme('colors.white') },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            },
            'pre code': {
              backgroundColor: 'inherit',
              padding: 0,
              borderRadius: 0,
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
            },
          },
        },
        black: {
          css: {
            color: theme('colors.black'),
            h1: { color: theme('colors.black') },
            h2: { color: theme('colors.black') },
            h3: { color: theme('colors.black') },
            h4: { color: theme('colors.black') },
            h5: { color: theme('colors.black') },
            h6: { color: theme('colors.black') },
            strong: { color: theme('colors.black') },
            code: { color: theme('colors.black'), whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
            figcaption: { color: theme('colors.black') },
            blockquote: {
              color: theme('colors.black'),
              borderLeftColor: theme('colors.black'),
            },
            'ol > li::before': { color: theme('colors.black') },
            'ul > li::before': { backgroundColor: theme('colors.black') },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            },
            'pre code': {
              backgroundColor: 'inherit',
              padding: 0,
              borderRadius: 0,
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['responsive', 'dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#231B43",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "#0E122B"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#231B43",
            borderRadius: "20px",
            border: "1px solid"
          }
        },
        ".scrollbar-webkit-light": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#ffffff"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#010101",
            borderRadius: "20px",
            border: "1px solid"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}

