<template>
  <div class="component">
    <div class="left-layout">
      <router-link to="/component/button">
        按钮
      </router-link>
      <router-link to="/component/menu">
        导航菜单
      </router-link>
    </div>
    <div class="right-layout">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {}
</script>
<style>
.component {
  display: flex;

  & .left-layout {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #dcdfe6;
    padding: 20px;
    & a {
      margin-bottom: 20px;
    }
  }

  & .right-layout {
    padding-left: 20px;
  }
}
</style>
