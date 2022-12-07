<template>
    <div class="barra">
      
      <div class="FlexN1">
          <a class="" @click="goToHome()" style="cursor:pointer">
            <img
              alt="logo do site, mostrando um livro"
              class="img-navbar"
              src="@/components/icons/icon.png"  
            />
          </a>
      </div>
      
      <div class="sanduiche">
          <MDBNavbar container>
            <img src="../components/icons/icons8-menu-arredondado-30.png" class="toggler" @click="collapse1 = !collapse1" target="#navbarToggleExternalContent"/>
          </MDBNavbar>
        <div class="recheio shadow-3 p-4">
          <MDBCollapse v-model="collapse1" id="navbarToggleExternalContent">
            
            <div>
              <MDBBtn color="link" @click="goToLogin()" block class="border-bottom m-0">
                Entrar
              </MDBBtn>
            </div>
            
            <div>
              <MDBBtn color="link" @click="goToCarrinho()" block class="border-bottom m-0">
                Carrinho
              </MDBBtn>
            </div>

            <div>
              <MDBBtn color="link" @click="goToBiblioteca()" block class="border-bottom m-0">
                Biblioteca
              </MDBBtn>
            </div>
          
          </MDBCollapse>
        </div>
      </div>

      <div v-if="!collapse1" class="FlexN3" style="margin-right:40px; margin-left: 30px;">
        <div>
            <img src="../components/icons/icons8-increase-font-32.png" @click="AumentaFonte()" style="cursor:pointer">
          </div>
          <div>
            <img src="../components/icons/icons8-decrease-font-32.png" @click="DiminuiFonte()" style="cursor:pointer">
          </div>
          <div>
            <img src="../components/icons/icons8-contrast-32.png" @click="Contraste()" style="cursor:pointer">
          </div>
      </div>
    </div>

    <div class="FlexN2" style="display:flex; padding-top: 20px; padding-bottom:20px; background-color:rgb(195, 191, 191); color:rgb(0,2,1)">
          <select
            v-if="plotDropDown"
            ref="drop"
            name="livros"
            id="book-select"
            style="width: 30%; height: 50px;"

            @change="filter(this.$refs.drop.value)"
            
          >
            <option value="-1" disabled hidden selected>
              Selecione a categoria
            </option>
            <option value="-2"><span>Todos os livros</span></option>
            <option value="-3"><span>Ficção</span></option>
      </select>
      
        <div class="BarraPesquisa" style="display: flex; margin-left: 10px;">
          <div class="EntradaTexto">
              <input
                type="text"
                class="form-control"
                style="height: 50px;"
                placeholder="Busque um livro"
                v-model="textSearch"
                @focusout="active = false"
              />
          </div>
          <div>
              <span
              class="input-group-text"
              style=" height: 50px; background-color:rgb(233, 237, 239) "
              ><a style="cursor:pointer; height:40px; width: 10%;" ><img alt="lupa" src="@/components/icons/research.png" style="width:30px; height:30px"/></a>
             
              </span>
            </div> 
        </div>
    </div>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn
  } from "mdb-vue-ui-kit";
  import {
    ref
  } from "vue";
  export default {
    props: ["plotDropDown"],
    mounted() {
    if (this.actualCategory !== undefined)
      this.dropdownCategory = this.actualCategory;
    },
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBCollapse,
      MDBBtn
    },
    setup() {
      const collapse1 = ref(false);
      return {
        collapse1
      }
    },
    methods:{
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
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"));
    },
    PercorreDOMup(element){
            var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
            if (currentSize) {    
                currentSize = parseFloat(currentSize.replace("px",""));
                element.style.fontSize = (currentSize * 1.05) + "px";
                for(var i=0; i < element.children.length; i++){
                    this.PercorreDOMup(element.children[i]);
                }
            }
    },
    AumentaFonte()  {
          this.PercorreDOMup(document.body)
    },
    PercorreDOMdown(element){
            var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
            if (currentSize) {    
                currentSize = parseFloat(currentSize.replace("px",""));
                element.style.fontSize = (currentSize * 0.95) + "px";
                for(var i=0; i < element.children.length; i++){
                    this.PercorreDOMdown(element.children[i]);
                }
            }
    },
    DiminuiFonte()  {
          this.PercorreDOMdown(document.body)
    },
    PercorreDOMcont(element){
            var currentBackColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
            
            var currentFontColor = window.getComputedStyle(element, null).getPropertyValue('color');
            if (currentBackColor == "rgb(255, 255, 255)") {    
                element.style.background = "rgb(0, 0, 1)";  
            }
            if(currentBackColor == "rgb(0, 0, 1)")
            {
              element.style.background = "rgb(255, 255, 255)"
            }


            if (currentBackColor=="rgb(233, 236, 239)") {    
                element.style.background = "rgb(0,0,2)";  
            }
            if(currentBackColor == "rgb(0, 0, 2)")
            {
              element.style.background = "rgb(233, 236, 239)"
            }


            if(currentBackColor == "rgb(232, 232, 232)")
            {
              element.style.backgroundColor = "rgb(70, 82, 73)"
            }

            if(currentBackColor == "rgb(70, 82, 73)")
            {
              element.style.backgroundColor = "rgb(232, 232, 232)"
            }

            if(currentBackColor == "rgb(195, 191, 191)")
            {
              element.style.backgroundColor = "rgb(28, 33, 29)"
            }

            if(currentBackColor == "rgb(28, 33, 29)")
            {
              element.style.backgroundColor = "rgb(195, 191, 191)"
            }
            //FONTES
            if(currentFontColor == "rgb(0, 0, 0)"){
              element.style.color = "rgb(256, 256, 255)";
            }
            if(currentFontColor == "rgb(256, 256, 255)" || currentFontColor == "rgb(255, 255, 255)"){
              element.style.color = "rgb(0, 0, 0)";
            }

            if(currentFontColor=="rgb(33, 37, 41)"){
              element.style.color = "rgb(0, 0, 0)";
            }
            if(currentFontColor=="rgb(255, 255, 254)"){
              element.style.color = "rgb(33, 37, 41)";
            }

            if(currentBackColor != "rgb(255, 209, 23)")
            {
              for(var i=0; i < element.children.length; i++){
                    this.PercorreDOMcont(element.children[i]);
                }
            }
    },
    Contraste()  {
          this.PercorreDOMcont(document.body)
    }
    }
  };
</script>


<style scoped>
.barra{
  display: flex;
  background-color: #ffd117;
  align-items: center;
  justify-content: space-between;
}

.sanduiche{
  display: flex;
  background-color: #ffd117;
}

.toggler{
  height: 50px;
}

.recheio{
  width: 150%;
  display: flex;
  background-color: transparent;
  color:black;
}

</style>


