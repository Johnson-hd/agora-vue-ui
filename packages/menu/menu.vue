<template>
  <ul ref="menu" :class="classes">
    <slot />
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
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
