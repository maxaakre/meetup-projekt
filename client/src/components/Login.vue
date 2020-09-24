<template>
  <aside class="login form" v-click-outside="close">
    <div class="icon" @click="showModal = !showModal">
      <img src="@/assets/login.png" alt="login" />
    </div>
    <form v-if="showModal && !auth.loggedIn" class="login-modal">
      <label for="">
        Email
        <input
          type="email"
          v-model="credentials.email"
          @keyup.enter="login"
          autocomplete="off"
        />
      </label>
      <label for="">
        Password
        <input
          type="password"
          v-model="credentials.password"
          autocomplete="off"
        />
      </label>
      <a href="#" class="btn large" @click="login">Login</a>
    </form>
    <section v-if="showModal && auth.loggedIn" class="login-modal">
      <p>{{ auth.user.name }}</p>
      <a href="#" class="btn large" @click="logout">Logout</a>
      <router-link class="event" v-if="auth.loggedIn" to="/newevent"
        >New event</router-link
      >
    </section>
  </aside>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "Login",
  data() {
    return {
      showModal: false,
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    // closeLogin() {
    //   this.showModal = false;
    // },
    login() {
      this.$store.dispatch("login", this.credentials);
      this.showModal = false;
    },
    logout() {
      this.$store.dispatch("logout");
    },
    close() {
      this.showModal = false;
    },
  },
  directives: { ClickOutside },
};
</script>
<style lang="scss" scoped>
.login {
  background: #fff;
  z-index: +3;
  width: 4rem;
  height: 4rem;
  padding: 0.25rem;
  margin-left: 1rem;
  top: 0.3rem;
  bottom: 6rem;
  right: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999rem;
  position: absolute;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
    img {
      width: 70%;
      opacity: 0.6;
      transform: translateY(-1px);
    }
  }

  .login-modal {
    width: 18rem;
    padding: 1rem;
    background: white;
    position: absolute;
    top: 3.25rem;
    z-index: 222;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
    display: block;
    a {
      padding: 1rem;
    }
    p {
      margin: auto;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 0.625em solid transparent;
      border-bottom-color: white;
      border-top: 0;
      margin-left: -0.625em;
      margin-top: -0.625em;
    }
    label {
      font-size: 0.8rem;

      input {
        width: 100%;
        padding: 0.75rem;
        margin: 0.25rem 0 0.25rem 0;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid grey;
        font-size: 1rem;
        transition: all 0.2s ease;

        &:focus {
          border: 1px solid black;
          outline: none;
        }
      }
    }

    .btn {
      margin-top: 1rem;
    }
  }
}
</style>
