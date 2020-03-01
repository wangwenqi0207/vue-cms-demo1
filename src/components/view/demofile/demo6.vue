//element  按钮
<template>
  <div id="scrollBox" class="add_org">
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <!-- 圆角按钮 -->
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete" round></el-button>
    <el-button type="primary" icon="el-icon-search" circle>搜索</el-button> 

    <div style="margin-top:30px">
        <el-link>有下划线</el-link>
    </div>
    
    <div style="margin-top:30px">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>

    <div style="margin-top:30px">
        <el-checkbox v-model="checked" >备选项</el-checkbox>
        <el-checkbox v-model="checked1" label="备选项2" border></el-checkbox>
    </div>
    
    <div style="margin-top:30px">
        <el-input-number  v-model="num"  @change="handleChange" 
        :min="1" :max="10" label="描述文字" :step='2'></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo6',
  data () {
      return {
        radio: '1' , //默认选项
        checked: true,
        checked1:true,
        num: 1
      };
  },
  components: {
    
  },
  mounted() {
    
  }, 
  methods:{
    handleChange(value) {
        console.log(value);
    }
  }
}
</script>

<style scoped>

</style>
