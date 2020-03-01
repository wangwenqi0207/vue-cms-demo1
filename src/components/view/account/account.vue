<template>
<!-- 账号管理tab分页 -->
  <div id="employeeCareMng" class="page_container" style="overflow:auto;height:100%;background: #ffffff;min-width:1200px;">
    <div v-if="isNative" >
      <div style="height:100%;">
        <el-tabs v-model="activeName" style="height:100%;" @tab-click="handleClick">
          <el-tab-pane label="员工账号" name="first" style="height:100%;">
            <staff/>
          </el-tab-pane>
          <el-tab-pane label="代理人账号" name="second" style="height:100%;">
            <agent/> 
          </el-tab-pane>
          <el-tab-pane label="部门设置" name="third" style="height:100%;">
            <department/> 
          </el-tab-pane>
          <el-tab-pane label="角色权限设置" name="fourth" style="height:100%;">
            <role/> 
          </el-tab-pane>
           <el-tab-pane label="城市管理" name="fifth" style="height:100%;">
            <city/> 
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div v-else style="height:100%;">
      <router-view />
    </div>
  </div>
</template>
<script>
import staff from './staff'
import agent from './agent'
import department from './department'
import role from './role'
import city from './city'

export default {
  components: {
    staff,agent,department,role,city
  },
  data() {
    return {
      isNative: true,
      activeName: 'first'  //默认先渲染第一个
    }
  },
  //页面初始默认是第一个板块展示
  created() {
    if (this.$route.path === '/account/all-account/staff') {
      this.isNative = true
    } else {
      this.isNative = false
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.page_container{
    background: #ffffff;
    height: 100%;
}
</style>
<style >
#employeeCareMng .el-tabs__content {
  height:calc(100% - 55px);
}
</style>

