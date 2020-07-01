<template>
  <div class="button">
    <md-index />
    <md-type />
    <md-size />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import MdIndex from './md/index.md'
import MdType from './md/type.md'
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
<style>
.button {
  & .vue-wrapper {
    & .agora-button {
      margin: 0 5px;
    }
  }
}
</style>
