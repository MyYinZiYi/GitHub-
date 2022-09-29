import request from "../utils/request"

export const login=(data={})=>{
    return request({
        url:"api/user/login",
        method:"POST",
        data
    })
}

export const loginImg=()=>{
    return request({
        url:"api/sysUser/image",
        method:"POST",
        responseType: 'blob'
    })
}
