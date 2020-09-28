<template>
  <div class="wrapper">
    <form>
      <label for="title">Fill title for Event</label>
      <input
        type="text"
        class="title"
        placeholder="ex,coding,amimals,paint?"
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
      <input
        type="text"
        class="content"
        placeholder="Write your info here..."
        name="content"
        v-model="meeting.content"
      />
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
        content: "",
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
    background: #c2bcbc;
  }
  label {
    padding: 1rem;
  }
  input {
    width: 300px;
    height: 40px;
    font-size: 20px;
    display: flex;
  }
  .content {
    width: 300px;
    height: 300px;
    text-align: start;
    .textarea {
      justify-self: start;
    }
  }
  button {
    padding: 1rem;
    margin: 1rem;
    background: none;
  }
}
</style>
