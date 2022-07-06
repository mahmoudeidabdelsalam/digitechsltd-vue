<template>
  <section class="about page scroll" id="about">
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
                {{ about.small_headline_about_us }}
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
              <h2 class="font-size-large text-color-black text-start" v-html="about.headline_about_us"></h2>
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
            <p class="text-start font-size-medium ps-lg-5" v-html="about.content_about_us"></p>
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
            <a :href="about.link_company_profile" target="_blank" download class="btn btn-outline-dark mt-5" v-animate-css.click="animationRequest">Company Profile</a>
            </u-animate>
          </u-animate-container>   
          <div class="counter w-100 mt-5">
            <u-animate-container>
            <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false" 
              class="d-flex w-100 justify-content-between"
            >  
            <div class="col-counter" v-for="counter in about.counter_company" :key="counter.number_counter">
              <number
              ref="number1"
              class="number"
              :from="0"
              :to=counter.number_counter
              :format="theFormat"
              :duration="5"
              :delay="2"
              easing="Back.easeOut"/>
              <span class="d-block text-center w-100">{{ counter.text_counter }}</span>
            </div>
            </u-animate>
           </u-animate-container>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'blockAbout',
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

      about: {
        small_headline_about_us:"",
        headline_about_us:"",
        content_about_us:"",
        link_company_profile:"",
        counter_company: []
      }
    }
  },

  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.about = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    theFormat(number) {
        return number.toFixed(0);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
