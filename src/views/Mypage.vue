<template>
    <div class="flex_section">
        <section class="sidebar_section" style="display: none;">
            <h5>My Page</h5>
            <button class="sidebar_title" @click="sidebar_title_clicked('profile')">
                <h6>Profile</h6>
                <p>
                    <svg v-if="isOpenProfileToSidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </p>
                
            </button>
            <ul class="sidebar_dropdown_menus" v-if="isOpenProfileToSidebar">
                <li>
                    내 프로필 보기
                </li>
                <li>
                    내 프로필 수정
                </li>
                <li>
                    회원탈퇴
                </li>
            </ul>


            <button class="sidebar_title" @click="sidebar_title_clicked('log')">
                <h6>내 활동</h6>
                <p>
                    <svg v-if="isLogMenuOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </p>
                
            </button>
            <ul class="sidebar_dropdown_menus" v-if="isLogMenuOpen">
                <li>
                    내가 작성한 글
                </li>
                <li>
                    로그인 History
                </li>
                <li>
                    결제내역
                </li>
            </ul>

        </section>
        <section class="dashboard_section extend">
            <Profile/>
        </section>
    </div>
  </template>
  
  <script>
  import Profile from '../components/profile.vue';

  export default {
      name:"myPage",
      components:{
        Profile
      },
      data(){
        return {
            isOpenProfileToSidebar:false,
            isLogMenuOpen:false
        }
      },
      methods : {
        sidebar_title_clicked(target){
            if (target === "profile"){
                this.isOpenProfileToSidebar = !this.isOpenProfileToSidebar;
            }
            else if (target === "log"){
                this.isLogMenuOpen = !this.isLogMenuOpen;
            }
        }
      }
  }
  </script>
  
  <style>
    @import url(../assets/css/style.css);
  </style>