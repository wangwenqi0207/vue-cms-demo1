import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/view/demo'  //单独的导航页面 不能用懒加载引入
import vuex from '@/components/vuexdemo/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('../components/login/login.vue'),
      hidden: true  //在导航栏不显示  作为参数传过去控制
    },
    {
      path: '/demo',
      name: '即时搜索百度',
      leaf: true,   //只有一个节点 点击即跳转
      component: ()=> import('../components/home/home.vue'),
      iconCls: 'el-icon-s-home',
      children: [
        { path: '/demoC', component: demo, name: '即时搜索百度' },
      ]
    }, 
    {
    path: '/account',
    component: ()=> import('../components/home/home.vue'), 
    redirect: '/account/all-account/list',
    name: 'tab分页',
    children: [
      {
        path: '/account/all-account/list',
        redirect: '/account/all-account/staff',
        name: '员工管理',
        component: () => import('../components/view/account/index.vue'),
        children: [
          {
            path: '/account/all-account/staff',
            component: () => import('../components/view/account/account.vue'),
            hidden: true
          },
          {
            path: '/account/all-account/agent',
            name: '代理人账号',
            component: () => import('../components/view/account/agent.vue'),
            hidden: true
          },
          {
            path: '/account/all-account/department',
            name: '部门设置',
            component: () => import('../components/view/account/department.vue'),
            hidden: true
          },
          {
            path: '/account/all-account/role',
            name: '角色权限设置',
            component: () => import('../components/view/account/role.vue'),
            hidden: true
          },
          {
            path: '/account/all-account/city',
            name: '城市管理',
            component: () => import('../components/view/account/city.vue'),
            hidden: true
          },
        ]
      },
    ]
    },
    {
      path: '/demofile',
      name: '各种demo',
      component: ()=> import('../components/home/home.vue'), //布局页面
      children: [
        {
          path: '/demo2',
          name: '图片上传',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo2.vue'),
        },
        {
          path: '/demo3',
          name: '富文本',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo3.vue'),
        },
        {
          path: '/demo4',
          name: '省市区',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo4.vue'),
        },
        {
          path: '/demo5',
          name: '导出Excel',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo5.vue'),
        },
        {
          path: '/demo6',
          name: 'element按钮',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo6.vue'),
        },
        {
          path: '/demo7',
          name: 'element树形菜单',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo7.vue'),
        },
        {
          path: '/demo9',
          name: '高德搜索',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo9.vue'),
        },
        {
          path: '/demo10',
          name: 'v-charts图表',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo10.vue'),
        },
        {
          path: '/demo11',
          name: '封装子组件',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo11.vue'),
        },
        {
          path: '/demo12',
          name: '全局组件使用',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo12.vue'),
        },
        {
          path: '/demo13',
          name: '循环背景图片',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo13.vue'),
        },
        {
          path: '/demo14',
          name: '地图1',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo14.vue'),
        },
        {
          path: '/demo15',
          name: '地图2',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo15.vue'),
        },
        {
          path: '/demo16',
          name: '地图3',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo16.vue'),
        },
        {
          path: '/demo17',
          name: '倒计时',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo17.vue'),
        },
        {
          path: '/demo18',
          name: '地图4',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo18.vue'),
        },
         {
          path: '/demo19',
          name: '地图5',
          iconCls: 'el-icon-s-grid menumedia',
          component: ()=> import('../components/view/demofile/demo19.vue'),
        },
      ]
    }, 
    {
      path: '/vuexdemo',
      name: 'vuex使用',
      leaf: true,   //只有一个节点 点击即跳转
      component: ()=> import('../components/home/home.vue'),
      iconCls: 'el-icon-s-home',
      children: [
        { path: '/vuexdemo', component: vuex, name: 'vuex使用' },
      ]
    }, 
  ]
  
})
