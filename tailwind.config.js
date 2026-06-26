/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        'ink-soft': '#141415',
        ivory: '#f4f1ea',
        cream: '#e8e2d9',
        brass: '#c9a45e',
        'brass-light': '#d9bc84',
        charcoal: '#1c1c1e',
        smoke: '#2a2a2c',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest: '0.22em',
        tighter: '-0.03em',
      },
      animation: {
        fade: 'fade 1s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

