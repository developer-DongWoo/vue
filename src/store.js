import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store/modules/auth'; // auth.js 파일을 임포트합니다.

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost.com",
    mainColor : "#03C988",
    lightFontColor : "white",
    DarkFontColor : "black"
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth, // 임포트한 auth 모듈을 modules에 등록합니다.
  }
});
