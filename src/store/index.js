import { login } from '@/api/login'
import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken, setuserinfo, getuserinfo, removeTokenAndUser } from "../utils/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    userInfo: getuserinfo() || ""
  },
  getters: {
    token(state) {

      return state.token
    },
    userInfo(state) {
      return state.userInfo
    }
  },
  mutations: {
    SET_token(state, token) {
      console.log(token);
      state.token = token
      setToken(token)
    },
    SET_userinfo(state, userInfo) {
      state.userInfo = userInfo
      setuserinfo(userInfo)
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      try {
        const response = await login(loginForm)
        commit("SET_token", response)
        // console.log(response);
        return response.token
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})
