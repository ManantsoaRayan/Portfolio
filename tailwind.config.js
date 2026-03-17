/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0f',
        paper: '#f5f0e8',
        accent: '#e8613a',
        muted: '#8a8a9a',
        grid: '#1a1a2e',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1.2s step-end infinite',
        'slide-in': 'slideIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        datatheme: {
          'primary': '#e8613a',
          'secondary': '#4a9eff',
          'accent': '#f5c842',
          'neutral': '#1a1a2e',
          'base-100': '#0a0a0f',
          'base-200': '#111120',
          'base-300': '#1a1a2e',
          'base-content': '#e8e8f0',
          'info': '#4a9eff',
          'success': '#36d399',
          'warning': '#f5c842',
          'error': '#e8613a',
        },
      },
      {
        'datatheme-light': {
          'primary': '#e8613a',
          'secondary': '#2563eb',
          'accent': '#d97706',
          'neutral': '#e8e8f0',
          'base-100': '#f8f5f0',
          'base-200': '#edeae3',
          'base-300': '#e0dbd2',
          'base-content': '#1a1a2e',
          'info': '#2563eb',
          'success': '#16a34a',
          'warning': '#d97706',
          'error': '#e8613a',
        },
      },
    ],
  },
}
