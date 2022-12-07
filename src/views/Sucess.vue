<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

</script>

<template>

    <Menu
      :plotDropDown="true"
      :filter="filterDropdown"
      :actualCategory="this.$route.query.category"
    />

    <div class="container">
       
    <center>
        <h1>Compra finalizada com sucesso!</h1>
        <p> Você pode começar a ler seu e-book agora mesmo na Biblioteca!</p>
        <button type="button" class="btn btn-warning sucess-btn"  data-bs-dismiss="modal"
              aria-label="Close">
              Ir para a biblioteca
            </button>
    </center>
    </div>  
        <Footer />
   
</template>

<style scoped>


.container{
    
    height: 86.9vh;
    display: flex;
    align-items: center; 
    justify-content: center;
}

.sucess-btn{
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  width: 24vw;
  margin: 50px 0;
}

@media (max-width: 768px) {
  

  .sucess-btn {
    font-size: 1em;
    width: 24vw;
    width: 60vw;
    margin: 20px 0;
  }

  .container{
    
    height: 85.9vh;
    display: flex;
    align-items: center; 
    justify-content: center;
    }

}
</style>