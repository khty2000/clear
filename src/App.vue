<template>
  <div id="app">
    <f-header></f-header>
    <router-view></router-view>
  </div>
</template>

<script>
import FHeader from '@/views/FHeader'
export default {
  name: 'App',
  components: {FHeader}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #FAFAFA;
  width: 100%;
  height: 100%;
}
html, body{
  height: 100%;
}
</style>
