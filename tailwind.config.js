/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // faz o Tailwind processar todos os arquivos React
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ['"Noto Serif KR"', 'serif'],
      },
    },
  },
  plugins: [],
}
