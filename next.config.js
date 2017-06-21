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
  webpack(config, { dev }) {
    // Add last update date
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.LAST_UPDATE_DATE': JSON.stringify(lastUpdateDate),
      })
    );

    // Use preact in production for smaller bundle size
    if (!dev) {
      const preact = require.resolve('preact-compat/dist/preact-compat');
      config.resolve.alias = {
        react: preact,
        'react-dom': preact,
      };
    }

    return config;
  },
};
