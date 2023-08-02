<template>
    <div class="navbar">
      <div class="logo">SINAMON</div>
      <!-- 햄버거 버튼 -->
      <div>
        <div class="hamburger-icon" @click="toggleMenu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </div>
        <div class="menu" :class="{ 'menu-opened': isMenuOpen }">
            <div class="menu-item" @click="navigateTo('home')">BOT 콘솔</div>
            <div class="menu-item" @click="navigateTo('about')">BOT 주문제작 의뢰</div>
            <div class="menu-item" @click="navigateTo('services')">SHOP</div>
            <div class="menu-item" @click="navigateTo('contact')">Log In</div>
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
        // 여기에서 라우팅을 처리하는 로직을 추가
        // 예를 들어, Vue Router를 사용하여 다른 페이지로 이동할 수 있음
        console.log(`Navigating to ${route} page`);
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
  