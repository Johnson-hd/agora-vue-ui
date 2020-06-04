const path = require('path')
const fs = require('fs')

const componentsPath = path.resolve(__dirname, '../packages')

// 组件
let componentEntry = {}
fs.readdirSync(componentsPath).forEach(function (item) {
  if (fs.statSync(componentsPath + '/' + item).isDirectory()) {
    componentEntry[item] = componentsPath + '/' + item + '/index.ts'
  }
})

module.exports = {
  componentEntry: componentEntry
}
