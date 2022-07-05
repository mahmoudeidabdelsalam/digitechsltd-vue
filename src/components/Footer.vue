<template>
  <footer>
    <nav class="navbar-dark">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3 col-12"><a class="navbar-brand" href="#"><img alt="digitechsltd logo" :src="footer.logo_footer"/></a></div>
          <div class="col-md-6 col-12"><p class="text-white mb-0 mt-2">{{ footer.copy_right }}</p></div>
          <div class="col-md-3 col-12"><p><img src="../assets/phone.svg" alt="digitechsltd phone"><a class="btn btn-none text-white">+{{ footer.phone_number }}</a></p></div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      footer: {
        logo_footer: "",
        copy_right: "",
        phone_number: ""
      }
    }
  },

  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.footer = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
footer {
    background: #13161E;
    padding: 18px 0;
}
</style>
