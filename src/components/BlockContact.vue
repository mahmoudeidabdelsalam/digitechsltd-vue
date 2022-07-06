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
              <input type="text" class="form-control" id="full_name" v-model="form.input_1" placeholder="FULL NAME *" required>
              <span class="required" v-if="requiredName">please add FULL NAME</span>
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="email" v-model="form.input_3" placeholder="EMAIL *" required>
              <span class="required" v-if="requiredEmail">please add EMAIL</span>
            </div>
            <div class="col-md-6 col-12 pe-lg-5">
              <input type="text" class="form-control" id="subject" v-model="form.input_5" placeholder="SUBJECT *" required>
              <span class="required" v-if="requiredSubject">please add SUBJECT</span>
            </div>
            <div class="col-md-6 col-12">
              <input type="text" class="form-control" id="phone" v-model="form.input_2" placeholder="PHONE *" required>
              <span class="required" v-if="requiredPhone">please add PHONE</span>
            </div>
            <div class="col-md-12 col-12">
              <textarea class="form-control" id="message" v-model="form.input_4" rows="6" placeholder="MESSAGE *" required></textarea>
              <span class="required" v-if="requiredMessage">please add MESSAGE</span>
            </div>
            <div class="col-auto mx-auto">
              <button type="button" @click="onSubmit()" class="btn btn-outline-dark mt-5 mx-auto" v-animate-css.click="animationRequest">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>



    <!-- Alerts -->
    <vue-snotify></vue-snotify>
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
      form: {
        input_1:"",
        input_2:"",
        input_3:"",
        input_4:"",
        input_5:""
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
      if(this.form.input_1 == "") {
        this.requiredName = true
      } else {
        this.requiredName = false
      }

      if(this.form.input_3 == "") {
        this.requiredEmail = true
      } else {
        this.requiredEmail = false
      }

      if(this.form.input_5 == "") {
        this.requiredSubject = true
      } else {
        this.requiredSubject = false
      }

      if(this.form.input_2 == "") {
        this.requiredPhone = true
      } else {
        this.requiredPhone = false
      }

      if(this.form.input_4 == "") {
        this.requiredMessage = true
      } else {
        this.requiredMessage = false
      }

      this.axios.post(`https://api.digitechsltd.com/wp-json/gf/v2/forms/1/submissions`, this.form, {
        auth: {
          username: 'ck_30ac36107b1899d5cd9f5a3205eed907291ebcbf',
          password: 'cs_924fcf21b4fd1776782acd52143768b42183f3ab'
        }
      }).then((response) => {
        // console.log(response.data.confirmation_message);
        if(response.data.is_valid === true){
            this.$snotify.success("Thanks for contacting us! We will get in touch with you shortly.");
            this.onReset();
        }
      })
      .catch(function (error) {
          if(error.response ){
              if(error.response.data.is_valid === false ){
                  //not up in here!
                  this.$snotify.error("Please fill in the required fields");
              }
          }
      });
      
    },

    onReset() {
      this.form.input_1 = "";
      this.form.input_2 = "";
      this.form.input_3 = "";
      this.form.input_4 = "";
      this.form.input_5 = "";
    },
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
