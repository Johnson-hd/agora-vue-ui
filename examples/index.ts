import Vue from 'vue'
import AgoraUI from '../src'
import App from './app.vue'

Vue.use(AgoraUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
