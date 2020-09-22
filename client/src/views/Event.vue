<template>
  <div class="card" v-if="item">
    <ul class="product-list">
      <li class="list-item">
        <img
          class="product-image"
          :src="require('../assets/' + item.img + '.png')"
          @click="
            $router.push({
              title: 'event',
              params: { id: item.id, item },
            })
          "
          alt="product image"
        />
        <p class="product-detail">
          <span>{{ item.title }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 1rem 2rem;
  margin: 0 auto 100px auto;

  a {
    color: #000;
    font-size: 3rem;
    margin-bottom: 1rem;
    display: inline-block;
    text-decoration: none;

    span {
      display: none;
    }
  }

  h1 {
    color: #ae635d;
    margin-bottom: 2rem;
    font-weight: bolder;

    span {
      color: #999;
      font-size: 0.8rem;
      font-weight: lighter;
    }
  }

  .product-list {
    display: grid;
    gap: 6rem 1rem;
    list-style: none;
    grid-template-columns: repeat(2, 1fr);

    .list-item {
      cursor: pointer;
      border-radius: 3px;

      .product-image {
        width: 100%;
        height: 100px;
      }

      .product-detail {
        display: flex;
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: bold;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .container {
    margin-top: 50px;

    .product-list {
      gap: 8rem 4rem;
      grid-template-columns: repeat(3, 1fr);

      .list-item {
        .product-image {
          width: 100%;
          height: 300px;
        }

        .product-detail {
          text-align: center;
        }
      }
    }
  }
}
</style>
