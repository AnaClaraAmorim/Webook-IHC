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
        <div>
            <img src="../components/icons/LivrosLogin.jpeg" alt="Imagem com a capa de diversos livros" class="BigImageLeft">
        </div>

        <div class="CardLogin">
            
            <span style="font-size:50px; font-weight: bold; display: flex; justify-content: center; width: 150%;">  Login</span>

            <span style="display:flex ; align-items:left">Email</span>
            <input type="email" placeholder="exemplo@email.com" class="InputLogin"/>
            Senha
            <input type="text" placeholder="Senha" class="InputLogin"/>
            <a class="txt-link" style=" cursor: pointer">Esqueceu sua senha?</a>

            
            <!-- COMEÇO DO BOOTSTRAP-->
            <div style="display:flex; width:150%">
                <button type="submit" class="btn btn-primary btn-lg btn-block" style="width:450%; margin-bottom:40px; margin-top:10px">Login</button>
                 <span style="margin-left:15px">ou</span> <a class="txt-link" style="width:400%; margin-left: 15px; cursor:pointer"> Criar conta</a>
            </div>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998; width: 150%; margin-bottom: 10px;" href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee; width:150%" href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
        </div>
    
    </div>  
        <Footer />
   
</template>

<style scoped>

.BigImageLeft{
    height: 680px;
    width: 100%;
}

.container{
    display: flex;
    justify-content: space-around;
    margin-top: 150px;
    margin-bottom: 30px;
}

.CardLogin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    border-style: solid;
    border-color:#e3dfd5;
    border-radius: 10px;
    padding-left: 40px;
    padding-right: 180px;
}

.InputLogin{
    width: 150%;
    height: 38px;
    border-radius: 8px;
    background-color: #dbd3d3;
    border-color: white;
    
}

::placeholder{
    font-weight: bold;
    color: black;
}

.NoPai{
    font-size: larger;
}
</style>