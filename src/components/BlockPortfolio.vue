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
               {{portfolio.small_headline_projects}}
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
                {{portfolio.headline_projects}}
              </h2>
            </u-animate>
          </u-animate-container>
        </div>
          
        <div class="slider-portfolio col-12">
          <vueper-slides
            class="no-shadow"
            :bullets="false"
            :visible-slides="3"
            :slide-ratio="1 / 3"
            :gap="3"
            :dragging-distance="70"
            fixed-height="620px"
            :breakpoints="{ 800: { visibleSlides: 1, bullets: true } }">
            <vueper-slide v-for="(slide, i) in portfolio.list_projects" :key="i" :title="slide.name_of_project" :content="slide.technology_of_project" :image="slide.image_of_project" />
          </vueper-slides>
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
  name: 'BlockPortfolio',
  components: {
    UAnimateContainer,
    UAnimate,
    VueperSlides, 
    VueperSlide    
  },
  data() {
    return {
      portfolio: {
        small_headline_projects: "",
        headline_projects:"",
        list_projects: []
      }      
    }
  },
  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.portfolio = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },
 
  methods: {
  
  }
}
</script>

<style>
.slider-portfolio {
    margin-top: 70px !important;
}

.slider-portfolio .vueperslide__content-wrapper {
    background: #212529;
    height: 120px !important;
    align-items: start !important;
    position: absolute !important;
    top: -120px !important;
    width: 100%;    
}

.slider-portfolio .vueperslide__content-wrapper .vueperslide__title {
    text-align: left;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    line-height: 41px;
    width: 200px;
    border-bottom: 1px solid #ccc;
}

.slider-portfolio .vueperslide__content-wrapper .vueperslide__content {
    text-align: left;
    width: 100%;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.47);
}

.slider-portfolio .vueperslide {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px !important;
    margin-top: 120px !important;
}

.slider-portfolio path {
    color: #fff;
}

@media (min-width: 800px) {
  .slider-portfolio .vueperslide--visible:nth-of-type(2n+2) {
      margin-top: 60px !important;
  }

  .slider-portfolio .vueperslide--visible:nth-of-type(2n+2) .vueperslide__content-wrapper {
      top: auto !important;
      bottom: -90px;
  }
}
</style>
