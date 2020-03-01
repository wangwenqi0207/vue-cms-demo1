// 封装子组件的使用
<template>
<!--  动态数据就:leftTitle="leftTitle" -->
    <div>
        <!-- 模块布局组件 -->
        <Panel leftTitle="左title" :leftInfo=leftInfo 
        centerTitle="中间title" centerInfo="hello world" 
        rightTitle="右边title" rightInfo="ssssssss">
        </Panel>
        <!-- 进度条组件 -->
        <div class="progress">
          <pro :percentage="progress" background="#ff520e"></pro>
        </div>
        <!-- 弹窗组件 -->
        <popwin info='局部地区多云转晴' @close_popwin='popwin_close' v-show="shows"></popwin>
    </div>
</template>
<script>
import Panel from './panel'
import pro  from './progress'
// import popwin from './popwin'
export default {
    name:'demo11',
    components:{
        Panel,pro,
    },
    data(){
      return{
        leftInfo:"这我不知道这样的状态持续多久，这样的生活算一种怎样的意义，还有这样的活着就像没有灵魂的躯壳游荡在这世间。",
        progress:50,
        shows:true,
      }
    },
    methods:{
      popwin_close(){
        // console.log('我被点击了')
        this.shows = false
      }
    }
}
</script>

<style scoped>
.progress{
  margin-top:50px;
}
</style>
