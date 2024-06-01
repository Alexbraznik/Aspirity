/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg-btn": "#0047BB",
        "dark-text-primary": "#E1E3E6",
        "dark-text-secondary": "#B0B1B6",
        "dark-bg-secondary": "#232324",
        "dark-border-primary": "#424242",
        "dark-text-tertiary": "#76787A",
      },
      screens: {
        tablet: "700px",
        se: "360px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
