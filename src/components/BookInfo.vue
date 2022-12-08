<template>
    
    <div class="book-basics">
        <div class="image">
            <img class="img-livro" alt="capa do livro" v-bind:src="filename" />
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
    display: flex;
}
.book-basics{
    width: 100%;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
   
}

.book-basics:hover{
    background-color:  rgb(219, 219, 219);

}

.img-livro{
    width: 252px;
    float: left;
    height: 40vh;
    margin-bottom: 5px;
}

.title{
    font-size: 1.5em;
}

.book-specifics{
    font-size: 1.25em;
}


</style>