import Vue from 'vue'
import AgoraUI from '../src'
import Router from './routes'
import App from './app.vue'

import '../src/assets/css/index.css'

Vue.use(AgoraUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>',
})
