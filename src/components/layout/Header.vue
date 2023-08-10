<template>
  <!-- <button @click="login">Login</button> -->
  <div class="container-fluid" :style="{ backgroundColor: mainColor }" id="navBar-background">
    
    <div id="logo-wrapper">
      <router-link  :style="{ color: logoColor }" to="/"><div id="logo">Sinamon</div></router-link>
      <!-- <button id="hamburgerComponent" :style="{ backgroundColor: mainColor }" @click="toggleNavMenu"> -->
        <button
          id="HamburgerButtonBox"
          :style="{ backgroundColor: mainColor }"
          @click="toggleNavMenu"
        >
          <span id="hamburgerLine_1" :class="{ active: showNavMenu }"></span>
          <span id="hamburgerLine_2" :class="{ active: showNavMenu }"></span>
          <span id="hamburgerLine_3" :class="{ active: showNavMenu }"></span>
        </button>
      <!-- </button> -->

      <div id="menu" >
        <ul :class="{open:showNavMenu}" @click="routerClicked">
          <router-link class="menu-item" to="/bot-console" :style="{ color: lightFontColor }"><li>Bot-Console</li></router-link>
          <router-link class="menu-item" to="/plan-purchase" :style="{ color: lightFontColor }"><li>Payment</li></router-link>

          <li class="menu-item" @click.stop="toggleUserMenu">
            User
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>

              <div v-if="showUserMenu" class="user-menu" :class="{ open: showUserMenu }" :style="{ backgroundColor: mainColor }" >
                <div v-if="!isLoggedIn">
                  <router-link v-if="showUserMenu" to="/login" @click="routerClicked"><li>로그인</li></router-link>
                  <router-link v-if="showUserMenu" to="/signup" @click="routerClicked"><li>회원가입</li></router-link>
                  <router-link v-if="showUserMenu" to="/forgot-password" @click="routerClicked"><li>비밀번호 찾기</li></router-link>
                </div>
                <div v-else>
                  <router-link to="/my-page"><li>마이페이지</li></router-link>
                  <li>로그아웃</li>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <section v-if="showUserMenu" class="darkBackground" @click="toggleUserMenu"></section> -->
    <div v-if="showDarkBackground" class="dark-background" @click="darkBackgroundClicked" />
  </div>
</template>

<script>
// import HamburgerButton from "../ui/HamburgerButton";
// import DarkBackground from "../ui/DarkBackground";

export default {
  name: "VueHeader",
  computed: {
    mainColor() {
      return this.$store.state.mainColor;
    },
    lightFontColor() {
      return this.$store.state.lightFontColor;
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
    logoColor(){
      return this.$store.state.logoColor;
    },
    mainColor2(){
      return this.$store.state.mainColor2
    }
  },
  data() {
    return {
      showUserMenu: false, 
      showNavMenu: false,
      showDarkBackground: false,
    };
  },
  methods: {
    toggleNavMenu() {
      this.showNavMenu = !this.showNavMenu;
      this.showUserMenu = false;
      this.showDarkBackground = this.showNavMenu;
    },
    toggleUserMenu(){
      this.showUserMenu = !this.showUserMenu;
      if (!this.showNavMenu){
        this.showDarkBackground = this.showUserMenu;
      }
    },
    darkBackgroundClicked() {
      this.routerClicked()
      
    },
    routerClicked() {
      this.showNavMenu = false;
      this.showUserMenu = false;
      this.showDarkBackground = false;
    }
},
  components: {
    // HamburgerButton,
    // DarkBackground
  }}

</script>

<style>
#navBar-background {
  width: 100%;
  height: 70px;
  padding: 0;
  z-index: 999;
}

#logo {
  font-size: 40px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 900;
}

#logo-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
#logo-wrapper a{
  text-decoration: none;
}

#menu {
  display: flex;
  align-items: center;
  font-size: 20px;
}

#menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 1;
}

