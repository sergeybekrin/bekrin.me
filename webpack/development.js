import webpack from 'webpack';
import merge from 'webpack-merge';
import DashboardPlugin from 'webpack-dashboard/plugin';
import baseConfig from './shared';

export default merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/client.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                                options: {
                    cacheDirectory: true,
                    presets: [ 'react-hmre' ]
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    context: 'app',
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'stylus-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
