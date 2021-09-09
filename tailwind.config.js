module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainbg: {
          DEFAULT: '#1B1825',
        },
        primary: {
          DEFAULT: '#FF7B3D',
        },
        primaryd: {
          DEFAULT: '#FF7433',
        },
        yellow1: {
          DEFAULT: '#FFEE58',
        },
      },
      inset: {
        37: '9.9rem',
        29: '7.2rem',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      fontSize: {
        '8xl': '5.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
