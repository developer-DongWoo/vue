<template>
  <!-- <button @click="login">Login</button> -->
  <div class="container-fluid" :style="{ backgroundColor: mainColor }" id="navBar-background">
    <div id="logo-wrapper">
      <router-link  :style="{ color: lightFontColor }" to="/"><div id="logo">Sinamon</div></router-link>
      <HamburgerButton id="hamburgerComponent" :style="{ backgroundColor: mainColor }" @click="toggleNavMenu"></HamburgerButton>

      <div id="menu" >
        <ul :style="{ backgroundColor: mainColor }">
          <router-link class="menu-item" to="/bot-console" :style="{ color: lightFontColor }"><li>Bot-Console</li></router-link>
          <router-link class="menu-item" to="/bot-order" :style="{ color: lightFontColor }"><li>Bot-주문제작</li></router-link>
          <router-link class="menu-item" to="/plan-purchase" :style="{ color: lightFontColor }"><li>Payment</li></router-link>

          <li class="menu-item" :style="{ color: lightFontColor }" @click="toggleUserMenu">
            User
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>

              <div v-if="showUserMenu" :style="{ backgroundColor: mainColor }" class="user-menu">
                <div v-if="!isLoggedIn">
                  <router-link to="/login"><li>로그인</li></router-link>
                  <router-link to="/signup"><li>회원가입</li></router-link>
                  <router-link to="/forgot-password"><li>비밀번호 찾기</li></router-link>
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
    
  </div>
</template>

<script>
import HamburgerButton from "../ui/HamburgerButton";

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
    }
  },
  data() {
    return {
      showUserMenu: false, // 초기에는 드롭다운 메뉴를 감춤
      showNavMenu: false
    };
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu; // 드롭다운 메뉴 토글
    },
    toggleNavMenu() {
      this.showNavMenu = !this.showNavMenu;

      // 모달이 열려있을 때 body 스크롤 방지
      if (this.showNavMenu || this.showUserMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
    // login() {
    //   const credentials = { username: "john_doe", password: "password123" };
    //   this.$store.dispatch("login", credentials); // 'auth/login' 액션을 호출하고 credentials를 전달
    // }
  },
  components: {
    HamburgerButton
  }
};
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
}
#menu a {
  text-decoration: none;
}
#menu li {
  margin-right: 20px;
  cursor: pointer;
  position: relative; /* 에니메이션을 위해 포지션을 설정합니다. */
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
  z-index: 9; /* 다른 요소보다 위로 올라오도록 설정 */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  
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
  color: #ffffff; /* 검은색에서 다른 색상으로 변경 */
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

/* .darkBackground{
  z-index: 100;
  margin-top: -70px;
  padding: 0;
  position: fixed;
  width: 110vw;
  height: 110vh;
  background-color: rgba(0, 0, 0, 0.2);
} */
#hamburgerComponent{
  display: none;
  margin-right: 10px;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
}
#hamburgerComponent:active{
  border-color: rgb(205, 255, 213);
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
    position:fixed
  
  }

  #menu ul {
    width:200px;
    display: block;
    position: fixed;
    right: 0;
    top:60px;
    padding: 10px;
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
  }
  #hamburgerComponent {
    display: block;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  }
    }
</style>
