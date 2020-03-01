<template>
  <div id="scrollBox" class="add_org">
    调用全国省市区 打印到console控制台
  </div>
</template>

<script>
export default {
  name: 'all',
  components: {
    
  },
  mounted() {
    const provinces = require('province-city-china/dist/data.json');
    // const { data, province, city, area, town } = require('province-city-china/data');
    console.log(provinces)
  }, 
  methods:{
     
  }
}
</script>

<style scoped>

</style>
