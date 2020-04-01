// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Antd from 'ant-design-vue'
import { Button } from 'ant-design-vue'
import App from './App'
// import 'ant-design-vue/dist/antd.css'
import router from './router'
// 用于和后台交互，发送请求
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Vue.use(Antd);

Vue.component(Button.name, Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
