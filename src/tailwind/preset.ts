import plugin from 'tailwindcss/plugin';
import { OptionalConfig } from 'tailwindcss/types/config';

// --bg-primary: 0 0% 0%; /* #000 */
// --bg-secondary: 0 0% 6%; /* #0F0F0F */
// --text-primary: 0 0% 100%; /* #fff */
// --text-secondary: 0 0% 80%; /* #CDCDCD */
// --text-tertiary: 0 0% 52%; /* #858585 */

// --success: 119 100% 75%;  /* #80FF7E */
// --info: 202 100% 70%; /* #68C8FF */

// --border-primary: 0 0% 15%; /* #252525 */
// --border-secondary: 0 0% 26%; /* #434343 */

// --bg-primary: #000;
// --bg-secondary: #0F0F0F;
// --text-primary: #fff;
// --text-secondary:  #CDCDCD;
// --text-tertiary: #858585;

// --success: #80FF7E;
// --info: #68C8FF;

// --border-primary: #252525;
// --border-secondary: #434343;

const colors = {
  'bg-primary': '#000',
  'bg-secondary': '#0F0F0F',
  'bg-tertiary': '#292929',
  'bg-quaternary': '#373737',
  'text-primary': '#fff',
  'text-secondary': '#adadad',
  'text-tertiary': '#858585',
  'text-quaternary': '#4a4a4a',
  'border-primary': '#252525',
  'border-secondary': '#434343',
  'success': {
    DEFAULT: '#80FF7E',
  },
  info: {
    DEFAULT: '#68C8FF',
  }
}

const config: Partial<OptionalConfig> = {
  theme: {
    extend: {
      colors,
      textColor: {
        primary: '#fff',
        secondary: '#CDCDCD',
        tertiary: '#858585',
        'bg-primary': '#000',
      },
      backgroundColor: {
        primary: '#000',
        secondary: '#0F0F0F',
        tertiary: '#292929'
      },
      borderColor: {
        primary: '#252525',
        secondary: '#434343',
        'text-primary': '#fff',
        'text-secondary': '#CDCDCD',
      },
    },
    fontFamily: {
      // variables defined in layout file
      sans: ['var(--font-sans-serif-primary)', 'sans-serif'],
      mono: ['var(--font-mono-primary)', 'monospace'],
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase({
        "::selection": {
          'mix-blend-mode': 'darken',
          'background-clip': 'text',
          color: colors['bg-primary'],
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }
      })

      addComponents({
        '.prose': {
          lineHeight: '1.75',
          fontSize: '14px',
          fontWeight: '300',
          color: colors['text-secondary'],

          'ul': {
            position: 'relative',
            paddingLeft: '1.5rem',

            'li + li': {
              marginTop: '0.25rem'
            },

            'li::before': {
              content: "'✦'",
              position: 'absolute',
              left: '0',
              color: colors['text-quaternary']
            }
          },

        }
      })
    })
  ],
};

export default config;
