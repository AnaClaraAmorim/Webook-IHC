<template>
  <div class="buyByPrice" >
   
    <div class="buyByPrice-buttons">
      <button type="button" class="btn btn-primary buy-button btn-lg" tabindex="21">Até R$ 10</button>
      <button type="button" class="btn btn-primary buy-button btn-lg" tabindex="22">Até R$ 20</button>
      <button type="button" class="btn btn-primary buy-button btn-lg" tabindex="23">Até R$ 30</button>
    </div>
  </div>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "buyByPrice",
  props: [],
  mounted() {
  },
  watch: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  .buy-button{
    font-size: 2em;
    background-color: #1722FF;

    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-align:center;
    transition: all 0.2s;
    border-radius:20px;
  }

  .buy-button:hover{
    background-color: #0a13be;
  }

  .buyByPrice-buttons{
    display: flex;
    justify-content: space-around;
    margin-left: 100px;
    margin-right: 100px;
  }

  .buyByPrice{
    margin:0px 50px 100px 50px;
  }

    @media (max-width: 600px)
    {
      .buy-button{
        font-size: 1em;
        width: 400px;

      }

      .buyByPrice-buttons{
        margin-left: 0px;
        margin-right: 0px;
       
      }

      .buyByPrice{
        margin:0px 5px 30px 5px;
      } 
    }
</style>
