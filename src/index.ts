import { PluginObject } from 'vue'

// button
import AgoraButton from '../packages/button'
import AgoraButtonGroup from '../packages/button-group'

// menu
import AgoraMenu from '../packages/menu'
import AgoraMenuItem from '../packages/menu-item'
import AgoraMenuSubmenu from '../packages/menu-submenu'

const components = [AgoraButton, AgoraButtonGroup, AgoraMenu, AgoraMenuItem, AgoraMenuSubmenu]

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
  AgoraMenu,
  AgoraMenuItem,
  AgoraMenuSubmenu,
}
