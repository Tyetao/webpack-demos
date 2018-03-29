import Vue from 'vue';
import Router from 'vue-router';

import Layout from '~/Layout';
import dashboard from '@/views/dashboard';

Vue.use(Router);

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: '',
      component: dashboard
    }
  ]
}];

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes
});
