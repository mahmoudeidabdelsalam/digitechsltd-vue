<template>
  <section class="services page bg-dark" id="services">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-12">
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
              <h3 class="font-size-tiny text-color-gray">
               {{ services.small_headline_services}}
              </h3>
            </u-animate>
          </u-animate-container>    
        </div>
        <div class="col-md-8 col-12">
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
              <h2 class="font-size-large text-white text-start">
                {{ services.headline_services}}
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
            <p class="text-start font-size-medium mb-5 text-white ps-lg-5" v-html="services.content_services"></p>
            </u-animate>
          </u-animate-container>   

          <div class="counter d-flex flex-wrap justify-content-center">
            <div class="col-md-4 col-6" v-for="(item, index) in services.items_services" :key="index">
              <h4 class="font-size-medium-bold text-white text-start mb-3">{{ item.headline_item }}</h4>
              <div v-html="item.list_items"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'BlockServices',
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
      services: {
        small_headline_services: "",
        headline_services: "",
        content_services: "",
        items_services: []
      }
    }
  },
  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.services = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },
 
  methods: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section#services .col-6 p {
    text-align: left;
    color: #fff;
    margin: 0;
}
</style>
