<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h3 class="login-title">权限管理</h3>
      <el-form ref="form" :model="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="tp">
            <el-input
              class="inp"
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <span class="w"><img :src="img" alt="" @click="imgReset" /></span>
          </div>
        </el-form-item>
        <el-form-item class="el-form-item__content">
          <el-button type="primary" @click="headerLoginSubmit">登录</el-button>
          <el-button @click="headerLoginReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { loginImg } from "../api/login";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      img: "",
    };
  },
  methods: {
    async handelLoginImg() {
      try {
        const res = await loginImg();
        this.img = window.URL.createObjectURL(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    headerLoginReset() {
     this.$refs["form"].resetFields()
    },
    imgReset() {
      this.handelLoginImg();
    },
    async headerLoginSubmit() {
      let str = `username=${this.loginForm.username}&password=${this.loginForm.password}&code=${this.loginForm.code}`;
      const token = await this.$store.dispatch("login", str);
      this.$router.push("/about");
      if (!token) return;
    },
  },
  created() {
    this.handelLoginImg();
  },
};
</script>
<style scoped>
.login-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login-form {
  width: 350px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 160px auto;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 10px 10px 10px 10px rgba(99, 98, 104, 0.8);
}
.login-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
}
.el-form {
  margin-top: 20px;
}
.tp {
  display: flex;
}
.el-form-item__content {
  text-align: center;
}
</style>
