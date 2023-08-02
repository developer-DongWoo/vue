<template>
  <div id="app">
    <Header></Header>
    <div id="component" class="component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
}
</script>
