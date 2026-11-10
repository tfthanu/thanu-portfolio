import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './types/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090D',
        secondary: '#11131A',
        card: '#171A23',
        accent: '#A78BFA',
        accentBlue: '#38BDF8',
        text: '#F8FAFC',
        muted: '#94A3B8'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(167,139,250,0.2), 0 20px 50px rgba(58, 59, 97, 0.4)',
        blueGlow: '0 0 0 1px rgba(56,189,248,0.2), 0 15px 40px rgba(56,189,248,0.12)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(167,139,250,0.14) 0, rgba(167,139,250,0.04) 18%, transparent 52%)',
        hero: 'radial-gradient(circle at top left, rgba(167,139,250,0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(56,189,248,0.24), transparent 32%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};

export default config;
