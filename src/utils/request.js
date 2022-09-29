import axios from "axios";

//创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_SERVICE_URL,
    timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 获取vuex的token
    // const token = store.getters.token
    //当token存在则将token通过请求头发送给后台
    // if (token) config.headers.authorization = token
    // console.log(token);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {

    if(response.status<400){
        if(response.data.data){
            return response.data
        }else{
			// return response.data.message
        }
    }

    if(response.status===401){
        // store.commit("SET_token","")
        // store.commit("SET_userinfo","")
        return
    }

    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default service