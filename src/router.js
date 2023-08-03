// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "./views/Home";
// import BotConsole from "./views/BotConsole";
// //라우팀 페이지 추가

// Vue.use(VueRouter);

// const router = new VueRouter({
//     mode : "history",
//     routes:[
//         {
//             path: "/",
//             component: Home
//         },
//         {
//             path: "/bot-console",
//             component: BotConsole
//         }
//     ]
// })
// export default router;

import { createWebHistory, createRouter } from 'vue-router'
import Home from "./views/Home";
import BotConsole from "./views/BotConsole";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword"
import CustomRequest from "./views/CustomRequest"
import Payment from "./views/Payment"

const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path: '/bot-console',
        name: 'botConsole',
        component: BotConsole
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/custom-request',
        name: 'customRequest',
        component: CustomRequest
    },
    {
        path: '/payments',
        name: 'payment',
        component: Payment
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
