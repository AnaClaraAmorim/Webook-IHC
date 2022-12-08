<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import MenuMobile from "@/components/MenuMobile.vue"

</script>

<template>

  <div v-if="!isMobile()" class="marginMenu">
    <Menu
      :plotDropDown="true"
      :filter="filterDropdown"
      :actualCategory="$route.query.category"
    />
  </div>

  <div v-else>
    <MenuMobile
    :plotDropDown="true"></MenuMobile>
  </div>

    <div class="container">
       
    <center>
        <h1 style="color:black">Compra finalizada com sucesso!</h1>
        <p style="color:black"> Você pode começar a ler seu e-book agora mesmo na Biblioteca!</p>
        <button type="button" class="btn btn-warning sucess-btn"  data-bs-dismiss="modal"
              aria-label="Close" style="color:rgb(0,2,1)">
              Ir para a biblioteca
            </button>
    </center>
    </div>  
        <Footer />
   
</template>

<script>
export default{
  methods:{
    isMobile() {
      if(window.screen.availWidth < 700){
        return true
        } else {
        return false
        }
        }
  }
}

</script>

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