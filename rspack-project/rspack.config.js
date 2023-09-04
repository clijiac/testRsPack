/**
 * @type {import('@rspack/cli').Configuration}
 */
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.jsx"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	devtool: isProduction ? "nosources-source-map" : "inline-source-map", // 报错的时候在控制台输出哪一行报错 https://www.rspack.dev/zh/config/devtool.html
    devServer: {
        //static: path.resolve(__dirname, "../dist"),
        //proxy: proxy,
        open: true, // 开启服务器时，自动打开页面
        hot: true, // 开启热更新
        port: 3000,
        historyApiFallback: true,
        client: {
            overlay: false,
        },
    },
	plugins: [new ErrorOverlayPlugin()],
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			}
		]
	}
};
