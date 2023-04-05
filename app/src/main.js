import Vue from 'vue'
import App from './App'
import router from './router'
import './router/permission'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import VueLuckyCanvas from '@lucky-canvas/vue'
import './style/reset.css';
Vue.use(VueLuckyCanvas)
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
