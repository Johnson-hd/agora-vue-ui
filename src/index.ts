import { PluginObject } from 'vue'

import AgoraButton from '../packages/button'
import AgoraButtonGroup from '../packages/button-group'

const components = [AgoraButton, AgoraButtonGroup]

const plugins: PluginObject<Vue>[] = []

const install = (Vue: any) => {
  components.map((component: any) => {
    Vue.component(component.name, component)
  })

  plugins.map(plugin => {
    Vue.use(plugin)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  AgoraButton,
  AgoraButtonGroup,
}
