<template>
  <div class="meet-list">
    <ul>
      <li
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
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
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
  img {
    width: 100px;
  }
}
</style>
