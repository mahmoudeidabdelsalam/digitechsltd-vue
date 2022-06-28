<template>
  <section class="portfolio page bg-dark" id="portfolio">
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
               Portfolio
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
                OUR PROJECTS
              </h2>
            </u-animate>
          </u-animate-container>
        </div>
          
        <div class="slider-portfolio col-12">
          <carousel :autoplay="true" :dots="false" :center="true" :loop="true" :items="3" v-if="isDisktop">
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">01</div>
                <img src="../assets/folder/slides/slide-7.png">
              </div>
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">02</div>                  
                <img src="../assets/folder/slides/slide-8.png">          
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">03</div>                  
                <img src="../assets/folder/slides/slide-9.png">
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">04</div>                  
                <img src="../assets/folder/slides/slide-10.png">
              </div>
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">05</div>                  
                <img src="../assets/folder/slides/slide-9.png">            
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">06</div>                  
                <img src="../assets/folder/slides/slide-8.png">
              </div>    
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">07</div>                  
                <img src="../assets/folder/slides/slide-7.png">
              </div>                                            
          </carousel>

          <carousel :autoplay="true" :dots="true" :loop="true" :items="1" v-if="isMobile">
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">01</div>
                <img src="../assets/folder/slides/slide-7.png">
              </div>
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">02</div>                  
                <img src="../assets/folder/slides/slide-8.png">          
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">03</div>                  
                <img src="../assets/folder/slides/slide-9.png">
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">04</div>                  
                <img src="../assets/folder/slides/slide-10.png">
              </div>
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">05</div>                  
                <img src="../assets/folder/slides/slide-9.png">            
              </div> 
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">06</div>                  
                <img src="../assets/folder/slides/slide-8.png">
              </div>    
              <div class="slide-item">
                <div class="slide-item__headline text-start">
                  <b class="font-size-medium mb-0 border-1 border-bottom text-white">DigiTechs</b> <br>
                  <span class="text-white">Web Development</span>
                </div>
                <div class="slide-item__number">07</div>                  
                <img src="../assets/folder/slides/slide-7.png">
              </div>                                            
          </carousel>
        </div>  

      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import carousel from 'vue-owl-carousel2'

export default {
  name: 'BlockPortfolio',
  components: {
    UAnimateContainer,
    UAnimate,
    carousel
  },
  data() {
    return {
      isMobile: true,
      isDisktop: true,
    }
  },
  mounted() {
    if(window.innerWidth > 991) {
      this.isMobile = false;
    }

    if(window.innerWidth < 992) {
      this.isDisktop = false;
    }
  },
 
  methods: {
  
  }
}
</script>

<style>
.slider-portfolio .slide-item {
    padding: 35px;
}

.slider-portfolio .slide-item__number {
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 118px;
    color: #fff;
    text-align: right;
    margin-bottom: -60px;
    margin-top: -45px;
    position: relative;
}

.slider-portfolio .center .slide-item {
    margin-top: 140px !important;
}

.slider-portfolio .center .slide-item {
    display: flex;
    flex-flow: column;
}

.slider-portfolio .center .slide-item img {
    order: 1;
}

.slider-portfolio .center .slide-item * {
    order: 2;
}

.slider-portfolio .center .slide-item .slide-item__number {
    margin-bottom: 0;
    margin-top: -120px;
}
</style>
