/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "6px 7px 13px 0px rgba(171,158,171,1)",
        header: "0px 0px 4px 0px rgba(57,167,255,1)",
        hover: "0px 0px 16px 0px rgba(128,179,255,1)",
      },
    },
  },
  plugins: [],
};
