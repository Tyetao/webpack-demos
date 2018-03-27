import Vue from 'vue';
import Router from 'vue-router';

import Layout from '~/Layout';

Vue.use(Router);

const UserHome = {
  template: '<div>Home</div>'
};
const UserProfile = {
  template: '<div>Profile</div>'
};
const UserPosts = {
  template: '<div>Posts</div>'
};

const routes = [{
  path: '/user/:id',
  component: Layout,
  children: [
    {
      path: '',
      component: UserHome
    },
    {
      path: 'profile',
      component: UserProfile
    },
    {
      path: 'posts',
      component: UserPosts
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
