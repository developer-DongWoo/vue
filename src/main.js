import { createApp } from 'vue'
import App from './App.vue'
// import store from './store'
import { loadFonts } from './plugins/webfontloader'
import router from './router'


loadFonts()

const app = createApp(App)
// app.use(store);
app.use(router); // 사용 설정 하기

app.mount('#app');
