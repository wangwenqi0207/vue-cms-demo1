<template>
  <div id="app">
    <!-- 全局组件 -->
      <popwin info='局部地区下雪' @close_popwin='popwin_close' v-show="shows"></popwin>
  </div>
</template>

<script>
import {offset} from '../../../assets/js/offset'
export default {
  name: 'App',
  mounted(){
      console.log('获取当前时区',offset())
      console.log('转后时间',this.$moment("2019-11-06T06:55:31.161153Z").utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))
  },
  data(){
    return{
      shows:true,
    }
  },
  methods:{
     popwin_close(){
        this.shows = false
      }
  }
}
</script>

<style scoped>
    
</style>
