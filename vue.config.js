const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打开之后白屏问题
  publicPath: './',
  devServer: {
    // 端口号
    port: 2832,
    // 主机名
    host: 'localhost',
    // 启动项目是否自动打开浏览器
    open: true,
    // 是否开启HTTPS
    https: false,
    // 配置跨域
    proxy: {
      "/dev-api": {
        target: "http://119.45.133.128:8089/",
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": ""
        }
      }
    }

    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: process.env.VUE_APP_SERVICE_URL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^" + process.env.VUE_APP_BASE_API]: ""
    //     }
    //   }
    // }

  }
})


