<template>
    <div class="navar_frame">
        <section>
            <!-- logo section -->
            <router-link to="/">
                <img src="../assets/logo.png" alt="logo image">
            </router-link>
        </section>
        <section>
            <ul class="navbarMenu">
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
            menu_list: ["Bot Console", "Board", "Plan Purchase", "About"],
            menu_link: ["bot-console", "board", "plan-purchase", "about"],
            userDropdownVisible: false
        }
    },
    methods : {
        toggleUserDropdown() {
        this.userDropdownVisible = !this.userDropdownVisible;
        },
    }
}
</script>

<style>
    @import url('../assets/css/style.css');
</style>