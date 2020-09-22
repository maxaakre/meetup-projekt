<template>
  <div class="Meetings">
    <img src="../assets/meet.png" alt="meet" />
    <h1>Meetups this month</h1>
    <Meet />
  </div>
</template>

<script>
// @ is an alias to /src
import Meet from "@/components/Meet.vue";

export default {
  name: "Home",
  components: {
    Meet,
  },
};
</script>

<style lang="scss" scoped>
.meeting {
  display: flex;
  height: 100vh;
  color: black;
  width: 100%;
}
span {
  width: 500px;
  height: 500px;
}
</style>
