import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './shared';

export default merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/client.js'
    ],
    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [ 'react-hmre' ]
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // eslint-disable-line max-len
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
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
