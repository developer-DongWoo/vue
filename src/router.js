import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import BotConsole from "@/views/BotConsole.vue";
import MyPage from "@/views/Mypage.vue";
import Payment from "@/views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/bot-console", component: BotConsole },
  { path: "/my-page", component: MyPage },
  { path: "/plan-purchase", component: Payment },
];

const router = new VueRouter({
  mode : "history",
  routes,
});

export default router;
