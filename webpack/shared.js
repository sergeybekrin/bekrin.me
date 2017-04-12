import { execSync } from 'child_process';
import path from 'path';
import moment from 'moment';
import webpack from 'webpack';

const lastCommitDate = execSync('git log -1 --date=short --pretty=format:%cd').toString(); // eslint-disable-line max-len
const formattedLastCommitDate = moment(lastCommitDate).format('MMM. Do YYYY');

export default {
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '..', 'app'),
            path.resolve(__dirname, '..', 'node_modules')
        ],
        extensions: [ '.js' ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: process.env.NODE_ENV === 'development',
            __PROD__: process.env.NODE_ENV === 'production',
            __LAST_COMMIT_DATE__: JSON.stringify(formattedLastCommitDate)
        })
    ]
};
