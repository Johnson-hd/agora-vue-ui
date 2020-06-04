<template>
  <ul ref="menu" :class="classes">
    <agora-button>菜单内部的button</agora-button>
    <slot />
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import AgoraButton from '@/button'

@Component({
  components: {
    AgoraButton: AgoraButton,
  },
})
export default class AgoraMenu extends Vue {
  // 模式：vertical/horizontal
  @Prop({
    type: String,
    default: 'vertical',
  })
  mode!: string

  get classes() {
    return [`agora-button-${this.mode}`]
  }
}
</script>
