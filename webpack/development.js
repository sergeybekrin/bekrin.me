import webpack from 'webpack';

import baseConfig from './base';

export default {
	...baseConfig,
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
		'./app/index.js'
	],
	output: {
		...baseConfig.output,
		publicPath: 'http://localhost:3000/dist/'
	},
	module: {
		...baseConfig.module,
		loaders: [
			...baseConfig.module.loaders,
			{
				test: /\.css$/,
				loader: 'style!css?sourceMap'
			},
			{
				test: /\.styl$/,
				loader: 'style!css?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
			}
		]
	},
	plugins: [
		...baseConfig.plugins,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};