import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

import baseConfig from './base';

export default {
	...baseConfig,
	output: {
		...baseConfig.output,
		libraryTarget: 'umd'
	},
	entry: {
		main: './app/index.js'
	},
	module: {
		...baseConfig.module,
		loaders: [
			...baseConfig.module.loaders,
			{
				test: /\.(png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file?name=/[hash].[ext]'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css')
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus')
			}
		]
	},
	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new StaticSiteGeneratorPlugin('main', [
			'/',
			'/en',
			'/en/projects',
			'/en/contacts',
			'/ru',
			'/ru/projects',
			'/ru/contacts'
		]),
		new webpack.ProvidePlugin({
			_: 'underscore'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false
			},
			sourceMap: false
		}),
		new ExtractTextPlugin('bundle.css', { allChunks: true })
	]
};