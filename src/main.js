// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts'
//全局组件
import Popwin from './components/index'
Vue.use(Popwin)

Vue.use(VCharts)

Vue.use(ElementUI);

Vue.config.productionTip = false

import store from './components/vuexdemo/store'

// import AMap from 'AMap-amap';
// Vue.use(AMap);
// AMap.initAMapApiLoader({
//   key: '737359b6ee44043e4f44dafdf625bf00',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// });


import Axios from "axios"
Axios.defaults.baseURL = 'http://192.168.1.16:9001/'  //统一设置基准url
Vue.prototype.$axios = Axios

import moment from 'moment'//导入文件 
Vue.prototype.$moment = moment //时间
moment.locale('zh-cn')// 需要汉化

import $ from 'jquery'

//路由跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
