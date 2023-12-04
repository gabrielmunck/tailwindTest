/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mundo': "url('https://img.freepik.com/fotos-premium/uma-imagem-de-um-planeta-com-fogo-e-a-terra-no-meio_579873-1198.jpg')",
      }
    },
  },
  plugins: [],
}
