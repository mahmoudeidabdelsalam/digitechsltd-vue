<template>
  <section class="clients page" id="clients">
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
              <h3 class="font-size-tiny text-color-gray text-nowrap">
                {{ clients.small_headline_clients }}
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
              <h2 class="font-size-large text-color-black text-start text-uppercase">
                {{ clients.headline_clients }}
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
            <p class="text-start font-size-medium ps-lg-5" v-html="clients.content_clients"></p>
            </u-animate>
          </u-animate-container>   

          <vueper-slides
            class="no-shadow slide-cilents"
            :bullets="false"
            :visible-slides="4"
            :gap="1"
            :dragging-distance="200"
            :breakpoints="{ 800: { visibleSlides: 2, bullets: true } }">
            <vueper-slide v-for="(slide, i) in clients.logos_clients" :key="i" :image="slide.logo" />
          </vueper-slides>

          <u-animate-container>
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
            <a href="#contact" class="btn btn-outline-dark mt-5 mx-auto" v-animate-css.click="animationRequest">Contact Us</a>
            </u-animate>
          </u-animate-container>  

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'BlockClients',
  components: {
    UAnimateContainer,
    UAnimate,
    VueperSlides, 
    VueperSlide
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
      isMobile: false,
      isDisktop: false,
      clients: {
        small_headline_clients:"",
        headline_clients:"",
        content_clients:"",
        link_company_profile:"",
        logos_clients: []        
      }
    }
  },
  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.clients = response.data.data;
    }).catch((error) => {
      console.log(error);
    });

    if(window.innerWidth < 992) {
      this.isMobile = true;
    }

    if(window.innerWidth > 991) {
      this.isDisktop = true;
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.slider-clients .slide-item {
    padding: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    height: 400px;
}

.slider-clients .slide-item img {
  max-width: 100%;
}

.owl-theme .owl-nav {
    justify-content: space-between;
    display: flex;
    top: 45%;
    position: absolute;
    width: 100%;
}

.owl-theme .owl-nav [class*='owl-'] {
    font-size: 0;
    background-color: transparent;   
    width: 50px;
    height: 50px;
    background-size: contain; 
}

.owl-carousel .owl-nav .owl-prev {
  background-image: url('../assets/folder/arrow_back_left.svg') !important;
  margin-left: -60px;
}

.owl-carousel .owl-nav .owl-next {
  background-image: url('../assets/folder/arrow_back_right.svg') !important;
  margin-right: -60px;
}

.owl-theme .owl-nav [class*='owl-']:hover, .owl-theme .owl-nav [class*='owl-']:active {
    background: transparent;
    transform: scale(0.9);
}

.slide-cilents .vueperslide {
    background-size: 140px;
    background-repeat: no-repeat;
    filter: brightness(0.1);
}

.slide-cilents .vueperslide:hover {
    filter: brightness(1);
}
</style>
