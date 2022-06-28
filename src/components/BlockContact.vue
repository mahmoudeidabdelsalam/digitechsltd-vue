<template>
  <section class="contact page" id="contact">
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
                CONTACT US
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
                SAY HI, WE'RE HERE TO HELP
              </h2>
            </u-animate>
          </u-animate-container>  
          <form class="row g-2" id="form">
            <div class="col-md-6 col-12 pe-lg-5">
              <input type="text" class="form-control" id="full_name" v-model="contact.full_name" placeholder="FULL NAME *">
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="email" v-model="contact.email" placeholder="EMAIL *">
            </div>
            <div class="col-md-6 col-12 pe-lg-5">
              <input type="text" class="form-control" id="subject" v-model="contact.subject" placeholder="SUBJECT *">
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="phone" v-model="contact.phone" placeholder="PHONE *">
            </div>
            <div class="col-md-12 col-12">
              <textarea class="form-control" id="message" v-model="contact.message" rows="6" placeholder="MESSAGE *"></textarea>
            </div>
            <div class="col-auto mx-auto">
              <button type="submit" class="btn btn-outline-dark mt-5 mx-auto" v-animate-css.click="animationRequest">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'BlockContact',
  components: {
    UAnimateContainer,
    UAnimate,
  },
  data() {
    return {
      animationRequest:{
        classes: 'rubberBand',
        delay: 0,
        duration: 1000
      },
      contact: {
        full_name:"",
        email:"",
        subject:"",
        phone:"",
        message:""
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
#form .form-control {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  margin-top: 40px;
  border-bottom: 2px solid #000000;
  padding: 15px 0;
}
</style>
