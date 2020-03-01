vue后台管理
home 是布局文件
login是登录页面
view是内部视图板块
demo.vue是测试的独立导航页面 需要的时候可以用


import Axios from "axios"
Axios.defaults.baseURL = 'http://192.168.1.16:9001/'  //统一设置基准url
Vue.prototype.$axios = Axios

//路由跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

demo 是百度地图即时搜索
功能：搜索关键词 即时下拉地址 点击选择地址出现在搜索框里 点击新增按钮 地址出现在list中  点击删除按钮 该地址删除
使用：index.html中配置百度地图api
<!-- <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=fHrNQj6DHTjZtfTvfqbsuvTzKc5V9SBl"></script> -->
ak之后是自己申请的百度地图api
点击地点获取经纬度


demo2 是图片上传页面
用到了pc端 图片剪裁插件 vue-image-crop-upload
npm install vue-image-crop-upload
用到了阿里云上传 ali-oss
npm install ali-oss


demo3  富文本
CKEditor 去官网下载文件包 https://ckeditor.com/ckeditor-4/download/
解压程序包到 vue-cli 的静态资源目录 /static 中
在 index.html 页面引入 ckeditor.js 文件，尽量采用绝对路径引入（刷新页面时，会根据路由相对路径加载该 js 文件，采用相对路径会有时会导致找不到该文件！）
<!-- <script src="/static/ckeditor/ckeditor.js" type="text/javascript"></script> -->
修改 webpack 配置文件 build/webpack.base.conf.js，内容如下：
module.exports = {
  externals: {
    "CKEDITOR": "window.CKEDITOR"
  }
}
项目中即可使用


account文件夹 tabs分页 用子组件分页不新增路由

demo4 调用全国省市区

demo5 将表格导出为Excel格式
安装这三个依赖
npm install xlsx file-saver -S
npm install script-loader -S -D
组件中引入
import FileSaver from 'file-saver'
import XLSX from 'xlsx'


domo9  高德地图模糊搜索下拉
引入AMap.js html接入高德key

demo10  v-charts使用
npm i v-charts echarts -S
import VCharts from 'v-charts'
Vue.use(VCharts)
