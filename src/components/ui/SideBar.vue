<template>
    <div style="position: relative;">
      <button id="sidebarHamburgerButton" @click="toggleSidebar">
        <svg v-if="!showSlideBar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <svg v-if="showSlideBar" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <transition name="sidebar-slide">
        <div id="sideBar" v-if="showSlideBar" class="sidebar-slide" :style="{height:sideBarHeight}">
          <h4>Bot Console</h4>
          <hr>
          <div id="sideBarButtonBox">
            <button :class="{ active: selectedMenu === 'dashboard' }" @click="selectMenu('dashboard')">
              Dash Board
            </button>
            <button :class="{ active: selectedMenu === 'botCreate' }" @click="selectMenu('botCreate')">
              Bot Create
            </button>
            <button :class="{ active: selectedMenu === 'orderHistory' }" @click="selectMenu('orderHistory')">
              Order History
            </button>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "SideBar",
    data() {
      return {
        sideBarHeight: "calc(100vh - 70px)",
        selectedMenu: "dashboard",
        showSlideBar: false
      };
    },
    methods: {
      selectMenu(menu) {
        this.selectedMenu = menu;
        this.$store.state.botPage = menu;
        this.$store.commit('setCurrentBotPage', menu)
      },
      toggleSidebar() {
        this.showSlideBar = !this.showSlideBar;
      }
    }
  };
  </script>
  
  <style>
  #sideBar {
    width: 90vw;
    max-width: 370px;
    background-color: rgb(245, 255, 249);
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 2px 2px 15px -5px gray;
    border-top-right-radius: 5px;
    position: fixed;
    transition: transform 0.5s, opacity 0.5s;
    z-index: 1;
    margin-top: 55px;
  }
  
  #sideBar h4 {
    margin-top: 10px;
    text-align: center;
    font-weight: 700;
  }
  
  #sideBarButtonBox button {
    width: 100%;
    margin: 2px;
    height: 50px;
    border-radius: 5px;
    border-style: none;
    background-color: rgba(234, 255, 244, 0);
  }
  
  #sideBar button:hover {
    background-color: rgb(201, 252, 226);
  }
  
  #sideBar .active {
    background-color: rgb(122, 255, 186);
  }
  
  #sideBar .active:hover {
    background-color: rgb(141, 240, 189);
  }
  
  #sidebarHamburgerButton {
    position: absolute;
    left: 15px;
    top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: #bcd5c300;
    background-color: #90ffb07b;
    z-index: 1;
    color: rgb(60, 139, 72);
    font-weight: 900;
  }
  
  #sidebarHamburgerButton:hover{
    color: rgb(50, 231, 77);
  }
  /* 트랜지션 애니메이션 */
  .sidebar-slide-enter-active,
  .sidebar-slide-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  .sidebar-slide-enter,
  .sidebar-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  </style>
  