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
                primary: "#0f172a", // Slate 900
                secondary: "#64748b", // Slate 500
                tertiary: "#1e293b", // Slate 800
                accent: "#6366f1", // Indigo 500
                "black-100": "#1e1e2e",
                "black-200": "#13131a",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px rgba(33, 30, 53, 0.5)",
                button: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
                glow: "0 0 20px rgba(99, 102, 241, 0.5)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}
