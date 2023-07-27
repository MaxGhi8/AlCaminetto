const { MOBILE } = require("./config");

module.exports = function (api) {
	api.cache(true);
	const alias = {};
	if (!MOBILE) {
		alias["react-native-svg"] = "react-native-svgxml-web";
	}
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"nativewind/babel",
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
			[
				"module-resolver",
				{
					alias: alias,
				},
			],
		],
	};
};
