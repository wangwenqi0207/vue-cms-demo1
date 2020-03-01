<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
</style>
