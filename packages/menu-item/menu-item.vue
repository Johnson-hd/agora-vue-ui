<template>
  <li class="agora-menu-item">
    <slot />
  </li>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class AgoraMenuItem extends Vue {}
</script>
