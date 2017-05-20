const path = require('path');
const { execSync } = require('child_process');
const moment = require('moment');
const webpack = require('webpack');

const script = 'git log -1 --date=short --pretty=format:%cd';
const lastCommitTimestamp = execSync(script).toString();
const lastUpdateDate = moment(lastCommitTimestamp).format('MMM. Do YYYY');

process.env.LAST_UPDATE_DATE = lastUpdateDate;

module.exports = {
    exportPathMap() {
        return {
            '/': {
                page: '/'
            },
            '/projects': {
                page: '/projects'
            },
            '/contacts': {
                page: '/contacts'
            }
        };
    },
    webpack(config) {

        // Add last update date
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.LAST_UPDATE_DATE': JSON.stringify(lastUpdateDate)
            })
        );

        return config;
    }
};
