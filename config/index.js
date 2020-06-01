const path = require('path')

module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 1112,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    proxyTable: {},
    devtool: 'eval-source-map',
  },
  build: {
    outputPath: path.resolve(__dirname, '../dist'),
    devtool: '#source-map',
  }
}
