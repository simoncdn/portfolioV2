/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"carbon": "#323232",
				"cream": "#faf6f1",
				"sunBurst": "#ffa500",
				"grey": "#8e959e",
				"light-grey": "#cbcbcb",
				"light-carbon": "#424242",
			},
			fontFamily: {
				"roboto": ["Roboto", "sans-serif"],
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"fade-out": {
					"0%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0",
					},
				},
			},
			animation: {
				"fade-in": "fade-in 0.3s ease-in-out",
				"fade-out": "fade-out 0.3s ease-in-out",
			},
		},
	},
	plugins: [],
}

