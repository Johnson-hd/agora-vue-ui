<template>
  <div>
    app
    <agora-button></agora-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  get typeMap() {
    return [];
  }
}
</script>
