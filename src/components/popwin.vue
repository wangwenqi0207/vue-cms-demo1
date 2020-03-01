//全局组件

<template>
  <div id="app">
        <div class="popwin">
            <p class="info">{{info}}</p>
            <button class="close_popwin" @click="close_popwin">关闭</button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'popwin',
    props:{
        info: String,
    },
    methods:{
        close_popwin(){
            this.$emit("close_popwin",'')
        }
    }
}
</script>

<style scoped>
.popwin{
   width: 300px;
   height: 70px;
   background: #000;
   opacity: 0.7; 
   position:relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   left:200px;
   top:50%;
}
.close_popwin{
    color: red;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;  
}
.info{
    color: #fff;
    line-height: 70px;
    font-size: 14px;
}
</style>
