const webpack = require('webpack');
module.exports = {
	webpack: function (config, env) {
		console.log('override!');
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, {
			buffer: require.resolve("buffer")
		});
		config.resolve.fallback = fallback;
		config.plugins = (config.plugins || []).concat([
			new webpack.ProvidePlugin({
				process: "process/browser",
				Buffer: ["buffer", "Buffer"]
			})
		]);
		//console.log("config: ", config)
		return config;
	},
	jest: function (config) {
		return config;
	},
	/*devServer: function (config) {
		return function (proxy, allowedHost) {
			return config;
		};
	}, */
	paths: function (paths, env) {
		return paths;
	},
};
