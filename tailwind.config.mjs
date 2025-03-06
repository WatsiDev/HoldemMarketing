/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", // o 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Bebas Neue"', "sans-serif"], // Para los títulos
        subtitle: ['"Poppins"', "sans-serif"], // Para los subtítulos
        body: ['"Roboto"', "sans-serif"], // Para los párrafos
        description: ['"Lora"', "serif"], // Para las descripciones
        nav: ['"Open Sans"', "sans-serif"], // Para la navegación
		    page: ['"Bangers"', "sans-serif"], // Para el nombre de la página
        price: ['"Raleway"', "sans-serif"], // Para los precios
      },
    },
  },
  plugins: [],
};
