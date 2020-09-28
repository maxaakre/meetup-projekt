<template>
  <div class="wrapper">
    <form>
      <label for="title">Fill title for Event</label>
      <input
        type="text"
        class="title"
        placeholder="Ex,coding,amimals,paint?"
        name="title"
        v-model="meeting.title"
      />
      <label for="desc">Event decription</label>
      <input
        type="text"
        class="desc"
        placeholder="Talking about?"
        name="desc"
        v-model="meeting.desc"
      />
      <label for="contnet">Fill information</label>
      <textarea
        class="content"
        placeholder="Write your info here..."
        name="content"
        v-model="meeting.content"
      ></textarea>
      <label for="loc"> Fill location</label>
      <input
        type="text"
        class="loc"
        name="loc"
        placeholder="Scandic Malmen, Stockholm"
        v-model="meeting.loc"
      />
      <label for="date">Date for Event</label>
      <input
        type="text"
        class="date"
        name="date"
        placeholder="2020-12-24"
        v-model="meeting.date"
      />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meeting: {
        id: Date.now(),
        img: "groupmeet",
        title: "",
        desc: "",
        textarea: "",
        loc: "",
        date: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
  }
  label {
    padding: 0.3rem;
  }
  input {
    width: 300px;
    height: 40px;
    font-size: 20px;
    display: flex;
    &::placeholder {
      color: #000;
    }
  }
  .content {
    width: 300px;
    height: 300px;
    font-size: 18px;
    padding: 5px;
    &::placeholder {
      color: #000;
    }
  }
  button {
    padding: 1rem;
    margin: 1rem;
    background: none;
  }
}
@media screen and (min-width: 768px) {
}
</style>
