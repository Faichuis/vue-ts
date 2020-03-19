import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/common.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import _ from "lodash"

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
