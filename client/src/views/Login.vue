<template>
  <div class="form">
    <div class="message">
      {{ message }}
    </div>

    <h3>Enter your username:</h3>
    <input v-model="username" />
    <div v-if="error1" class="error">
      At least 7 caracters
    </div>
    <h3>Enter your password</h3>
    <input type="password" v-model="password" />
    <div v-if="error2" class="error">
      At least 10 caracters
    </div>
    <button class="btn">Log in</button>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      message: "Welcome to join meetings and maybe create a event your own",
      username: "",
      password: "",
    };
  },

  computed: {
    error1() {
      return this.username.trim().length < 7;
    },
    error2() {
      return this.password.trim().length < 10;
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
  .message {
    font-size: 30px;
  }
  h3 {
    padding: 1rem 0;
  }
  input {
    width: 300px;
    padding: 1rem;
    margin: 1rem auto;
    border: 1px solid black;
    background: #f3e4e1;
  }
  button {
    width: 300px;
    padding: 1rem;
    margin: auto;
    font-size: 24px;
    border-radius: 5px;
    color: #fff;
    background: #000;
  }
}
</style>
