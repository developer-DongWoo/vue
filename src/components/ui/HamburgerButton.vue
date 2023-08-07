<template>
    <button
      id="HamburgerButtonBox"
      @click="toggleMenu"
      @keydown.space.prevent="toggleMenu"
      @keydown.enter.prevent="toggleMenu"
    >
      <span id="hamburgerLine_1" :class="{ active: showMenu }"></span>
      <span id="hamburgerLine_2" :class="{ active: showMenu }"></span>
      <span id="hamburgerLine_3" :class="{ active: showMenu }"></span>
    </button>
  </template>
  
  <script>
  export default {
    name: "HamburgerButton",
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
        // 클릭 이벤트를 부모 컴포넌트인 VueHeader.vue에게 전달합니다.
        this.$emit("click");
      },
    },
  };
  </script>
  
  <style>
  #HamburgerButtonBox {
    width: 42px;
    height: 42px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
  }
  
  #hamburgerLine_1,
  #hamburgerLine_2,
  #hamburgerLine_3 {
    display: block;
    width: 30px;
    height: 3px;
    margin: 6px auto;
    transition: transform 0.2s ease, opacity 0.2s ease;
    background-color: rgb(200, 252, 209);
  }
  
  #hamburgerLine_1.active {
    transform:  translateY(9px) rotate(405deg);
  }
  
  #hamburgerLine_2.active {
    opacity: 0;
  }
  
  #hamburgerLine_3.active {
    transform: translateY(-9px) rotate(-405deg);
  }
  </style>
  