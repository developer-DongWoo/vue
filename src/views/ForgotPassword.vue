<template>
    <div>
        <div class="form_background">
            <div class="form_box">
                <h1 class="form_title">비밀번호 초기화</h1>
                <section>
                    <div v-if="inputEmail" class="input_text">
                        <input type="text" placeholder="email을 입력해주세요" id="email">
                        <button class="input_verify_button" @click="send_verify_email">인증번호 발송</button>
                    </div>
                    <div v-if="sendEmail" class="input_text">
                        <input type="text" placeholder="인증번호" id="verify_number">
                        <button class="input_verify_button" @click="verify_email">인증번호 인증</button>
                        <p class="small_text">{{ remainingTime }}</p>
                    </div>

                    <button v-if="isVerifiedEmail" class="signup_submit_button" @click="send_new_password">
                        비밀번호 초기화 및 발송
                    </button>
                    <p class="text_center" v-if="isVerifiedEmail">초기화된 비밀번호로 로그인 후 꼭 비밀번호를 변경해주세요</p>
                </section>
                <section>
                    <router-link to="login">
                        <button v-if="!isLoginToEmail" class="signup_type_button">
                            로그인으로 이동
                        </button>
                    </router-link>
                    <router-link to="signup">
                        <button v-if="!isLoginToEmail" class="signup_type_button">
                            회원가입으로 이동
                        </button>
                    </router-link>
                </section>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"forgotPassword",
      data(){
        return {
            inputEmail:true,
            sendEmail:false,
            isVerifiedEmail:false,
            email:"",
            veriry_number:"",
            remainingSeconds: 300
        }
      },
      computed: {
          remainingTime() {
          // 남은 시간을 분:초 형식으로 표시
          const minutes = Math.floor(this.remainingSeconds / 60);
          const seconds = this.remainingSeconds % 60;
          return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          },
      },
      methods:{
        startCountdown() {
            // 1초마다 remainingSeconds를 감소
            const countdownInterval = setInterval(() => {
                if (this.remainingSeconds > 0) {
                this.remainingSeconds--;
                } else {
                clearInterval(countdownInterval); // 카운트 다운 종료
                window.location.reload() //새로고침
                }
            }, 1000); // 1초 간격으로 실행
        },
        send_verify_email(){
            this.inputEmail = false
            this.sendEmail = true
            this.startCountdown();
        },
        verify_email(){
            this.isVerifiedEmail = true
            this.sendEmail = false
        },
        send_new_password(){
            this.$router.push("/")
        }
      }
  }
  </script>
  
  <style>
  
  </style>