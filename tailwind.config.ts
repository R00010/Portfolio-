import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        ink: '#f5f5f5',
        muted: '#9ca3af',
        accent: '#60a5fa',
        panel: '#101010'
      },
      boxShadow: {
        premium: '0 20px 60px rgba(0,0,0,0.45)',
        glow: '0 0 0 1px rgba(96,165,250,.35), 0 20px 70px rgba(96,165,250,.2)'
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        shine: 'shine 5s linear infinite',
        rise: 'rise 0.6s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
