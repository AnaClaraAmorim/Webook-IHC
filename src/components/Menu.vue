<template>
  <nav
    class="navbar"
    style="overflow: visible"
  >
    <div class="container-fluid" style="display: flex; justify-content: space-around;">
      <div class="FlexN1">
          <a class="" @click="goToHome()">
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

            @change="filter(this.$refs.drop.value)"
            v-model="this.dropdownCategory"
          >
            <option value="-1" disabled hidden selected>
              Selecione a categoria
            </option>
            <option value="-2">Todos os livros</option>
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
              />
          </div>
              <span
              class="input-group-text"
              style="    width: 8%;height: 50px;"
              ><img alt="lupa" src="@/components/icons/research.png"/> 
             
              </span>
        </div>
      </div>

      <div class="FlexN3">
          <div class="OptionsHead">
            <a
              v-if="!hadUser()"
              class=""
              @click="goToLogin()"
              style="height: 50px; width: 50px;"
              ><img
                alt="icone com uma pessoa"
                class="img-navbar"
                src="@/components/icons/Vector.png"
            /><span class="txt-navbar">Entrar</span></a>
            
            <a v-else class="" @click="logout()" style="height: 120px !important"
              ><img
                alt="icone indicando saída"
                class="img-navbar"
                src="@/components/icons/logout.png"
                style="height: 50px; width: 50px;"
            /></a>  

            <a class="" @click="goToBiblioteca()">
              <img
                alt="carrinho"
                class="img-navbar"
                src="@/components/icons/Carrinho.png"
                style="height: 50px; width: 50px;"
              /><span class="txt-navbar">Carrinho</span></a>

            <a class="" @click="goToCarrinho()" 
              style="height: 50px; width: 50px;"
              >
              <img
                alt="icone com alguns livros"
                class="img-navbar"
                src="@/components/icons/Book Shelf.png"
                style="height: 50px; width: 50px;"
              /><span class="txt-navbar">Biblioteca</span>
            </a>
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
  width: 20%;
}

.FlexN2{
  display:flex;
  width: 50%;
}

.FlexN3{
  width: 13%;
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
