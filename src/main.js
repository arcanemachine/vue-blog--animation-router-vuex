import Vue from 'vue'
import App from './App.vue'

// router
import router from './router'

import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
