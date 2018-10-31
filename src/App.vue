<template>
  <div id="app">
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/">axios</el-menu-item>
      <el-menu-item index="/about">about</el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from './components/axios.vue'

export default {
  name: 'app',
  components: {
    axios
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
