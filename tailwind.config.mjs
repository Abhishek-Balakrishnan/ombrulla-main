/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
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
