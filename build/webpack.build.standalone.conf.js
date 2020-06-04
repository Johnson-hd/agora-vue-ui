const merge = require('webpack-merge')

const { baseWebpackConfig } = require('./webpack.base.conf')
const config = require('./config')

const buildStandaloneWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: config.build.entry,

  output: {
    path: config.build.outputPath,
    library: 'AgoraUI',
    libraryTarget: 'umd',
    filename: 'index.standalone.js'
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})

module.exports = buildStandaloneWebpackConfig

