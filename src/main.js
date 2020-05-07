import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import fullscreen from 'vue-fullscreen'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios, fullscreen)

Vue.config.productionTip = false




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
