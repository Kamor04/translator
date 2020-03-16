import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Resource)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
