module.exports = {
	root: true,
	parser: "vue-eslint-parser",

	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},

	env: {
		node: true,
	},

	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#bulb-rules
		"plugin:vue/recommended",
		// https://github.com/prettier/eslint-config-prettier
		"prettier",
		"prettier/standard",
		"prettier/vue",
		"@vue/prettier",
	],

	rules: {
		"vue/require-prop-types": "error",
		// Only allow debugger in development
		"no-debugger":
			process.env.NODE_ENV === "production" || process.env.PRE_COMMIT
				? "error"
				: "off",
		// Only allow `console.log` in development
		"no-console":
			process.env.NODE_ENV === "production" || process.env.PRE_COMMIT
				? [
						"error",
						{
							allow: ["warn", "error"],
						},
				  ]
				: "off",

		"vue/component-name-in-template-casing": [
			"error",
			"PascalCase",
			{
				ignores: [
					"component",
					"template",
					"transition",
					"transition-group",
					"keep-alive",
					"slot",
					"vue-fab",
					"fab-item",
				],
			},
		],
	},
};
