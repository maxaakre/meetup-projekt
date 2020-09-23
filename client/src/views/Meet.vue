<template>
  <div class="container">
    <div class="meets">
      <ul class="meet-list">
        <li
          v-for="item in items.meet"
          :key="item.id"
          @click="
            $router.push({
              name: 'event',
              params: { id: item.id, item },
            })
          "
        >
          <div class="meet-item">
            <img
              class="product-image"
              :src="require('../assets/' + item.img + '.png')"
              alt="product image"
            />
            <h3 class="name">{{ item.title }}</h3>
            <h4 class="desc">{{ item.desc }}</h4>

            <p class="loc">{{ item.loc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Meet",
  async created() {
    const RESPONSE = await axios.get("/api/meets");
    this.items = RESPONSE.data;
  },
  data() {
    return {
      items: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  color: #999;
  font-size: 0.8rem;
  font-weight: lighter;
}
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
