const path = require('path')
const fs = require('fs')

const config = require('../config')

let entry = {}
fs.readdirSync('src/assets/css').forEach(async function (file) {
  if (!/^_/.test(file)) {
    // 非index.css的文件，都需要在文件开头引入 _color.css 和 _var.css
    // xx.css 引入了var变量，打包编译会报错，需要引入变量定义
    if (file !== 'index.css') {
      const fileBuffer = fs.readFileSync(path.resolve(__dirname, '../src/assets/css/' + file))
      fs.writeFileSync(file, `@import './_color.css';\n@import './_var.css';\n${fileBuffer.toString()}`)
    }
    entry[path.basename(file, '.css')] = path.resolve(__dirname, 'tmp/' + file)
  }
})

const buildCssWebpackConfig = {
  mode: 'production',

  entry: entry,

  output: {
    path: config.build.outputPath,
    filename: '[name].css'
  }
}

module.exports = buildCssWebpackConfig

