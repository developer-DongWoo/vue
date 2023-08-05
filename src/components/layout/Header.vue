<template>
  <!-- <button @click="login">Login</button> -->
  <div class="container-fluid" :style="{ backgroundColor: mainColor }" id="navBar-background">
    <div class="col-12" :style="{ color: lightFontColor }" id="logo-wrapper">
      <div id="logo">Sinamon</div>
      <div id="menu">
        <ul>
          <li>Bot-Console</li>
          <li>Bot-주문제작</li>
          <li>Payment</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueHeader",
  computed: {
    mainColor() {
      return this.$store.state.mainColor;
    },
    lightFontColor() {
      return this.$store.state.lightFontColor;
    },
  },
  methods: {
    // login() {
    //   const credentials = { username: "john_doe", password: "password123" };
    //   this.$store.dispatch("login", credentials); // 'auth/login' 액션을 호출하고 credentials를 전달
    // }
  },
};
</script>

<style>
#navBar-background {
  width: 100%;
  height: 70px;
}

#logo {
  font-size: 40px;
}

#logo-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

#menu li {
  margin-right: 20px;
  cursor: pointer;
}
</style>
