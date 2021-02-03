import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import UUID from 'vue-uuid';

Vue.config.productionTip = false

new Vue({
  router,
  UUID,
  vuetify,
  render: h => h(App)
}).$mount('#app')
