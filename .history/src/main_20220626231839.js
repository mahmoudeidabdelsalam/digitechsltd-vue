import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'jquery';
import "bootstrap";
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
