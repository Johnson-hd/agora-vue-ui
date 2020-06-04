const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.NODE_ENV === 'production'

module.exports.postcss = {
  loader: 'postcss-loader',
  options: {
    plugins: [require('postcss-import'), require('postcss-cssnext'), require('postcss-custom-properties')]
  }
}

const baseWebpackConfig = {
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
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
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
    }),
    // 跳过编译出错
    // new webpack.NoEmitOnErrorsPlugin(),
  ],

  stats: {
    colors: true,
    errors: true,
    errorDetails: true,
    warnings: true
  }
}

if (isProd) {
  baseWebpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "/[name].css"
    })
  )
}

module.exports.baseWebpackConfig = baseWebpackConfig
