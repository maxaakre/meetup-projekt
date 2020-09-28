<template>
  <div class="wrapper">
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
.wrapper {
  span {
    color: #999;
    font-size: 0.8rem;
    font-weight: lighter;
  }
  .meets {
    margin: auto;
    height: 100vh;

    ul {
      list-style: none;
      padding: 0 1rem;
      margin: auto;
    }
    li {
      background: #d8dfdb;
      padding: 1rem;
      margin: 1rem;
      width: 300px;
      height: 200px;
      border-radius: 5px;
    }
    .product-image {
      display: block;
      width: 50px;
      height: 50px;
    }
  }
}
@media screen and (min-width: 768px) {
  .wrapper {
    width: 100%;
  }
  .meet {
    padding: 1rem;
  }
  .meet-list {
    display: grid;
    width: 100%;
    max-width: 1024px;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    width: 200px;
    display: inline-block;
  }
}
</style>
