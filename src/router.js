import Vue from 'vue';
import Router from 'vue-router';
import Main from './pages/Main/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/repository/:repository',
      name: 'repository',
      component: () => import('./pages/Repository/Repository.vue'),
    },
  ],
});
