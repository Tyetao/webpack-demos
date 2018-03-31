import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/scss';
// 时间格式化
import moment from 'vue-moment';
Vue.use(moment);

let a = new Promise((resolve, reject) => {

});
console.log(a);

const arr = [1, 2];
arr.includes(1);

window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
