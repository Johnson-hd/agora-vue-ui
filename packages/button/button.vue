<template>
  <button class="agora-button" :type="htmlType" :class="classes" :disabled="disabled" @click="onClick">
    <span>{{ t('months.January') }}</span>
    <slot />
  </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { t } from '../../src/locale'

@Component({})
export default class AgoraButton extends Vue {
  // 表单行为，类型: button/submit
  @Prop({
    type: String,
    default: 'button',
  })
  htmlType!: string

  // 可用态
  @Prop({
    type: Boolean,
  })
  disabled!: boolean

  // 大小
  @Prop({
    type: String,
    default: 'md',
  })
  size!: string

  // 类型
  @Prop({
    type: String,
    default: 'default',
  })
  type!: string

  clicked = false
  timeout: any = null
  t = t

  get classes() {
    return [
      {
        'is-disabled': this.disabled,
        'is-clicked': this.clicked,
      },
      `agora-button-${this.type}`,
      `agora-button-size-${this.size}`,
    ]
  }

  onClick() {
    ;(this as any).$emit('click')
    this.clicked = true
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.clicked = false
    }, 500)
  }
}
</script>
