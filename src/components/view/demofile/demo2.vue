<template>
    <div id="all">
        <el-form
            ref="ruleForm"
            label-width="160px"
            :model="ruleForm"
            >
        <div id="Intro" class="org_intro baseView baseView2">
            <!-- 列表页图片 -->
            <div style="height:176px;padding-left:67px;margin-bottom:10px;">
                <div style="display:flex">
                    <el-form-item label="列表页图片" required prop="listPicture">
                    <div class="click_upimg">
                        <!-- 上传插件 限定width和height -->
                        <my-upload v-model="show" field="img" :width="140" :height="100" img-format="png" :size="size" @src-file-set="srcFileSet" @crop-success="cropSuccess" />
                        <!-- 只是用了element的图片上传样式 和预览方式 -->
                        <div class="avatar-uploader avatar-uploader2" style="cursor:pointer" @click="changeListPicture">
                        <img v-if="ruleForm.listPicture" :src="ruleForm.listPicture" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon" />
                        </div>
                    </div>
                    </el-form-item>
                </div>
            </div>
        <div style="height:176px;padding-left:67px;margin-bottom:10px;">
          <div style="display:flex">
            <!-- 详情页图片  五张 所以循环  循环出的又拿不到单张的点击index 所以给el-upload再套一层父元素一起循环 给父元素div绑定click事件拿到整体的index用以预览-->
            <el-form-item label="详情页图片" prop="picInfo">
              <span style="margin-left:29px;">图片单张图片大小不能超过3M，图片规格700*700</span>
              <div class="click_upimg">
                <div v-for="(item,index) in ruleForm.Imglist" :key="index">
                  <div @click="getImageTypeIndex(index)">
                    <el-upload
                      class="avatar-uploader avatar-uploader2"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-success="getImageSuccess2"
                      :before-upload="beforeAvatarUpload2"
                      :show-file-list="false"
                      :file-list="item.file"
                      :http-request="fnUploadRequest2"
                    >
                    <img v-if="item.url" :src="item.url" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon" />
                    </el-upload>
                  </div>
                </div>
              </div>
            </el-form-item>
          </div>
        </div>
      </div>
    </el-form>
    </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload'
