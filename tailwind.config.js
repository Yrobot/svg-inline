/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        "primary-content": "#ffffff",
        secondary: "#1A1919",
        "secondary-content": "#ffffff",
        info: "#0072F5",
        success: "#21CA51",
        warning: "#FF6052",
        error: "#DE1B8D",
      },
    },
  },
  plugins: [],
};
