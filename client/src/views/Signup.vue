<template>
  <div>
    <form class="form" @submit.prevent="register">
      <div class="message"></div>
      <h1>{{ message }}</h1>

      <label for="text">Usermname</label>
      <input type="text" v-model="user.name" />

      <label for="email">Email</label>
      <input type="email" v-model="user.email" />

      <label for="password">Password</label>
      <input type="password" v-model="user.password" />

      Repeat Password
      <input type="password" v-model="user.repeatPassword" />
      <button class="btn">Sign me up!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Register",
      user: {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
      },
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", this.user);
        await this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
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
