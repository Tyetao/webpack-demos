import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  component: () => import('~/Layout'),
  children: [
    {
      path: '',
      component: () => import('@/views/dashboard')
    }
  ]
},
{
  path: '/a',
  component: () => import('~/Layout'),
  children: [
    {
      path: '',
      component: () => import('@/views/a')
    }
  ]
},
{
  path: '/b',
  component: () => import('~/Layout'),
  children: [
    {
      path: '',
      component: () => () => import('@/views/b')
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
