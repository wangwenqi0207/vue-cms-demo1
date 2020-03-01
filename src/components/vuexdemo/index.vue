<template>
    <div>
        <Add></Add>
        <p>--------------------</p>  
        <Sub></Sub>
    </div>
</template>

<script>
import Add from './Add.vue'
import Sub from './Sub.vue'
export default {
    components:{
        Add,Sub
    },
    data(){
        return{
            
        }
    }
}
</script>