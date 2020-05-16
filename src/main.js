import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from "./router";
import {Tabbar,TabbarItem,Tab,Tabs,NavBar,Swipe,SwipeItem,Lazyload,Image as VanImage} from "vant";

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(VanImage)
new Vue({
  router,
=======

Vue.config.productionTip = false

new Vue({
>>>>>>> 0017c364cbfd2971793eaf28c106ff63cfdf1a8b
  render: h => h(App),
}).$mount('#app')
