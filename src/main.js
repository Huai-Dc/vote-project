import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vant from 'vant';
import 'vant/lib/index.css';
// 样式重置
import 'normalize.css';
import http from './api/http';
import apis from './api/apis';

Vue.prototype.$http = http;
Vue.prototype.$apis = apis;

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
