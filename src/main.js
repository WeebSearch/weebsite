import Vue from 'vue';
import Buefy from "buefy";
import App from './App.vue';
import router from "./router";
import store from './store';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

