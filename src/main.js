import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.component('v-icon', Icon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
