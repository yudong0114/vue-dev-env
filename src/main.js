import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueLazyload);

new Vue({
  render(h) {
    return h(App);
  },
}).$mount('#app');
