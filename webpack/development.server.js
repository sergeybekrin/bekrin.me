import merge from 'webpack-merge';
import baseConfig from './shared';

export default merge(baseConfig, {
    entry: './app/index.js',
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    context: 'app',
                    name: '[path][name].[ext]',
                    emitFile: false
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader/locals'
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    { loader: 'stylus-loader' }
                ]
            }
        ]
    }
});
