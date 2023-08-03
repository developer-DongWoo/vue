<template>
    <div class="sign-up-container">
      <h2 class="sign-up-title">회원 가입</h2>
        <!-- 이메일 입력 -->
      <div class="form-group">
        <div class="input-container">
          <input type="email" id="userEmail" placeholder="Email" v-model="userEmail" />
          <button class="check-duplicate-button" @click="checkDuplicateEmail">
            중복확인
          </button>
        </div>
        <!-- 이메일 중복 확인 결과를 보여줄 메시지 -->
        <div v-if="emailDuplicateResult">{{ emailDuplicateResult }}</div>
      </div>

      <!-- 닉네임 입력 -->
      <div class="form-group">
        <div class="input-container">
          <input type="text" id="nickName" placeholder="Nick Name" v-model="nickName" />
          <button class="check-duplicate-button" @click="checkDuplicateNickname">
            중복확인
          </button>
        </div>
        <!-- 닉네임 중복 확인 결과를 보여줄 메시지 -->
        <div v-if="nicknameDuplicateResult">{{ nicknameDuplicateResult }}</div>
      </div>

  
        <!-- 비밀번호 입력 -->
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" v-model="password" />
        </div>
  
        <!-- 비밀번호 확인 입력 -->
        <div class="form-group">
          <input type="password" id="rePassword" placeholder="Password 확인" v-model="rePassword" />
        </div>
  
        <!-- 가입하기 버튼 -->
        <button class="submit-button" @click="submitForm">가입하기</button>
    </div>
  </template>
  
  <script>
  import { submitForm, checkDuplicateEmail, checkDuplicateNickname } from "../methods/SignUpMethod";
  
  export default {
    name: "SignUp",
    data() {
      return {
        userEmail: "",
        nickName: "",
        password: "",
        rePassword: "",
        emailDuplicateResult: null,
        nicknameDuplicateResult: null,
      };
    },
    methods: {
      submitForm() {
        // submitForm 메서드를 이용하여 회원 가입 처리
        submitForm(this.userEmail, this.nickName, this.phone, this.password, this.rePassword)
          .then((response) => {
            console.log("회원 가입 성공:", response);
            // 성공적으로 가입되었을 때의 처리를 추가할 수 있습니다.
          })
          .catch((error) => {
            console.error("회원 가입 실패:", error);
            // 실패했을 때의 처리를 추가할 수 있습니다.
          });
      },
      async checkDuplicateEmail() {
      try {
        // checkDuplicateEmail 메서드를 이용하여 이메일 중복 확인 처리
        // (실제로는 서버와 통신하여 결과를 받아와야 합니다.)
        const result = await checkDuplicateEmail(this.userEmail);
        if (result.duplicate) {
          this.emailDuplicateResult = "사용할 수 없는 이메일입니다.";
        } else {
          this.emailDuplicateResult = "사용 가능한 이메일입니다.";
        }
      } catch (error) {
        console.error("이메일 중복 확인 실패:", error);
      }
    },
      async checkDuplicateNickname() {
        try {
            const result = await checkDuplicateNickname(this.nickName);
            if (result.duplicate) {
            this.nicknameDuplicateResult = "사용할 수 없는 닉네임입니다.";
            } else {
            this.nicknameDuplicateResult = "사용 가능한 닉네임입니다.";
            }
      } catch (error) {
        console.error("닉네임 중복 확인 실패:", error);
      }
      },
    },
  };
  </script>
  