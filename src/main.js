import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import Cookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Cookies)

Cookies.config(Infinity)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
