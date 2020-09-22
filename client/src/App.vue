<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <AppSideMenu />
    </div>

    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
export default {
  components: {
    Navbar,
    AppSideMenu,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
