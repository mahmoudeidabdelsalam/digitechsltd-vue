import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'jquery';
import "bootstrap";
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";

import VueWow from 'vue-wow'
Vue.use(VueWow)
 
import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss);

// Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// number animation
import VueNumber from 'vue-number-animation';
Vue.use(VueNumber);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
