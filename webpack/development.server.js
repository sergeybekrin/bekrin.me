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
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file?context=app&name=[path][name].[ext]&emitFile=false'
            },
            {
                test: /\.css$/,
                loader: 'css/locals'
            },
            {
                test: /\.styl$/,
                loader: 'css/locals?modules&importLoaders=1!stylus'
            }
        ]
    }
});
