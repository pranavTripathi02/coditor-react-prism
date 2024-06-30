/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background)/ <alpha-value>)",
        foreground: "hsl(var(--foreground)/ <alpha-value>)",
      },
    },
  },
  plugins: [],
};
