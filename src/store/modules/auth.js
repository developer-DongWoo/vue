const state = {
    isLoggedIn: false,
    user: null,
    ticket: "2023-12-25 23:20:19",
  };
  
  const mutations = {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  };
  

  
  const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    getUser: (state) => state.user,
    ticket: (state) => state.ticket
  };
  
  export default {
    state,
    mutations,
    getters,
  };
  