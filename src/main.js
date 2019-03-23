import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Panel from './components/globals/Panel'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.component('panel', Panel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
