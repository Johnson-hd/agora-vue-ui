<template>
  <li class="agora-menu-submenu">
    <slot />
  </li>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class AgoraMenuSubmenu extends Vue {}
</script>
