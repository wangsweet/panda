import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
Vue.config.productionTip = false
Vue.use(VueTouch, {
  name: 'v-touch'
})
import HuangUI from "./lib";
Vue.use(HuangUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')