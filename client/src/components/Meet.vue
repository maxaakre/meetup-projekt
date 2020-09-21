<template>
  <div class="meets">
    <ul class="meet-list">
      <li v-for="item in listItems.meet" :key="item.id">
        <div class="meet-item">
          <section>
            <span class="name">{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
          </section>
          <span class="loc">{{ item.loc }} </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Meet",

  data() {
    return {
      listItems: {},
    };
  },
  async created() {
    const RESPONSE = await axios.get("http://localhost:5000/api/meets");
    this.listItems = RESPONSE.data;
  },
  computed: {
    ...mapState(["items", "meetItems"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.meets {
  display: flex;
  color: #42b983;
  background: grey;
}
</style>
