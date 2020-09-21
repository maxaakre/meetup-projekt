<template>
  <div class="Meetings">
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
</style>
