<template>
  <div class="footer" style="position: relative;bottom: 0;left: 0; width: 100%; ">
    <div class ="div-img" >
      <img alt="logo do site, mostrando um livro" src="@/components/icons/icon.png" class="img-footer" >
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" tabindex="31">Sobre nós</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" tabindex="32" @keypress="goToHome()">Home</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" tabindex="33" @keypress="goToCarrinho()">Carrinho</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link " tabindex="34">Perfil do cliente</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" tabindex="35" @keypress="goToBiblioteca()">Biblioteca</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" tabindex="36">Atendimento</h2>
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods:{
    goToBook(idLivro) {
      this.$router.push({ path: "/livro", query: { id: idLivro } });
    },
    goToHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToCarrinho() {
      this.$router.push("/carrinho");
    },
    goToBiblioteca() {
      this.$router.push("/biblioteca");
    },
  }
}
</script>

<style scoped>
@import '../assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Open+Sans&display=swap');

.footer {
  display: flex;
  justify-content: space-evenly;
  background-color: #FFD117;
  padding: 2em 0;
}

.txt-footer {
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: center;
  text-align: center;
  color:black;
}

.txt-link{
  font-family: 'Grape Nuts', cursive;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 1.5em;
}

.txt-link:hover {
  color: rgb(107, 107, 107);
  cursor: pointer;
}

.img-footer{
    width: 90px;
}

.div-img{
 margin-top: auto;
 margin-bottom: auto; 
 padding-left:10px ;
}

 @media (max-width: 1000px){
.txt-link{
        font-size: 1em;
      }
 }

 @media (max-width: 768px)
    {
      .txt-link{
        font-size: 0.8em;
      }

      .img-footer{
          width: 0px;
      }

      .footer {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap ;
      }

      .txt-footer {
        justify-content: start;
        text-align: start;
        width: 30vw;

      }

      .div-img{
        padding-left:0px ;
       }
      
    }
</style>