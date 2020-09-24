<template>
  <div class="wrappe">
    <nav class="nav-bar">
      <div class="nav-links">
        <router-link to="/">Meetup</router-link>|
        <router-link v-if="auth.loggedIn" to="/me">My Account</router-link>
        <router-link v-if="!auth.loggedIn" to="/signup">Register</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-link class="home-btn" to="/">
        <span class="m"><i class="fab fa-meetup"></i></span>
      </router-link>
      <div class="hamburger" @click="$store.commit('TOGGLE_SIDE_MENU')">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
    <login />
  </div>
</template>

<script>
import login from "./Login";
export default {
  components: {
    login,
  },
  methods: {
    toggleCartModal() {
      this.$store.commit("TOGGLE_CART");
    },
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 2rem;
  position: relative;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(107, 104, 104);

  .nav-links,
  span.cart-icon {
    display: none;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        color: #833c3c;
        opacity: 0.3;
        transition: 0.3s;
      }
    }
  }

  span {
    color: rgb(3, 3, 3);
    cursor: pointer;
    font-size: 2rem;
    position: relative;
  }
}

.home-btn {
  text-decoration: none;
}

@media screen and (min-width: 1024px) {
  .nav-bar {
    top: 0;
    padding: 0 2rem;
    background: #fff;

    span.home-icon,
    span.cart-icon,
    .hamburger {
      display: none;
    }
    .m {
      display: none;
    }

    .nav-links {
      display: block;

      .brand {
        margin-left: 0;
        font-size: 1.2rem;
        font-weight: bold;
        padding-right: 2rem;
      }

      a {
        color: #000;
        margin-left: 2rem;
      }
    }
  }
}
</style>
