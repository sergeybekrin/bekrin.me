import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
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
                test: /\.(json|png|jpg|jpeg|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // eslint-disable-line max-len
                loader: 'file-loader',
                options: {
                    context: 'app',
                    name: '[name]-[hash:6].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanupPlugin({ quiet: true }),
        new StaticSiteGeneratorPlugin('server', paths, { publicPath }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        })
    ]
});
