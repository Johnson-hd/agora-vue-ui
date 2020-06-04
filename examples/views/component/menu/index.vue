<template>
  <div class="menu">
    <md-index />
    <md-side />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import MdIndex from './md/index.md'
// @ts-ignore
import MdSide from './md/side.md'

@Component({
  components: {
    MdIndex,
    MdSide,
  },
})
export default class Menu extends Vue {}
</script>
