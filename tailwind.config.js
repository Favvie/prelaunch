module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"runam-primary": "#46d3be",
				"runam-dark": "#1a1919",
				"runam-secondary": "#e4792d",
				"runam-gray": "#3b3b3b",
				"runam-primary-light": "#40d3c8",
				"runam-gray-2": "#454545",
				"runam-white": "#fffffe",
			},
			backgroundImage: {
				"hero-pattern": "url('./assets/heros.jpg')",
				bread: "url('./assets/Bread.png')",
				sardine: "url('./assets/Sardines.png')",
				egg: "url('./assets/Egg.png')",
				spaghetti: "url('./assets/Spaghetti.png')",
				"mobile-bg": "url('./assets/mobileBg.png')",
			},
			fontFamily: {
				gordita: [
					'"Gordita Regular"',
					'"Gordita Regular Italic"',
					'"Gordita Thin"',
					'"Gordita Thin Italic"',
					'" Gordita Light"',
					'"Gordita Light Italic"',
					'"Gordita Medium"',
					"Gordita Medium Italic, Gordita Bold, Gordita Bold Italic, Gordita Black, Gordita Black Italic, Gordita Ultra, Gordita Ultra Italic, sans-serif",
				],
				"gordita-bold": ['"Gordita Bold"'],
				"gordita-medium": ['"Gordita Medium"'],
			},
		},
	},
	plugins: [],
};
