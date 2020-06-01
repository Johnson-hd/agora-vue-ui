const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const HOST = process.env.HOST
const PORT = process.env.PORT

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: '/',
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll,
    },
    disableHostCheck: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    // 启用热更新
    new webpack.HotModuleReplacementPlugin(),
    // 跳过编译出错
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    }),
  ]
})

module.exports = devWebpackConfig

