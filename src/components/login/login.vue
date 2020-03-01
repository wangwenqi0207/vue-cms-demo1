<template>
<!-- 一个提交按钮对应一个el-form    model表单数据对象  rules表单验证规则 -->
    <div class="login-container">
        <span id="err_span" style="color:red;width:100%;height:30px;font-size:16px;" />
        <el-form 
        :model="loginForm" :rules="rules2"
         status-icon
         ref="loginForm" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" 
                    v-model="loginForm.username" 
                    auto-complete="off" 
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" 
                        v-model="loginForm.password" 
                        auto-complete="off" 
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
            <el-checkbox 
                v-model="loginForm.checked"
                class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;"  @click.native.prevent="handleLogin" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { setCookie,getCookie,delCookie} from '../../assets/js/cookie'
export default {
    name:"login",
    data(){
        return {
            logining: false,
            loginForm: {
                username: '',
                password: '',
                checked: true
            },
            rules2: {
                username: [{required: true, message: '请您输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请您输入密码', trigger: 'blur'}]
            },
        }
    },
    methods: {
        handleLogin(event){
        this.$router.push({path: '/demo'});
        this.$refs.loginForm.validate(valid => {
                if (valid) {
                this.logining = true

        this.$axios({
            method: 'post',
            url: "login",
            data: {
              'loginName': 'admin',
              'loginPwd': 'admin@#$',
              'remember': 0
            }
          }).then(res => {
            if (res.data.resultCode === '000000') {
            this.loading = false
              console.log('路由', res.data.data.menuList)
              var menuList = res.data.data.menuList
              window.localStorage.setItem('testRouter', JSON.stringify(menuList))
              window.localStorage.setItem('fullName', res.data.data.fullName)
              if (this.loginForm.checked) {
                let user= this.loginForm.username;
                let pwd=this.loginForm.password;
                setCookie("username",user,30);
                setCookie("password",pwd,30);
              }
            this.$router.push({path: '/demo'});  //跳到账号管理
            }else{
                alert(res.data.data.resultMsg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
        }
    }
};
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100%;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>