const merge = require('webpack-merge')

const { baseWebpackConfig } = require('./webpack.base.conf')
const config = require('../config')


const buildCommonWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: config.build.entry,

  output: {
    path: config.build.outputPath,
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },

  devtool: config.build.devtool,
})

module.exports = buildCommonWebpackConfig

