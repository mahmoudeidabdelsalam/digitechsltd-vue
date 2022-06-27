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
                WHO WE ARE ?
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
              <h2 class="font-size-large text-color-black text-start">
                NOT JUST ANOTHER <br/>
                DIGITAL AGENCY
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
            <p class="text-start font-size-medium ps-5">DigiTechs Solutions is A Software House based in Ismailia City. We specialize in Web design, Mobile App Design, Development, Branding, Identity & Social Media Management. The agency was created by group of experts, who was born in the Heart of Ismailia near the magical Suez Canal.</p>
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
            <a href="#" class="btn btn-outline-dark mt-5" v-animate-css.click="animationRequest">Company Profile</a>
            </u-animate>
          </u-animate-container>   

          <div class="counter d-flex">
            <div class="col-md-4">
              <span class="number">+</span><span id="count1" class="display-4 number"></span>
              <span class="d-block text-center w-100">Finished Projects</span>
            </div>
            <div class="col-md-4">
              <span class="number">+</span><span id="count2" class="display-4 number"></span>
              <span class="d-block text-center w-100">Lines of Code</span>
            </div>
            <div class="col-md-4">
              <span class="number">+</span><span id="count3" class="display-4 number"></span>
              <span class="d-block text-center w-100">Happy Clients</span>
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
      }
    }
  },
  mounted() {
      this.handleScroll();
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      document.addEventListener("DOMContentLoaded", () => {
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
          clearInterval(timer);
          }
        }, step);
      }
      counter("count1", 0, 50, 3000);
      counter("count2", 100, 1201, 1000);
      counter("count3", 0, 60, 3000);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
