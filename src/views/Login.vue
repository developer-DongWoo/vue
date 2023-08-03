<template>
  <div class="login-container">
    <h2 class="login-title">로그인</h2>
    <form>
      <div class="form-group">
        <input type="email" id="userEmail" placeholder="Email" v-model="userEmail" />
      </div>

      <div class="form-group">
        <input type="password" id="password" placeholder="Password" v-model="password" />
      </div>

      <button class="login-button" @click="login">로그인</button>
    </form>

    <div class="options-container">
      <router-link to="/signup" class="signup-link" >회원가입</router-link>
      <router-link to="/forgot-password" class="forgot-password-link">비밀번호 찾기</router-link>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "VueLogin",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        // 로그인 처리 로직을 여기에 작성합니다.
        // 이메일과 비밀번호는 this.email과 this.password에 저장되어 있습니다.
        // 서버로 데이터를 보내어 로그인을 처리하거나, 로컬 상태를 업데이트하는 등의 작업을 수행합니다.
        console.log("로그인 시도:", this.email, this.password);
      },
    },
  };
  </script>