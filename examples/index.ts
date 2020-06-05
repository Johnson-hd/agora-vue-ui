import Vue from 'vue'
import AgoraUI from '../src'
import Router from './routes'
import App from './app.vue'
import i18n from './i18n'

import '../src/assets/css/index.css'
import './assets/css/index.css'

Vue.use(AgoraUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  i18n,
  components: { App },
  template: '<App/>',
})
