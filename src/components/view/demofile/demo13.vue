//循环背景图获取index
<template>
  <div id="app">
      <div class='pic'  
        v-for="(item,index) in list"  
        :key=index :style="{backgroundImage:'url(' + item.img+ ')', 
        backgroundRepeat:'no-repeat',backgroundSize: 'cover'}" 
        @click="handleCilck(index)">
      </div>
  </div>
</template>

<script>
export default {
  name: 'demo13',
   data(){
        return {
          list:[
            {img:require('./logo.png')},
            {img:require('./miao.jpg')},
            ]
        }
   },
   methods:{
     handleCilck(index){
        console.log(index)
     }
   }
}
</script>

<style scoped>
.pic{
  width: 300px;
  height: 300px;
}
</style>