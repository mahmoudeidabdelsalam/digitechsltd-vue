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
          <carousel
          :perPageCustom="[[480, 1], [768, 3]]"
          :navigationEnabled="true"
          :paginationEnabled="false"
          >
            <slide v-for="(slide, i) in teams.list_team" :key="i">
              <div class="content">
                <h3>{{slide.name_of_team}}</h3>
                <p>{{slide.title_of_team}}</p>                
              </div>
              <div class="image">
                <span class="number">{{ addLeadingZeros(i+1, 2) }}</span>
                <img :src="slide.image_of_team" :alt="slide.name_of_team">
              </div>
            </slide>
          </carousel>
        </div>  
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'BlockTeam',
  components: {
    UAnimateContainer,
    UAnimate,
    Carousel,
    Slide  
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
    addLeadingZeros(num, totalLength) {
      return String(num).padStart(totalLength, '0');
    }  
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