#menu a {
  text-decoration: none;
  color: #00410d;
}
#menu li {
  margin-right: 20px;
  cursor: pointer;
  position: relative; /* 에니메이션을 위해 포지션을 설정합니다. */
  color: #00410d;
}


/* 마우스를 올렸을 때 글자색 변경 및 에니메이션 효과 적용 */
#menu a.menu-item:hover {
  /* color: rgb(250, 213, 178); */
  animation: shake 0.3s; /* 에니메이션 효과를 적용합니다. */
}
/* 에니메이션 키 프레임 정의 */
@keyframes shake {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.user-menu {
  position: fixed;
  top: 65px;
  right: 5px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  z-index: 1;
  transition: max-height 0.1s ease, opacity 0.1s ease; /* 트랜지션 속성 추가 */
  max-height: 0; /* 기본으로 최대 높이를 0으로 설정하여 숨김 */
  opacity: 0; /* 기본으로 투명도를 0으로 설정하여 숨김 */
}
.user-menu.open {
  max-height: 200px; /* 메뉴가 열릴 때 최대 높이 설정 */
  opacity: 1; /* 메뉴가 열릴 때 투명도 설정 */
  transition: max-height 0.2s ease, opacity 0.2s ease; /* 트랜지션 속성 추가 */
  z-index: 1;
  background-color: rgb(200, 231, 211);
  
}
.user-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 8;
}
.user-menu a {
  text-decoration: none;
  z-index: 7;
}
.user-menu li {
  padding: 10px;
  cursor: pointer;
  display: block;
  z-index: 1;
  position: relative;
  color: #00410d; /* 검은색에서 다른 색상으로 변경 */
  font-weight: bold; /* 글자 굵기 조정 */
  font-size: 18px; /* 글자 크기 조정 */
}

.user-menu li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e6ffea; /* 밑줄 색상 설정 */
  transition: width 0.3s ease;
}

.user-menu li:hover::before {
  width: 100%; /* 마우스 호버링 시 밑줄의 너비를 100%로 변경하여 나타나도록 함 */
}

#HamburgerButtonBox{
  display: none;
  margin-right: 10px;
  border-style: solid;
  border-radius: 5px;
  border-color: rgb(255, 255, 255);
  width: 42px;
    height: 42px;
    background-color: transparent;
    border-width: 1px;
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
    background-color: rgb(132, 226, 148);
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


#HamburgerButtonBox:active{
  border-color: rgb(205, 255, 213);
}
.dark-background{
  position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(3, 59, 20);
    opacity: 0.2;
}


@media (max-width: 767px) {
  .navbar-nav {
    flex-direction: column;
    position: fixed;
    top: 70px;
    right: 0;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    display: none;}
  #menu {
    display: block;
    position:fixed;
    z-index: 1;
    color: #00410d;
  }



  #menu ul {
    width:200px;
    display: none;
    position: fixed;
    right: 0;
    top:60px;
    padding: 10px;
    transition: max-height 0.2s ease, opacity 0.2s ease; /* 트랜지션 속성 추가 */
    max-height: 0; /* 기본으로 최대 높이를 0으로 설정하여 숨김 */
    opacity: 0; /* 기본으로 투명도를 0으로 설정하여 숨김 */
    z-index: 1;
    
    }
  #menu ul.open{
    display: block;
    max-height: none; /* 메뉴가 열릴 때 최대 높이 설정 */
    opacity: 1; /* 메뉴가 열릴 때 투명도 설정 */
    transition: max-height 0.2s ease, opacity 0.2s ease; /* 트랜지션 속성 추가 */
    z-index: 1;
    background-color: rgb(200, 231, 211);
    border-radius: 3px;
    color: #00410d;
  }
  #menu li {
    padding: 3px;
  }
  .menu-item{
    margin: 0;
  }

  .user-menu {
    position: relative;
    top: 0%;
    right: -10%;
    border-width: 0;
    z-index: 1;
    
  }
  .user-menu.open{
    background-color: #00410d00;
  }

  #HamburgerButtonBox {
    display: block;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  }

    }
</style>
