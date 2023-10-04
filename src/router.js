import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import BotConsole from "@/views/BotConsole.vue";
import MyPage from "@/views/Mypage.vue";
import Payment from "@/views/Payment.vue";
import Board from '@/views/Board.vue';
import store from './store'; // Vuex 스토어 인스턴스를 가져옵니다.

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/bot-console", component: BotConsole },
  { path: "/mypage", component: MyPage },
  { path: "/plan-purchase", component: Payment },
  { path: "/board", component: Board },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 라우터 네비게이션 가드
router.beforeEach((to, from, next) => {
  // 세션 스토리지에서 로그인 정보를 가져옵니다.
  const Authorization = sessionStorage.getItem('Authorization');
  // 세션 스토리지에 로그인 정보가 있는 경우, Vuex 상태를 업데이트합니다.
  if (Authorization) {
    store.commit('login',Authorization); // Vuex 모듈의 login 변이를 호출하여 로그인 상태 업데이트
  }

  // 다음 단계로 진행합니다.
  next();
});

export default router;
