<template>
  <div class="meets">
    <h3>{{item.title}}</h3>
    <p>{{item.desc}}</p>
    <span>{{item.img}}</span>
  </div>
</template>

<script>
export default {
  name: "Meet",
  props: {
    item: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.meets {
  display: flex;
  color: #42b983;
}
</style>
