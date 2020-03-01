
<template>
  <div id="app">
    <el-form label-width="200px">
          <el-form-item label="包含小区" required class="housing_input">
              <el-input id="suggestId" v-model="city" placeholder="请输入小区名称" name="address_detail" />
              <div id="allmap"/>
              <el-button @click="add_housing">新增</el-button>
              <div v-for="(item,index) in add_housing_list" :key="index" class="housingList">
                  <span>{{item}}</span>
                  <el-button class="delete_button" @click="delete_housing(index)">删除</el-button>
              </div>
          </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data(){
    return{
      city: '',
      address_detail: null, //详细地址
      add_housing_list: ["阿里巴巴"],
    }
  },
  mounted() {
    this.getcity()
  },
  methods:{
    getcity(){
      this.$nextTick(function() {
      var th = this
      // 创建Map实例
      var map = new BMap.Map('allmap')
      // 初始化地图,设置中心点坐标，
      var point = new BMap.Point(120.211877, 30.255194) // 创建点坐标，汉得公司的经纬度坐标
      map.centerAndZoom(point, 15)
      map.enableScrollWheelZoom()

      var ac = new BMap.Autocomplete( // 建立一个自动完成的对象
        {
          'input': 'suggestId',
          'location': map
        })
      var myValue
      ac.addEventListener('onconfirm', function(e) { // 鼠标点击下拉列表后的事件
        var _value = e.item.value //获取点击的条目
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business  //地址拼接赋给一个变量
        th.city = myValue  //将地址赋给data中的city
        // console.log(th.city)
        setPlace()
      })
      // console.log(ac.pc.input)
      function setPlace() {
        map.clearOverlays() // 清除地图上所有覆盖物
        function myFun() {
          th.userlocation = local.getResults().getPoi(0).point // 获取第一个智能搜索的结果
          console.log('经度',th.userlocation.lng)
          console.log('纬度',th.userlocation.lat)
          map.centerAndZoom(th.userlocation, 18)
          map.addOverlay(new BMap.Marker(th.userlocation)) // 添加标注
        }
        var local = new BMap.LocalSearch(map, { // 智能搜索
          onSearchComplete: myFun
        })
        local.search(myValue)
      }
    },)
    },
   // 新增小区 点击的地址增加进list
    add_housing() {
      this.add_housing_list.push(this.city)
    },
    // 删除小区
    delete_housing(index) {
      // console.log(index)
      this.add_housing_list.splice(index, 1)
    },
}
}
</script>

<style scoped>
.housingList{
  margin-top:20px;
}
.delete_button{
    color: #409EFF;
    text-decoration: underline;
    border:none;
    background:#fff;
    cursor: pointer;
    margin-left:20px;
}

.el-input{
   width: 800px;
 }
 .housing_input .el-input{
    width: 730px;
 }

 #allmap{
    width: 400px;
    height: 400px;
    font-family: "微软雅黑";
    display: none;
}

</style>

//项目里面
// this.$nextTick(function() {
      //   var th = this
      //   // 创建Map实例
      //   var map = new BMap.Map('allmap')
      //   // 初始化地图,设置中心点坐标，
      //   var point = new BMap.Point(120.211877, 30.255194) // 创建点坐标，杭州的经纬度坐标
      //   map.centerAndZoom(point, 15)
      //   map.enableScrollWheelZoom()

      //   var ac = new BMap.Autocomplete( // 建立一个自动完成的对象
      //     {
      //       'input': 'suggestId',
      //       'location': map
      //     })
      //   var myValue
      //   ac.addEventListener('onconfirm', function(e) { // 鼠标点击下拉列表后的事件
      //     var _value = e.item.value // 获取点击的条目
      //     myValue = _value.province + _value.city + _value.district + _value.street + _value.business // 地址拼接赋给一个变量
      //     th.ruleForm.communityName = myValue // 将地址赋给data中的housing
      //     // console.log(th.city)
      //     setPlace()
      //   })
      //   // console.log(ac.pc.input)
      //   function setPlace() {
      //     map.clearOverlays() // 清除地图上所有覆盖物
      //     function myFun() {
      //       th.mapShow = true
      //       th.userlocation = local.getResults().getPoi(0).point // 获取第一个智能搜索的结果
      //       // console.log('经度',th.userlocation.lng)
      //       th.longitude = th.userlocation.lng
      //       // console.log('纬度',th.userlocation.lat)
      //       th.latitude = th.userlocation.lat
      //       map.centerAndZoom(th.userlocation, 18)
      //       map.addOverlay(new BMap.Marker(th.userlocation)) // 添加标注
      //     }

      //     var local = new BMap.LocalSearch(map, { // 智能搜索
      //       onSearchComplete: myFun
      //     })
      //     local.search(myValue)
      //   }
      // },)