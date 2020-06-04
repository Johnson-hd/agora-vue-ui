const merge = require('webpack-merge')

const { baseWebpackConfig } = require('./webpack.base.conf')
const config = require('../config')
const { componentEntry } = require('./utils')

const buildComponentWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: componentEntry,

  output: {
    path: config.build.outputPath,
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  }
})

module.exports = buildComponentWebpackConfig

