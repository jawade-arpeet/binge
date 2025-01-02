/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        "primary-accent": "var(--color-primary-accent)",
        "background-accent": "var(--color-background-accent)",
      },
    },
  },
  plugins: [],
};
