<template>
    
    <div class="book-basics">
        <div class="image">
            <img class="img-livro" v-bind:src="'/src/assets/' + filename"/>
        </div>
        
        <div class="home-book-info">
            <p class="title">{{ name }} </p>
            <p class="author">{{ author }}</p>
    </div>
    </div> 
    
       
</template>

<script>
export default {
  name: "BookInfo",
  props: [ "filename", "name", "author"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.image{
    width: 100%;
}
.book-basics{
    width: 100%;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
}
.img-livro{
    width: 252px;
    float: left;
    padding: 10px;
}

.title{
    font-size: 1.5em;
}

.book-specifics{
    font-size: 1.25em;
}


</style>