import webpack from 'webpack';
import merge from 'webpack-merge';
import DashboardPlugin from 'webpack-dashboard/plugin';
import baseConfig from './shared';

export default merge(baseConfig, {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/client.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: [ 'react-hmre' ]
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file?context=app&name=[path][name].[ext]'
            },
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
        new DashboardPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
