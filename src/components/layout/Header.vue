<template>
    <div class="navbar">
      <div class="logo" @click="navigateTo('home')" >SINAMON</div>
      <!-- 햄버거 버튼 -->
      <div class="modal-background" v-if="isMenuOpen" @click="toggleMenu"></div>
      <div>
        <div class="hamburger-icon" @click="toggleMenu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </div>
        <div class="menu" :class="{ 'menu-opened': isMenuOpen }">
            <div class="menu-item" @click="navigateTo('botConsole')">BOT 콘솔</div>
            <div class="menu-item" @click="navigateTo('customRequest')">BOT 주문제작 의뢰</div>
            <div class="menu-item" @click="navigateTo('payment')">SHOP</div>
            <div class="menu-item" @click="navigateTo('login')">Log-In</div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: "VueHeader",
    data() {
      return {
        isMenuOpen: false, // 햄버거 버튼을 클릭하여 메뉴가 열려있는지 여부를 나타내는 데이터
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push({ name: route });
        this.isMenuOpen = false;
      },
      toggleMenu() {
        // 햄버거 버튼 클릭시 메뉴 열고 닫는 로직
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style>
  /* src/assets/style.css 파일을 import */
  @import '@/assets/style.css';
  
  /* 추가된 햄버거 버튼 스타일 */
  .hamburger-icon {
    font-size: 1.5rem; /* 아이콘 크기 조정 */
    cursor: pointer;
  }

  </style>
  