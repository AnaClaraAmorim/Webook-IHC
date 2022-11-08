<template>
  <div class="home-book">
    <div class="home-book-info">
      <img class="img-livro" v-bind:src="'/src/assets/' + id + '.jpg'" />
      <p class="title">{{ name }}</p>
      <p class="author"> {{author}} </p>
      <div class="rating">
        <img class="img-rating" v-bind:src="'/src/assets/star.png'" />
        <img class="img-rating" v-bind:src="'/src/assets/star.png'" />
        <img class="img-rating" v-bind:src="'/src/assets/star.png'" />
        <img class="img-rating" v-bind:src="'/src/assets/star.png'" />
        <img class="img-rating" v-bind:src="'/src/assets/star.png'" />
      </div>
      <p class="price">R${{price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  props: ["name", "author", "rating", "price", "categories", "promotion", "id"],
  data() {
    return {};
  },
  methods: {
    promo() {
      return this.promotion.is;
    },
  },
};
</script>

<style scoped>
.img-livro {
  margin: 10px;
  padding-top: 20px;
  width: 152px;
}

.img-rating {
  width: 20px;
}

.rating {
  display: inline;
}

.home-book:hover {
  border-radius: 0.5em;
  box-shadow: 2px 2px 2px 2px lightgray;
  cursor: pointer;
}

.home-book {
  display: flex;
  width: 15vw;
  margin: 2vw 0;
  margin-right: 2vw;
  min-height: 250px;
}

.home-book-info {
  padding-left: 2em;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

.category {
  color: #0b859f;
}

.title {
  font-size: 1em;
  font-weight: bold;
}

.price {
  font-size: 2em;
}

.promo {
  background-color: #1b8c1f;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 2px 0;
}

.author {
  font-size: small;
}
</style>
