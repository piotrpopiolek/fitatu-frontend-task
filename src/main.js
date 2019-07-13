import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '@scss//custom.scss';
import router from './router';
import App from '@components/App';
import styles from '@scss/reset.scss';

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
