<template>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img alt="digitechsltd logo" src="../assets/logo.svg"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
        <ul class="me-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <a class="nav-link" href="#" v-animate-css.hover="'rotateIn'"><img src="../assets/facebook.svg" alt="facebook"></a>
          </li>  
          <li class="nav-item">
            <a class="nav-link" href="#" v-animate-css.hover="'rotateIn'"><img src="../assets/instagram.svg" alt="facebook"></a>
          </li>  
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav'
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
</style>
