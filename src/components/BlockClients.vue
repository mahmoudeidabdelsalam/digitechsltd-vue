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
                WHO WE WORKED WITH
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
                Clients
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
            <p class="text-start font-size-medium ps-5">We are a growing company but already have a great experience and helped many clients run their business successfully.</p>
            </u-animate>
          </u-animate-container>   

          <div class="slider col-12">
            <carousel :autoplay="true" :dots="false">
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-4.png">
                  <img src="../assets/folder/slides/slide-2.png">
                </div>
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-1.png">
                  <img src="../assets/folder/slides/slide-6.png">              
                </div> 
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-5.png">
                  <img src="../assets/folder/slides/slide-3.png">
                </div> 
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-4.png">
                  <img src="../assets/folder/slides/slide-2.png">
                </div>
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-1.png">
                  <img src="../assets/folder/slides/slide-6.png">              
                </div> 
                <div class="slide-item">
                  <img src="../assets/folder/slides/slide-5.png">
                  <img src="../assets/folder/slides/slide-3.png">
                </div>                                            
            </carousel>
          </div>

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
import carousel from 'vue-owl-carousel2'

export default {
  name: 'BlockClients',
  components: {
    UAnimateContainer,
    UAnimate,
    carousel
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
<style>
.slider .slide-item {
    padding: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    height: 400px;
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
}

.owl-carousel .owl-nav .owl-next {
  background-image: url('../assets/folder/arrow_back_right.svg') !important;
}

.owl-theme .owl-nav [class*='owl-']:hover, .owl-theme .owl-nav [class*='owl-']:active {
    background: transparent;
    transform: scale(0.9);
}
</style>
