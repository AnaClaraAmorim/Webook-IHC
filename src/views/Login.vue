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
        :actualCategory="this.$route.query.category"
        />
    </div>

    <div v-else>
        <MenuMobile
        :plotDropDown="true"></MenuMobile>
    </div>

    <div class="container">
        <div>
            <img src="../components/icons/LivrosLogin.jpeg" alt="Imagem com a capa de diversos livros" class="BigImageLeft">
        </div>

        <div class="CardLogin">
            
            <span style="font-size:50px; font-weight: bold; display: flex; justify-content: center; width: 150%;">  Login</span>

            <span style="display:flex ; align-items:left">Email</span>

            <input type="email" class="form-control InputLogin" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@email.com" tabindex="13">
            Senha
            <input type="password" class="form-control InputLogin" id="exampleInputPassword1" placeholder="Password" tabindex="14">
            <a class="txt-link" style=" cursor: pointer" tabindex="15">Esqueceu sua senha?</a>

            
            <!-- COMEÇO DO BOOTSTRAP-->
            <div style="display:flex; width:150%">
                <button type="submit" class="btn btn-primary btn-lg btn-block" style="width:450%; margin-bottom:40px; margin-top:10px" tabindex="16" @click="Login()">Login</button>
                 <span style="margin-left:15px">ou</span> <a class="txt-link" style="width:400%; margin-left: 15px; cursor:pointer" tabindex="17"> Criar conta</a>
            </div>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998; width: 150%; margin-bottom: 10px;" href="#!"
            role="button" tabindex="18">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee; width:150%" href="#!"
            role="button" tabindex="19">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
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
    Login(){
        localStorage.setItem("logado","true");
        this.$router.push("/");

    }
}
}

</script>

<style scoped>
.txt-link{
    color: black;
}
.BigImageLeft{
    height: 634px;
    width: 100%;
}

.container{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
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
    padding-right: 140px;
}

.InputLogin{
    width: 150%;
    height: 38px;
    border-radius: 8px;
    margin: 10px 0;    
}

::placeholder{
    font-weight: bold;
    color: black;
}

.marginMenu{
    margin-bottom: 150px;
  }

@media (max-width: 768px) {
.CardLogin {
   
    padding-left: 10px;
}
}
</style>