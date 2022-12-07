<template>
<div class="carrousel">
  <swiper
      :slidesPerView=this.booksPerView
      :spaceBetween="30"
      :navigation="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="card" style="width: 22rem;">
          <a @click="goToBook()" style="cursor:pointer" tabindex="22" @keypress="goToBook()">
            <img src="../assets/1.jpg" class="card-img-top" alt="Livro 1">
            <div class="card-body">
              <h5 class="card-title nome-livro">Eragon</h5>
              <p class="card-text autor-livro">Christopher Paolini</p>
              <p class="card-text preco-livro">R$ 36,97</p>
              
            </div>
          </a> 
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card" style="width: 22rem;">
          <a @click="goToBook()" style="cursor:pointer" tabindex="22" @keypress="goToBook()">
            <img src="../assets/2.jpg" class="card-img-top" alt="Livro 1">
            <div class="card-body">
              <h5 class="card-title nome-livro">Crepúsculo</h5>
              <p class="card-text autor-livro">Stephenie Meyer</p>
              <p class="card-text preco-livro">R$ 52,40</p>
            </div>
          </a>  
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card" style="width: 22rem;">
          <a @click="goToBook()" style="cursor:pointer" tabindex="22" @keypress="goToBook()">
            <img src="../assets/0.jpg" class="card-img-top" alt="Livro 1">
            <div class="card-body">
              <h5 class="card-title nome-livro">Harry Potter</h5>
              <p class="card-text autor-livro">J.K. ROWLING</p>
              <p class="card-text preco-livro">R$ 39,90</p>
              
            </div>
          </a>  
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card" style="width: 22rem;">
          <a @click="goToBook()" style="cursor:pointer" tabindex="22" @keypress="goToBook()"> 
            <img src="../assets/3.jpg" class="card-img-top" alt="Livro 1">
            <div class="card-body">
              <h5 class="card-title nome-livro">Frankenstein</h5>
              <p class="card-text autor-livro">Mary Shelley</p>
              <p class="card-text preco-livro">R$ 39,90</p>
            </div>
          </a> 
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data(){
    return {
      window: {
            width: 0,
            height: 0
        },
      booksPerView : 3
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods:{
    goToBook(){
      this.$router.push("/book");
    },
    handleResize() {
      this.window.width = window.innerWidth;
      if(this.window.width < 500){
        this.booksPerView = 1;
      }else{
        this.booksPerView = 3;
      }
      this.window.height = window.innerHeight;
    }

  }
};
</script>


<style>

.carrousel{
  background-color:rgba(10, 10, 10, 0);
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.nome-livro{
  font-size: 22px;

}

.autor-livro{
  font-size: 15px;

}

.preco-livro{
  font-size: 30px;

}
</style>