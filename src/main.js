import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/scss';

window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
