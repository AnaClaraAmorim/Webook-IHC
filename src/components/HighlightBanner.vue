<template>
    <div class="banner">
        <div class="banner-img-txt lancamento">
            <img alt="icone indicando comemoração" src="../components/icons/party.png"  class="circle-icon" tabindex="13">
            <p>Lançamentos</p>
        </div>
        <div class="banner-img-txt">
            <img  alt="icone com alguns livros" src="../components/icons/livro.png"  class="circle-icon" tabindex="14">
            <p>Minha Biblioteca</p>
        </div>
        <div class="banner-img-txt">
            <img  alt="símbolo de porcentagem indicando descontos" src="../components/icons/promotions.png"  class="circle-icon" tabindex="15">
            <p>Promoções</p>
        </div>
        <div class="banner-img-txt">
            <img  alt="presente" src="../components/icons/gift.png"  class="circle-icon" tabindex="16">
            <p>Dicas de presente</p>
        </div>
         <div class="banner-img-txt">
            <img  alt="etiqueta" src="../components/icons/price-tag.png"  class="circle-icon" tabindex="17">
            <p>Mais vendidos</p>
        </div>
      

        
    </div>
</template>


<style scoped>

.banner{
    background-color: #ffd117;
    height: 25vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-self: center;
    margin-bottom: 50px;
    vertical-align: middle;
}

.banner-img-txt{
    height: 15vh;
    display: flex;
    align-content: center;
    align-self: center;
    flex-direction: column;
    text-align: center;
    font-family: 'Grape Nuts', cursive;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color:black;
}

.banner-img-txt:hover{
    cursor: pointer;
    
}

.circle-icon {
    background: #fcfcfc;
    padding:5px;
    border-radius: 70%;
    Height: 15vh;
}

.circle-icon:hover{
    background: #e6e5e5;
}

@media (max-width: 800px){
    .banner{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap ;
       height: auto;
       padding: 10px 0;

    }

    .banner-img-txt{
    height: 20vh;
    font-size: 1em;

    }

}
</style>