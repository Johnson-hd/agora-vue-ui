const path = require('path')
const fs = require('fs')

const componentsPath = path.resolve(__dirname, '../packages')

// 组件入口
let componentEntry = {}
fs.readdirSync(componentsPath).forEach((item) => {
  if (fs.statSync(componentsPath + '/' + item).isDirectory()) {
    componentEntry[item] = componentsPath + '/' + item + '/index.ts'
  }
})

// 公用
let commonExternals = {}
Object.keys(componentEntry).forEach((key) => {
  commonExternals[`@/${key}`] = `agora-vue-ui/lib/${key}`
})

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
    outputPath: path.resolve(__dirname, '../dist')
  },
  build: {
    entry: path.resolve(__dirname, '../src/index.ts'),
    componentEntry: componentEntry,
    devtool: '#source-map',
    outputPath: path.resolve(__dirname, '../lib'),
    outputCssPath: path.resolve(__dirname, '../lib/css'),
    commonExternals: commonExternals
  }
}
