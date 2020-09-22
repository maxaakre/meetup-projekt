<template>
  <div class="meets">
    <ul class="meet-list">
      <li v-for="item in listItems.meet" :key="item.id">
        <div class="meet-item">
          <img
            class="product-image"
            :src="require('../assets/' + item.img + '.png')"
            @click="
              $router.push({
                name: 'title',
                params: { id: item.id, item },
              })
            "
            alt="product image"
          />
          <h3 class="name">{{ item.title }}</h3>
          <h4 class="desc">{{ item.desc }}</h4>

          <p class="loc">{{ item.loc }}</p>
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
  margin: auto;

  ul {
    list-style: none;
    // padding: 0 1rem;
    margin: auto;
  }
  li {
    background: #5fb086;
    padding: 1rem;
    margin: 1rem 0;
    width: 350px;
    height: 200px;
    border-radius: 5px;
  }
  .product-image {
    display: block;

    width: 50px;
    height: 50px;
    // margin: 1rem 0;
  }
}
</style>
