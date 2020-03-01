import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //仓库数据
    state:{
        count:0,
        name:"Winter Wang"
    },
    //方法 接收参数为state中的数据
    mutations:{
        add(state){
            state.count++
        },
        sub(state){
            state.count--
        },
        addN(state,step){
            state.count+=step
        },
        subN(state,step){
            state.count-=step
        }
    },
    //如果actions里面想要修改store里面的数据，只能通过commit去触发mutations里面的方法
    //不能直接修改
    //context.commit('add')触发mutations里面的方法变成异步
    actions:{
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },2000)
        },
        subAsync(context,step){
            setTimeout(()=>{
                context.commit('subN',step)
            },2000)
        },
    },
    //用于对store里面的数据进行加工处理形成新的数据
    //store中的数据变化之后，getter包装中的数据也会跟着变化
    //getters不会修改store里面的数据
    getters:{
        showNum:state=>{
            return `${state.name}调用的是${state.count}`
        }
    }
})