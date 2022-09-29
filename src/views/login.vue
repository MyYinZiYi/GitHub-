<template>
  <div class="box">
    <div class="box-cender">
      <h3>权限管理</h3>
      <el-form ref="form" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="tp">
            <el-input
              class="inp"
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <span class="w"><img :src="img" alt="" @click="imgReset" /></span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="headerLoginSubmit">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login, loginImg } from "../api/login";
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
        console.log(res);

        this.img = window.URL.createObjectURL(res.data);
      } catch (error) {
        console.log(error);
      }
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
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.box-cender {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  width: 400px;
  height: 400px;
  padding-right: 30px;
  border: 1px solid #ccc;
}
.element.style {
  margin-left: 0 !important;
}
</style>
