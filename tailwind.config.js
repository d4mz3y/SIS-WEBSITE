/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#02031c', card: '#0b1130' },
        // gold.ink is for text on white sections; plain gold only has 1.6:1 contrast there.
        gold: { DEFAULT: '#FFC300', ink: '#9A6B00' },
        mist: '#cfd6e0',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.25)',
        soft: '0 5px 20px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'slide-in': { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-3.5%)' } },
        glow: { '0%, 100%': { opacity: '0.55', transform: 'scale(0.94)' }, '50%': { opacity: '1', transform: 'scale(1.1)' } },
        'ping-slow': { '0%': { transform: 'scale(0.75)', opacity: '0.8' }, '100%': { transform: 'scale(1.75)', opacity: '0' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'spin-reverse': { to: { transform: 'rotate(-360deg)' } },
        'ken-burns': { from: { transform: 'scale(1.02) translate3d(0, 0, 0)' }, to: { transform: 'scale(1.12) translate3d(-1.5%, -1%, 0)' } },
        blink: { '0%, 100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.25', transform: 'scale(0.8)' } },
        sweep: { from: { transform: 'translateX(-30%)' }, to: { transform: 'translateX(130%)' } },
        dash: { to: { strokeDashoffset: '-16' } },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        'ping-slow': 'ping-slow 3.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin-slow 46s linear infinite',
        'spin-reverse': 'spin-reverse 62s linear infinite',
        'ken-burns': 'ken-burns 26s ease-in-out infinite alternate',
        blink: 'blink 1.3s ease-in-out infinite',
        sweep: 'sweep 7s linear infinite',
        dash: 'dash 1.1s linear infinite',
      },
    },
  },
  plugins: [],
};
