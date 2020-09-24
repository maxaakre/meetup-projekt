<template>
  <div>
    <form class="form">
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

      <a href="#" class="btn" @click="register">Sign me up!</a>
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
  padding: 3rem 0;
  background: #f3e4e1;
}
input {
  width: 300px;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid black;
  background: #f3e4e1;
}
.btn {
  width: 300px;
  padding: 1rem;
  margin: auto;
  font-size: 24px;
  border-radius: 5px;
  color: #fff;
  background: #000;
}
</style>
