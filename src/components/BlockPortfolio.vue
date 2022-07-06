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
          <carousel
          :perPageCustom="[[480, 1], [768, 3]]"
          :navigationEnabled="true"
          :paginationEnabled="false"
          >
            <slide v-for="(slide, i) in portfolio.list_projects" :key="i">
              <div class="content">
                <h3>{{slide.name_of_project}}</h3>
                <p>{{slide.technology_of_project}}</p>                
              </div>
              <div class="image">
                <span class="number">{{ addLeadingZeros(i+1, 2) }}</span>
                <img :src="slide.image_of_project" :alt="slide.name_of_project">
              </div>
            </slide>
          </carousel>
        </div>  

      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'BlockPortfolio',
  components: {
    UAnimateContainer,
    UAnimate,
    Carousel,
    Slide
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
    addLeadingZeros(num, totalLength) {
      return String(num).padStart(totalLength, '0');
    }
  }
}
</script>

<style>
.slider-portfolio {
    margin-top: 70px !important;
}

.VueCarousel-slide img {
    max-width: 100%;
    filter: grayscale(1);
    cursor: pointer;
    width: 100%;
}

.VueCarousel-slide img:hover {
    filter: grayscale(0);
}

.VueCarousel-slide {
    padding: 30px;
}

.VueCarousel-slide .content h3 {
    text-align: left;
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    width: 200px;
    border-bottom: 1px solid #ccc;
}

.VueCarousel-slide .content p {
    text-align: left;
    width: 100%;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.47);
}

.VueCarousel-slide .content {
    min-height: 100px;
}

.VueCarousel-slide {
    display: flex;
    flex-flow: column;
}

.VueCarousel-slide:nth-child(even) .content {
    order: 2;
    margin-top: 20px;
}

.VueCarousel-slide:nth-child(even) {
    margin-top: 180px;
}

.VueCarousel-slide:nth-child(even) .image .number {
    order: 2;
}

.VueCarousel-slide .image .number {
    font-weight: 500;
    font-size: 70px;
    line-height: 118px;
    color: #fff;
    float: right;
    margin-bottom: -60px;
    position: relative;
    margin-top: -60px;
    margin-right: 10px;
    text-shadow: 0 0 1px 1px #14161e;
    z-index: 1;
}

.VueCarousel-slide .image {
    display: flex;
    flex-flow: column;
    align-items: end;
}

.VueCarousel-navigation-button {
    font-size: 0;
    height: 50px;
    width: 50px;
    background-size: contain;
}

.VueCarousel-navigation-next {
    background-image: url('../assets/folder/arrow_back_right.svg');
}

.VueCarousel-navigation-prev {
    background-image: url('../assets/folder/arrow_back_left.svg');
}
</style>
