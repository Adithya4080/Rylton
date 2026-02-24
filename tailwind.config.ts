import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fff2',
          100: '#b3ffe0',
          200: '#80ffcd',
          300: '#4dffbb',
          400: '#1affa8',
          500: '#00e68a',
          600: '#00b36b',
          700: '#00804d',
          800: '#004d2e',
          900: '#001a0f',
        },
        dark: {
          50: '#e6e6e6',
          100: '#b3b3b3',
          200: '#808080',
          300: '#4d4d4d',
          400: '#262626',
          500: '#0d0d0d',
          600: '#0a0a0a',
          700: '#070707',
          800: '#050505',
          900: '#000000',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 230, 138, 0.5), 0 0 10px rgba(0, 230, 138, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 230, 138, 0.8), 0 0 20px rgba(0, 230, 138, 0.5), 0 0 30px rgba(0, 230, 138, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;