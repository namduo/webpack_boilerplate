const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	devServer: {
    contentBase: './dist',
		watchContentBase: true,
		stats: "errors-only"
  },
	plugins: [
		new ExtractTextPlugin('main.css')
	]
}
