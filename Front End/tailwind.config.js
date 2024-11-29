/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 6px 24px 0px rgba(205, 198, 214, 0.2)",
      },
      colors: {
        "primary-pure-5": "#F8F6FB",
        "primary-pure-50": "#BCA8D9",
        "primary-pure-30": "#D7CBE8",
        "primary-pure": "#7952B3",
        "neutral-80": "#464646",
      },

      screens: {
        xl: { max: "1920px" },
        lg: { max: "1440px" },
        md2: { max: "1280px" },
        md: { max: "1180px" },
        sm: { max: "600px" },
      },
    },
  },
  plugins: [],
};
