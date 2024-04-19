/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "br-sm" : " 1px  1px  2px     0 rgba(0, 0, 0, 0.05)",
        "br"    : " 2px  2px  6px     0 rgba(0, 0, 0, 0.1)",
        "br-md" : " 4px  4px 10px  -3px rgba(0, 0, 0, 0.1)", // This one is in use.
        "br-lg" : "10px 10px 15px  -3px rgba(0, 0, 0, 0.1)",
        "br-xl" : "20px 20px 25px  -5px rgba(0, 0, 0, 0.1)",
        "br-2xl": "25px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "25p": "25%",
        "50p": "50%",
        "75p": "75%",
        "80p": "80%",
        "90p": "90%",
      },
      minWidth: {
        "25p": "25%",
        "50p": "50%",
        "75p": "75%",
        "80p": "80%"
      },
    },
  },
  plugins: [],
};
