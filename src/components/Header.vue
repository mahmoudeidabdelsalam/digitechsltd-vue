<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
      <div class="container">
        <a class="navbar-brand" href="#"><img alt="digitechsltd logo" :src="header.logo_vue"/></a>
      
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex d-xl-flex">
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#top">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#clients">Clients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#techs">Techs.</a>
          </li>                                                  
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-animate-css.hover="'flipInY'" href="#contact">Contact Us</a>
          </li>                                      
        </ul>
        <ul class="me-lg-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <a class="nav-link" :href="header.link_facebook" target="_blank" v-animate-css.hover="'rotateIn'"><img src="../assets/facebook.svg" alt="facebook"></a>
          </li>  
          <li class="nav-item">
            <a class="nav-link" :href="header.link_instagram" target="_blank" v-animate-css.hover="'rotateIn'"><img src="../assets/instagram.svg" alt="facebook"></a>
          </li>  
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      header: {
        logo_vue: null,
        link_facebook: null,
        link_instagram: null
      },
      loading: true
    }
  },

  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.header = response.data.data;
      this.loading = false;
    }).catch((error) => {
      console.log(error);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav .nav-link {
    font-size: 20px;
    min-width: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.fixed-header {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    background: transparent !important;
}
</style>
