<template>
  <div id="app">
    <!-- <div> -->
    <div class="burger" @click="burgerClickHandler">
      <svg
        class="burger__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <rect
          width="352"
          height="32"
          x="80"
          y="96"
          fill="inherit"
          class="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="240"
          fill="inherit"
          class="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="384"
          fill="inherit"
          class="ci-primary"
        />
      </svg>
    </div>
    <Header @search="searchHandler" />
    <Home :filter="search" />
    <!-- </div> -->
    <Footer/>
  </div>
</template>
 
<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "slick-carousel/slick/slick.css";
export default {
  name: "app",
  components: { Header, Home, Footer },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchHandler(search) {
      this.search = search;
    },
    burgerClickHandler() {
      document.querySelector('body').classList.toggle('showHeader')
    },
  },
  watch: {
    // search: function(val){
    //   console.log(val);
    // }
  },
};
</script>
 
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");
@import "./assets/styles/normalize.css";
@import "./assets/styles/vars.scss";
#app {
  font-family: "Merriweather";
  color: $fc_1;
  font-size: $fz_4;
  position: relative;
  @media (max-width: 780px) {
    position: relative;
    overflow-x: hidden;
  }
  // display:flex;
  // justify-content: space-between;
  // align-items: center;
}
body {
  background-color: $bgcolor_1;

}
.burger {
  height: 50px;
  width: 50px;
  position: fixed;
  z-index: 100;
  top: 2px;
  right: 4px;
  fill: $fc_1;
  display:none;
  @media (max-width: 780px) {
    display:block;
  }

}
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>