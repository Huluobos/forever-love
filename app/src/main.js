import Vue from 'vue'
import App from './App'
import router from './router'
import './router/permission'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueLuckyCanvas from '@lucky-canvas/vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/reset.css';

Vue.config.productionTip = false
Vue.use(VueLuckyCanvas)
Vue.use(MintUI)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
