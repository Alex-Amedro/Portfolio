// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        'primary-light': '#1a3a5c',
        'bg-light': '#F8F9FA',
        'text-dark': '#212529',
        // Mode sombre
        'dark-bg': '#0F172A',
        'dark-bg-secondary': '#1E293B',
        'dark-text': '#F1F5F9',
        'dark-text-secondary': '#CBD5E1',
        'accent-blue': '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
};
