<template>
  <div>
    <agora-button>默认</agora-button>
    <agora-button>primary</agora-button>
    <agora-button>success</agora-button>
    <agora-button>warning</agora-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Button extends Vue {}
</script>
