const moment = require('moment');
const webpack = require('webpack');

const lastCommitDate = process.env.LAST_COMMIT_DATE;
const lastUpdateDate = moment(lastCommitDate).format('MMM. Do YYYY');
process.env.LAST_UPDATE_DATE = lastUpdateDate;

module.exports = {
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
};
