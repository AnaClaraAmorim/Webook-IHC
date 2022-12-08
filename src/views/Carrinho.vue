<script setup>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import MenuMobile from "@/components/MenuMobile.vue";

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

    
    <div class="body-container">
        <h1> Meus itens </h1>
        <div style="display: flex; justify-content: start; flex-direction:row">
            <div class="Cart-Container">
                <div class="Cart-Items">
                    <div class="image-box">
                        <img src="../assets/0.jpg" class="ImagemLivro"/>
                    </div>
                    <div>
                        <h1 class="title" style="color:black">Harry Potter e a Pedra Filosofal</h1>
                    </div>
                    <div class="counter"></div>
                    <div class="prices"></div>
                    <div class="counter">
                        <div class="btn-counter" tabindex="18">+</div>
                        <div class="count">2</div>
                        <div class="btn-counter" tabindex="19">-</div>
                    </div>
                    <div class="prices">
                        <h3 style="color:black">R$39,99</h3>
                        <div class="remove" tabindex="20"><u>Remover</u></div>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction:column; margin-left: 50px;">
                <div class="Preco-Container">
                    <h1 style="color:black"> Total</h1>
                    <h1 style="color:black"> R$79,98</h1>
                </div>
                <button type="submit" @click="goToFinalizar()" class="btn btn-finalizar-pedido" style="width:100%; margin-top:10px; color:rgb(0,2,2)" tabindex="20" @keypress="goToFinalizar()">Finalizar pedido</button>
            </div>
        </div>
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
        },
        goToFinalizar(){
            this.$router.push("/finalizar")
        }
    }
}

</script>

<style scoped>


.body-container{
 margin-top: 150px;
 margin-left: 50px;
 padding: 0;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: start;
 
}
.Cart-Container{
    width: 60%;
    min-height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color:#e3dfd5;
    border-radius: 10px;
}
.Cart-Items{
 margin: auto;
 width: 90%;
 height: 30%;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.image-box{
 text-align: center;
}
.title{
 font-size: 24px;
 font-weight: 500;
 color: #202020;
}
.counter{
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.btn-counter{
    margin: 10px;
 width: 30px;
 height: 30px;
 border-radius: 50%;
 background-color: #d9d9d9;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 20px;
 font-family: 'Open Sans';
 font-weight: 900;
 color: #202020;
 cursor: pointer;
}
.count{
 font-size: 20px;
 font-family: 'Open Sans';
 font-weight: 900;
 color: black;
}

.prices{
 text-align: right;
}

.remove{
 padding-top: 5px;
 font-size: 14px;
 font-weight: 600;
 color: #E44C4C;
 cursor: pointer;
}

.Preco-Container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color:#e3dfd5;
    padding: 30px;
}
.ImagemLivro{
    height: 120px;
}
.btn-finalizar-pedido{
    padding: 10px 50px 10px 50px;
    font-size: 30px;
    font-weight: bold;
    border-radius:20px;
    background-color: #FFD117;
}
.btn-finalizar-pedido:hover{
    background-color: #dfba27;
}

</style>