/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary-r) var(--primary-g) var(--primary-b) / <alpha-value>)", // Dynamic Neon
                "background-dark": "#030305", // Deep Void
                "background-light": "#f8f9fa",
                cyber: {
                    red: "#FF1E1E",
                    dark: "#030305",
                    glass: "rgba(10, 10, 15, 0.7)"
                }
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
