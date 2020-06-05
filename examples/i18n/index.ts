import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhLocale from '../../src/locale/lang/zh-CN'
import enLocale from '../../src/locale/lang/en'
import { Button18N } from './button'
import { getLanguage } from '../utils/lang'
import AgoraUI from '../../src/'

Vue.use(VueI18n)

const createCustomDict = () => {
  const totalData = {
    ...Button18N,
  }
  const keys = Object.keys(totalData)

  keys.forEach(key => {
    const data = totalData[key] || {}
    enCustomDict[key] = data['en'] || key
    zhCustomDict[key] = data['zh'] || key
  })
}

const enCustomDict = {}
const zhCustomDict = {}
createCustomDict()

const currentLocale = getLanguage()
const i18n = new VueI18n({
  locale: currentLocale,
  messages: {
    en: {
      ...enLocale,
      ...enCustomDict,
    },
    zh: {
      ...zhLocale,
      ...zhCustomDict,
    },
  },
})

// 将i18n对象和locale透传到AgoraUI
Vue.use(AgoraUI, {
  i18n: i18n,
  locale: currentLocale,
})

export default i18n
