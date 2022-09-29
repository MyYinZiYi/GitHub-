// 设置token
const Token_key = "token"
const User_info = "userinfo"

// 存入token
export const setToken = (token) => {
    localStorage.setItem(Token_key, token)
}

// 获取token
export const getToken = () => {
    return localStorage.getItem(Token_key)
}

//存入用户信息
export const setuserinfo = (userinfo) => {
    localStorage.setItem(User_info, JSON.stringify(userinfo))
}

//获取用户信息
export const getuserinfo = () => {
    if (localStorage.getItem(User_info) === "undefind") {
        return "{}"
    }
    return JSON.parse(localStorage.getItem(User_info) || "{}")
}

//删除用户信息和token
export const removeTokenAndUser = () => {
    localStorage.removeItem(Token_key)
    localStorage.removeItem(User_info)
}