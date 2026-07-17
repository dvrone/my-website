/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bg:      '#0d0f12',
        bg2:     '#13161b',
        border:  '#1f2329',
        txt:     '#c9d1d9',
        muted:   '#586069',
        heading: '#e6edf3',
        accent:  '#e6a817',
        accentH: '#f0b82a',
        green:   '#3fb950',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        page: '860px',
      },
      animation: {
        blink:   'blink 1s step-end infinite',
        fadeUp0: 'fadeUp 0.5s ease 0.20s both',
        fadeUp1: 'fadeUp 0.5s ease 0.35s both',
        fadeUp2: 'fadeUp 0.5s ease 0.50s both',
        fadeUp3: 'fadeUp 0.5s ease 0.65s both',
        fadeUp4: 'fadeUp 0.5s ease 0.80s both',
      },
      keyframes: {
        blink:  { '50%': { opacity: '0' } },
        fadeUp: { 'from': { opacity:'0', transform:'translateY(14px)' }, 'to': { opacity:'1', transform:'translateY(0)' } },
      },
    }
  },
  plugins: [],
}
