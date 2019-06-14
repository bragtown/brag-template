import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'
=======
import store from './store/store'
>>>>>>> 9f71f3ba589bc22f1838d3d588c86ee23435b079
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
