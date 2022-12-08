<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import HighlightBanner from "@/components/HighlightBanner.vue";
import BuyByPrice from "@/components/BuyByPrice.vue";
import BookInfo from "@/components/BookInfo.vue";
</script>



<template>
  <Menu></Menu>

  <div class="page-title">
   <p> Seus Ebooks </p>
  </div>

  <div class="grid-conteiner">

  <div class="book-grid">

  <div v-for="book in book_details" >
    
    <BookInfo
        :name="book.name"  
        :author="book.author"
        :filename = "book.img"
        class = book
    />
  </div>
    </div>
     </div>
  <Footer></Footer>
  <!--
  TODO: Pagination
-->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      book_details:[
        {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                {
          name: "Harry Potter e a pedra filosofal",     
          img: "../assets/0.jpg",
          author: "JK Rowling"
                },
                
                
        
      ],
    };
  },
};
</script>

<style scoped>

.page-title{

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 82px;
  max-width: 80%;
  margin-left: 10%; 
  margin-right: 10%;
  margin-top: 187px;
}
.grid-container{
  display: flex;
  justify-content: center;
  align-self: center;
}

.book-grid{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  max-width: 80%;
  margin-top: 80px;
  margin-left: 10%; 
  margin-right: 10%;
  margin-bottom: 80px;
}

.book{
  color: black;
}

</style>