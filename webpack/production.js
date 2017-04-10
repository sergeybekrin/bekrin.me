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
        filename: 'bundle-[hash:6].js',
        publicPath
    },
    entry: {
        server: './app/index.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [ 'react-optimize' ]
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    context: 'app',
                    name: '[path][name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        { loader: 'stylus-loader' }
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanupPlugin(),
        new StaticSiteGeneratorPlugin('server', paths, { publicPath }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            minimize: true
        }),
        new ExtractTextPlugin({
            filename: 'bundle-[hash:6].css',
            allChunks: true
        })
    ]
});
