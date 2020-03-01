//全局组件导出

import popwin from './popwin.vue'

const Popwin = {
    install:function(Vue){
        Vue.component('popwin',popwin)
    }
}
export default Popwin