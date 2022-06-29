<template>
  <div id="app">
    <Texto/>
  </div>
</template>

<script>
import Texto from './components/Texto.vue'


export default {
  name: 'App',
  components: {
    Texto
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
