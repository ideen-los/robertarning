const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    host: '0.0.0.0', // Listen on all network interfaces (including localhost)
    port: 8080, // Explicitly specify the port
    allowedHosts: 'all', // Allow all hostnames (useful for cross-browser testing)
    client: {
      overlay: true, // Show compile errors as overlay in the browser
    },
  },
});
