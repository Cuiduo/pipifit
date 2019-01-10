// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import './static/mobile.js'
import './static/reset.css'
import axiosApi from '@/api/axios.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { ConfirmPlugin,AlertPlugin,ToastPlugin,LoadingPlugin} from 'vux'
import store from '@/store'
Vue.use(VueAwesomeSwiper)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(axiosApi)
Vue.config.productionTip = false

// FastClick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
