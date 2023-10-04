<template>
    <div class="navar_frame">
        <section class="full_width space_center flex_section">
            <!-- logo section -->
            <router-link to="/">
                <img src="../assets/logo.png" alt="logo image">
            </router-link>
            <button class="hamburger_button" @click="hamburger_button_clicked">
                <span class="hamburger_inner_line"></span>
                <span class="hamburger_inner_line"></span>
                <span class="hamburger_inner_line"></span>
            </button>


        </section>
        <section v-if="!isMobile" class="navbarMenuSection">
            <ul class="navbarMenu" :style="navbar_menu_display">
                <li v-for="(menu, index) in menu_list" :key="index">
                    <router-link class="navar_menu_button" :to="menu_link[index]">
                        {{ menu }}
                    </router-link>
                </li>
                <li @click="toggleUserDropdown">
                    <a class="navar_menu_button">User</a>
                    <ul v-if="userDropdownVisible" class="user-dropdown">
                        <li><router-link to="signup">회원가입</router-link></li>
                        <li><router-link to="login">로그인</router-link></li>
                    </ul>
                </li>
            </ul>

        </section>
        <section v-else class="navbarMenuSectionMobile">
            <ul class="navbarMenu" id="navbar_menu">
                <li v-for="(menu, index) in menu_list" :key="index">
                    <router-link class="navar_menu_button" :to="menu_link[index]">
                        {{ menu }}
                    </router-link>
                </li>
                <li @click="toggleUserDropdown">
                    <a class="navar_menu_button">User</a>
                    <ul v-if="userDropdownVisible" class="user-dropdown">
                        <li><router-link to="signup">회원가입</router-link></li>
                        <li><router-link to="login">로그인</router-link></li>
                    </ul>
                </li>
            </ul>

        </section>

    </div>
</template>

<script>
export default {
    name:"vueNavbar",
    data(){
        return{
            navbar_menu_display: {display:"flex"},
            menu_list: ["Bot Console", "Board", "Plan Purchase", "About"],
            menu_link: ["bot-console", "board", "plan-purchase", "about"],
            userDropdownVisible: false,
            windowWidth: window.innerWidth,
            isMobile:false
        }
    },
    mounted() {
        // 창 크기 변경 이벤트 핸들러 등록
        window.addEventListener('resize', this.handleResize);

        // 컴포넌트가 처음 마운트될 때 초기 가로 폭 설정
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 768){
            this.isMobile = true
            this.navbar_menu_display = {display:"flex"}
        }
        else{
            this.isMobile = false
        }
        
    },
    beforeDestroy() {
        // 컴포넌트가 제거되기 전에 이벤트 핸들러 제거
        window.removeEventListener('resize', this.handleResize);
    },
    methods : {
        handleResize() {
            // 창 크기가 변경될 때 호출되는 이벤트 핸들러
            this.windowWidth = window.innerWidth; // 현재 가로 폭 업데이트
            if (this.windowWidth > 768){
                this.isMobile = false  
            }
            else{
                this.isMobile = true
            }
            },

        toggleUserDropdown() {
        this.userDropdownVisible = !this.userDropdownVisible;
        },
        hamburger_button_clicked(){
            const nowDisplay = document.getElementById("navbar_menu").style.display;
            if (nowDisplay === "" || nowDisplay === "none"){
                document.getElementById("navbar_menu").style.display = "block";
            }
            else{
                document.getElementById("navbar_menu").style.display = "none";
            }
        }
    }

}
</script>

<style>
    @import url('../assets/css/style.css');
</style>