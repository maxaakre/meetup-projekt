<template>
  <aside class="login form" v-click-outside="close">
    <div class="icon" @click="showModal = !showModal">
      <img src="@/assets/login.png" alt="login" />
    </div>
    <form
      v-if="showModal && !auth.loggedIn"
      class="login-modal"
      @submit.prevent="login"
    >
      <div class="message">
        <h3>{{ message }}</h3>
      </div>
      <p class="error-message">{{ error }}</p>
      <label for="email">
        Email
        <input
          type="email"
          id="email"
          v-model="credentials.email"
          autocomplete="off"
        />
      </label>
      <label for="password">
        Password
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          autocomplete="off"
        />
      </label>
      <button class="btn large" @click="login">Login</button>
      <router-link to="signup" @click="showModal = !showModal"
        >Signup</router-link
      >
    </form>
    <section v-if="showModal && auth.loggedIn" class="login-modal">
      <p>{{ auth.user.name }}</p>
      <a href="#" type="submit" class="btn large" @click="logout">Logout</a>
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
      message: "Login",
      showModal: false,
      credentials: {
        email: "",
        password: "",
      },
      error: "Fill in input fielde's",
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    toggleLogin() {
      this.showModal = false;
    },

    closeLogin() {
      this.showModal = false;
    },

    login() {
      this.error = "";
      if (this.credentials.email == "" || this.credentials.password == "") {
        this.error = "Fill in input fielde's";
        return;
      }
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
  width: 100px;
  height: 100px;
  background: none;
  // padding: 0.25rem;
  // margin-left: 1rem;
  top: 0.2rem;
  // bottom: 6rem;
  right: 8.5rem;
  // margin: auto;
  // display: flex;
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
    position: relative;
    top: 0.25rem;
    right: 6rem;
    z-index: 222;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
    display: block;
    a {
      padding: 1rem;
    }
    p {
      margin: auto;
    }
    p.error-message {
      color: red;
      margin: 1rem 0;
      font-size: 0.8rem;
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
      border: none;
      text-decoration: underline;
      background: none;
    }
  }
}
</style>
