import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'jquery';
import "bootstrap";
import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";

// Scss
import "src/scss/app.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
