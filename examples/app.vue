<template>
  <div class="app">
    <header class="app-header">
      <router-link to="/">
        首页
      </router-link>
      <router-link to="/component">
        组件
      </router-link>
      <router-link to="/theme">
        主题
      </router-link>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  year: number = new Date().getFullYear()
}
</script>
<style>
.app {
  height: 100vh;

  & .app-header {
    height: 60px;
    border-bottom: 1px solid #dcdfe6;
    position: sticky;
    top: 0;
    background: #fff;
    display: flex;
    align-items: center;
    & a {
      margin: 0 20px;
    }
  }
}
</style>
