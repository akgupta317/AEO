import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#2347FF',
        ink: '#15151A',
        bg: '#FAF8F3',
        surface: '#FFFFFF',
        muted: '#6E6A63',
        line: '#E7E2D8',
        alarm: '#E5402A',
        green: '#4BAE5A',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-hanken-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        offset: '4px 4px 0 #15151A',
        'offset-accent': '5px 5px 0 #2347FF',
        'offset-lg': '6px 6px 0 #15151A',
      },
      borderRadius: {
        card: '12px',
        'card-lg': '16px',
      },
    },
  },
  plugins: [],
}
export default config
