/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
				'albert-sans': ['Albert Sans', 'sans-serif'],
			  },
			  colors:{
				'bodycolor':'#f8fbff',
				'primary':'#004eff',
				'secondary':'#001a53'
			  },
		},
	},
	plugins: [],
}
