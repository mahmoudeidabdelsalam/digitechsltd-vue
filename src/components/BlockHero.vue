<template>
  <section class="hero page" id="top" :style="{ backgroundImage: 'url(' + top.bg_top + ')' }">
    <div class="container">
      <div class="row justify-content-center align-items-center d-flex vh-100">
        <div class="col-md-7 col-12">
          <u-animate-container>
            <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false" 
            >          
              <h2>
                {{top.head_top}}
              </h2>
            </u-animate>
            <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false" 
              class="d-flex"
            >  
            <a href="#contact" class="btn btn-outline-light mt-5" v-animate-css.click="animationRequest">Request a Quote</a>
            </u-animate>
          </u-animate-container>   
                 
        </div>
      </div>
    </div>
    <div class="btn-top" v-animate-css.click="animationTop"><a href="#top"><img alt="digitechsltd logo" src="../assets/folder/top.svg"/></a></div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'blockHeader',
  components: {
    UAnimateContainer,
    UAnimate
  },
  data() {
    return {
      animationRequest:{
        classes: 'rubberBand',
        delay: 0,
        duration: 1000
      },
      animationTop:{
        classes: 'slideOutUp',
        delay: 100,
        duration: 1000
      },
      top: {
        head_top: "",
        bg_top:""
      }
    }
  },

  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.top = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
  background-image: url('../assets/folder/bg-hero.svg');
  height: 100vh;
  background-size: cover;
}
section#top h2 {
    color: #fff;
    text-align: left;
    font-family: 'Dubai Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 68px;
}
</style>
