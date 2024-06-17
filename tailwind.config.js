/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
            code: { color: theme('colors.white') },
            figcaption: { color: theme('colors.white') },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.white'),
            },
            'ol > li::before': { color: theme('colors.white') },
            'ul > li::before': { backgroundColor: theme('colors.white') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

