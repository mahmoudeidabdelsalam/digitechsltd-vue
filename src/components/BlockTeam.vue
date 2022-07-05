<template>
  <section class="team page bg-dark" id="team">
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
               {{teams.small_headline_team}}
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
                {{teams.headline_team}}
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
            <p class="text-start font-size-medium ps-lg-5 text-white" v-html="teams.content_team"></p>
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
            <vueper-slide v-for="(slide, i) in teams.list_team" :key="i" :title="slide.name_of_team" :content="slide.title_of_team" :image="slide.image_of_team" />
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
  name: 'BlockTeam',
  components: {
    UAnimateContainer,
    UAnimate,
    VueperSlides, 
    VueperSlide    
  },
  data() {
    return {
      teams: {
        small_headline_technology:"",
        headline_technology:"",
        content_technology:"",
      }
    }
  },
  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.teams = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
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

.owl-theme .owl-nav [class*='owl-'] {
    background-color: transparent !important;
    font-size: 0 !important;
}
</style>
