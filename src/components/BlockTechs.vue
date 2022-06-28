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
                TECHNOLOGIES
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
                TECHNOLOGY IS AT THE HEART <br>
                OF EVERYTHING WE DO
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
            <p class="text-start font-size-medium ps-lg-5">DigiTechs Solutions uses the latest technologies to help our client to achieve their goals, reduce financial stress, and increase their business using our intelligent solutions.</p>
            </u-animate>
          </u-animate-container>   

            <u-animate-container class="logos w-100">
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-1.svg"> 
              <p>Node js</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-2.svg">
              <p>Angular</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-3.svg">
              <p>Python</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-4.svg">
              <p>Laravel</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-5.svg">
              <p>Figma</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-6.svg">
              <p>MySQL</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-7.svg">
              <p>jQuery</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-8.svg">
              <p>Bootstrap</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-9.svg">
              <p>React</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-10.svg">
              <p>WordPress</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-11.svg">
              <p>iOS</p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                delay="0s"
                duration="1s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
                class="col-logos"
              > 
              <img src="../assets/folder/slides/logo-12.svg">
              <p>Android</p>
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
  name: 'BlockClients',
  components: {
    UAnimateContainer,
    UAnimate,
  },
  data() {
    return {

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
section.logos {
    display: flex;
    flex-wrap: wrap;
}

section.logos .col-logos {
    flex: 0 0 20%;
}
</style>
