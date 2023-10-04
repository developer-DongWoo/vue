<template>
    <div class="row extend">
        <div class="dashboard_title">
            <h3>Profile</h3>
            <hr>
        <!-- </div>
        <div class="dashboard_title"> -->
            <div class="row">
                <section class="col-md-4">
                    <div class="profile_box">
                        <div class="square_box">
                            <img class="square_box" src="https://images.ctfassets.net/hrltx12pl8hq/5QjlPVlHYuz5NhTWbCrJeU/3126274e309f0db08d7a9dd4edca73fa/School.jpg?fit=fill&w=1200&h=675&fm=webp" alt="" srcset="">     
                        </div>
                    </div>
                    <div class="text_center" style="max-width: 350px;">
                        <button>
                            프로필 사진 수정
                        </button>
                    </div>
                </section>
                <section class="col-md-8">
                    <div class="profile_box">
                        <ul>
                            <li>
                                <div class="flex_section space_center">
                                    <div>닉네임 : {{ nickname }} </div>
                                    <button class="profile_change_button" @click="change_nickname_button_clicked">변경하기</button>
                                </div>
                            </li>
                            <li>등급 : {{ user_level }}</li>
                            <li>포인트 : {{ point }}</li>
                            <li>쿠폰함 : {{ coupon }}</li>
                            <li>가입일 : {{ signup_date }}</li>
                            <li>이메일 : {{ email }}</li>
                            <li>Plan : {{ plan }}</li>
                            <li><button class="profile_change_button" @click="change_password_button_clicked">비밀번호 변경하기</button></li>
                        </ul>
                    </div>
                </section>
                <div v-if="change_nickname_modal_open" class="modal_background" @click="change_nickname_button_clicked">
                    <div class="modal_box input_text">
                        <h3 class="text_center">닉네임 변경</h3>
                        <input class="small_margin" type="text" placeholder="Email">
                        <input class="small_margin" type="password" placeholder="기존 비밀번호">
                        <input class="small_margin" type="password" placeholder="새로운 닉네임">
                        <button class="signup_submit_button small_margin">변경하기</button>
                    </div>
                </div> 
                <div v-if="change_password_modal_open" class="modal_background" @click="change_password_button_clicked">
                    <div class="modal_box input_text">
                        <h3 class="text_center">비밀번호 변경</h3>
                        <input class="small_margin" type="text" placeholder="Email">
                        <input class="small_margin" type="password" placeholder="기존 비밀번호">
                        <input class="small_margin" type="password" placeholder="새로운 비밀번호">
                        <input class="small_margin" type="password" placeholder="새로운 비밀번호 확인">
                        <button class="signup_submit_button small_margin">변경하기</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"vueProfile",
    data() {
        return {
            nickname : "천재",
            point : "0",
            coupon : "0",
            signup_date : "2023-01-01",
            email : "d***",
            user_level : "Free",
            plan : "2023-01-01 03:12:57 까지",
            change_password_modal_open : false,
            change_nickname_modal_open : false
        }
    },
    methods:{
        change_password_button_clicked(event){
            if (this.change_password_modal_open === true){
                if (event.target === event.currentTarget) {
                    this.change_password_modal_open = !this.change_password_modal_open
                }
            }
            else{
                this.change_password_modal_open = !this.change_password_modal_open
            }
        },
        change_nickname_button_clicked(event){
            if (this.change_nickname_modal_open === true){
                if (event.target === event.currentTarget) {
                    this.change_nickname_modal_open = !this.change_nickname_modal_open
                }
            }
            else{
                this.change_nickname_modal_open = !this.change_nickname_modal_open
            }
        }
        
    }
}
</script>

<style>

</style>