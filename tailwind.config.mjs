// This is what i had before but it was not building in github or in `npm run build`

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 	extend: {},
// 	},
// 	plugins: [],
// }

// This is the section that makes tailwind build with `npm run build` - I am assuming that github will also build because of this section

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

// -->
