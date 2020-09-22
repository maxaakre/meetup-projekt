<template>
  <ul class="side-menu" :class="{ toggle: isOpen }">
    <li>
      <router-link to="/" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Events</router-link
      >
    </li>
    <li>
      <router-link to="about" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Log in</router-link
      >
    </li>
    <li>
      <router-link to="Signup" @click.native="$store.commit('TOGGLE_SIDE_MENU')"
        >Signup</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["isOpen"]) },
};
</script>

<style lang="scss" scoped>
.side-menu {
  display: none;
  text-align: right;
  background: grey;
  width: 100%;

  a {
    display: block;
    padding: 1rem 2rem;
    width: 100%;
  }
  li {
    list-style: none;
    width: 100%;
  }

  &.toggle {
    display: block;
  }
}

@media screen and (min-width: 1024px) {
  .side-menu {
    display: none;
  }
}
</style>
