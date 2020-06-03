<template>
  <div class="button">
    <md-index />
    <md-type />
    <md-size />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import MdIndex from './md/index.md'
// @ts-ignore
import MdType from './md/type.md'
// @ts-ignore
import MdSize from './md/size.md'

@Component({
  components: {
    MdIndex,
    MdType,
    MdSize,
  },
})
export default class Button extends Vue {}
</script>
