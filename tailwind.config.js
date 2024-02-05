/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    extend: {
      colors: {
        brand: "#149777",
        yellowBrand: "#FFC800",
        grayBrand: "#673500",
        blackBrand: "#424E4E",
        graytwoBrand: "#AFB7AD",
        brandTwo: "#10846F",
        pureBlack: "#2f3432",
      },
    },
  },
  plugins: [],
};
