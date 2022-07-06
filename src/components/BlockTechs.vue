<template>
  <section class="techs page" id="techs">
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
                {{technologies.small_headline_technology}}
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
              <h2 class="font-size-large text-color-black text-start text-uppercase" v-html="technologies.headline_technology"></h2>
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
            <p class="text-start font-size-medium ps-lg-5" v-html="technologies.content_technology"></p>
            </u-animate>
          </u-animate-container>   
            <u-animate-container class="w-100">
              <u-animate
                name="fadeInUp"
                duration="0.3s"
                :iteration="1"
                animateClass="animated"
                :begin="false" 
                class="logos"
              > 
              <div class="col-logos" v-for="(logo, i) in technologies.logos_technology" :key="i">
                <img :src="logo.logo_technology"> 
                <p>{{ logo.name_technology }}</p>
              </div>
              </u-animate>                                                                                                                                                   
            </u-animate-container>  
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'BlockTech',
  components: {
    UAnimateContainer,
    UAnimate,
  },
  data() {
    return {
      technologies: {
        small_headline_technology:"",
        headline_technology:"",
        content_technology:"",
      }
    }
  },
  mounted() {
    this.axios.get(`https://api.digitechsltd.com/wp-json/wp/api/page/vue`).then((response) => {
      this.technologies = response.data.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logos {
    display: flex;
    flex-wrap: wrap;
}

.logos .col-logos {
    flex: 0 0 20%;
}
</style>
