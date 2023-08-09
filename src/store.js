import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store/modules/auth'; // auth.js 파일을 임포트합니다.

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://1a44-121-176-132-24.ngrok-free.app",
    mainColor : "rgba(126, 246, 156, 0);",
    mainColor2 : "green",
    logoColor: "#2E8B57",
    lightFontColor : "#3CB371",
    DarkFontColor : "black",
    showMenu: false
  },
  mutations: {
    toggleMenu(state) {
        state.showMenu = !state.showMenu;
      }
  },
  actions: {},
  getters: {},
  modules: {
    auth, // 임포트한 auth 모듈을 modules에 등록합니다.
  }
});
