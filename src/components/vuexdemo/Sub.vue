<template>
    <div>
        <h3>当前最新count的值为：{{count}}</h3>
        <button @click="handleSub">-1</button>
        <button @click="handleSubN">延时-10</button>
    </div>
</template>

<script>
//引入vuex要用的内容
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        //调用Mutations要用的方法
        ...mapMutations(['sub']),
        //在自定义的click事件里，调用this.sub()即可
        handleSub(){
            this.sub()
        },

        //调用Actions里面的异步方法
        ...mapActions(['subAsync']),
        handleSubN(){
            this.subAsync(10)
        }
    },
    computed:{
        ...mapState(["count"])
    }
}
</script>