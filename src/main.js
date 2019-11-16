import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
Vue.config.productionTip = false
Vue.use(VueTouch, {
  name: 'v-touch'
})
import HuangUI from "./lib";
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(HuangUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')