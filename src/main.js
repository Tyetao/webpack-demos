import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/css/ionicons';
import './assets/css/style';

router.beforeEach((to, from, next) => {
  console.log(1);
  next();
});

window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
