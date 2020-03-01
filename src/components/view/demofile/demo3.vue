<template>
  <div id="all">
        <textarea id="content" rows="10" cols="80"></textarea>
        <el-button type="primary" class="community_submit_btn" @click='clickBtn'>提交</el-button>
  </div>
</template>

<script>
 import CKEDITOR from 'CKEDITOR'
  export default {
    name: 'editor',
    data() {
      return {

      };
    },
    mounted() {
    //构造一个富文本编辑器 给一个div用id绑定
      CKEDITOR.replace('content', {height: '300px', width: '600px', toolbar: 'toolbar_Full'});
      this.editor = CKEDITOR.instances.editor;
    },
    methods:{
        clickBtn(){
            var stemTxt=CKEDITOR.instances.content.document.getBody().getText(); //取得纯文本     
            console.log(stemTxt)
            var stem = CKEDITOR.instances.content.getData();  //取得带标签的文本 给后端的传值
            console.log(stem)
        }
    }
}
</script>

<style scoped>
#all{
    background: #fff;
}
.community_submit_btn{
    margin-top: 20px;
}
</style>
