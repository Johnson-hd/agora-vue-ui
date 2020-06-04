const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge')

const { baseWebpackConfig } = require('./webpack.base.conf')
const config = require('./config')

let entry = {}
fs.readdirSync('src/assets/css').forEach(function (file) {
  if (!/^_/.test(file)) {
    entry[path.basename(file, '.css')] = path.resolve(__dirname, '../src/assets/css/' + file)
  }
})

const buildCssWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: entry,

  output: {
    path: config.build.outputCssPath,
    filename: '[name].css'
  }
})

module.exports = buildCssWebpackConfig

