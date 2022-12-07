<template>
  <nav
    class="navbar"
    style="overflow: visible"
  >
    <div class="container-fluid" style="display: flex; justify-content: space-around;">
      <div class="FlexN1">
          <a class="" @click="goToHome()" style="cursor:pointer" tabindex="1" @keypress="goToHome()">
            <img
              alt="logo do site, mostrando um livro"
              class="img-navbar"
              src="@/components/icons/icon.png"  
            />
          </a>
      </div>

      <div class="FlexN2">
          <select
            v-if="plotDropDown"
            ref="drop"
            name="livros"
            id="book-select"
            style="width: 70%;"
            tabindex="2"

            @change="filter(this.$refs.drop.value)"
            v-model="this.dropdownCategory"
          >
            <option value="-1" disabled hidden selected>
              Selecione a categoria
            </option>
            <option value="-2">Todos os livros</option>
            <option value="-3">Ficção</option>
            <option
              v-for="categorie in getAllCategories()"
              v-bind:value="categorie.id"
            >
              {{ categorie.name }}
            </option>
      </select>
      
        <div class="BarraPesquisa">
          <div class="EntradaTexto">
              <input
                type="text"
                class="form-control"
                style="height: 50px;"
                placeholder="Busque um livro"
                v-model="textSearch"
                @focusout="active = false"
                tabindex="3"
              />
          </div>
          <div>
              <span
              class="input-group-text"
              style=" height: 50px; background-color:rgb(233, 237, 239) "
              ><a style="cursor:pointer; height:40px" tabindex="4" ><img alt="lupa" src="@/components/icons/research.png" style="width:30px; height:30px"/></a>
             
              </span>
            </div> 
        </div>
      </div>

      <div class="FlexN3">
          <div class="OptionsHead">
            <a
              v-if="!hadUser()"
              class=""
              @click="goToLogin()"
              style="height: 62px; width: 40%; cursor:pointer"
              tabindex="5"
              @keypress="goToLogin()"
              ><img
                alt="icone com uma pessoa"
                class="img-navbar"
                src="@/components/icons/Vector.png"
                style="height:45px"
            /><span class="txt-navbar">Entrar</span></a>
            
            <a v-else class="" @click="logout()" style="height: 120px !important"
              ><img
                alt="icone indicando saída"
                class="img-navbar"
                src="@/components/icons/logout.png"
                style="height: 50px; width: 40%; cursor: pointer;"
                tabindex="5"
                @keypress="logout()"
            /></a>  

            <a class="" @click="goToCarrinho()" style="cursor:pointer; margin:8px">
              <img
                alt="carrinho"
                class="img-navbar"
                src="@/components/icons/Carrinho.png"
                style="height: 50px; width: 50%; "
                tabindex="6"
                @keypress="goToCarrinho()"
              /><span class="txt-navbar">Carrinho</span></a>

            <a class="" @click="goToBiblioteca()" 
              style="height: 65px; width: 40%; cursor:pointer"
              >
              <img
                alt="icone com alguns livros"
                class="img-navbar"
                src="@/components/icons/Book_Shelf.png"
                style="height: 70px; width: 40%;"
              /><span class="txt-navbar">Biblioteca</span>
            </a>
          </div>
          <div>
            <img src="../components/icons/icons8-increase-font-32.png" @click="AumentaFonte()" style="cursor:pointer" tabindex="8" @keypress="AumentaFonte()">
          </div>
          <div>
            <img src="../components/icons/icons8-decrease-font-32.png" @click="DiminuiFonte()" style="cursor:pointer" tabindex="9" @keypress="DiminuiFonte()">
          </div>
          <div>
            <img src="../components/icons/icons8-contrast-32.png" @click="Contraste()" style="cursor:pointer" tabindex="10" @keypress="Contraste()">
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";
export default {
  name: "menu",
  props: ["plotDropDown", "filter", "actualCategory"],
  mounted() {
    if (this.actualCategory !== undefined)
      this.dropdownCategory = this.actualCategory;
  },
  watch: {
    textSearch(newText, oldText) {
      if (!this.active) {
        this.$refs.btnDrop.click();
        this.active = true;
      }
    },
  },
  data() {
    return {
      dropdownCategory: -1,
      textSearch: "",
      active: false,
    };
  },
  methods: {
    goToBook(idLivro) {
      this.$router.push({ path: "/livro", query: { id: idLivro } });
    },
    logout() {
      VueCookieNext.removeCookie("account");
      this.$router.go(0);
    },
    hadUser() {
      return VueCookieNext.getCookie("account") !== null;
    },
    getAllBooks() {
      return JSON.parse(localStorage.getItem("books"));
    },
    getMatchedBooks() {
      if (this.textSearch === "") return this.getAllBooks();
      let regex = new RegExp("(" + this.textSearch.toLowerCase() + ")");
      let matchedBooks = [];
      let books = this.getAllBooks();
      for (const book of books) {
        if (regex.exec(book.name.toLowerCase()) !== null) {
          matchedBooks.push(book);
        }
      }
      return matchedBooks;
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
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
}
.navbar {
  z-index: 500000;
  overflow: hidden;
  background-color: #ffd117 !important;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  height: 122px;
  left: 0px;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}
/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  height: 11vh;
  justify-content: center;
}
/* Change background on mouse-over */
.navbar a:hover {
  background: #c7a312;
  color: black;
}
.navbar-brand {
  height: 400px;
  width: 50%;
}
.EntradaTexto{
  padding-left: 20px;
  width: 70%;
}
.navbar-brand:hover {
  cursor: pointer;
}
#book-select {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 50px;
  border-radius: 8px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}
#input-container {
  position: relative;
  margin-left: 40px;
}
.research {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 30px;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 1.5vw;
}
#input-container > img {
  position: absolute;
  top: 10px;
  left: 30px;
  width: 30px;
}
.FlexN1{
  width: 5%;
}
.FlexN2{
  display:flex;
  width: 40%;
}
.FlexN3{
  display: flex;
  align-items: center;
}
#input-container > input {
  padding-left: 40px;
}
.txt-navbar {
  letter-spacing: 0;
  line-height: normal;
  min-height: 16px;
  text-align: center;
  width: 100%;
}
.BarraPesquisa{
  width: 240%;
  display: flex;
}
.OptionsHead{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: baseline;
}
.navigate a {
  margin: 0 1em;
  padding: 1em 0;
}
.navigate-button a {
  text-decoration: none;
  color: black;
}
.navigate-button-number a {
  text-decoration: none;
}
/* Media query para deixar o site minimamente responsivo */
@media screen and (max-width: 1200px) {
  .research {
    width: 200px;
  }
  .txt-navbar {
    font-size: large;
  }
}
</style>