import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import "bootstrap";
import 'jquery';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
