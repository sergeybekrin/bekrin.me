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
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // eslint-disable-line max-len
                loader: 'file-loader',
                options: {
                    context: 'app',
                    name: '[path][name].[ext]',
                    emitFile: false
                }
            }
        ]
    }
});
