<template>
  <div id="app">
    <axios msg="Welcome to Your Vue.js App"/>
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
