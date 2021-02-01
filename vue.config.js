const path = require("path");
module.exports = {
	chainWebpack: (config) => {
		const types = ["vue-modules", "vue", "normal-modules", "normal"];
		types.forEach((type) => addStyleResource(config.module.rule("stylus").oneOf(type)));
	},
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "stylus",
			patterns: [path.resolve(__dirname, "./src/assets/styles/*.styl")],
		},
	},
	lintOnSave: false,
	devServer: {
		// port: 8080,
		overlay: {
			warning: false,
			errors: false,
		},
		proxy: {
			"/api": {
				target: "http://ecs8.czxkdz.com:30011/",
				secure: false, // false为http访问，true为https访问
				changeOrigin: true, // 跨域访问设置，true代表跨域
				ws: true,
				pathRewrite: {
					// 路径改写规则
					"^/api": "/api", // 以/proxy/为开头的改写为''
				},
			},
		},
	},
};

function addStyleResource(rule) {
	rule.use("style-resource")
		.loader("style-resources-loader")
		.options({
			patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
			// patterns: [path.resolve(__dirname, "./src/assets/styles/common.styl")],
		});
}
