//vuex中不允许组件直接修改store中的数据逻辑
//只能展示，逻辑在vuex中处理
//方便集中管理状态
<template>
    <div>
        <h3>当前最新count的值为：{{count}}</h3>
        <h2>{{showNum}}</h2>
        <button @click="handleAdd">+1</button>
        <button @click="handleAddN">+10</button>
        <button @click="addAsync">延时+1</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    methods:{
        handleAdd(){
            this.add()
        },
        handleAddN(){
            //commit用来调用某个mutations里面的函数
             this.$store.commit('addN',10)
        },

        //调用Mutations的第二种方法
        ...mapMutations(['add',"addN"]),

        //调用Actions里面的方法，方法如果是...映射过来，是可以直接用的，不需要再添加一个事件去接收
        ...mapActions(['addAsync'])
    },
    //使用计算属性调取state中的数据
    computed:{
        ...mapState(["count"]),
        ...mapGetters(['showNum'])
    }
}
</script>