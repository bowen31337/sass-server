import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'


let config ={
  devtool: "source-map",
  entry: path.resolve(__dirname, 'sass/skin.scss'),
  output: {
  	path:path.resolve(__dirname, 'css'),
	filename: '[name].js'
  },
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: [
		            'css-loader',
		            'resolve-url-loader',
		            'sass-loader?outputStyle=expanded&sourceMap&sourceMapContents'
		          ]
		        }),
		        exclude: /node_modules/
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: ['file-loader']
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('css/style.css')
	]
}

export default config