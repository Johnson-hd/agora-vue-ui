import Vue from 'vue'

import zhCNLang from './lang/zh-CN'

export const use = (lang = 'zh', i18n) => {
  Vue.prototype.agoraI18n = i18n || {}
  Vue.prototype.agoraLang = lang || 'zh'
}

export const t = key => {
  if (Vue.prototype.agoraI18n) {
    return Vue.prototype.agoraI18n.t(key)
  } else {
    const keys = key.split('.')
    let val = ''
    for (let i = 0; i < keys.length; i++) {
      if (i === 0) {
        val = zhCNLang[keys[0]]
      } else {
        val = val[keys[i]]
      }
    }
    return val
  }
}

export default { use, t }
