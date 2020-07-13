<template>
<body id= "poster">
  <el-form :model="loginForm" :rules="rules" class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号" ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码" ></el-input>
    </el-form-item>
    <el-form-item style="width: 100%;margin-top:22px">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="handleClick" >登录</el-button>
    </el-form-item>
    <!-- <el-form-item style = "width:100%;margin-top:22px">
      <el-checkbox v-model="checked" class = "rememberme">
        记住密码
      </el-checkbox>
      <el-button type="text" @click="forgetpassword" >
        忘记密码？
      </el-button>
    </el-form-item> -->
    <h4>@copyright 国药集团药业股份有限公司</h4>
  </el-form>
  </body>
</template>

<script>
export default {
/* eslint-disable */ 
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: '',
      rules: {
        username: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      },
      checked:true
    }
  },
  methods: {
    handleClick () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(response => {
          if (response.data.code === 200 && response.data.user.type === 'admin') {
            sessionStorage.setItem('user', JSON.stringify(user));
            this.$router.replace({ path: '/admin' })
          } else if(response.data.code === 200 && response.data.user.type === 'user'){
            sessionStorage.setItem('user', JSON.stringify(user));
            this.$router.replace({path:'/user'})
          } else if(response.data.code === 200 && response.data.user.type === 'delegant'){ 
            sessionStorage.setItem('user', JSON.stringify(user));
            this.$router.replace({path:'/delegant'})
          }
        })
        .catch(failResponse => {})
    },
    forgetPassword() {
      this.$alert('请联系系统管理员找回密码',{
        confirmButtonText:'确定',
        type:'warning'
      })
    }
  }
}
</script>

<style>
  body{
    margin: 0px;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 315px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
