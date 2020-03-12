module.exports = {
  variants: {
    visibility: ['responsive', 'hover', 'focus'],
    flex: ['focus'],
  },
  theme: {
    minWidth: {
      '10': '10rem',
    },
    extend: {
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      borderRadius: {
        xxl: '3rem',
      },
      spacing: {
        '35': '9rem',
        '100': '30rem',
      },
      colors: {
        darkgrey: '#5a5a5a',
        grey: '#9f9f9f',
        lightgrey: '#d6d6d6',
        extralightgrey: '#ebebeb',
        textgrey: '#6e6e6e',
        purple: '#7e0fad',
        lightpurple: '#cba4db',
        lightred: '#fe6d6d',
        white: '#fff',
        transparent: '#00000000',
        darkblue: '#243a57',
        'gray-0': '#fafafc',
      },
    },
  },
  variants: {},
};
