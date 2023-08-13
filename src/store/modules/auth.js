// auth.js
import api from "../api"
const state = {
    isLoggedIn: true,
    user: null,
    ticket: "2023-12-25 23:20:19",
  };
  
  const mutations = {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  };
  
  const actions = {
    async login({ commit, state }, credentials) {
      try {
        const apiUrl = state.url;
        const response = await api.loginUser(credentials, apiUrl);
  
        // 응답에서 user 정보를 추출
        const user = response.user;
  
        // login 변이에 user 정보를 전달하여 상태 업데이트
        commit('login', user);
      } catch (error) {
        // 로그인 실패 처리
      }
    },
    logout({ commit }) {
      // 로그아웃 로직을 가정하여 처리
      commit('logout');
    },
  };
  
  const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getUser: (state) => state.user,
    ticket: (state) => state.ticket
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  