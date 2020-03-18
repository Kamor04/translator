import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'
import vuetify from './plugins/vuetify'

import { Keyboard } from 'vue-virtual-keyboard'


Vue.config.productionTip = false
Vue.use(Resource)
Vue.use(Keyboard)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
