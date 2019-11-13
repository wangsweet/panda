import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import VueTouch from 'vue-touch'
//Vue.use(VueTouch, { name: "v-touch" })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
