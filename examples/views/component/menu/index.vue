<template>
  <div class="menu">
    <md-index />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import MdIndex from './md/index.md'

@Component({
  components: {
    MdIndex,
  },
})
export default class Menu extends Vue {}
</script>
