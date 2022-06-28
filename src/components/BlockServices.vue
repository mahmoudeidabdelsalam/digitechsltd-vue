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
               WHAT WE DO ?
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
                SERVICES
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
            <p class="text-start font-size-medium mb-5 text-white ps-lg-5">Our Services include Intelligent programming, Business Analysis, UI/UX Solutions, Website Development, Mobile Development and Social Media Management for your business.</p>
            </u-animate>
          </u-animate-container>   

          <div class="counter d-flex flex-wrap justify-content-center">
            <div class="col-md-4 col-6">
              <h4 class="font-size-medium-bold text-white text-start mb-3">STRATEGY</h4>
              <ul class="list-unstyled p-0 text-start">
                <li class="font-size-tiny text-white">Digital Strategy</li>
                <li class="font-size-tiny text-white">Content Creation</li>
                <li class="font-size-tiny text-white">Brand Awarness</li>
                <li class="font-size-tiny text-white">Data Analysis</li>
                <li class="font-size-tiny text-white">Scoial Media Management</li>
                <li class="font-size-tiny text-white">Digital Strategy</li>
              </ul>
            </div>
            <div class="col-md-4 col-6">
              <h4 class="font-size-medium-bold text-white text-start mb-3">CREATIVE & DESIGN</h4>
              <ul class="list-unstyled p-0 text-start">
                <li class="font-size-tiny text-white">User Experience</li>
                <li class="font-size-tiny text-white">Web and Mobile UI</li>
                <li class="font-size-tiny text-white">App Design</li>
                <li class="font-size-tiny text-white">Branding and Identity</li>
                <li class="font-size-tiny text-white">Wireframing & Prototyping</li>
                <li class="font-size-tiny text-white">Social Media Designs</li>
              </ul>
            </div>
            <div class="col-md-4 col-6">
              <h4 class="font-size-medium-bold text-white text-start mb-3">DEVELOPMENT</h4>
              <ul class="list-unstyled p-0 text-start">
                <li class="font-size-tiny text-white">Web development</li>
                <li class="font-size-tiny text-white">Responsive Development</li>
                <li class="font-size-tiny text-white">Website maintenance</li>
                <li class="font-size-tiny text-white">E-Commerce website</li>
                <li class="font-size-tiny text-white">SEO</li>
                <li class="font-size-tiny text-white">Mobile Application Development</li>
              </ul>
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
      }
    }
  },
  mounted() {

  },
 
  methods: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
