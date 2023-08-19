<template>
    <div>
      <h2>로그인</h2>
      <div>
        <label for="username">사용자 이름:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button @click="login">로그인</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VueLogin',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const credentials = {
            username: this.username,
            password: this.password,
          };
  
          const response = await axios.post('http://localhost:8080/auth/login', credentials, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          sessionStorage.setItem("Authorization",response.headers.authorization)
          // 로그인 성공 처리 (예: 라우팅)
          this.$store.commit('login', response.headers.authorization);
          this.$router.push('/'); // 로그인 후 이동할 경로
        } catch (error) {
          console.error('로그인 실패:', error);
          console.log(error.headers)
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 추가적인 스타일링 작업 가능 */
  </style>
  