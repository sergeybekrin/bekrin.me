import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanupPlugin from 'webpack-cleanup-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './shared';

const publicPath = process.env.PUBLIC_PATH || '/';

const paths = [
    '/',
    '/projects',
    '/projects/spectro',
    '/projects/npmkit',
    '/contacts',
    '/404.html'
];

export default merge(baseConfig, {
    output: {
        libraryTarget: 'umd',
        publicPath
    },
    entry: {
        server: './app/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [ 'react-optimize' ]
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file?context=app&name=[path][name]-[hash:6].[ext]'
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
        new CleanupPlugin(),
        new StaticSiteGeneratorPlugin('server', paths, {
            publicPath
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
});
