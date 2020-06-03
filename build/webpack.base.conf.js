const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const config = require('../config')

module.exports = {
  entry: {
    app: './examples/index.ts'
  },

  output: {
    path: config.build.outputPath,
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.vue', '.js', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },

  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // tsx?
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      // md
      {
        test: /\.md$/,
        loader: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'agora-md2vue-loader',
            options: {
              template: path.resolve(__dirname, '../examples/default.tpl')
            }
          }
        ],
        include: [path.resolve(__dirname, '../examples/views/component')],
      },
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/img/[name].[hash:7].[ext]'
        }
      },
      // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/media/[name].[hash:7].[ext]'
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    // 开启一个新的进程，对Typescript进行类型检查
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      vue: true
    })
  ],

  stats: {
    colors: true
  }
}
