const path = require('path');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		main: "./src/TicTacToe.ts"
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: "TicTacToe.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			}
		]
	}
};