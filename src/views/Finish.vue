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
  <div class="finish">
    <div class="dados">
      <h1 style="text-align: center; padding-top: 10px; color: black;">
        Finalizar sua compra
      </h1>
      <h3 class="txt-pagamento" style="color:black">Selecione um método de pagamento:</h3>
      <p style="color:black">Seus cartões de crédito:</p>
      <fieldset>
        <div class="card-div">
          <input type="radio" name="payment_name" tabindex="11" value="0"/>
          <span style="color:black"> Cartão do Harry Potter terminado em 1010 - Nubank </span>
        </div>
        <div class="card-div">
          <input type="radio" name="payment_name" tabindex="12" value="1"/>
          <span style="color: black;">
            Cartão do Harry Potter terminado em 2020 - Banco do brasil
          </span>
        </div>
        <p>Boleto:</p>
        <div class="card-div">
          <input type="radio" name="payment_name" tabindex="13" value="2"/>
          <span style="color:black"> Vencimento em 1 dia útil </span>
        </div>
        <p>Pix:</p>
        <div class="card-div">
          <input type="radio" name="payment_name" tabindex="14" value="33"/>
          <span style="color:black"> Vencimento em 30 minutos </span>
        </div>
      </fieldset>
      <center>
        <button type="button" class="btn btn-warning finalizar-btn" @click="goToSucess()" tabindex="17"> 
          Finalizar Pedido
        </button>
      </center>
    </div>
    <div class="livros">
      <center>
        <h1>Escolha seus produtos:</h1>
      </center>
      <center>
        <div class="card-shadow">
          <div class="book-finish">
            <input type="checkbox" tabindex="15" />
            <img
              src="../assets/0.jpg"
              class="card-img"
              alt="Livro Harry Potter e a pedra filosofal"
            />
            <div class="info-finish">
              <center>
                <p>Harry Potter e a Pedra Filosofal J.K. Rowling</p>
                <p>R$39,90</p>
              </center>
            </div>
          </div>

          <p style="color:black">Total: R$39,90</p>
        </div>
      </center>
      <center>
        <button
          type="button"
          class="btn btn-warning finalizar-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          tabindex="16"
        >
          Comprar de presente
        </button>
      </center>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Comprar de presente
            </h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Digite o e-mail de quem deseja presentear:</p>
          </div>
          <center>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">E-mail</span>
                </div>
                <input
                  type="text"
                  class="form-control icon"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon1"
                />
              </div>
          </center>
          <center>
            <button type="button" class="btn btn-warning present-btn"  data-bs-dismiss="modal"
              aria-label="Close">
              Comprar de presente
            </button>
          </center>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
export default {
  name: "Finish",

  methods: {
    goToSucess() {
      this.$router.push("/sucess");
    },
    isMobile() {
      if(window.screen.availWidth < 700){
        return true
        } else {
        return false
        }
        }
  }
};
</script>

<style scoped>
.dados {
  width: 50vw;
  padding-left: 50px;
}

.livros {
  width: 50vw;
  padding-top: 60px;
}

.finish {
  display: flex;
  margin-top: 122px;
  margin-bottom: 110px;
  padding-top: 60px;
}

.buttonFinalizar {
  display: flex;
  justify-content: center;
  align-content: center;
}

.finalizar-btn {
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  width: 24vw;
  margin-top: 50px;
  color:rgb(0,2,2);
}

.present-btn {
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  width: 24vw;
  margin: 50px 0;
}

.card-div {
  padding-left: 150px;
  margin: 15px 0;
}

.card-shadow {
  width: 40vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  text-align: center;
}

.txt-pagamento {
  margin: 20px 0;
}

.card-img {
  width: 60px;
  margin-left: 20px;
}

.book-finish {
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-top: 20px;
}

.info-finish {
  margin: 0 2em;
}

.icon {
  padding-left: 25px;
  background: url("../components/icons/gift.png")
    no-repeat left;
  background-size: 20px;
}

.input-group.mb-3{
  width:80%
}

@media (max-width: 768px) {
  .finish {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }

  .dados {
    width: 100vw;
    padding-left: 15px;
  }

  .livros {
    width: 100vw;
    padding-top: 10px;
  }

  .finalizar-btn {
    font-size: 1em;
    width: 60vw;
    margin: 20px 0;
  }

  .present-btn {
    font-size: 1em;
    width: 24vw;
    width: 60vw;
    margin: 20px 0;
  }

  .card-div {
    padding-left: 15px;
    margin: 15px 0;
  }

  .book-finish {
    width: 80vw;
  }

  .card-shadow {
    width: 80vw;
  }

  .card-img {
width: 80px;
  height: 140px;
  margin-left: 20px;
}
.info-finish {
  margin: 0;
}
}
</style>
