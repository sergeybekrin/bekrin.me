const { execSync } = require('child_process');
const moment = require('moment');
const webpack = require('webpack');

const script = 'git log -1 --date=short --pretty=format:%cd';
const lastCommitTimestamp = execSync(script).toString();
const lastUpdateDate = moment(lastCommitTimestamp).format('MMM. Do YYYY');

process.env.LAST_UPDATE_DATE = lastUpdateDate;

module.exports = {
<<<<<<< HEAD
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
            },
            '/404': {
                page: '/404'
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
=======
  exportPathMap() {
    return {
      '/': {
        page: '/',
      },
      '/projects': {
        page: '/projects',
      },
      '/contacts': {
        page: '/contacts',
      },
      '/404': {
        page: '/404',
      },
    };
  },
  webpack(config) {
    // Add last update date
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.LAST_UPDATE_DATE': JSON.stringify(lastUpdateDate),
      })
    );

    return config;
  },
>>>>>>> a7b84ec8a9201986441e439566c34bd54d0ae2e2
};
