<template>
    <div>
      <h2>회원가입</h2>
      <div>
        <label for="userEmail">이메일</label>
        <input type="email" id="userEmail" v-model="userEmail" required>
      </div>
      <div>
        <label for="nickName">닉네임</label>
        <input type="text" id="nickName" v-model="nickName" required>
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <label for="rePassword">비밀번호 확인</label>
        <input type="password" id="rePassword" v-model="rePassword" required>
      </div>
      <button @click="submitForm">회원가입</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VueSignUp',
    data() {
      return {
        userEmail: '',
        nickName: '',
        password: '',
        rePassword: ''
      };
    },
    methods: {
      async submitForm() {
        if (this.password !== this.rePassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }
  
        const params = {
          userEmail: this.userEmail,
          nickName: this.nickName,
          password: this.password,
          rePassword: this.rePassword
        };
  
        try {
          const response = await axios.post('http://localhost:8080/signup', params, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log('회원가입 성공:', response.data);
          alert('회원가입이 완료되었습니다.');
          // 회원가입 후에 로그인 페이지로 이동하거나 다른 동작을 수행할 수 있습니다.
        } catch (error) {
          console.error('회원가입 실패:', error);
          console.log(error)
          alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
        }
      }
    }
  };
  </script>
  
  <style>
  /* 필요한 스타일을 추가하세요 */
  </style>
  