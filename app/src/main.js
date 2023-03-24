import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import VueLuckyCanvas from '@lucky-canvas/vue'

Vue.use(VueLuckyCanvas)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
