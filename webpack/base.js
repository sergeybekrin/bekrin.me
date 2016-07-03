import path from 'path';

export default {
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '..', 'dist')
	},
	resolve: {
		root: [
			path.resolve(__dirname, '..', 'app'),
			path.resolve(__dirname, '..', 'node_modules')
		],
		extensions: [ '', '.js', '.jsx', '.styl' ]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/
			},
			{
				test: /\.ejs$/,
				loader: 'ejs'
			}
		]
	},
	plugins: []
};