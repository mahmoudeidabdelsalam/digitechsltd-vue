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

          <form class="row g-2" id="form" @submit.prevent="onSubmit()">
            <div class="col-md-6 col-12 pe-lg-5">
              <input type="text" class="form-control" id="full_name" v-model="contact.full_name" placeholder="FULL NAME *" required>
              <span class="required" v-if="requiredName">please ass FULL NAME</span>
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="email" v-model="contact.email" placeholder="EMAIL *" required>
              <span class="required" v-if="requiredEmail">please ass EMAIL</span>
            </div>
            <div class="col-md-6 col-12 pe-lg-5">
              <input type="text" class="form-control" id="subject" v-model="contact.subject" placeholder="SUBJECT *" required>
              <span class="required" v-if="requiredSubject">please ass SUBJECT</span>
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="phone" v-model="contact.phone" placeholder="PHONE *" required>
              <span class="required" v-if="requiredPhone">please ass PHONE</span>
            </div>
            <div class="col-md-12 col-12">
              <textarea class="form-control" id="message" v-model="contact.message" rows="6" placeholder="MESSAGE *" required></textarea>
              <span class="required" v-if="requiredMessage">please ass MESSAGE</span>
            </div>
            <div class="col-auto mx-auto">
              <button type="button" @click="onSubmit()" class="btn btn-outline-dark mt-5 mx-auto" v-animate-css.click="animationRequest">SUBMIT</button>
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
      },

      requiredName:false,
      requiredEmail:false,
      requiredSubject:false,
      requiredPhone:false,
      requiredMessage:false,
    }
  },
  mounted() {},

  methods: {
    onSubmit() {
      if(this.contact.full_name == "") {
        this.requiredName = true
      } else {
        this.requiredName = false
      }

      if(this.contact.email == "") {
        this.requiredEmail = true
      } else {
        this.requiredEmail = false
      }

      if(this.contact.subject == "") {
        this.requiredSubject = true
      } else {
        this.requiredSubject = false
      }

      if(this.contact.phone == "") {
        this.requiredPhone = true
      } else {
        this.requiredPhone = false
      }

      if(this.contact.message == "") {
        this.requiredMessage = true
      } else {
        this.requiredMessage = false
      }

    }
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

.form-control:focus {
    outline: 0 !important;
    box-shadow: none !important;
}

span.required {
    color: #FF0000;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    text-transform: lowercase;
    text-align: right;
    width: 100%;
    display: inline-block;
    border-bottom: 2px solid #ff0000;
    position: relative;
    top: -29px;
    pointer-events: none;
}
</style>
