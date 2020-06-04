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
    outputPath: path.resolve(__dirname, '../dist'),
  },
  build: {
    entry: path.resolve(__dirname, '../src/index.ts'),
    outputPath: path.resolve(__dirname, '../lib'),
    devtool: '#source-map'
  }
}
