<template>
  <div>
    <form class="form">
      <div class="message"></div>
      <h1>{{ message }}</h1>
      <p class="error-message">{{ error }}</p>
      <label for="text">Usermname</label>
      <input type="text" v-model="credentials.name" />

      <label for="email">Email</label>
      <input type="email" v-model="credentials.email" />

      <label for="password">Password</label>
      <input type="password" v-model="credentials.password" />

      Repeat Password
      <input type="password" v-model="credentials.repeatPassword" />

      <a href="#" @click="register" class="btn"> Sign me up! </a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Register",
      logedIn: "You are registerd go to login",
      credentials: {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
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
    async register() {
      this.error = "";
      if (this.credentials.email == "" || this.credentials.password == "") {
        this.error = "Fill in input fielde's";
        return;
      } else if (!this.validEmail(this.credentials.email)) {
        this.error = "invalid mail";
        return;
      }
      await this.$store.dispatch("register", this.credentials);
      await sessionStorage.setItem("meetup", JSON.stringify(this.credentials));
    },
    validEmail: function (email) {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 370px;
  height: 100vh;
  // padding: 1rem 0;
}
input {
  width: 300px;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid black;
}
.btn {
  width: 50%;
  height: 50px;
  margin: 1rem auto;
  font-size: 24px;
  border-radius: 5px;
  color: #fff;
  background: #000;
}
</style>
