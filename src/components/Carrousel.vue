<template>
  <div class="carrosel">
    <div id="div-controller" class="0">
      <img alt="banner com promoções" src="../components/banner/banner1.png" class="img-show active" />
      <img alt="banner com promoções" src="../components/banner/banner2.jpg" class="img-show" />
      <img alt="banner com promoções" src="../components/banner/banner3.webp" class="img-show" />
    </div>
    <button @click="next()" class="btn-carrosel direito"  @keypress="next()">
      <img tabindex="11" alt="seta indicando rolar o carrosel para direita" class="icon" src="../components/icons/right-chevron.png" /> 
    </button>
    <button @click="prev()" class="btn-carrosel esquerdo"  @keypress="prev()">
       <img tabindex="12" alt="seta indicando rolar o carrossel para esquerda" class="icon" src="../components/icons/chevron-pointing-to-the-left.png"  />
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    window.setTimeout(this.agendar,5000);
  },
  methods: {
    agendar(){
      this.next();
      window.setTimeout(this.agendar,5000);
    },
    next() {
      let controller = document.getElementById("div-controller");
      let children = controller.children;
      let max = children.length;
      let actual = parseInt(controller.classList[0]);
      let nextValue = actual + 1;
      if (nextValue === max) nextValue = 0;
      children[actual].classList.remove("active");
      children[nextValue].classList.add("active");
      controller.classList.remove(actual);
      controller.classList.add(nextValue);
    },
    prev() {
      let controller = document.getElementById("div-controller");
      let children = controller.children;
      let max = children.length;
      let actual = parseInt(controller.classList[0]);
      let nextValue = actual - 1;
      if (nextValue === -1) nextValue = max - 1;
      children[actual].classList.remove("active");
      children[nextValue].classList.add("active");
      controller.classList.remove(actual);
      controller.classList.add(nextValue);
    },
  },
};

</script>

<style scoped>
:root {
  --img-height: 700px;
  --img-width: 800px;
}
.img-show {
  height: 0px;
  width: 0px;
  
}
.img-show.active {
  height: 500px;
  width: 100%;
}
.btn-carrosel {
  position: absolute;
  top: calc(500px / 2);
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.direito {
  right: 20px;
}
.esquerdo {
  left: 20px;
}
.icon{
  width: 30px;
  height: 30px;
}
@media (max-width: 900px)
{
  :root {
  --img-height: 250px;
  --img-width: 800px;
}
.img-show.active {
  height: 250px;
  width: 100%;
}
.btn-carrosel {
  top: calc(250px / 2);
}
}
 @media (max-width: 600px){
  :root {
  --img-height: 150px;
  --img-width: 800px;
}
.img-show {
  height: 0px;
  width: 0px;
  
}
.img-show.active {
  height: 150px;
  width: 100%;
}

.direito {
  right: 2px;
}
.esquerdo {
  left: 2px;
}

.btn-carrosel {
  top: calc(150px / 2);
}
 }

</style>
