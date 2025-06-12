theme: {
  extend: {
    keyframes: {
      slideDown: {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      slideDown: 'slideDown 0.3s ease-out',
    },
  },
},