export default {
    components: {
     'my-upload': myUpload
   },
    data(){
        return {
        ruleForm: {
        listPicture: '', 
            Imglist: [{
            name: '图一',
            url: '',
            isPrimary: true
            },
            {
            name: '图2',
            url: '',
            isPrimary: false
            },
            {
            name: '图3',
            url: '',
            isPrimary: false
            },
            {
            name: '图4',
            url: '',
            isPrimary: false
            },
            {
            name: '图5',
            url: '',
            isPrimary: false
            }],
        orgImgDetail: '',
        chargesImgDetail: ''
        },
        show: false,
        size: 1,
        uploadImageIndex: null,
    }
    },
    mounted(){
          
    },
    methods:{
        // 列表页图片 点击方框上传组件显示
        changeListPicture() {
            this.show = !this.show
        },
        //点击插件 选择图片 
        srcFileSet(file) {
            //console.log(file) //打印图片src
        },
        //插件 点击保存图片 上传
        cropSuccess(imgDataUrl) {
        // imgDataUrl其实就是经过base64转码过的图片
        // this.listPicture = imgDataUrl
        // console.log(imgDataUrl)// 这里打印出来的是base64格式的资源，太长了
        // base64转blob格式
        const arr = imgDataUrl.split(','); const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1]); let n = bstr.length; const u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        const bdata = new Blob([u8arr], { type: mime })
        //console.log(bdata) //转成blob的格式{size: 33208, type: "image/png"}

        // 阿里云上传
        var OSS = require('ali-oss')
        var client = new OSS({
            region: 'oss-cn-hangzhou',
            accessKeyId: 'LTAIbqxBSqfHEmbk',  //Id
            accessKeySecret: '9mVLDWtiX2Vl2UWsRr1umsm1ZQ4H4R',  //key
            bucket: 'ecare-test' })
            const that = this
            const suffix = '.' + bdata.type.split('/')[1]
            const date = Date.parse(new Date())
            const name = `thumbnail_${date}${suffix}`
            const fileNames = `org/${this.$moment().format('YYYYMMDD')}/${name}`
            client.multipartUpload(fileNames, bdata, {
                progress: function(p) {
                const e = {}
                e.percent = Math.floor(p * 100)
                }
            }).then((val) => {
                // console.info('66', val)
                if (val.res.statusCode === 200) {
                this.ruleForm.listPicture = 'http://ecare-test.oss-cn-hangzhou.aliyuncs.com/' + val.name
                return val
                } else {
                // option.onError('上传失败')
                }
            }, err => {
                // option.onError('上传失败')
                reject(err)
            })
        // console.log(bdata)
        // console.log(new Blob([u8arr], { type: mime })) ;//这里打印base64转成blob的资源，根据自己的项目需求去转吧
        },
    // 获取每张图片index
    getImageTypeIndex(index) {
        this.uploadImageIndex = index
    },    
    // 详情页图片上传
    fnUploadRequest2(option) {
      var file = option.file
      const that = this
      const isJPG = file.type === 'image/jpeg'
      const isPng = file.type === 'image/png'
      if (!isJPG && !isPng) {
        this.$message.error('上传商品图片只能是 JPG 或PNG格式!')
        return
      }
      const isLt3M = file.size / 1024 / 1024 < 3
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
        return
      }
    //   console.log('上传图片编号', this.uploadImageIndex)
      var OSS = require('ali-oss')
      var client = new OSS({
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAIbqxBSqfHEmbk',
          accessKeySecret: '9mVLDWtiX2Vl2UWsRr1umsm1ZQ4H4R',
          bucket: 'ecare-test' })
      const files = option.file
      const point = files.name.lastIndexOf('.')
      const suffix = files.name.substr(point)
      const fileName = files.name.substr(0, point)
      const date = Date.parse(new Date())
      const name = `${fileName}_${date}${suffix}`
      const fileNames = `org/${this.$moment().format('YYYYMMDD')}/${fileName}_${date}${suffix}`
      client.multipartUpload(fileNames, option.file, {
        progress: function(p) {
          const e = {}
          e.percent = Math.floor(p * 100)
          // console.log('Progress: ' + p)
          option.onProgress(e)
          // console.log(e.percent)
        }
      }).then((val) => {
        console.info('66', val)
        if (val.res.statusCode === 200) {
          //上传点击的当前条
          this.ruleForm.Imglist[this.uploadImageIndex].url = 'http://ecare-test.oss-cn-hangzhou.aliyuncs.com/' + val.name
        //console.log('11', val)
          return val
        } else {
          option.onError('上传失败')
        }
      }, err => {
        option.onError('上传失败')
        reject(err)
      })
    },
    // 图片上传成功
    getImageSuccess2: function(res, file) {
      this.$message({
        message: '上传成功！',
        type: 'success'
      })
      //console.log(file)
      this.ruleForm.Imglist[this.uploadImageIndex].url = URL.createObjectURL(file.raw)  //预览当条
      this.ruleForm.Imglist[this.uploadImageIndex].name = file.name
    },
    //上传前验证格式等
    beforeAvatarUpload2(file) {
      const isLt3M = file.size / 1024 / 1024 < 3
      const that = this
      const isJPG = file.type === 'image/jpeg'
      const isPng = file.type === 'image/png'
      if (!isJPG && !isPng) {
        this.$message.error('上传商品图片只能是 JPG 或PNG格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
      }
      var ready = new FileReader()
      /* 开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,
      如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
      ready.readAsDataURL(file)
      ready.onload = function() {
        var re = this.result
        that.canvasDataURL(re)
      }
      return isLt3M
    },
    canvasDataURL(path) {
      var img = new Image()
      img.src = path
      img.onload = function() {
        var that = this
        // 默认按比例压缩
        var w = that.width
        var h = that.height
        // console.log('图片宽高', w, h)
      }
    },
  }
}
</script>

<style>
#all{
    background: #fff;
}
#Intro{
    padding-top:30px;
}
.click_upimg{
    display: flex;
}
.el-upload{
    width: 120px !important;
}
.avatar-uploader2{
    margin-left: 20px;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader2 .avatar-uploader-icon ,.avatar-uploader1 .avatar-uploader-icon{
    font-size: 28px;
    color: #8c939d;
    width: 120px !important;
    height: 120px !important;
    line-height: 120px;
    text-align: center;
    border: 1px dashed #d9d9d9 !important;
}
.avatar-uploader2 .avatar ,.avatar-uploader1 .avatar{
    width: 120px !important;
    height: 120px !important;
    display: block;
}  
.el-upload{
    border: 1px dashed #d9d9d9 !important;
    width: 120px !important;
}
.el-upload .el-upload-dragger{
    width: 120px !important;
    height: 120px !important;
}  
</style>