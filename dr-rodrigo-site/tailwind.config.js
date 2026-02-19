/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2A43', // Azul profundo principal
          light: '#1A3F5C',
          dark: '#051520',
          hover: '#0D2D45',
        },
        gold: {
          DEFAULT: '#C9A84C',  // Dourado envelhecido principal
          light: '#D4AF37',    // Dourado polido para hover
          dark: '#B8963E',     // Dourado escuro para sombras
          muted: '#A08030',    // Dourado fosco para textos secundários
        },
        surface: {
          white: '#FFFFFF',
          offwhite: '#F8F9FA',
          dark: '#0D1F2D',
        },
        text: {
          primary: '#0A2A43',
          secondary: '#8A9AB0',
          light: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'], // Body principal agora é Montserrat
        system: ['Inter', 'system-ui', 'sans-serif'], // Backup ou uso técnico
        heading: ['Cormorant Garamond', 'serif'], // Headings
        mono: ['monospace'], // Para números técnicos se precisar
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #B8963E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A2A43 0%, #051520 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
